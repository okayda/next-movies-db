import GenreFilmsGrid from "@/components/GenreFilmsGrid";

export default async function page({ params }: { params: { id: string } }) {
  const genreId = params.id;

  return (
    <section>
      <GenreFilmsGrid genreName={genreId} />
    </section>
  );
}
