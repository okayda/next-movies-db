"use server";

import { addBlurredUrls } from "../../utils";

import {
  optionConfig,
  REVALIDATE_MOVIES_TRENDING,
  REVALIDATE_MOVIES,
  MOVIE_IMG_URL,
  MOVIES_POPULAR_API,
  MOVIES_PLAYING_API,
  MOVIES_TOP_RATED_API,
  MOVIES_UPCOMING_API,
  MOVIES_TRENDING_API,
} from "../config";

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

    const formattedData = results.slice(0, 6).map((movie: any) => {
      const img = MOVIE_IMG_URL(movie.backdrop_path);

      imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth movie trending have a: ", error);
  }
};

export const fetchMoviesPopular = async function () {
  try {
    const res = await fetch(MOVIES_POPULAR_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.slice(0, 6).map((movie: any) => {
      const img = MOVIE_IMG_URL(movie.backdrop_path);

      imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth movie popular have a: ", error);
  }
};

export const fetchMoviesPlaying = async function () {
  try {
    const res = await fetch(MOVIES_PLAYING_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.slice(0, 6).map((movie: any) => {
      const img = MOVIE_IMG_URL(movie.backdrop_path);

      imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth movie playing have a: ", error);
  }
};

export const fetchMoviesTopRated = async function () {
  try {
    const res = await fetch(MOVIES_TOP_RATED_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.slice(0, 6).map((movie: any) => {
      const img = MOVIE_IMG_URL(movie.backdrop_path);

      imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth movie top rated have a: ", error);
  }
};

export const fetchMoviesUpcoming = async function () {
  try {
    const res = await fetch(MOVIES_UPCOMING_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_MOVIES,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.slice(0, 6).map((movie: any) => {
      const img = MOVIE_IMG_URL(movie.backdrop_path);

      imgUrls.push(img);

      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth movie upcoming have a: ", error);
  }
};