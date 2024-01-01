export default function SearchBar({
  placeholder = "Search",
}: {
  placeholder: string;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 md:gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-6 w-6 text-white md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 22 22"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          placeholder={placeholder}
          className="w-full border-b border-[#5A698F] bg-transparent pb-2 text-[15px] tracking-wider text-white focus:outline-none md:text-xl lg:text-2xl"
        />

        <button className="rounded-md bg-[#5A698F] px-3 py-2 text-[13px] tracking-wider text-white md:text-base">
          Search
        </button>
      </div>
    </div>
  );
}
