import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-2 pt-6 text-center">
        <span className="text-xs font-bold tracking-wider text-[#5A698F] xs:text-sm">
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
