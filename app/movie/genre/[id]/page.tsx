import GenreFilmsGrid from "@/components/GenreFilmsGrid";
import { fetchTargetMovieGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  // Error handling & loading is already built into the GenreFilmsGrid component

  return (
    <section>
      <GenreFilmsGrid
        isFor="movie"
        genreId={genreId}
        asyncFunc={fetchTargetMovieGenre}
      />
    </section>
  );
}
