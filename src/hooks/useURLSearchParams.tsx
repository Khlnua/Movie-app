"use client";
import { useSearchParams } from "next/navigation";

export const useURLSearchParams = () => {
  const searchParams = useSearchParams();
  const selectedGenreIds = searchParams.get("genreIds")?.split(",") ?? [];

  const generateQueryParams = (genreId: string) => {
    const queryParams = new URLSearchParams();
    const updateQueryParams = selectedGenreIds.includes(genreId)
      ? selectedGenreIds.filter((id) => id !== genreId)
      : [...selectedGenreIds, genreId];

    if (updateQueryParams.length !== 0) {
      queryParams.set("genreIds", updateQueryParams.join(","));
    }

    const newParams = queryParams.toString();

    return `/genres?${newParams}`;
  };

  return { selectedGenreIds, generateQueryParams };
};
