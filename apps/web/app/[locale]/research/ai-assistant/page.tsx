'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, Loader2, BookOpen, ExternalLink, RefreshCw, Shield, Scale, Wrench, HeartHandshake, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PERSONAS, AssistantPersona } from '@/lib/ai/personas';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: {
    title: string;
    category: string;
    link: string;
  }[];
}

const PERSONA_ICONS: Record<AssistantPersona, any> = {
  general: Bot,
  compliance: Shield,
  policy: Scale,
  technical: Wrench,
  community: HeartHandshake,
};

export default function AiAssistantPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  const [selectedPersona, setSelectedPersona] = useState<AssistantPersona>('general');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `**Welcome to the Accra-Helsinki Environmental Intelligence Assistant.**\n\nI have been indexed with the platform's knowledge base covering international conventions (Basel, Bamako, Montreal Protocol, Kigali), national MEPS legislation, chemical toxicity profiles, and African country compliance data.\n\nSelect a specialist persona above or ask any question to begin.`,
      citations: [
        { title: 'Basel Convention', category: 'treaty', link: '/policy/basel-convention' },
        { title: 'Bamako Convention', category: 'treaty', link: '/policy/bamako-convention' },
        { title: 'Ghana LI 1932 (Appliance Ban)', category: 'law', link: '/policy/national-laws' }
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const activePersona = PERSONAS[selectedPersona];
  const PersonaIcon = PERSONA_ICONS[selectedPersona];

  const handleSend = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    setErrorBanner(null);
    const userMsgId = `user-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      { id: userMsgId, role: 'user', content: messageContent }
    ];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          persona: selectedPersona,
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned error status ${res.status}`);
      }

      const data = await res.json();
      
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.message?.content || 'No response content returned.',
          citations: data.citations || []
        }
      ]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorBanner('Failed to receive AI response. Check your connection or API status.');
      setMessages(prev => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: '⚠️ An error occurred while communicating with the AI service. Please try again or rephrase your question.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'reset',
        role: 'assistant',
        content: `Conversation reset. Active persona: **${activePersona.name}**.\n\n${activePersona.description}\n\nHow can I assist you with environmental compliance or research?`
      }
    ]);
    setErrorBanner(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col h-[calc(100vh-64px)]">
      {/* Top Header */}
      <div className="bg-emerald-950 text-white py-6 px-4 sm:px-8 flex-shrink-0 border-b border-emerald-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-800 p-2.5 rounded-xl border border-emerald-700">
              <Bot className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">CSRTA AI Environmental Intelligence</h1>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded-full border border-amber-500/30 font-semibold">
                  RAG Powered
                </span>
              </div>
              <p className="text-emerald-200 text-xs mt-0.5">
                Specialized AI agents indexed with African environmental treaties, laws, and chemical hazard standards.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={clearChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-xs font-medium text-emerald-200 hover:text-white border border-emerald-700/50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Session
            </button>
          </div>
        </div>

        {/* Persona Selector Bar */}
        <div className="max-w-6xl mx-auto mt-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
            Select Specialist Persona:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {(Object.keys(PERSONAS) as AssistantPersona[]).map((pKey) => {
              const p = PERSONAS[pKey];
              const Icon = PERSONA_ICONS[pKey];
              const isSelected = selectedPersona === pKey;

              return (
                <button
                  key={pKey}
                  onClick={() => setSelectedPersona(pKey)}
                  className={`flex items-start gap-2 p-2.5 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-emerald-800 border-amber-400 text-white shadow-md'
                      : 'bg-emerald-900/40 border-emerald-800/80 text-emerald-200 hover:bg-emerald-900 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-amber-400' : 'text-emerald-400'}`} />
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate leading-tight">{p.name}</div>
                    <div className="text-[10px] text-emerald-300/80 truncate mt-0.5">{p.badge}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Active Persona Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <PersonaIcon className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>
                <strong>Active Mode:</strong> {activePersona.name} — <em>{activePersona.tagline}</em>
              </span>
            </div>
            <span className="hidden sm:inline bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono text-[10px]">
              RAG + GPT-4o-mini
            </span>
          </div>

          {errorBanner && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{errorBanner}</span>
            </div>
          )}

          {/* Message Thread */}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-9 h-9 rounded-xl bg-emerald-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                  <PersonaIcon className="w-5 h-5 text-amber-400" />
                </div>
              )}

              <div className="max-w-[85%] sm:max-w-[78%]">
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-amber-600 text-white rounded-tr-none shadow-md'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm whitespace-pre-wrap'
                  }`}
                >
                  {msg.content}
                </div>

                {/* Citations Box */}
                {msg.role === 'assistant' && msg.citations && msg.citations.length > 0 && (
                  <div className="mt-2.5 p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-emerald-700" />
                      Verified Platform Citations:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.citations.map((c, cIdx) => (
                        <Link
                          key={cIdx}
                          href={`/${locale}${c.link}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs rounded-lg border border-emerald-200 transition-colors"
                        >
                          <span className="font-medium">{c.title}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-emerald-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 sm:gap-4 justify-start">
              <div className="w-9 h-9 rounded-xl bg-emerald-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm text-sm text-slate-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                <span>Retrieving policy articles & generating response...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions & Input Bar */}
      <div className="bg-white border-t border-slate-200 p-4 sm:p-5 flex-shrink-0">
        <div className="max-w-4xl mx-auto space-y-3">
          {/* Persona Suggested Questions Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 font-medium flex-shrink-0">Try asking:</span>
            {activePersona.suggestedPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="flex-shrink-0 px-3 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 text-slate-600 rounded-full border border-slate-200 text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask the ${activePersona.name}... (e.g. regulations, Kigali targets, GWP values)`}
              disabled={isLoading}
              className="flex-grow px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-5 py-3 bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-300 text-white rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
