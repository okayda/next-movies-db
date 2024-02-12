// This config should be attach for every request to the TMDB APIs
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

// *** TMDB APIs ***
export const FILM_IMG_URL = (imgId: number) =>
  `https://image.tmdb.org/t/p/original${imgId}`;

// Movies
export const MOVIES_TRENDING_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/trending/movie/day?page=${pageNum}`;

export const MOVIES_POPULAR_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/movie/popular?page=${pageNum}`;

export const MOVIES_TOP_RATED_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/movie/top_rated?page=${pageNum}`;

export const MOVIES_UPCOMING_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/movie/upcoming?page=${pageNum}`;

export const MOVIES_TRENDING_API =
  "https://api.themoviedb.org/3/trending/movie/day";

export const MOVIES_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const MOVIES_TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const MOVIES_UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming";

// Series

export const TV_TRENDING_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/trending/tv/day?page=${pageNum}`;

export const TV_POPULAR_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/tv/popular?page=${pageNum}`;

export const TV_ONAIR_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/tv/on_the_air?page=${pageNum}`;

export const TV_TOP_RATED_PAGES_API = (pageNum: number) =>
  `https://api.themoviedb.org/3/tv/top_rated?page=${pageNum}`;

export const TV_TRENDING_API = "https://api.themoviedb.org/3/trending/tv/day";

export const TV_POPULAR_API = "https://api.themoviedb.org/3/tv/popular";

export const TV_ONAIR_API = "https://api.themoviedb.org/3/tv/on_the_air";

export const TV_TOP_RATED_API = "https://api.themoviedb.org/3/tv/top_rated";

// Genres
export const MOVIE_GENRES_API = "https://api.themoviedb.org/3/genre/movie/list";

export const TV_GENRES_API = "https://api.themoviedb.org/3/genre/tv/list";

// Click movie & TV series (Not use for search bar)
export const SEARCH_MOVIE_API = (movieId: string) => `
https://api.themoviedb.org/3/movie/${movieId}`;

export const SEARCH_MOVIE_CASTS_API = (movieId: string) => `
https://api.themoviedb.org/3/movie/${movieId}/credits`;

export const SEARCH_SERIES_API = (seriesId: string) => `
https://api.themoviedb.org/3/tv/${seriesId}`;

export const SEARCH_SERIES_CASTS_API = (seriesId: string) => `
https://api.themoviedb.org/3/tv/${seriesId}/credits`;

// Seach Movie Genre
export const SEARCH_MOVIE_TARGET_GENRE = (genreId: string, pageNum: number) =>
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${genreId}`;

// Search TV Genre
export const SEARCH_TV_TARGET_GENRE = (genreId: string, pageNum: number) =>
  `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${genreId}`;

// SEARCH BAR
export const SEARCH_BAR_FILMS = (filmName: string, pageNum: number) =>
  `https://api.themoviedb.org/3/search/multi?query=${filmName}&include_adult=false&language=en-US&page=${pageNum}`;
