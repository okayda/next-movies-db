"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import Spinner from "./Spinner";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { FilmBlur } from "@/lib/type";

const intialPage: number = 1;

const MOVIE_ICON = "/assets/gray-movies.svg";

const TV_ICON = "/assets/gray-series.svg";

export default function FilmsGrid({
  isFor,
  genreId,
  asyncFunc,
}: {
  isFor: string;
  genreId: string;
  asyncFunc: (genreId: string, currPage: number) => void;
}) {
  const searchParams = useSearchParams();

  const genreName = searchParams.get("name") || "None";
  const currPage = Number(searchParams.get("page"));

  const { data, isLoading }: any = useQuery({
    queryKey: [genreId, currPage],
    queryFn: () => asyncFunc(genreId, currPage),
  });

  const totalPages = data?.totalPages;

  const previousPage = function () {
    if (intialPage < currPage) return currPage - 1;

    return currPage;
  };

  const nextPage = function () {
    if (currPage >= intialPage) return currPage + 1;

    return currPage;
  };

  return (
    <div className="pb-[100px]">
      {isLoading ? (
        <div className="flex items-center justify-center pt-[160px]">
          <Spinner />
        </div>
      ) : (
        <div>
          <h2 className="mb-6 text-[20px] font-light text-[#f1f1f1]  md:mb-8 md:text-[32px]">
            {genreName.charAt(0).toUpperCase() + genreName.slice(1)}
          </h2>

          <div className="grid grid-cols-2 gap-3 pb-[60px] xs:grid-cols-3 sm:gap-7 xl:pt-0 xll:grid-cols-4">
            {data?.content.map((film: FilmBlur) => {
              const filmIcon = film?.isMovie ? MOVIE_ICON : TV_ICON;

              const isMovie = film.isMovie;

              return (
                <Link
                  href={isMovie ? `/movie/${film.id}` : `/series/${film.id}`}
                  key={film.id}
                >
                  <div className="flex flex-col justify-between">
                    <div className="shadow-box relative overflow-hidden rounded-md lg:h-[160px]">
                      <Image
                        src={film.img}
                        alt={film.title}
                        width={400}
                        height={225}
                        className={clsx("object-cover text-[#f1f1f1]", {
                          "transition-transform duration-300 hover:scale-110 lg:h-[160px]":
                            film.hasBlur,
                        })}
                        {...(film.hasBlur && {
                          placeholder: "blur",
                          blurDataURL: film.blurredImg,
                        })}
                      />
                    </div>

                    <div className="items-center  py-3 text-[#f1f1f1]">
                      <div className="flex items-center gap-2 text-[13px] text-[#c3c3c6]">
                        <span>{film.releaseDate}</span>
                        •
                        <Image src={filmIcon} alt="" width={12} height={12} />
                        <span>{film.typeFilm}</span>
                      </div>
                      <h3 className="text-lg">
                        {film.title.length >= 20
                          ? film.title.substring(0, 20) + "..."
                          : film.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <Pagination className="w-full text-[#f1f1f1]">
            <PaginationContent>
              <PaginationItem className="hidden xxs:block">
                <PaginationPrevious
                  href={`/${isFor}/genre/${genreId}?name=${genreName}&page=${previousPage()}`}
                  className={clsx({
                    "pointer-events-none": intialPage === currPage,
                  })}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href={`/${isFor}/genre/${genreId}?name=${genreName}&page=${previousPage()}`}
                  className={clsx({
                    "pointer-events-none text-[#0F172A]":
                      intialPage === currPage,
                  })}
                  isActive={intialPage === currPage}
                >
                  {previousPage()}
                </PaginationLink>
              </PaginationItem>

              {currPage > intialPage && (
                <PaginationItem>
                  <PaginationLink
                    className="pointer-events-none text-[#0F172A]"
                    href={`/${isFor}/genre/${genreId}?name=${genreName}&page=${currPage}`}
                    isActive
                  >
                    {currPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              {currPage <= totalPages && currPage !== undefined && (
                <PaginationItem>
                  <PaginationLink
                    href={`/${isFor}/genre/${genreId}?name=${genreName}&page=${nextPage()}`}
                    isActive={currPage >= totalPages}
                  >
                    {nextPage()}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <div className="flex items-center">
                  <PaginationEllipsis />
                  {totalPages}
                </div>
              </PaginationItem>

              <PaginationItem className="hidden xxs:block">
                <PaginationNext
                  href={`/${isFor}/genre/${genreId}?name=${genreName}&page=${nextPage()}`}
                  className={clsx({
                    "pointer-events-none": totalPages === currPage,
                  })}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
