import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchTvPageUpcoming } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="series"
          route="TV On Air"
          asyncFunc={fetchTvPageUpcoming}
        />
      </Suspense>
    </section>
  );
}
