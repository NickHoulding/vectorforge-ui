import { useParams } from "react-router";

export function CollectionDetailsPage() {
  const { id } = useParams<{ id: string }>();

  return <div className="w-screen h-screen bg-space-indigo-700"></div>;
}
