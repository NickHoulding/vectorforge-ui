import type { Collection } from "@/types";
import { useNavigate } from "react-router";
import { getDocuments } from "@/api/vectorforge";

export function CollectionCard({ collection_name, description }: Collection) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/collections/${collection_name}`);
      }}
      className="h-min p-4 bg-space-indigo-900 text-lavender-200 border-2 box-border border-lavender-800 rounded-lg overflow-hidden text-wrap wrap-break-word hover:bg-space-indigo-800 hover:text-lavender-50 hover:border-lavender-700 hover:cursor-pointer trnsition-colors duration-250"
    >
      <h1 className="font-bold text-2xl mb-1">{collection_name}</h1>
      <p>{description}</p>
    </div>
  );
}
