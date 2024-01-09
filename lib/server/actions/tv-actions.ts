"use server";

import { addBlurredUrls } from "@/lib/utils";

import {
  optionConfig,
  REVALIDATE_TV_TRENDING,
  TV_TRENDING_API,
  MOVIE_IMG_URL,
} from "../config";

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
    console.log("Fecth tv trending have a: ", error);
  }
};
