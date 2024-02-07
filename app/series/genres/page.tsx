import { Suspense } from "react";
import Loading from "./loading";
import { fetchTvGenres } from "@/server/actions/genres-actions";
import GenresCardGrid from "../../../components/GenresCardGrid";

export default async function page() {
  const tvGenres = await fetchTvGenres();
  const type = "series";

  if (!tvGenres) throw new Error("404 Not Available");

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <GenresCardGrid data={tvGenres} type={type} />
      </Suspense>
    </section>
  );
}
