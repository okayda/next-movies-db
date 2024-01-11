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
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function MovieCarousel({
  data,
  isMovie = true,
}: {
  data: any;
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
            <CarouselContent className="-ml-1 w-full">
              {data.content.map((movie: any, i: number) => {
                return (
                  <CarouselItem
                    key={movie.id}
                    className="h-[180px]  pl-1 xxs:h-[200px] xs:h-[240px] sm:h-[300px] md:h-[190px] md:basis-1/2 xl:basis-1/3"
                  >
                    <motion.div
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        delay: i * 0.15,
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
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
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="hidden xs:block">
              <CarouselPrevious className="shadow-light bg-[#1c1c1c] text-[#f1f1f1] hover:bg-[#2c2c2c] hover:text-[#f1f1f1]" />
              <CarouselNext className="shadow-light bg-[#1c1c1c] text-[#f1f1f1] hover:bg-[#2c2c2c] hover:text-[#f1f1f1]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
