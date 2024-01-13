import { fetchMovieGenres } from "@/lib/server/actions/genres-actions";
import CardsGrid from "../../components/CardsGrid";

export default async function page() {
  const movieGenres = await fetchMovieGenres();

  return (
    <section>
      <CardsGrid data={movieGenres} />
    </section>
  );
}
