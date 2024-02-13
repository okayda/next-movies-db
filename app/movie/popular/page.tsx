import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchMoviesPagePopular } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="movie"
        route="Popular"
        asyncFunc={fetchMoviesPagePopular}
      />
    </section>
  );
}
