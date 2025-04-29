"use client";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Play, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Trailer } from "./Trailer";
import { HomePageSkeleton } from "../skeletons/HomePageSkeleton";

type Nowplaying = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type VideoType = {
  key: string;
  site: string;
  type: string;
};

export const NowPlayings = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [trailerkey, setTrailerKey] = useState<string | null>(null);
  const { data } = useFetchDataInClient(
    "/movie/now_playing?language=en-US&page=1"
  );
  const movies: Nowplaying[] = data?.results ?? [];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  const fetchTrailer = async (movieId: number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    const trailer = data.results?.find(
      (video: VideoType) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (trailer) {
      setTrailerKey(trailer.key);
    } else {
      alert("Trailer is not available");
    }
  };

  if (movies.length == 0) {
    return <HomePageSkeleton />;
  }

  return (
    <div className="relative pt-3">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {movies.slice(0, 10).map((movie: Nowplaying) => (
            <CarouselItem
              key={movie.id}
              className="w-full h-[510px] md:h-165 flex shrink-0"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className=" absolute w-full  h-60 md:h-165 object-cover"
              />

              <div className="absolute z-1 top-60 md:top-40 md:pl-20  w-full md:w-101 flex justify-between flex-col p-5 gap-4">
                <div className="  md:text-[#FFFFFF] flex justify-between items-center md:flex-col md:items-start">
                  <div>
                    <p className="font-normal text-[16px] ">Now Playing:</p>
                    <h2 className=" text-lg font-semibold">{movie.title}</h2>
                  </div>
                  <div className="flex gap-1">
                    <Star className="fill-[#FDE047] text-[#FDE047]  size-6" />
                    <p className="text-[16px] font-semibold">
                      {movie.vote_average.toFixed(1)}
                    </p>
                    <span className="text-16px font-normal text-gray-500">
                      /10
                    </span>
                  </div>
                </div>
                <p className=" text-sm font-normal  md:text-[#FAFAFA]">
                  {movie.overview}
                </p>
                <Button
                  onClick={() => fetchTrailer(movie.id)}
                  className=" w-[145px] bg-[#18181B] text-[#FAFAFA] md:bg-[#FAFAFA] md:text-[#18181B] text-sm font-medium border border-none rounded-md py-2 px-4"
                >
                  <Play />
                  Watch Trailer
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden md:flex absolute right-4  border-none  " />
        <CarouselPrevious className="hidden md:flex absolute left-4  border-none" />
      </Carousel>
      <div className="absolute z-100 top-60 md:top-160 left-0 right-0 flex justify-center gap-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
            }}
            className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white scale-155 shadow-lg "
                : "bg-gray-500 opacity-60"
            }`}
          ></button>
        ))}
      </div>
      <Trailer trailerKey={trailerkey} setTrailerkey={setTrailerKey} />
    </div>
  );
};
