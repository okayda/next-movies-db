import { Suspense } from "react";
import Loading from "./loading";
import SeeMoreFilmsGrid from "@/app/(home)/SeeMoreFilmsGrid";
import { fetchTvPageToprated } from "@/server/actions/tv-seemore-actions";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <SeeMoreFilmsGrid
          isFor="series"
          route="TV Toprated"
          asyncFunc={fetchTvPageToprated}
        />
      </Suspense>
    </section>
  );
}
