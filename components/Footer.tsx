import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-10 w-full">
      <div className="relative flex flex-col items-center gap-5 p-3 py-3  xxs:gap-3 xxs:py-5 md:p-6">
        <span className="text-xs  font-bold tracking-wider text-[#5A698F] xs:text-sm">
          Powered by
        </span>

        <div className="flex flex-col items-center gap-3 xxs:flex-row">
          <Image
            src="/assets/icon-tmdb-long.svg"
            alt="TMDB"
            width={150}
            height={20}
            className="mx-auto"
          />
          <span className="bg-gradient-to-r from-purple-200 to-cyan-500 bg-clip-text text-xl text-transparent">
            Jhon Que&ntilde;ano
          </span>
        </div>
      </div>
    </footer>
  );
}
