import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchTvPageUpcoming } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  // Error handling & loading is already built into the SeeMoreFilmsGrid component

  return (
    <section>
      <SeeMoreFilmsGrid
        isFor="series"
        route="TV On Air"
        asyncFunc={fetchTvPageUpcoming}
      />
    </section>
  );
}
