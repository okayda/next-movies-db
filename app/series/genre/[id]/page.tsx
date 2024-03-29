import GenreFilmsGrid from "@/components/GenreFilmsGrid";
import { fetchTargetTvGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  // Error handling & loading is already built into the GenreFilmsGrid component

  return (
    <section>
      <GenreFilmsGrid
        isFor="series"
        genreId={genreId}
        asyncFunc={fetchTargetTvGenre}
      />
    </section>
  );
}
