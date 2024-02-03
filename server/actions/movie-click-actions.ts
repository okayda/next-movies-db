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
  MOVIE_IMG_URL,
  REVALIDATE_NORMAL,
  SEARCH_MOVIE_API,
  SEARCH_MOVIE_CASTS_API,
} from "../config";

import { Cast } from "@/lib/type";

const USER_PLACEHOLDER_IMAGE = "/assets/user.png";

export const fetchMovieClick = async function (movieId: string) {
  try {
    const resMovieDetails = await fetch(SEARCH_MOVIE_API(movieId), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    const resCastPeoples = await fetch(SEARCH_MOVIE_CASTS_API(movieId), {
      ...optionConfig,
      next: {
        revalidate: REVALIDATE_NORMAL,
      },
    });

    if (!resMovieDetails.ok || !resCastPeoples.ok) throw Error;

    const {
      poster_path,
      title,
      tagline,
      vote_average,
      spoken_languages,
      runtime,
      status,
      release_date,
      genres,
      overview,
      homepage,
      imdb_id,
    } = await resMovieDetails.json();

    const { cast } = await resCastPeoples.json();

    const filmImgUrl = MOVIE_IMG_URL(poster_path);

    const castImgUrls: string[] = [];

    const castData: Cast[] = cast.slice(0, 4).map((cast: any) => {
      const castImg = cast.profile_path
        ? MOVIE_IMG_URL(cast.profile_path)
        : USER_PLACEHOLDER_IMAGE;

      // if cast img exist will have a blurred img
      if (cast.profile_path) castImgUrls.push(castImg);

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
      img: filmImgUrl,
      imgBlur: await getBase64(filmImgUrl),
      title,
      tagline,
      stars: convertRating(vote_average),
      language: convertLanguage(spoken_languages),
      runtime: convertLength(runtime),
      status: convertStatus(status),
      releaseDate: convertYear(release_date),
      genres,

      overview,
      topCasts: castData,
      homepage,
      imdbId: imdb_id,
    };
  } catch (error) {
    console.log("Fecth movie search have a: ", error);
  }
};
