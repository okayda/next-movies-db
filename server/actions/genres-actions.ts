"use server";

import {
  MOVIE_GENRES_API,
  REVALIDATE_NORMAL,
  SEARCH_MOVIE_TARGET_GENRE,
  TV_GENRES_API,
  optionConfig,
} from "../config";

export const fetchMovieGenres = async function () {
  try {
    const res = await fetch(MOVIE_GENRES_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { genres } = await res.json();

    return genres;
  } catch (error) {
    console.log("Fecth genres movie have a: ", error);
  }
};

export const fetchTvGenres = async function () {
  try {
    const res = await fetch(TV_GENRES_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { genres } = await res.json();

    return genres;
  } catch (error) {
    console.log("Fecth genres tv have a: ", error);
  }
};
