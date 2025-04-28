import { AboutMovie } from "./NowPlayings";
import { Slide } from "./Slide";
import { Slides } from "./Slides";
import { Trailer } from "./Trailer";

export const Carousel = () => {
  return (
    <div>
      <AboutMovie />
      <Slide />
      <Slides />
      <Trailer />
    </div>
  );
};
