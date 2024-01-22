"use server";

import { addBlurredUrls } from "@/lib/utils";
import {
  MOVIE_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_MOVIE_TARGET_GENRE,
  SEARCH_TV_TARGET_GENRE,
  optionConfig,
} from "../config";

export const fetchTargetMovieGenre = async function (
  genreId: any,
  pageNum: any,
) {
  try {
    const res = await fetch(SEARCH_MOVIE_TARGET_GENRE(genreId, pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results, page, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.map((movie: any) => {
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

    return {
      initialPage: page,
      totalPages: total_pages,
      content: formattedData,
      blurImgs: blurredUrls,
    };
  } catch (error) {
    console.log("Fecth target movie genre have a: ", error);
  }
};

export const fetchTargetTvGenre = async function (genreId: any, pageNum: any) {
  try {
    const res = await fetch(SEARCH_TV_TARGET_GENRE(genreId, pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results, page, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.map((movie: any) => {
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

    return {
      initialPage: page,
      totalPages: total_pages,
      content: formattedData,
      blurImgs: blurredUrls,
    };
  } catch (error) {
    console.log("Fecth target TV series genre have a: ", error);
  }
};
