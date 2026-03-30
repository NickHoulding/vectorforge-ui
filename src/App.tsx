import { CollectionsPage } from "./pages/CollectionsPage";
import { Navigate, Routes, Route } from "react-router";
import { StatsPage } from "./pages/StatsPage";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/collections" />} />

        <Route path="/collections" element={<CollectionsPage />}></Route>
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
