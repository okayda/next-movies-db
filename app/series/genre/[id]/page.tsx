import FilmsGrid from "@/components/FilmsGrid";
import { fetchTargetTvGenre } from "@/server/actions/genre-actions";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  return (
    <section>
      <FilmsGrid genreName={genreId} asyncFunc={fetchTargetTvGenre} />
    </section>
  );
}
