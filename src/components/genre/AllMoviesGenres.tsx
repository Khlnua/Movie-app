"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";

type GenreTypes = {
  id: number;
  name: string;
};

export const AllMoviesGenres = () => {
  const { data } = useFetchDataInClient("/genre/movie/list?language=en");
  const genres: GenreTypes[] = data?.genres ?? [];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex rounded-md border border-[#E4E4E7] py-2 px-4 h-9 items-center">
          <ChevronDown />
          <span className="font-medium text-[14px] text-[#18181B]">Genre</span>
        </div>
        <DropdownMenuContent
          align="start"
          className="w-[335px] md:w-[577px] border border-[#E4E4E7] rounded-lg mt-1.5 p-5 bg-[#FFFFFF]  "
        >
          <div className="flex flex-col items-start w-[213px]  h-15">
            <p className="font-semibold text-2xl">Genres</p>
            <p className="font-normal text-[16px]">
              See lists of movies by genre
            </p>
          </div>
          <hr className="h-[1px] bg-[#E4E4E7] w-[295px] md:w-[537px]  "></hr>
          <div className="flex gap-4 flex-wrap w-[295px] md:w-[537px] h-[380px] md:h-50 mt-3 ">
            {genres.map(({ name, id }) => (
              <Badge
                className="font-semibold text-[12px] gap-0.5 py-0.5 pr-1 pl-2 border rounded-full border-[#E4E4E7]  "
                key={id}
              >
                {name}
                <ChevronRight />
              </Badge>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
