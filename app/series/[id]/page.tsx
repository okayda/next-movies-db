import { Suspense } from "react";
import Loading from "./loading";
import { fetchSeriesClick } from "@/server/actions/tv-click-actions";
import FilmDetails from "../../../components/FilmDetails";

export default async function page({ params }: { params: { id: string } }) {
  const seriesId = params.id;
  const seriesDetails = await fetchSeriesClick(seriesId);

  if (!seriesDetails) throw new Error("404 Not Available");

  return (
    <section className="text-white">
      <Suspense fallback={<Loading />}>
        <FilmDetails film={seriesDetails} />
      </Suspense>
    </section>
  );
}
