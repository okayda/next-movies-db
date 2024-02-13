import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchTvPageTrending } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="series"
          route="TV Trending"
          asyncFunc={fetchTvPageTrending}
        />
      </Suspense>
    </section>
  );
}
