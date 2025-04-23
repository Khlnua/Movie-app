import { axiosInstance } from "./axios-instance";

export const FetchMovieData = async (endPoint: string) => {
  const { data } = await axiosInstance(endPoint);
  return data;
};
