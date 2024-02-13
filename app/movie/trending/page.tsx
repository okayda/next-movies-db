import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchMoviesPageTrending } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="movie"
          route="Trending"
          asyncFunc={fetchMoviesPageTrending}
        />
      </Suspense>
    </section>
  );
}
