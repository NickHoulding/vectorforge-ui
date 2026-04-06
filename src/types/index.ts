export interface Collection {
  id: string;
  collection_name: string;
  description: string;
  document_count: number;
  metadata?: Record<string, unknown>;
}

export interface Document {
  id: string;
  content: string;
  metadata: string;
}
