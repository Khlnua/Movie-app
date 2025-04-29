import axios from "axios";
type DetailPageParams = {
  params: {
    movieId: string;
  };
};

const DetailPage = ({ params: { movieId } }: DetailPageParams) => {
  const getDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
  };

  getDetails();
  return <div></div>;
};

export default DetailPage;
