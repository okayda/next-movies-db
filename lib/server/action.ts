"use server";

import {
  optionConfig,
  MOVIE_IMG_API,
  MOVIES_POPULAR_API,
  MOVIES_PLAYING_API,
  MOVIES_TOP_RATED_API,
  MOVIES_UPCOMING_API,
} from "./config";

export const fetchMovieImg = async function (data: any) {
  try {
    return await Promise.all(
      data.map(async (movie: any) => {
        const res = await fetch(MOVIE_IMG_API(movie.id), optionConfig);

        const data = await res.json();

        return data.backdrops[0].file_path;
      }),
    );
  } catch (error) {
    console.log("Fecth movie img have a: ", error);
  }
};

export const fetchMoviesPopular = async function () {
  try {
    const res = await fetch(MOVIES_POPULAR_API, optionConfig);

    if (!res.ok) throw Error;

    const data = await res.json();

    return data.results.slice(0, 6);
  } catch (error) {
    console.log("Fecth movie popular have a: ", error);
  }
};

export const fetchMoviePlaying = async function () {
  try {
    const res = await fetch(MOVIES_PLAYING_API, optionConfig);

    if (!res.ok) throw Error;

    const data = await res.json();

    return data.results.slice(0, 6);
  } catch (error) {
    console.log("Fecth movie playing have a: ", error);
  }
};

export const fetchMovieTopRated = async function () {
  try {
    const res = await fetch(MOVIES_TOP_RATED_API, optionConfig);

    if (!res.ok) throw Error;

    const data = await res.json();

    return data.results.slice(0, 6);
  } catch (error) {
    console.log("Fecth movie top rated have a: ", error);
  }
};

export const fetchMovieUpcoming = async function () {
  try {
    const res = await fetch(MOVIES_UPCOMING_API, optionConfig);

    if (!res.ok) throw Error;

    const data = await res.json();

    return data.results.slice(0, 6);
  } catch (error) {
    console.log("Fecth movie upcoming have a: ", error);
  }
};
