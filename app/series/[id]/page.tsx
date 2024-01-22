import { Suspense } from "react";
import Loading from "./loading";
import { fetchSerieSearch } from "@/server/actions/search-actions";
import MovieDetails from "../../../components/MovieDetails";

export default async function page({ params }: { params: { id: string } }) {
  const seriesId = params.id;
  const seriesDetails = await fetchSerieSearch(seriesId);

  return (
    <section className="text-white">
      <Suspense fallback={<Loading />}>
        <MovieDetails movie={seriesDetails} />
      </Suspense>
    </section>
  );
}
