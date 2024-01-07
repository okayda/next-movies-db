import SearchBar from "@/components/SearchBar";
import LoadMoreGrid from "@/components/LoadMoreGrid";
import MovieCarousel from "@/components/MovieCarousel";

export default async function Home() {
  return (
    <>
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel />

      <LoadMoreGrid />
    </>
  );
}
