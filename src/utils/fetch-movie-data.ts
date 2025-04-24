import { axiosInstance } from "../lib/axios-instance";

export const fetchMovieData = async (endPoint: string) => {
  const { data } = await axiosInstance(endPoint);
  return data;
};
