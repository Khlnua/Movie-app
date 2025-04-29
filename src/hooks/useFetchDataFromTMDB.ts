import useSWR from "swr";
import { fetchMovieData } from "@/utils/fetch-movie-data";

export const useFetchDataInClient = (endPoint: string) => {
  const { isLoading, data } = useSWR(endPoint, fetchMovieData);
  return { isLoading, data };
};
