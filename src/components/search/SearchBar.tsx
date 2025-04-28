import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";

export const SearchBar = () => {
  const { data } = useFetchDataInClient(
    "/search/movie?query=${searchValue}&language=en-US&page=${page}"
  );
  console.log(data);

  return;
};
