"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import { useQuery } from "@tanstack/react-query";
import { fetchTargetMovieGenre } from "@/server/actions/genre-actions";
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

export default function GenreFimsGrid({
  genreName,
  isMovie = true,
}: {
  genreName: string;
  isMovie?: boolean;
}) {
  const searchParams = useSearchParams();

  const currPage = Number(searchParams.get("page"));

  const { data, isLoading } = useQuery({
    queryKey: [genreName, currPage],
    queryFn: () => fetchTargetMovieGenre(genreName, currPage),
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
        <>
          <div className="grid grid-cols-2 gap-3 pb-[60px] xs:grid-cols-3 xxl:grid-cols-4">
            {data?.content.map((movie: any, i: number) => {
              return (
                <Link
                  href={isMovie ? `/movie/${movie.id}` : `/series/${movie.id}`}
                  key={movie.id}
                  className="shadow-box h-full overflow-hidden rounded-md lg:h-[160px]"
                >
                  <Image
                    src={movie.img}
                    alt={movie.id}
                    width={540}
                    height={200}
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    placeholder="blur"
                    blurDataURL={data?.blurImgs[i]}
                  />
                </Link>
              );
            })}
          </div>

          <Pagination className="w-full text-[#f1f1f1]">
            <PaginationContent>
              <PaginationItem className="hidden xxs:block">
                <PaginationPrevious
                  href={`/movie/genre/${genreName}?page=${previousPage()}`}
                  className={clsx({
                    "pointer-events-none": intialPage === currPage,
                  })}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href={`/movie/genre/${genreName}?page=${previousPage()}`}
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
                    href={`/movie/genre/${genreName}?page=${currPage}`}
                    isActive
                  >
                    {currPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              {currPage <= totalPages && currPage !== undefined && (
                <PaginationItem>
                  <PaginationLink
                    href={`/movie/genre/${genreName}?page=${nextPage()}`}
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
                  href={`/movie/genre/${genreName}?page=${nextPage()}`}
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
