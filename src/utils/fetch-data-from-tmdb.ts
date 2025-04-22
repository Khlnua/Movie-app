import { axiosInstance } from "@/lib/axios-instance";

export const fetchingGenre = () => {
  type GenreTypes = {
    id: number;
    name: string;
  };
  const getGenre = async () => {
    const { data } = await axiosInstance("/genre/movie/list?language=en");
    return data.genres as GenreTypes[];
  };

  return { getGenre };
};
