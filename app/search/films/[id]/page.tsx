import SearchFilmsGrid from "@/components/SearchFilmsGrid";
import { fetchSearchFilms } from "@/server/actions/search-actions";

export default async function page({ params }: { params: { id: string } }) {
  const filmId = params.id;

  // Error handling & loading is already built into the SearchFilmsGrid component

  return (
    <section>
      <SearchFilmsGrid filmName={filmId} asyncFunc={fetchSearchFilms} />
    </section>
  );
}
