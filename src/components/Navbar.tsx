import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center gap-6 h-min mb-12 text-lavender-200">
      <h1
        className="font-bold mr-auto text-2xl hover:cursor-pointer hover:text-lavender-50 transition-color duration-200"
        onClick={() => {
          navigate("/collections");
        }}
      >
        VectorForge
      </h1>
      <p
        className="font-medium hover:text-lavender-50 hover:cursor-pointer transition-color duration-200"
        onClick={() => {
          navigate("/collections");
        }}
      >
        Collections
      </p>
      <p
        className="font-medium hover:text-lavender-50 hover:cursor-pointer transition-color duration-200"
        onClick={() => {
          navigate("/search");
        }}
      >
        Search
      </p>
    </div>
  );
}
