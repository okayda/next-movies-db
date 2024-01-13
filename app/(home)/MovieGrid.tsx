import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function MovieGrid({
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
              <motion.div
                key={movie.id}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: i * 0.25,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                viewport={{ amount: 0 }}
                className={clsx("h-full w-full overflow-hidden rounded-md ", {
                  "xxl:h-[160px]": i < 4,
                  "xxl:col-span-2 xxl:h-[320px]": i >= 4,
                })}
              >
                <Image
                  src={movie.img}
                  alt={movie.title}
                  width={854}
                  height={480}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                  // placeholder="blur"
                  // blurDataURL={data.blurImgs[i]}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
