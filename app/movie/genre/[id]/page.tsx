import FilmsGrid from "@/components/FilmsGrid";
import { fetchTargetMovieGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  return (
    <section>
      <FilmsGrid
        isFor="movie"
        genreId={genreId}
        asyncFunc={fetchTargetMovieGenre}
      />
    </section>
  );
}
