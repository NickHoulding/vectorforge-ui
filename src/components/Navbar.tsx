import { useNavigate } from "react-router";
import { NavbarEntry } from "./NavbarEntry";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center gap-6 h-min mb-12 text-lavender-200">
      <h1
        className="font-bold text-burnt-peach-500 mr-auto text-2xl hover:cursor-pointer hover:text-burnt-peach-300 transition-color duration-200"
        onClick={() => {
          navigate("/collections");
        }}
      >
        VectorForge
      </h1>
      <NavbarEntry text="Collections" to="/collections" />
      <NavbarEntry text="Search" to="/search" />
      <NavbarEntry text="Embeddings" to="/embeddings" />
      <NavbarEntry text="Stats" to="/stats" />
    </div>
  );
}
