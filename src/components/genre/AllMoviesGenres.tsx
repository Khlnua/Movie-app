"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

import { Badge } from "../ui/badge";

export const AllMoviesGenres = async () => {
  type GenreTypes = {
    id: number;
    name: string;
  };
  const { data } = useFetchDataInClient("/genre/movie/list?language=en");
  const genres = data.genres as GenreTypes[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex rounded-md border border-gray-500 items-center">
          <ChevronDown />
          <span className="font-medium text-[14px] text-[#18181B]">Genre</span>
        </div>
        <DropdownMenuContent className=" bg-amber-100  ">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-2xl">Genres</p>
            <p className="font-normal text-[16px]">
              See lists of movies by genre
            </p>
          </div>
          <div className="h-[1px] bg-gray-400  "></div>
          <div className="flex gap-3 flex-wrap ">
            {genres.map(({ name, id }) => (
              <Badge
                className="font-semibold text-[12px] border rounded-full border-[#E4E4E7]  "
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
