import type { DocumentCardProps } from "@/types";

export function DocumentCard({
  id,
  content,
  collectionName,
  deleteFunc,
}: DocumentCardProps) {
  return (
    <div className="h-min p-3 flex flex-row bg-space-indigo-900 text-lavender-200 border-t-2 box-border border-lavender-800 overflow-hidden text-wrap wrap-break-word hover:bg-space-indigo-800 hover:text-lavender-50 hover:border-lavender-700 trnsition-colors duration-250">
      <div className="flex flex-col">
        <h1 className="font-bold">{id}</h1>
        <p>{content}</p>
      </div>
      <button
        onClick={() => deleteFunc(collectionName, id)}
        className="w-10 h-10 bg-transparent hover:bg-red-700 rounded-md text-xl ml-auto mt-auto mb-auto transition-color duration-200 hover:cursor-pointer"
      >
        X
      </button>
    </div>
  );
}
