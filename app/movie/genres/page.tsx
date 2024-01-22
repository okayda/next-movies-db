import { fetchMovieGenres } from "@/server/actions/genres-actions";
import GenresCardGrid from "../../../components/GenresCardGrid";

export default async function page() {
  const movieGenres = await fetchMovieGenres();
  const type = "movie";

  return (
    <section>
      <GenresCardGrid data={movieGenres} type={type} />
    </section>
  );
}
