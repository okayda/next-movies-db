import { addBlurredUrls } from "@/lib/utils";

import {
  MOVIE_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_BAR_FILMS,
  optionConfig,
} from "../config";

export const fetchSearchFilms = async function (filmName: any, pageNum: any) {
  try {
    const res = await fetch(SEARCH_BAR_FILMS(filmName, pageNum), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res.ok) throw Error;

    const { results, page, total_pages } = await res.json();

    const imgUrls: string[] = [];

    const formattedData = results.map((film: any) => {
      const img = MOVIE_IMG_URL(film.backdrop_path);

      imgUrls.push(img);

      return {
        id: film.id,
        title: film.title || film.name,
        release_date: film.release_date || film.first_air_date,
        type: film.media_type === "tv" ? "TV Series" : "Movie",
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
    console.log("Fecth search bar films have a: ", error);
  }
};
