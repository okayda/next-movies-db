"use server";

import { addBlurredUrls } from "@/lib/utils";

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

import { Film } from "@/lib/type";

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

    const formattedData: Film[] = results.slice(0, 6).map((tv: any) => {
      const img = FILM_IMG_URL(tv.backdrop_path);

      imgUrls.push(img);

      return {
        id: tv.id,
        title: tv.name,
        release_date: tv.first_air_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
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

    const formattedData: Film[] = results.slice(0, 6).map((tv: any) => {
      const img = FILM_IMG_URL(tv.backdrop_path);

      imgUrls.push(img);

      return {
        id: tv.id,
        title: tv.name,
        release_date: tv.first_air_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
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

    const formattedData: Film[] = results.slice(0, 6).map((tv: any) => {
      const img = FILM_IMG_URL(tv.backdrop_path);

      imgUrls.push(img);

      return {
        id: tv.id,
        title: tv.name,
        release_date: tv.first_air_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
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

    const formattedData: Film[] = results.slice(0, 6).map((tv: any) => {
      const img = FILM_IMG_URL(tv.backdrop_path);

      imgUrls.push(img);

      return {
        id: tv.id,
        title: tv.name,
        release_date: tv.first_air_date,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    return { content: formattedData, blurImgs: blurredUrls };
  } catch (error) {
    console.log("Fecth tv top rated have a: ", error);
  }
};
