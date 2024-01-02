import MovieCarousel from "@/components/MovieCarousel";
import MovieGrid from "@/components/MovieGrid";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <section>
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel />

      <MovieGrid title="Popular" movie="darker" />

      <MovieGrid title="Now Playing" movie="the-tasty-tour" />
    </section>
  );
}
