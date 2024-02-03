"use server";

import { addBlurredUrls } from "@/lib/utils";

import {
  MOVIE_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_BAR_FILMS,
  optionConfig,
} from "../config";
import { Series } from "@/lib/type";

const FILM_PLACEHOLDER_IMAGE = "/assets/img-not-found.png";

export const fetchSearchFilms = async function (
  filmName: string,
  pageNum: number,
) {
  try {
    const resFilms = await fetch(SEARCH_BAR_FILMS(filmName, pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!resFilms.ok) throw Error;

    const { results, page, total_pages, total_results } = await resFilms.json();

    const imgUrls: string[] = [];

    const formattedData: Series[] = results.map((film: any) => {
      const img = film.backdrop_path
        ? MOVIE_IMG_URL(film.backdrop_path)
        : FILM_PLACEHOLDER_IMAGE;

      // (film) = Movie or TV, img
      // if film img exist will have a blurred img
      if (film.backdrop_path) imgUrls.push(img);

      const date =
        film.release_date?.split("-")[0] ??
        film.first_air_date?.split("-")[0] ??
        "N/A";

      return {
        id: film.id,
        title: film.title || film.name,
        releaseDate: date,
        isMovie: film.media_type === "movie" ? true : false,
        typeFilm: film.media_type === "tv" ? "TV Series" : "Movie",
        hasBlur: film.backdrop_path ? true : false,
        img,
      };
    });

    const blurredUrls = await addBlurredUrls(imgUrls);

    // if film img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    formattedData.forEach((film: Series) => {
      if (film.hasBlur) {
        film.blurredImg = blurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return {
      initialPage: page,
      totalPages: total_pages,
      totalResults: total_results,
      content: formattedData,
    };
  } catch (error) {
    console.log("Fetch search bar films have a: ", error);
  }
};
