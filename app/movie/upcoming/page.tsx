import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchMoviesPageUpcoming } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="movie"
          route="Upcming"
          asyncFunc={fetchMoviesPageUpcoming}
        />
      </Suspense>
    </section>
  );
}
