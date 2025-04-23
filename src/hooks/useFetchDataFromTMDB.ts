import useSWR from "swr";
import { FetchMovieData } from "@/lib/fetch-movie-data";

export const useFetchDataInClient = (endPoint: string) => {
  const { data } = useSWR(endPoint, FetchMovieData);

  return { data };
};
