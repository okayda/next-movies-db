import { MOVIE_GENRES_API, REVALIDATE_NORMAL, optionConfig } from "../config";

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
