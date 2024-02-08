"use server";

import { addBlurredUrls, convertYear } from "@/lib/utils";

import {
  optionConfig,
  REVALIDATE_MOVIES_TRENDING,
  REVALIDATE_NORMAL,
  FILM_IMG_URL,
  MOVIES_POPULAR_API,
  MOVIES_TOP_RATED_API,
  MOVIES_UPCOMING_API,
  MOVIES_TRENDING_API,
} from "../config";

import { FilmBlur } from "@/lib/type";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchMoviesTrending = async function () {
  try {
    const res = await fetch(MOVIES_TRENDING_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((movie: any) => {
      const img = movie.backdrop_path
        ? FILM_IMG_URL(movie.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if movie img exist will have a blurred img
      if (movie.backdrop_path) imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title || movie.name,
        releaseDate: convertYear(movie.release_date || movie.first_air_date),
        isMovie: true,
        typeFilm: "Movie",
        hasBlur: movie.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if movie img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((film: FilmBlur) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth movie trending have a: ", error);
  }
};

export const fetchMoviesPopular = async function () {
  try {
    const res = await fetch(MOVIES_POPULAR_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((movie: any) => {
      const img = movie.backdrop_path
        ? FILM_IMG_URL(movie.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if movie img exist will have a blurred img
      if (movie.backdrop_path) imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        releaseDate: convertYear(movie.release_date),
        isMovie: true,
        typeFilm: "Movie",
        hasBlur: movie.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if movie img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((film: FilmBlur) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth movie popular have a: ", error);
  }
};

export const fetchMoviesTopRated = async function () {
  try {
    const res = await fetch(MOVIES_TOP_RATED_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((movie: any) => {
      const img = movie.backdrop_path
        ? FILM_IMG_URL(movie.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if movie img exist will have a blurred img
      if (movie.backdrop_path) imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        releaseDate: convertYear(movie.release_date),
        isMovie: true,
        typeFilm: "Movie",
        hasBlur: movie.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if movie img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((film: FilmBlur) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth movie top rated have a: ", error);
  }
};

export const fetchMoviesUpcoming = async function () {
  try {
    const res = await fetch(MOVIES_UPCOMING_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((movie: any) => {
      const img = movie.backdrop_path
        ? FILM_IMG_URL(movie.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if movie img exist will have a blurred img
      if (movie.backdrop_path) imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        releaseDate: convertYear(movie.release_date),
        isMovie: true,
        typeFilm: "Movie",
        hasBlur: movie.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if movie img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((film: FilmBlur) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth movie upcoming have a: ", error);
  }
};
