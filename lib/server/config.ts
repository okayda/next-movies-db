export const optionConfig = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ENDPOINT}`,
  },
};

// REVALIDATE: make another re-fetch again once the time is expired
export const REVALIDATE_MOVIES_TRENDING = 3600; // 1 Hour
export const REVALIDATE_MOVIES = 14400; // 4 Hours

export const REVALIDATE_TV_TRENDING = 86400; // 24 Hours

// TMDB APIs
export const MOVIE_IMG_URL = (imgId: number) =>
  `https://image.tmdb.org/t/p/original${imgId}`;

export const MOVIES_TRENDING_API =
  "https://api.themoviedb.org/3/trending/all/week";

export const MOVIES_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const MOVIES_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing";

export const MOVIES_TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const MOVIES_UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming";

export const TV_TRENDING_API = "https://api.themoviedb.org/3/trending/tv/day";
