import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchMoviesPageTrending } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="movie"
        route="Trending"
        asyncFunc={fetchMoviesPageTrending}
      />
    </section>
  );
}
