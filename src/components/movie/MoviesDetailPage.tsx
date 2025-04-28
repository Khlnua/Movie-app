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
import { Trailer } from "../carousel/Trailer";

type MovieCardData = {
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

export const MoviesDetailPage = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [trailerkey, setTrailerKey] = useState<string | null>(null);
  const { data } = useFetchDataInClient(
    "/movie/now_playing?language=en-US&page=1"
  );
  const movies: MovieCardData[] = data?.results ?? [];
  console.log(movies);

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

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <div className="">
          <CarouselContent>
            {movies
              .map((movie: MovieCardData) => (
                <CarouselItem key={movie.id}>
                  <div className="flex justify-around">
                    <div>
                      <p>{movie.title}</p>
                      <p>{movie.release_date}</p>
                    </div>
                    <div>
                      <p>Rating</p>
                      <div className="flex gap-1">
                        <Star className="text-[#FDE047]  size-6" />
                        <p className="text-[16px] font-semibold">
                          {movie.vote_average.toFixed(1)}
                        </p>
                        <span className="text-16px font-normal text-gray-500">
                          /10
                        </span>
                      </div>
                      <p>{movie.vote_count}</p>
                    </div>
                  </div>

                  <div className="flex justity-around gap-8">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                      className="w-72 h-104"
                    />

                    <div className=" w-190 h-107 flex justify-between shrink-0 relative">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        className=" absolute w-190  h-107 "
                      />
                      <div className="absolute top-90 left-15 z-1 flex gap-1.5 items-center">
                        <Button
                          onClick={() => fetchTrailer(movie.id)}
                          className="  bg-[#18181B]  md:bg-[#FAFAFA]  border border-none rounded-full "
                        >
                          <Play />
                        </Button>
                        <p className="text-[#FAFAFA] font-medium  text-sm ">
                          Play Trailer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>{movie.genre_ids}</div>
                </CarouselItem>
              ))
              .slice(0, 1)}
          </CarouselContent>
          <CarouselNext className="hidden md:flex absolute right-4  border-none  " />
          <CarouselPrevious className="hidden md:flex absolute left-4  border-none" />
          <Trailer trailerKey={trailerkey} setTrailerkey={setTrailerKey} />
        </div>
      </Carousel>
    </div>
  );
};
