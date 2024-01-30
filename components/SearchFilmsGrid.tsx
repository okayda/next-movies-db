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

const intialPage: number = 1;

export default function SearchFilmsGrid({
  filmName,
  asyncFunc,
}: {
  filmName: string;
  asyncFunc: (filmName: any, currPage: any) => void;
}) {
  const searchParams = useSearchParams();

  const currPage = Number(searchParams.get("page"));

  const { data, isLoading }: any = useQuery({
    queryKey: [filmName, currPage],
    queryFn: () => asyncFunc(filmName, currPage),
  });

  const totalPages = data?.totalPages;

  const isMovie = data?.isMovie;

  // Movie | TV series
  const typeFilm = data?.typeFilm;

  /* <h2>Found 21 results for "Movie Name"</h2> */

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
        <>
          <div className="grid grid-cols-2 gap-8 pb-[60px] pt-6 xs:grid-cols-3 xl:pt-0 xxl:grid-cols-4">
            {data?.content.map((film: any, i: number) => {
              return (
                <Link
                  href={isMovie ? `/movie/${film.id}` : `/series/${film.id}`}
                  key={film.id}
                  // className="shadow-box overflow-hidden rounded-md"
                  className="overflow-hidden rounded-md"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="relative overflow-hidden lg:h-[160px]">
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

                    <div className="text-white">
                      <div className="flex items-center gap-2">
                        <span>{film.releaseDate}</span>
                        <span>{film.typeFilm}</span>
                      </div>
                      <h2>{film.title}</h2>
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
                  href={`/search/films/${filmName}?page=${previousPage()}`}
                  className={clsx({
                    "pointer-events-none": intialPage === currPage,
                  })}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href={`/search/films/${filmName}?page=${previousPage()}`}
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
                    href={`/search/films/${filmName}?page=${currPage}`}
                    isActive
                  >
                    {currPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              {currPage < totalPages && currPage !== undefined && (
                <PaginationItem>
                  <PaginationLink
                    href={`/search/films/${filmName}?page=${nextPage()}`}
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
                  href={`/search/films/${filmName}?page=${nextPage()}`}
                  className={clsx({
                    "pointer-events-none": totalPages === currPage,
                  })}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
}
