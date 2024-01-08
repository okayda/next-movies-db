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
import { useQuery } from "@tanstack/react-query";

export default function MovieCarousel({
  queryKey,
  queryFn,
  moviesData,
}: {
  queryKey: string;
  queryFn: any;
  moviesData: any;
}) {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    initialData: moviesData,
  });

  return (
    <section>
      <div className="pt-6 md:pt-10">
        <div className="flex items-center justify-between pb-2 md:pb-5">
          <div className="flex items-center gap-2 tracking-wider text-white">
            <h2 className="text-xl md:text-[32px]">Trending</h2>
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

        <div className="xs:px-14">
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
            <CarouselContent className="-ml-1 w-full ">
              {data.content.map((movie: any, i: number) => {
                return (
                  <CarouselItem
                    key={movie.id}
                    className="h-[180px] pl-1 sm:h-[250px] md:h-[200px] md:basis-1/2 xl:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <Card className="bg-red-[#5A698F] h-full overflow-hidden rounded-md border-none">
                        <Image
                          src={movie.img}
                          alt={movie.title || "Movie"}
                          width={320}
                          height={190}
                          className="h-full w-full"
                          placeholder="blur"
                          blurDataURL={data.blurImgs[i]}
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="hidden xs:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
