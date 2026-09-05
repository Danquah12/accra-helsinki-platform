export interface Citation {
  id: string;
  title: string;
  url?: string;
  snippet?: string;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  citations?: Citation[];
}

export interface AIConversation {
  id: string;
  userId?: string;
  messages: AIMessage[];
  startedAt: string;
  lastUpdatedAt: string;
  title?: string;
}

export interface AssistantVariant {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
}
