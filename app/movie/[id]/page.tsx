import { Suspense } from "react";
import Loading from "./loading";
import { fetchMovieClick } from "@/server/actions/movie-click-actions";
import FilmDetails from "../../../components/FilmDetails";

export default async function page({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const movieDetails = await fetchMovieClick(movieId);

  if (!movieDetails) throw new Error("404 Not Available");

  return (
    <section className="text-white">
      <Suspense fallback={<Loading />}>
        <FilmDetails film={movieDetails} />
      </Suspense>
    </section>
  );
}
