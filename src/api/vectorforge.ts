import type { Document, Collection } from "@/types";

export async function getCollections(): Promise<Collection[]> {
  const response = await fetch("http://localhost:3001/collections");
  const data = await response.json();
  return data.collections;
}

export async function getDocuments(
  collection_name: string,
): Promise<Document[]> {
  const response = await fetch(
    `http://localhost:3001/collections/${collection_name}/documents`,
  );
  const data = await response.json();
  return data.documents ?? [];
}

export async function requestDocumentDeletion(
  collection_name: string,
  doc_id: string,
): Promise<boolean> {
  const response = await fetch(
    `http://localhost:3001/collections/${collection_name}/documents/${doc_id}`,
    { method: "DELETE" },
  );
  const data = await response.json();

  if (typeof data.id === "string") {
    return data.id.length > 0;
  } else {
    throw new Error("Invalid response: data.id was not a string.");
  }
}
