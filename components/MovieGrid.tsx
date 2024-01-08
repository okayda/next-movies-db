"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import clsx from "clsx";

export default function MovieGrid({
  title = "Anything",
  queryKey,
  queryFn,
  movieData,
}: {
  title: string;
  queryKey: string;
  queryFn: any;
  movieData: any;
}) {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    initialData: movieData,
  });

  return (
    <section>
      <div className="pt-6 sm:pt-10 md:pt-12 lg:pt-16">
        <div className="flex items-center justify-between pb-2 md:pb-5">
          <div className="flex items-center gap-2 tracking-wider text-white">
            <h2 className="text-xl md:text-[32px]">{title}</h2>
            <span className="rounded-md border border-white px-2 text-[10px] uppercase">
              Movie
            </span>
          </div>

          <Link
            href="/"
            className="text-xs uppercase text-[#5A698F] md:text-sm"
          >
            see more
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 xs:grid-cols-3 xxl:grid-cols-4">
          {data.content.map((movie: any, i: any) => {
            return (
              <Image
                key={movie.id}
                src={movie.img}
                alt={movie.title}
                width={854}
                height={480}
                className={clsx("object-fit h-full w-full rounded-md", {
                  "xxl:col-span-2 xxl:h-[320px]": i >= 4,
                })}
                placeholder="blur"
                blurDataURL={data.blurImgs[i]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
