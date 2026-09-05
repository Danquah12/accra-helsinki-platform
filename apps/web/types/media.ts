export interface MediaFile {
  id: string;
  url: string;
  type: 'image' | 'document' | 'video';
  altText?: string;
  sizeBytes: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  imageUrl?: string;
  tags: string[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  vimeoId?: string;
  durationSeconds: number;
  publishDate: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string; // "Virtual" or physical address
  registrationUrl?: string;
}
