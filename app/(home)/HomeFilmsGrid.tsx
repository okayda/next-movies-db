import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import FadeDiv from "@/components/FadeDiv";
import { FilmBlur } from "@/lib/type";

const MOVIE_ICON = "/assets/gray-movies.svg";

const TV_ICON = "/assets/gray-series.svg";

export default function HomeFilmsGrid({
  title = "Anything",
  isMovie = true,
  data,
}: {
  title: string;
  isMovie?: boolean;
  data: { content: FilmBlur[] };
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
            href={`/${isMovie ? "movie" : "series"}/${title
              .toLowerCase()
              .replace(/\s+/g, "")}?page=1`}
            className="border border-b border-transparent pb-1 text-xs uppercase tracking-wide text-[#c1c1c1] hover:border-b-[#c1c1c1]"
          >
            see more
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 xxl:grid-cols-4">
          {data?.content.map((film: FilmBlur, i: number) => {
            const filmIcon = film?.isMovie ? MOVIE_ICON : TV_ICON;

            const isMovie = film.isMovie;

            return (
              <Link
                href={isMovie ? `/movie/${film.id}` : `/series/${film.id}`}
                key={film.id}
                className={clsx({
                  "xxl:col-span-2 xxl:h-[320px]": i >= 4,
                })}
              >
                <FadeDiv
                  index={i}
                  duration={0.5}
                  className="flex flex-col justify-between"
                >
                  <div
                    className={clsx(
                      "shadow-box relative overflow-hidden rounded-md lg:h-[160px]",
                      {
                        "xxl:h-[320px]": i >= 4,
                      },
                    )}
                  >
                    <Image
                      src={film.img}
                      alt={film.title}
                      width={400}
                      height={225}
                      className={clsx(
                        "object-cover text-[#f1f1f1] lg:h-[160px]",
                        {
                          "transition-transform duration-300 hover:scale-110":
                            film.hasBlur,
                          "xxl:h-[320px] xxl:w-full": i >= 4,
                        },
                      )}
                      {...(film.hasBlur && {
                        placeholder: "blur",
                        blurDataURL: film.blurredImg,
                      })}
                    />

                    <div
                      className={clsx(
                        "absolute bottom-0 left-0 hidden h-auto w-full bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-transparent",
                        {
                          "xxl:block": i >= 4,
                        },
                      )}
                    >
                      <div className="px-4 pb-3 pt-9 font-light text-white">
                        <div className="flex items-center gap-2 text-base ">
                          <span>{film.releaseDate}</span>
                          •
                          <Image src={filmIcon} alt="" width={12} height={12} />
                          <span>{film.typeFilm}</span>
                        </div>
                        <h3 className="text-[28px] font-light tracking-wide">
                          {film.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className={clsx("items-center py-3 text-[#f1f1f1]", {
                      "xxl:hidden": i >= 4,
                    })}
                  >
                    <div className="flex items-center gap-2 text-[13px] text-[#c3c3c6]">
                      <span>{film.releaseDate}</span>
                      •
                      <Image src={filmIcon} alt="" width={12} height={12} />
                      <span>{film.typeFilm}</span>
                    </div>
                    <h3 className="text-lg">
                      {film.title.length >= 15
                        ? film.title.substring(0, 15) + "..."
                        : film.title}
                    </h3>
                  </div>
                </FadeDiv>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
