import GenreFilmsGrid from "@/components/GenreFilmsGrid";
import { fetchTargetTvGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  return (
    <section>
      <GenreFilmsGrid genreName={genreId} asyncFunc={fetchTargetTvGenre} />
    </section>
  );
}
