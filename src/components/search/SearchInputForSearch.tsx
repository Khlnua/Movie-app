"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";
import { SearchResult } from "@/components/genre-or-search/SearchResult";

export const SearchInputForSearch = () => {
  const { searchValue, handleSearch, movies } = useMoviesBySearch();

  return (
    <div className="flex flex-col relative">
      <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] bg-[#F4F4F5] dark:bg-[#27272A]">
        <Search className="size-4 text-[#71717A] ml-2" />
        <Input
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search "
          className="text-[14px] w-auto font-normal"
        />
      </div>

      {searchValue && (
        <div className="mt-5">
          <SearchResult movies={movies} />
        </div>
      )}
    </div>
  );
};

// "use client";
// import { Search, Star } from "lucide-react";
// import { Input } from "../ui/input";
// import { useRouter } from "next/navigation";
// import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";
// import { DynamicPagination } from "../common";

// export const SearchInputForSearch = () => {
//   const router = useRouter();

//   const { totalPage, searchResultRef, searchValue, handleSearch, movies } =
//     useMoviesBySearch();

//   return (
//     <div className="flex flex-col relative">
//       <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] bg-[#F4F4F5] dark:bg-[#27272A]">
//         <Search className="size-4 text-[#71717A]  ml-2" />
//         <Input
//           value={searchValue}
//           onChange={handleSearch}
//           className="text-[14px] w-auto  font-normal"
//         />
//       </div>

//       {/* {searchValue && Boolean(movies.length) && (
//         <div>
//           <div className="grid grid-cols-2 grid-rows-6 gap-5 md:grid-cols-4 md:grid-rows-3 md:gap-9 px-3 md:px-10 ">
//             {movies.slice(0, 12).map((movie, index) => (
//               <div
//                 ref={searchResultRef}
//                 key={index}
//                 onClick={() => router.push(`/detail/${movie.id}`)}
//                 className=" bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
//               >
//                 <img
//                   className="rounded-t-lg cursor-pointer h-61 md:70 w-full hover:opacity-70 "
//                   src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <div className="  py-4 pl-3 ">
//                   <div className="flex ">
//                     <Star className="text-[#FDE047] fill-[#FDE047] dark:text-[#F4F4F5] dark:fill-[#F4F4F5]" />
//                     <span className="font-semibold">
//                       {movie.vote_average.toFixed(1)}
//                       <span className="font-normal text-gray-400">/10</span>
//                     </span>
//                   </div>
//                   <p className="text-[18px] font-normal">{movie.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="pt-10 ">
//             <DynamicPagination totalPage={Number(totalPage)} />
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };
