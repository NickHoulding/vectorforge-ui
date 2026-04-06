import type { Document } from "@/types";

export async function getCollections() {
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
