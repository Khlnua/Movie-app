// "use client";

// import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
// import { ChevronDown, ChevronRight, X } from "lucide-react";
// import { Badge } from "../ui/badge";
// import { useRouter } from "next/navigation";
// import { useURLSearchParams } from "@/hooks/useURLSearchParams";
// import { cn } from "@/lib/utils";
// import { GenresLoading } from "./GenresLoading";

// type GenreTypes = {
//   id: number;
//   name: string;
// };

// export const AllMoviesGenres = () => {
//   const { push } = useRouter();
//   const { selectedGenreIds, generateQueryParams } = useURLSearchParams();

//   const handleGenreSelection = (genreId: string) => () => {
//     const newPath = generateQueryParams(genreId);
//     push(newPath);
//   };

//   const { isLoading, data } = useFetchDataInClient(
//     "/genre/movie/list?language=en"
//   );
//   const genres: GenreTypes[] = data?.genres ?? [];

//   if (isLoading) {
//     <GenresLoading />;
//   }
//   {
//     genres.map(({ name, id }, index) => {
//       const genreId = id.toString();
//       const isSelected = selectedGenreIds.includes(genreId);

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <div className="flex rounded-md border border-[#E4E4E7] py-2 px-4 h-9 items-center">
//               <ChevronDown />
//               <span className="font-medium text-[14px] hidden md:flex ">
//                 Genre
//               </span>
//             </div>
//             <DropdownMenuContent
//               align="start"
//               className="w-[335px] md:w-[577px] border border-none bg-white dark:bg-black rounded-lg mt-1.5 p-5 absolute z-50  "
//             >
//               <div className="flex flex-col items-start w-[213px]  h-15">
//                 <p className="font-semibold text-2xl">Genres</p>
//                 <p className="font-normal text-[16px]">
//                   See lists of movies by genre
//                 </p>
//               </div>
//               <hr className="h-[1px] bg-[#E4E4E7] w-[295px] md:w-[537px]  "></hr>
//               <div className="flex gap-4 flex-wrap w-[295px] md:w-[537px] h-[380px] md:h-50 mt-3 ">
//                 <Badge
//                   className={cn(
//                     "font-semibold text-[12px] gap-0.5 py-0.5 pr-1 pl-2 border rounded-full cursor-pointer border-[#E4E4E7]",
//                     isSelected &&
//                       "bg-black text-white dark:bg-white dark:text-black"
//                   )}
//                   onClick={handleGenreSelection(genreId)}
//                   key={id}
//                 >
//                   {name}
//                   {isSelected ? (
//                     <X size={16} className="ml-2" />
//                   ) : (
//                     <ChevronRight size={16} className="ml-2" />
//                   )}
//                 </Badge>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenuTrigger>
//         </DropdownMenu>
//       );
//     });
//   }
// };
"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import { useURLSearchParams } from "@/hooks/useURLSearchParams";
import { cn } from "@/lib/utils";
import { GenresLoading } from "./GenresLoading";

type GenreTypes = {
  id: number;
  name: string;
};

export const AllMoviesGenres = () => {
  const { push } = useRouter();
  const { selectedGenreIds, generateQueryParams } = useURLSearchParams();

  const handleGenreSelection = (genreId: string) => () => {
    const newPath = generateQueryParams(genreId);
    push(newPath);
  };

  const { isLoading, data } = useFetchDataInClient(
    "/genre/movie/list?language=en"
  );
  const genres: GenreTypes[] = data?.genres ?? [];

  if (isLoading) {
    return <GenresLoading />;
  }

  if (!genres.length) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex rounded-md border border-[#E4E4E7] py-2 px-4 h-9 items-center">
          <ChevronDown />
          <span className="font-medium text-[14px] hidden md:flex">Genre</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[335px] md:w-[577px] border border-none bg-white dark:bg-black rounded-lg mt-1.5 p-5 absolute z-50"
      >
        <div className="flex flex-col items-start w-[213px] h-15">
          <p className="font-semibold text-2xl">Genres</p>
          <p className="font-normal text-[16px]">
            See lists of movies by genre
          </p>
        </div>
        <hr className="h-[1px] bg-[#E4E4E7] w-[295px] md:w-[537px]" />
        <div className="flex gap-4 flex-wrap w-[295px] md:w-[537px] h-[380px] md:h-50 mt-3">
          {genres.map(({ name, id }) => {
            const genreId = id.toString();
            const isSelected = selectedGenreIds.includes(genreId);

            return (
              <Badge
                className={cn(
                  "font-semibold text-[12px] gap-0.5 py-0.5 pr-1 pl-2 border rounded-full cursor-pointer border-[#E4E4E7]",
                  isSelected &&
                    "bg-black text-white dark:bg-white dark:text-black"
                )}
                onClick={handleGenreSelection(genreId)}
                key={id}
              >
                {name}
                {isSelected ? (
                  <X size={16} className="ml-2" />
                ) : (
                  <ChevronRight size={16} className="ml-2" />
                )}
              </Badge>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
