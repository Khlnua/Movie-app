import { AboutMovie } from "@/components/carousel/AboutMovie";
import { HomeMoviesList } from "@/components/home/HomeMoviesList";
import { Footer } from "@/components/layouts/footer";
const page = () => {
  return (
    <div>
      <AboutMovie />
      <HomeMoviesList />
      <Footer />
    </div>
  );
};

export default page;
