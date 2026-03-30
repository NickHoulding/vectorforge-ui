export async function getCollections() {
  const response = await fetch("http://localhost:3001/collections");
  return response.json();
}
