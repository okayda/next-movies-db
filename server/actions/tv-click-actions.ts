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
  SEARCH_SERIES_API,
  SEARCH_SERIES_CASTS_API,
} from "../config";

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

    const filmImgUrl = MOVIE_IMG_URL(poster_path);

    const castImgUrls: string[] = [];

    const castData = cast.slice(0, 4).map((cast: any) => {
      const castImg = cast.profile_path
        ? MOVIE_IMG_URL(cast.profile_path)
        : "/assets/user.png";

      if (cast.profile_path) castImgUrls.push(MOVIE_IMG_URL(cast.profile_path));

      return {
        id: cast.id,
        isBlur: cast.profile_path ? true : false,
        character: cast.character,
        name: cast.name,
        img: castImg,
      };
    });

    const castBlurredUrls = await addBlurredUrls(castImgUrls);

    let blurImgsIndex = 0;
    castData.forEach((cast: any) => {
      // if the cast dont have picture the Blur Img will not be applied
      if (cast.isBlur) {
        cast.imgBlurImg = castBlurredUrls[blurImgsIndex];
        ++blurImgsIndex;
      }
    });

    return {
      img: filmImgUrl,
      imgBlur: await getBase64(filmImgUrl),
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