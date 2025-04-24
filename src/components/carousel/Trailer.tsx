"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";

type GetTrailer = {
  id: number;
  title: string;
  video_path: string;
};

export const Trailer = () => {
  const { data } = useFetchDataInClient("");

  return <div></div>;
};
