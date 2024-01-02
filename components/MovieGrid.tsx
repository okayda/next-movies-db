import Link from "next/link";
import Image from "next/image";

export default function MovieGrid({
  title = "Anything",
  movie = null,
}: {
  title: string;
  movie: string | null;
}) {
  return (
    <div className="pt-6 sm:pt-10 md:pt-12 lg:pt-16">
      <div className="flex items-center justify-between pb-2 md:pb-5">
        <div className="flex items-center gap-2 tracking-wider text-white">
          <h2 className="text-xl md:text-[32px]">{title}</h2>
          <span className="rounded-md border border-white px-2 text-[10px] uppercase">
            Movie
          </span>
        </div>

        <Link href="/" className="text-xs uppercase text-[#5A698F] md:text-sm">
          see more
        </Link>
      </div>

      <div className="xxl:grid-cols-4 grid grid-cols-2 gap-4 xs:grid-cols-3">
        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt="Movie"
          width={160}
          height={100}
          className="h-full w-full rounded-md object-fill"
        />

        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt="Movie"
          width={160}
          height={100}
          className="h-full w-full rounded-md object-fill"
        />

        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt=""
          width={160}
          height={100}
          className="h-full w-full rounded-md object-fill"
        />

        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt="Movie"
          width={160}
          height={100}
          className="h-full w-full rounded-md object-fill"
        />

        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt=""
          width={160}
          height={100}
          className="xxl:col-span-2 xxl:h-[240px] h-full w-full rounded-md object-fill"
        />

        <Image
          src={`/assets/thumbnails/${movie}/regular/medium.jpg`}
          alt="Movie"
          width={160}
          height={100}
          className="xxl:col-span-2 xxl:h-[240px] h-full w-full rounded-md object-fill"
        />
      </div>
    </div>
  );
}
