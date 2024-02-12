import SeeMoreFilmsGrid from "@/components/SeeMoreFilmsGrid";
import { fetchMoviesPageTopRated } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="movie"
        route="Top Rated"
        asyncFunc={fetchMoviesPageTopRated}
      />
    </section>
  );
}
