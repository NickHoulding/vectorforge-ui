import { useNavigate } from "react-router";
import type { NavbarEntryProps } from "@/types";

export function NavbarEntry({ text, to }: NavbarEntryProps) {
  const navigate = useNavigate();

  return (
    <p
      className="font-medium hover:text-lavender-50 hover:cursor-pointer transition-color duration-200"
      onClick={() => {
        navigate(to);
      }}
    >
      {text}
    </p>
  );
}
