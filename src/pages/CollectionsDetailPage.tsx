import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDocuments } from "@/api/vectorforge";
import type { Document } from "@/types";
import { DocumentCard } from "@/components/DocumentCard";

export function CollectionDetailsPage() {
  const { collection_name } = useParams<{ collection_name: string }>();
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    if (collection_name) getDocuments(collection_name).then(setDocuments);
  }, [collection_name]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lavender-200 font-bold text-2xl mb-1">
        {collection_name} documents
      </h1>
      {documents.map((document) => (
        <DocumentCard key={document.id} {...document} />
      ))}
    </div>
  );
}
