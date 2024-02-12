import SeeMoreFilmsGrid from "@/components/SeeMoreFilmsGrid";
import { fetchMoviesPageUpcoming } from "@/server/actions/movie-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="movie"
        route="Upcming"
        asyncFunc={fetchMoviesPageUpcoming}
      />
    </section>
  );
}
