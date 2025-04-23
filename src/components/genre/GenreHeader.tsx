import { ChevronDown } from "lucide-react";

export const GenreHeader = () => {
  return (
    <button className="shadow-xs flex items-center p-1 rounded-md border border-gray-500 ">
      <ChevronDown />
      <span className="hidden md:block"> Genre</span>
    </button>
  );
};
