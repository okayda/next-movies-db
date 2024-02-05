export type Film = {
  id: number;
  title: string;
  release_date: string;
  img: string;
};

export type FilmBlur = {
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
