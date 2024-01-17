export const optionConfig = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ENDPOINT}`,
  },
};

// REVALIDATE: Another re-fetch again once the time is expired and saved it to cache again
export const REVALIDATE_NORMAL = 14400; // 4 Hours
export const REVALIDATE_MOVIES_TRENDING = 3600; // 1 Hour
export const REVALIDATE_TV_TRENDING = 86400; // 24 Hours

// TMDB APIs

// Movies
export const MOVIE_IMG_URL = (imgId: number) =>
  `https://image.tmdb.org/t/p/original${imgId}`;

export const MOVIES_TRENDING_API =
  "https://api.themoviedb.org/3/trending/all/week";

export const MOVIES_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const MOVIES_TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const MOVIES_UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming";

// Series
export const TV_TRENDING_API = "https://api.themoviedb.org/3/trending/tv/day";

export const TV_POPULAR_API = "https://api.themoviedb.org/3/tv/popular";

export const TV_ONAIR__API = "https://api.themoviedb.org/3/tv/on_the_air";

export const TV_TOP_RATED_API = "https://api.themoviedb.org/3/tv/top_rated";

// Genres
export const MOVIE_GENRES_API = "https://api.themoviedb.org/3/genre/movie/list";

export const TV_GENRES_API = "https://api.themoviedb.org/3/genre/tv/list";

// Search (Not use for search bar)
export const SEARCH_MOVIE_API = (movieId: string) => `
https://api.themoviedb.org/3/movie/${movieId}`;

export const SEARCH_MOVIE_CASTS_API = (movieId: string) => `
https://api.themoviedb.org/3/movie/${movieId}/credits`;

export const SEARCH_SERIES_API = (seriesId: string) => `
https://api.themoviedb.org/3/tv/${seriesId}`;

export const SEARCH_SERIES_CASTS_API = (seriesId: string) => `
https://api.themoviedb.org/3/tv/${seriesId}/credits`;
