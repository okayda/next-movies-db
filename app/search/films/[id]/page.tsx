import SearchFilmsGrid from "@/app/search/SearchFilmsGrid";
import { fetchSearchFilms } from "@/server/actions/search-actions";

export default async function page({ params }: { params: { id: string } }) {
  const filmId = params.id;

  // Error handling & loading is already built into the SearchFilmsGrid

  return (
    <section>
      <SearchFilmsGrid filmName={filmId} asyncFunc={fetchSearchFilms} />
    </section>
  );
}
