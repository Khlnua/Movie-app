import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";

export const SearchInput = () => {
  const [genreId, setGenreId] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [moviesResult, setMoviesResult] = useState<any[]>([]);

  const searchbyName = async () => {
    const response = await fetch(
      `/search/movie?query=${searchValue}&language=en-US&page=1`
    );
  };

  return (
    <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] ">
      <Search className="size-4 text-[#71717A]  ml-2" />
      <Input className="text-[14px] w-auto  font-normal" />
    </div>
  );
};
