import LoadMoreGrid from "@/app/(home)/LoadMoreGrid";
import FilmCarousel from "@/app/(home)/HomeFilmsCarousel";
import { fetchMoviesTrending } from "@/server/actions/movie-actions";

export default async function Home() {
  const trendingMovies = await fetchMoviesTrending();

  return (
    <>
      <FilmCarousel data={trendingMovies} />

      <LoadMoreGrid />
    </>
  );
}
