import GenreFilmsGrid from "@/components/GenreFilmsGrid";
import { fetchTargetMovieGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  return (
    <section>
      <GenreFilmsGrid genreName={genreId} asyncFunc={fetchTargetMovieGenre} />
    </section>
  );
}
