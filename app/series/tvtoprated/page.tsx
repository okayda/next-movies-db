import SeeMoreFilmsGrid from "@/components/SeeMoreFilmsGrid";
import { fetchTvPageToprated } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="series"
        route="TV Toprated"
        asyncFunc={fetchTvPageToprated}
      />
    </section>
  );
}
