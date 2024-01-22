import { fetchTargetMovieGenre } from "@/server/actions/genre-actions";

import { fetchMovieGenres } from "@/server/actions/genres-actions";

import GenresCardGrid from "../../../components/GenresCardGrid";

export default async function page() {
  const movieGenres = await fetchMovieGenres();

  // const targetMovieGenre = await fetchTargetMovieGenre(12);

  return (
    <section>
      <GenresCardGrid data={movieGenres} />
    </section>
  );
}
