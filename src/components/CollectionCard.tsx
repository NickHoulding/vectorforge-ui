import type { Collection } from "@/types";

export function CollectionCard({ collection_name, description }: Collection) {
  return (
    <div className="h-min p-4 bg-space-indigo-900 text-lavender-200 border-2 box-border border-lavender-800 rounded-lg overflow-hidden text-wrap wrap-break-word">
      <h1 className="font-bold text-2xl mb-1">{collection_name}</h1>
      <p>{description}</p>
    </div>
  );
}
