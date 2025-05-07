import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { DynamicPagination } from "../common";
import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";

export const SearchResult = ({ movies }: { movies: any[] }) => {
  const { totalPage } = useMoviesBySearch();
  const router = useRouter();

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-6 gap-5 md:grid-cols-4 md:grid-rows-3 md:gap-9 px-3 md:px-10">
        {movies.map((movie, index) => (
          <div
            key={index}
            onClick={() => router.push(`/detail/${movie.id}`)}
            className="bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
          >
            <img
              className="rounded-t-lg cursor-pointer h-61 md:70 w-full hover:opacity-70"
              src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="py-4 pl-3">
              <div className="flex">
                <Star className="text-[#FDE047] fill-[#FDE047] dark:text-[#F4F4F5] dark:fill-[#F4F4F5]" />
                <span className="font-semibold">
                  {movie.vote_average.toFixed(1)}
                  <span className="font-normal text-gray-400">/10</span>
                </span>
              </div>
              <p className="text-[18px] font-normal">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-10 ">
        <DynamicPagination totalPage={Number(totalPage)} />
      </div>
    </div>
  );
};

// "use client";
// import { DynamicPagination } from "@/components/common";
// import { SearchInputForSearch } from "@/components/search/SearchInputForSearch";
// import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";
// import { Star } from "lucide-react";
// import { useRouter } from "next/navigation";

// export const SearchResult = () => {
//   const router = useRouter();
//   const { totalPage, searchResultRef, searchValue, handleSearch, movies } =
//     useMoviesBySearch();
//   return (
//     <div className="flex pt-10 md:pt-15 ">
//       {searchValue && Boolean(movies.length) && (
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
//       )}
//     </div>
//   );
// };
