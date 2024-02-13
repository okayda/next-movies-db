import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchMoviesPageTopRated } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="movie"
          route="Top Rated"
          asyncFunc={fetchMoviesPageTopRated}
        />
      </Suspense>
    </section>
  );
}
