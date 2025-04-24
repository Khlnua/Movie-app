import useSWR from "swr";
import { fetchMovieData } from "@/utils/fetch-movie-data";

export const useFetchDataInClient = (endPoint: string) => {
  const { data } = useSWR(endPoint, fetchMovieData);
  return { data };
};
