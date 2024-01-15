import { fetchMovieSearch } from "@/lib/server/actions/search-actions";
import MovieDetails from "../../../components/MovieDetails";

export default async function page({ params }: { params: { id: string } }) {
  const movieId = params.id;

  const movieDetails = await fetchMovieSearch(movieId);

  return (
    <section className="text-white">
      <MovieDetails movie={movieDetails} />
    </section>
  );
}
