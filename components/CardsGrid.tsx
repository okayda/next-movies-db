"use client";

import Link from "next/link";
import FadeDiv from "@/components/FadeDiv";

export default function CardsGrid({ data }: { data: any }) {
  return (
    <div className="mx-auto max-w-[1100px] pb-[120px] pt-8 xl:pt-4">
      <div className="grid grid-cols-1 gap-3 xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((genre: any, i: number) => (
          <Link key={genre.id} href="/">
            <FadeDiv
              index={i}
              duration={0.5}
              className="genre-card relative h-[240px] rounded-lg border border-[#444] before:h-[600px]  before:w-[600px] xxs:h-[150px] xxs:before:h-[340px] xxs:before:w-[340px] s:before:h-[400px] s:before:w-[400px] xs:before:h-[380px] xs:before:w-[380px] sm:h-[180px] md:h-[200px]"
            >
              <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl text-[#f1f1f1]">
                {genre.name}
              </h2>
            </FadeDiv>
          </Link>
        ))}
      </div>
    </div>
  );
}
