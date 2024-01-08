export const optionConfig = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ENDPOINT}`,
  },
};

export const MOVIE_IMG_URL = (imgId: number) =>
  `https://image.tmdb.org/t/p/original${imgId}`;

export const MOVIES_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const MOVIES_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing";

export const MOVIES_TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const MOVIES_UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming";

export const MOVIES_TRENDING_API =
  "https://api.themoviedb.org/3/trending/movie/week";
