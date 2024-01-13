import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-10 w-full">
      <div className="relative flex flex-col items-center gap-3 p-3 py-5 md:p-6">
        <span className="text-xs  font-bold tracking-wider text-[#5A698F] xs:text-sm">
          Powered by
        </span>

        <Image
          src="/assets/icon-tmdb-long.svg"
          alt="TMDB"
          width={150}
          height={20}
          className="mx-auto"
        />
      </div>
    </footer>
  );
}
