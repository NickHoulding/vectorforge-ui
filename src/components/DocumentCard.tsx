import type { Document } from "@/types";

export function DocumentCard({ id, content }: Document) {
  return (
    <div className="h-min p-4 bg-space-indigo-900 text-lavender-200 border-2 box-border border-lavender-800 rounded-lg overflow-hidden text-wrap wrap-break-word hover:bg-space-indigo-800 hover:text-lavender-50 hover:border-lavender-700 trnsition-colors duration-250">
      <h1 className="font-bold">{id}</h1>
      {content}
    </div>
  );
}
