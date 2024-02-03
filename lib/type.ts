import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Film = {
  id: number;
  title: string;
  release_date: string;
  img: string;
};

// TV Series
export type Series = {
  id: number;
  title: string;
  releaseDate: string;
  isMovie: boolean;
  typeFilm: string;
  hasBlur: boolean;
  img: string;
  blurredImg?: string;
};

export type Cast = {
  id: string;
  character: string;
  name: string;
  hasBlur: boolean;
  img: string;
  blurredImg?: string;
};

export type Genres = {
  id: number | string;
  name: string;
};
