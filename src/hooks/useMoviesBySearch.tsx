"use client";
import { useRef, useState } from "react";
import { useFetchDataInClient } from "./useFetchDataFromTMDB";
import { useRouter, useSearchParams } from "next/navigation";
import page from "@/app/page";

type MovieSearchData = {
  genre_ids: string[];
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export const useMoviesBySearch = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>("");
  const [moviesResult, setMoviesResult] = useState<any[]>([]);
  const searchResultRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const { data } = useFetchDataInClient(
    `/search/movie?query=${searchValue}&language=en-US&page=${page}`
  );
  const movies: MovieSearchData[] = data?.results ?? [];
  const totalPage = data?.total_pages;

  const handleSearch = (event: any) => {
    setSearchValue(event.target.value);

    const findMovies = movies.filter((movie: any) => {
      movie.title.toLowerCase().startsWith(searchValue.toLocaleLowerCase());
    });

    setMoviesResult(findMovies);
  };

  const onClickFoundMovie = (movieId: string) => () => {
    setSearchValue("");
    router.push(`/detail/${movieId}`);
  };

  return {
    totalPage,
    moviesResult,
    searchResultRef,
    setSearchValue,
    searchValue,
    handleSearch,
    movies,
    onClickFoundMovie,
  };
};
