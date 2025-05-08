"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

type MovieDetailType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  runtime: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genres: { id: number; name: string }[];
};

export const MoreLike = ({ movieId }: { movieId: number }) => {
  const router = useRouter();

  const { data: sameMoviesData } = useFetchDataInClient(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );

  const sameMovies: MovieDetailType[] = sameMoviesData?.results ?? [];
  console.log(sameMovies);

  return (
    <div className="flex flex-col gap-5 px-5 md:px-0">
      <div className="flex justify-between mt-10">
        <p className="font-semibold text-2xl">More like this</p>
        <Button
          className="flex justify-between"
          onClick={() => router.push(`/samemovies?movieId=${movieId}`)}
        >
          <p>See more</p>
          <ArrowRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-5 md:grid-cols-5 md:grid-rows-1 md:gap-9 ">
        {sameMovies.slice(0, 5).map((movie: MovieDetailType) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/detail/${movie.id}`)}
            className=" bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
          >
            <div className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 relative ">
              <Image
                className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 "
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                fill
                alt={movie.title}
              />
            </div>
            <div className="  py-4 pl-3 ">
              <div className="flex ">
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
    </div>
  );
};
