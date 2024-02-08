"use server";

import { addBlurredUrls, convertYear } from "@/lib/utils";

import {
  optionConfig,
  REVALIDATE_TV_TRENDING,
  REVALIDATE_NORMAL,
  FILM_IMG_URL,
  TV_TRENDING_API,
  TV_POPULAR_API,
  TV_ONAIR__API,
  TV_TOP_RATED_API,
} from "../config";

import { FilmBlur } from "@/lib/type";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchTvTrending = async function () {
  try {
    const res = await fetch(TV_TRENDING_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_TV_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((series: any) => {
      const img = series.backdrop_path
        ? FILM_IMG_URL(series.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if Tv series img exist will have a blurred img
      if (series.backdrop_path) imgUrls.push(img);

      return {
        id: series.id,
        title: series.name,
        releaseDate: convertYear(series.first_air_date),
        isMovie: false,
        typeFilm: "TV Series",
        hasBlur: series.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if Tv series img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((series: FilmBlur) => {
      if (series.hasBlur) {
        series.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth tv trending have a: ", error);
  }
};

export const fetchTvPopular = async function () {
  try {
    const res = await fetch(TV_POPULAR_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((series: any) => {
      const img = series.backdrop_path
        ? FILM_IMG_URL(series.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if Tv series img exist will have a blurred img
      if (series.backdrop_path) imgUrls.push(img);

      return {
        id: series.id,
        title: series.name,
        releaseDate: convertYear(series.first_air_date),
        isMovie: false,
        typeFilm: "TV Series",
        hasBlur: series.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if Tv series img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((series: FilmBlur) => {
      if (series.hasBlur) {
        series.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth tv popular have a: ", error);
  }
};

export const fetchTvOnAir = async function () {
  try {
    const res = await fetch(TV_ONAIR__API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((series: any) => {
      const img = series.backdrop_path
        ? FILM_IMG_URL(series.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if Tv series img exist will have a blurred img
      if (series.backdrop_path) imgUrls.push(img);

      return {
        id: series.id,
        title: series.name,
        releaseDate: convertYear(series.first_air_date),
        isMovie: false,
        typeFilm: "TV Series",
        hasBlur: series.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if Tv series img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((series: FilmBlur) => {
      if (series.hasBlur) {
        series.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth tv on air have a: ", error);
  }
};

export const fetchTvTopRated = async function () {
  try {
    const res = await fetch(TV_TOP_RATED_API, {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.slice(0, 6).map((series: any) => {
      const img = series.backdrop_path
        ? FILM_IMG_URL(series.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if Tv series img exist will have a blurred img
      if (series.backdrop_path) imgUrls.push(img);

      return {
        id: series.id,
        title: series.name,
        releaseDate: convertYear(series.first_air_date),
        isMovie: false,
        typeFilm: "TV Series",
        hasBlur: series.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if Tv series img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((series: FilmBlur) => {
      if (series.hasBlur) {
        series.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return { content: formattedData };
  } catch (error) {
    console.log("Fecth tv top rated have a: ", error);
  }
};
