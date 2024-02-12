"use server";

import { FilmBlur } from "@/lib/type";

import {
  FILM_IMG_URL,
  TV_POPULAR_PAGES_API,
  TV_TOP_RATED_PAGES_API,
  TV_TRENDING_PAGES_API,
  TV_ONAIR_PAGES_API,
  REVALIDATE_TV_TRENDING,
  optionConfig,
} from "../config";

import { addBlurredUrls, convertYear } from "@/lib/utils";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchTvPageTrending = async function (pageNum: number) {
  try {
    const res = await fetch(TV_TRENDING_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_TV_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((series: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth tv page trending have a: ", error);
  }
};

export const fetchTvPagePopular = async function (pageNum: number) {
  try {
    const res = await fetch(TV_POPULAR_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_TV_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((series: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth tv page popular have a: ", error);
  }
};

export const fetchTvPageToprated = async function (pageNum: number) {
  try {
    const res = await fetch(TV_TOP_RATED_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_TV_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((series: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth tv page top rated have a: ", error);
  }
};

export const fetchTvPageUpcoming = async function (pageNum: number) {
  try {
    const res = await fetch(TV_ONAIR_PAGES_API(pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_TV_TRENDING,
      },
    });

    if (!res.ok) throw Error;

    const { results, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData: FilmBlur[] = results.map((series: any) => {
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

    return { content: formattedData, totalPages: total_pages };
  } catch (error) {
    console.log("Fecth tv page upcoming have a: ", error);
  }
};
