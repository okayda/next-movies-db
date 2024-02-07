import { Suspense } from "react";
import Loading from "./loading";
import { fetchMovieGenres } from "@/server/actions/genres-actions";
import GenresCardGrid from "../../../components/GenresCardGrid";

export default async function page() {
  const movieGenres = await fetchMovieGenres();
  const type = "movie";

  if (!movieGenres) throw new Error("404 Not Available");

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <GenresCardGrid data={movieGenres} type={type} />
      </Suspense>
    </section>
  );
}
