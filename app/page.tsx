import MovieCarousel from "@/components/MovieCarousel";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="mx-auto max-w-xxl px-4  py-6 md:px-6">
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel />
    </div>
  );
}
