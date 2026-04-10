import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDocuments, requestDocumentDeletion } from "@/api/vectorforge";
import type { Document } from "@/types";
import { DocumentCard } from "@/components/DocumentCard";

export function CollectionDetailsPage() {
  const { collection_name } = useParams<{ collection_name: string }>();
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    if (collection_name) getDocuments(collection_name).then(setDocuments);
  }, [collection_name]);

  async function deleteDocument(collection_name: string, doc_id: string) {
    const result = await requestDocumentDeletion(collection_name, doc_id);
    if (result) {
      setDocuments((prev) => prev.filter((doc) => doc.id !== doc_id));
    }
  }

  return (
    <div>
      <h1 className="text-lavender-200 font-bold text-xl mb-6">
        {collection_name} documents
      </h1>
      <div className="flex flex-col">
        {documents.map((document) => (
          <DocumentCard
            key={document.id}
            {...document}
            collectionName={collection_name!}
            deleteFunc={deleteDocument}
          />
        ))}
      </div>
    </div>
  );
}
