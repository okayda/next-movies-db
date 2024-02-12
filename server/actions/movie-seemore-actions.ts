"use server";

import { FilmBlur } from "@/lib/type";

import {
  FILM_IMG_URL,
  MOVIES_POPULAR_PAGES_API,
  MOVIES_TOP_RATED_PAGES_API,
  MOVIES_TRENDING_PAGES_API,
  MOVIES_UPCOMING_PAGES_API,
  REVALIDATE_MOVIES_TRENDING,
  optionConfig,
} from "../config";

import { addBlurredUrls, convertYear } from "@/lib/utils";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchMoviesPageTrending = async function (pageNum: number) {
  try {
    const res = await fetch(MOVIES_TRENDING_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((movie: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth movie page trending have a: ", error);
  }
};

export const fetchMoviesPagePopular = async function (pageNum: number) {
  try {
    const res = await fetch(MOVIES_POPULAR_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((movie: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth movie page popular have a: ", error);
  }
};

export const fetchMoviesPageTopRated = async function (pageNum: number) {
  try {
    const res = await fetch(MOVIES_TOP_RATED_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((movie: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth movie page top rated have a: ", error);
  }
};

export const fetchMoviesPageUpcoming = async function (pageNum: number) {
  try {
    const res = await fetch(MOVIES_UPCOMING_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((movie: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth movie page upcoming have a: ", error);
  }
};
