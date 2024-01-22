import { fetchTvGenres } from "@/server/actions/genres-actions";
import GenresCardGrid from "../../../components/GenresCardGrid";

export default async function page() {
  const tvGenres = await fetchTvGenres();
  const type = "series";

  return (
    <section>
      <GenresCardGrid data={tvGenres} type={type} />
    </section>
  );
}
