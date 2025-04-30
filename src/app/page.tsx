import { NowPlayings } from "@/components/carousel/NowPlayings";
import { HomeMoviesList } from "@/components/home/HomeMoviesList";
const page = () => {
  return (
    <div>
      <NowPlayings />
      <HomeMoviesList />
    </div>
  );
};

export default page;
