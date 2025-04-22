import { fetchingGenre } from "@/utils/fetch-data-from-tmdb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

import { Badge } from "../ui/badge";

export const AllMoviesGenres = async () => {
  const { getGenre } = fetchingGenre();
  const genres = await getGenre();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex rounded-md border border-gray-500 h-9 items-center">
          <ChevronDown />
          <span className="font-medium text-14px text-[#18181B]">Genre</span>
        </div>
        <DropdownMenuContent className="w-120 gap-4 ">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-2xl">Genres</p>
            <p className="font-normal text-[16px]">
              See lists of movies by genre
            </p>
          </div>
          <div className="h-[1px] bg-gray-400 "></div>
          <div className="flex gap-3 w-120 flex-wrap ">
            {genres.map(({ name, id }) => (
              <Badge
                className="font-semibold text-[12px] border rounded-full border-gray-400  "
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
