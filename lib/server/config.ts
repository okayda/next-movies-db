export const optionConfig = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ENDPOINT}`,
  },
};

export const MOVIE_IMG_API = (movie_id: number) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/images`;

export const MOVIES_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const MOVIES_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing";

export const MOVIES_TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const MOVIES_UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming";
