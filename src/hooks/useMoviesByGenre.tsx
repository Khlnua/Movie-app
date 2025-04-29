const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`, // TMDB API токен
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data; // Киноны мэдээллийг буцаана
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
