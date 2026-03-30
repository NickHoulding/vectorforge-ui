export async function getCollections() {
  const response = await fetch("http://localhost:3001/collections");
  const data = await response.json();
  return data.collections;
}
