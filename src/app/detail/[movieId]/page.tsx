"use client";
import { useParams } from "next/navigation";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dot, Play, Star } from "lucide-react";
import { Trailer } from "@/components/carousel/Trailer";
import { DetailPageSkeleton } from "@/components/skeletons/DetailPageSkeleton";

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

type VideoType = {
  key: string;
  site: string;
  type: string;
};

export default function MovieDetailPage() {
  const [trailerkey, setTrailerKey] = useState<string | null>(null);

  const params = useParams();
  const movieId = params?.movieId;

  const { data: crewData } = useFetchDataInClient(
    `/movie/${movieId}/credits?language=en-US`
  );
  console.log(crewData);

  const director = crewData?.crew?.find(
    (crewMember: any) => crewMember.job === "Director"
  );
  const directordata = director?.name || "Unknown";

  const writer = crewData?.crew?.filter((crewMember: any) =>
    ["Writer", "Screenplay", "Story"].includes(crewMember.job)
  );
  const writersdata =
    writer?.slice(0, 3).map((writer: any) => writer.name) || [];

  const actors = crewData?.cast?.slice(0, 5) || [];
  const actorsdata = actors.map((actor: any) => ({
    name: actor.name,
  }));

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

  const { data: dataDetail, isLoading: loadingDetail } = useFetchDataInClient(
    `/movie/${movieId}?language=en-US`
  );
  const movie = dataDetail as MovieDetailType;

  if (loadingDetail)
    return (
      <div className="p-10">
        <DetailPageSkeleton />
      </div>
    );

  return (
    <div className="md:px-40 py-20">
      <div className="flex justify-between px-4 md:px-20">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold md:font-bold mb-2">
            {movie.title}
          </h1>
          <p className="font-normal flex items-center text-sm md:text-[18px] mb-4">
            {movie.release_date} <Dot /> <span>{movie.runtime} min</span>
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-[12px] ">Rating:</p>
          <div className="flex gap-2 items-center">
            <Star className="fill-[#FDE047] text-[#FDE047] size-5 flex " />
            <div>
              <p className="text-[16px] font-semibold">
                {movie.vote_average.toFixed(1)}
                <span className="text-16px font-normal text-gray-500">/10</span>
              </p>
              <p>{movie.popularity.toFixed(0)}k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col">
        <div className="relative  w-full h-[211px] ">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="absolute z-10 w-full h-[211px]"
          />

          <div className="absolute z-50 flex items-center gap-2 top-40 left-3">
            <Button
              onClick={() => fetchTrailer(movie.id)}
              className=" bg-[#FAFAFA] border border-none rounded-full size-10 py-2 px-4"
            >
              <Play className="text-black" />
            </Button>
            <p className="text-[#FAFAFA]">Play Trailer</p>
            <Trailer trailerKey={trailerkey} setTrailerkey={setTrailerKey} />
          </div>
        </div>

        <div className=" flex px-5 pt-5">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className=" w-25 h-37 "
          />

          <div className="flex flex-col gap-5 pl-6 pr-3">
            <div className=" flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="flex items-center font-semibold text-sm gap-0.5 py-0.5 pr-1 pl-2 border rounded-full cursor-pointer border-[#E4E4E7]"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mb-4">{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col">
        <div className="flex gap-8 justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className=" w-72.5 h-107 "
          />

          <div className="relative  w-190 h-107 ">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="absolute z-10"
            />
            <div className="absolute z-50 flex items-center gap-2 top-90 left-8">
              <Button
                onClick={() => fetchTrailer(movie.id)}
                className=" bg-[#FAFAFA] border border-none rounded-full size-10 py-2 px-4"
              >
                <Play className="text-black" />
              </Button>
              <p className="text-[#FAFAFA]">Play Trailer</p>
              <Trailer trailerKey={trailerkey} setTrailerkey={setTrailerKey} />
            </div>
          </div>
        </div>

        <div className=" flex px-auto pt-5">
          <div className="flex flex-col gap-5 pl-6 pr-3">
            <div className=" flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="font-semibold border border-[#E4E4E7] rounded-full text-sm px-2.5 py-0.5 gap-2.5 h-8"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="text-[16px] font-normal mb-4">{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 ">
        <div className="flex gap-1.5 md:gap-3">
          <div className="font-bold text-[16px] w-16 h-7">Director</div>
          <p>{directordata || "Unknown"}</p>
        </div>
        <hr className="text-[#E4E4E7]" />

        <div className="flex gap-1 md:gap-3">
          <div className="font-bold text-[16px] w-16 h-7">Writers</div>
          <p>{writersdata.length > 0 ? writersdata.join(", ") : "Unknown"}</p>
        </div>
        <hr className="text-[#E4E4E7]" />

        <div className="flex gap-1 md:gap-3">
          <div className="font-bold text-[16px] w-16 h-7">Stars</div>
          <div className="flex">
            {actorsdata.length > 0 ? (
              <p>{actorsdata.map((actor: any) => actor.name).join(", ")}</p>
            ) : (
              <p>No actors available</p>
            )}
          </div>
        </div>
        <hr className="text-[#E4E4E7]" />
      </div>
    </div>
  );
}
