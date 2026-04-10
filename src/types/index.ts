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

export interface DocumentCardProps extends Document {
  collectionName: string;
  deleteFunc: (collection_name: string, doc_id: string) => void;
}

export interface NavbarEntryProps {
  text: string;
  to: string;
}
