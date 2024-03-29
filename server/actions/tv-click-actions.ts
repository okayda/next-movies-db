import {
  addBlurredUrls,
  convertLanguage,
  convertLength,
  convertRating,
  convertStatus,
  convertYear,
  getBase64,
} from "@/lib/utils";

import {
  optionConfig,
  FILM_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_SERIES_API,
  SEARCH_SERIES_CASTS_API,
} from "../config";

import { Cast } from "@/lib/type";

const USER_PLACEHOLDER_IMAGE = "/assets/user.png";

// Tv Series Details

export const fetchSeriesClick = async function (seriesId: string) {
  try {
    const res1 = await fetch(SEARCH_SERIES_API(seriesId), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    const res2 = await fetch(SEARCH_SERIES_CASTS_API(seriesId), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!res1.ok || !res2.ok) throw Error;

    const {
      poster_path,
      name,
      tagline,
      vote_average,
      spoken_languages,
      runtime,
      status,
      first_air_date,
      genres,
      overview,
      homepage,
      imdb_id,
    } = await res1.json();

    const { cast } = await res2.json();

    const SeriesImgUrl = FILM_IMG_URL(poster_path);

    const castImgUrls: string[] = [];

    const castData: Cast[] = cast.slice(0, 4).map((cast: any) => {
      const castImg = cast.profile_path
        ? FILM_IMG_URL(cast.profile_path)
        : USER_PLACEHOLDER_IMAGE;

      if (cast.profile_path) castImgUrls.push(FILM_IMG_URL(cast.profile_path));

      return {
        id: cast.id,
        character: cast.character,
        name: cast.name,
        hasBlur: cast.profile_path ? true : false,
        img: castImg,
      };
    });

    const castBlurredUrls = await addBlurredUrls(castImgUrls);

    // if cast img exist will have an own property
    // i.e, (blurredImg) responsible for applying the blurred img
    let blurImgsIndex = 0;
    castData.forEach((cast: Cast) => {
      if (cast.hasBlur) {
        cast.blurredImg = castBlurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return {
      img: SeriesImgUrl,
      imgBlur: await getBase64(SeriesImgUrl),
      title: name,
      tagline,
      stars: Number(convertRating(vote_average)),
      language: convertLanguage(spoken_languages),
      runtime: convertLength(runtime),
      status: convertStatus(status),
      releaseDate: convertYear(first_air_date),
      genres,
      overview,
      topCasts: castData,
      topCastsBlurImgs: castBlurredUrls,
      homepage,
      imdbId: imdb_id,
    };
  } catch (error) {
    console.log("Fecth series search have a: ", error);
  }
};
