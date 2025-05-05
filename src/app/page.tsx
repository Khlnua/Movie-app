import { NowPlayings } from "@/components/carousel/NowPlayings";
import { HomeMoviesList } from "@/components/home/HomeMoviesList";
const page = () => {
  return (
    <div className="min-h-screen">
      <NowPlayings />
      <HomeMoviesList />
    </div>
  );
};

export default page;
