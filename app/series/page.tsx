import { fetchTvGenres } from "@/lib/server/actions/genres-actions";
import CardsGrid from "../../components/CardsGrid";

export default async function page() {
  const tvGenres = await fetchTvGenres();

  return (
    <section>
      <CardsGrid data={tvGenres} />
    </section>
  );
}
