export interface Source {
  id: string;
  name: string;
  url: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishDate: string;
  doi?: string;
  pdfUrl?: string;
  tags: string[];
  sources: Source[];
}

export interface Dataset {
  id: string;
  title: string;
  description: string;
  format: 'csv' | 'json' | 'excel';
  sizeBytes: number;
  downloadUrl: string;
  lastUpdated: string;
  tags: string[];
}
