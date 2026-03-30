import { useEffect, useState } from "react";
import { getCollections } from "../api/vectorforge";
import { CollectionCard } from "../components/CollectionCard";
import type { Collection } from "../types";

export function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    getCollections().then(setCollections);
  }, []);

  return (
    <div className="bg-space-indigo-800 grid grid-cols-3 gap-4">
      {collections.map((collection) => (
        <CollectionCard key={collection.collection_name} />
      ))}
    </div>
  );
}
