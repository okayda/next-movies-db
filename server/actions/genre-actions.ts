"use server";

import { addBlurredUrls } from "@/lib/utils";
import {
  FILM_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_MOVIE_TARGET_GENRE,
  SEARCH_TV_TARGET_GENRE,
  optionConfig,
} from "../config";

import { FilmBlur } from "@/lib/type";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchTargetMovieGenre = async function (
  genreId: string,
  pageNum: number,
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

    const formattedData: FilmBlur[] = results.map((movie: any) => {
      const img = movie.backdrop_path
        ? FILM_IMG_URL(movie.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if movie img exist will have a blurred img
      if (movie.backdrop_path) imgUrls.push(img);

      const date =
        movie.release_date?.split("-")[0] ??
        movie.first_air_date?.split("-")[0] ??
        "N/A";

      return {
        id: movie.id,
        title: movie.title,
        releaseDate: date,
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

    return {
      initialPage: page,
      totalPages: total_pages,
      content: formattedData,
    };
  } catch (error) {
    console.log("Fecth target movie genre have a: ", error);
  }
};

export const fetchTargetTvGenre = async function (
  genreId: string,
  pageNum: number,
) {
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

    const formattedData: FilmBlur[] = results.map((series: any) => {
      const img = series.backdrop_path
        ? FILM_IMG_URL(series.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // if Tv series img exist will have a blurred img
      if (series.backdrop_path) imgUrls.push(img);

      const date =
        series.release_date?.split("-")[0] ??
        series.first_air_date?.split("-")[0] ??
        "N/A";

      return {
        id: series.id,
        title: series.name,
        releaseDate: date,
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
    formattedData.forEach((film: FilmBlur) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return {
      initialPage: page,
      totalPages: total_pages,
      content: formattedData,
    };
  } catch (error) {
    console.log("Fecth target TV series genre have a: ", error);
  }
};
