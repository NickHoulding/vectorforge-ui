import { CollectionsPage } from "./pages/CollectionsPage";
import { Navigate, Routes, Route } from "react-router";
import { StatsPage } from "./pages/StatsPage";
import { CollectionDetailsPage } from "./pages/CollectionsDetailPage";

export function App() {
  return (
    <div className="bg-space-indigo-950">
      <main className="max-w-6xl h-screen mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Navigate to="/collections" />} />

          <Route path="/collections" element={<CollectionsPage />}></Route>
          <Route
            path="/collections/:collection_name"
            element={<CollectionDetailsPage />}
          ></Route>
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
