import { NowPlayings } from "@/components/carousel/NowPlayings";
import { HomeMoviesList } from "@/components/home/HomeMoviesList";
import { Footer } from "@/components/layouts/footer";
const page = () => {
  return (
    <div>
      <NowPlayings />
      <HomeMoviesList />
      <Footer />
    </div>
  );
};

export default page;
