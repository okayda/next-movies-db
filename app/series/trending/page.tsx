import SeeMoreFilmsGrid from "@/components/SeeMoreFilmsGrid";
import { fetchTvPageTrending } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="series"
        route="TV Trending"
        asyncFunc={fetchTvPageTrending}
      />
    </section>
  );
}
