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
    <div className="w-screen, h-min grid grid-cols-2 gap-6">
      {collections.map((collection) => (
        <CollectionCard key={collection.collection_name} {...collection} />
      ))}
    </div>
  );
}
