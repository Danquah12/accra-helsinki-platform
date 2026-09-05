import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { retrieveRelevantKnowledge, KnowledgeDocument } from '@/lib/ai/knowledge';
import { PERSONAS, AssistantPersona } from '@/lib/ai/personas';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, persona = 'general' } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required.' },
        { status: 400 }
      );
    }

    const currentPersona = PERSONAS[persona as AssistantPersona] || PERSONAS.general;
    const latestUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';

    // Retrieve relevant knowledge chunks via RAG
    const retrievedDocs: KnowledgeDocument[] = retrieveRelevantKnowledge(latestUserMessage, 4);

    // Format knowledge context for injection
    const contextText = retrievedDocs
      .map((doc, idx) => `[Document ${idx + 1}] Title: ${doc.title} (${doc.category.toUpperCase()})\nLink: ${doc.link}\nDetails: ${doc.content}`)
      .join('\n\n');

    const systemPromptWithContext = `${currentPersona.systemPrompt}

=== RETRIEVED PLATFORM KNOWLEDGE BASE CONTEXT ===
The following documents have been retrieved from the Accra-Helsinki Environmental Intelligence Platform:
${contextText}

=== INSTRUCTIONS ===
1. Use the retrieved context above as your primary factual source.
2. In your response, cite specific treaties, regulations, or data points where applicable.
3. If referencing a document from the context, mention its title or standard number clearly.
4. Format your response cleanly using markdown (bullet points, bold text for key terms).
5. Always answer in the language used by the user (default to English).`;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Fallback response if no API key is provided
      return NextResponse.json({
        message: {
          role: 'assistant',
          content: `**[Local Intelligence Synthesis]**\n\nBased on the platform's knowledge base:\n\n${retrievedDocs.map(d => `• **${d.title}**: ${d.content}`).join('\n\n')}\n\n*(Note: Configure OPENAI_API_KEY in your environment for dynamic generative analysis.)*`
        },
        citations: retrievedDocs.map(d => ({
          title: d.title,
          category: d.category,
          link: d.link
        })),
        persona: currentPersona.id
      });
    }

    const openai = new OpenAI({ apiKey });

    const apiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPromptWithContext },
      ...messages.slice(-6).map((m: any): OpenAI.Chat.ChatCompletionMessageParam => {
        if (m.role === 'user') {
          return { role: 'user', content: String(m.content || '') };
        }
        return { role: 'assistant', content: String(m.content || '') };
      })
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: apiMessages,
        temperature: 0.3,
        max_tokens: 1000,
      });

      const responseText = completion.choices[0]?.message?.content || 'No response generated.';

      return NextResponse.json({
        message: {
          role: 'assistant',
          content: responseText
        },
        citations: retrievedDocs.map(d => ({
          title: d.title,
          category: d.category,
          link: d.link
        })),
        persona: currentPersona.id
      });
    } catch (openAiError: any) {
      console.error('OpenAI API invocation error:', openAiError);
      
      // Provide intelligent RAG fallback when the OpenAI account has billing or key restrictions
      const fallbackSummary = `I retrieved the following verified data from our intelligence repository to answer your inquiry:

${retrievedDocs.map(d => `### 📄 ${d.title}\n${d.content}`).join('\n\n')}

*Source Citations: ${retrievedDocs.map(d => `[${d.title}](${d.link})`).join(', ')}*

*(Note: OpenAI API returned: ${openAiError.message || 'connection issue'}. Displaying direct repository extraction).*`;

      return NextResponse.json({
        message: {
          role: 'assistant',
          content: fallbackSummary
        },
        citations: retrievedDocs.map(d => ({
          title: d.title,
          category: d.category,
          link: d.link
        })),
        persona: currentPersona.id
      });
    }
  } catch (error: any) {
    console.error('Server error in /api/ai/chat:', error);
    return NextResponse.json(
      { error: 'Failed to process AI chat request.', details: error.message },
      { status: 500 }
    );
  }
}
