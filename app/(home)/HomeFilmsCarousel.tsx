"use client";

import Link from "next/link";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import clsx from "clsx";
import FadeDiv from "@/components/FadeDiv";
import { FilmBlur } from "@/lib/type";

const MOVIE_ICON = "/assets/gray-movies.svg";

const TV_ICON = "/assets/gray-series.svg";

export default function HomeFilmsCarousel({
  data,
  isMovie = true,
}: {
  data: { content: FilmBlur[] } | undefined;
  isMovie?: boolean;
}) {
  return (
    <section>
      <div className="pt-6 md:pt-10">
        <div className="flex items-center justify-between pb-4 md:pb-6">
          <div className="flex gap-2 tracking-wider text-white">
            <h2 className="text-xl font-light text-[#f1f1f1] md:text-[32px]">
              Trending
            </h2>
            <span
              className={clsx(
                "self-end rounded-md border border-white px-2 py-[2px] text-[10px] uppercase",
                { "bg-white font-medium text-black": !isMovie },
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

        <div className="sm:px-14">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent className="-ml-1 w-full">
              {data?.content.map((film: FilmBlur, i: number) => {
                const filmIcon = film?.isMovie ? MOVIE_ICON : TV_ICON;

                const isMovie = film.isMovie;

                return (
                  <CarouselItem
                    key={film.id}
                    className="relative h-[180px] pl-1 xxs:h-[220px] xs:h-[300px] md:h-[360px] xl:h-[300px] xl:basis-1/2 "
                  >
                    <FadeDiv index={i} duration={0.6} className="h-full ">
                      <div className="h-full p-1">
                        <Card className="shadow-carousel relative h-full overflow-hidden rounded-md border-none bg-[#1c1c1c]">
                          <Link
                            href={
                              isMovie
                                ? `/movie/${film.id}`
                                : `/series/${film.id}`
                            }
                          >
                            <Image
                              src={film.img}
                              alt={film.title || "Movie"}
                              width={640}
                              height={280}
                              className="h-full w-full object-cover"
                              {...(film.hasBlur && {
                                placeholder: "blur",
                                blurDataURL: film.blurredImg,
                              })}
                            />
                            <div className="absolute bottom-0 left-0 h-auto w-full bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-transparent">
                              <div className="px-4 pb-3 pt-9 font-light text-white">
                                <div className="flex items-center gap-2 text-base ">
                                  <span>{film.releaseDate}</span>
                                  •
                                  <Image
                                    src={filmIcon}
                                    alt=""
                                    width={12}
                                    height={12}
                                  />
                                  <span>{film.typeFilm}</span>
                                </div>
                                <h3 className="text-[28px] font-medium tracking-wide">
                                  {film.title}
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Card>
                      </div>
                    </FadeDiv>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="hidden sm:block">
              <CarouselPrevious className="shadow-nav bg-[#1c1c1c] text-[#f1f1f1] hover:bg-[#2c2c2c] hover:text-[#f1f1f1]" />
              <CarouselNext className="shadow-nav bg-[#1c1c1c] text-[#f1f1f1] hover:bg-[#2c2c2c] hover:text-[#f1f1f1]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
