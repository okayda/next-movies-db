import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import FadeDiv from "@/components/FadeDiv";

export default function FilmGrid({
  title = "Anything",
  isMovie = true,
  data,
}: {
  title: string;
  isMovie?: boolean;
  data: any;
}) {
  return (
    <section>
      <div className="pt-6 sm:pt-10 md:pt-12 lg:pt-16">
        <div className="flex items-center justify-between pb-4 md:pb-6">
          <div className="flex gap-2 tracking-wider text-white">
            <h2 className="text-xl font-light text-[#f1f1f1] md:text-[32px]">
              {title}
            </h2>
            <span
              className={clsx(
                "self-end rounded-md border border-white px-2 py-[2px] text-[10px] uppercase",
                { "bg-white text-black": !isMovie },
              )}
            >
              {isMovie ? "Movie" : "tv series"}
            </span>
          </div>

          <Link
            href="/"
            className="text-xs uppercase tracking-wide text-[#c1c1c1] md:text-sm"
          >
            see more
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 xxl:grid-cols-4">
          {data.content.map((movie: any, i: number) => {
            return (
              <Link
                href={isMovie ? `/movie/${movie.id}` : `/series/${movie.id}`}
                key={movie.id}
                className={clsx("shadow-box overflow-hidden rounded-md", {
                  "xxl:h-[160px]": i < 4,
                  "xxl:col-span-2 xxl:h-[320px]": i >= 4,
                })}
              >
                <FadeDiv index={i} duration={0.5} className="h-full w-full">
                  <Image
                    src={movie.img}
                    alt={movie.title}
                    width={640}
                    height={280}
                    className="h-full w-full transform object-cover text-white transition-transform duration-300 hover:scale-110"
                    placeholder="blur"
                    blurDataURL={data.blurImgs[i]}
                  />
                </FadeDiv>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
