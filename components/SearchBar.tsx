export default function SearchBar({
  placeholder = "Search",
}: {
  placeholder: string;
}) {
  return (
    <section>
      <div className="w-full">
        <div className="flex items-center gap-3 md:gap-4 xl:mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6 self-start text-white md:h-8 md:w-8"
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
            className="w-full border-b border-transparent bg-transparent pb-2 text-[15px] font-light tracking-wider text-[#f1f1f1] focus:border-b focus:border-[#5c5c5c] focus:outline-none md:text-xl lg:text-2xl"
          />

          <button className="shadow-light rounded-md bg-[#1c1c1c] px-3 py-2 text-[13px] tracking-wide text-white transition-colors hover:bg-[#2c2c2c] hover:text-[#f1f1f1] md:text-base">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
