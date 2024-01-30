import Image from "next/image";
import Link from "next/link";

import "@smastrom/react-rating/style.css";
import { Rating as ReactRating, RoundedStar } from "@smastrom/react-rating";
import CardHover from "./CardHover";
import clsx from "clsx";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#fff",
  inactiveFillColor: "#888",
};

export default function FilmDetails({ film }: { film: any }) {
  return (
    <div className="mx-auto max-w-[530px] pb-[120px] pt-8 md:mx-0 md:flex md:max-w-none md:gap-8 lg:gap-16">
      <div>
        <div className="mx-auto h-[420px] min-h-[420px] w-[280px] min-w-[280px] flex-shrink-0 md:mx-0 md:h-[530px] md:min-h-[530px] md:w-[350px] md:min-w-[350px]">
          <CardHover>
            <Image
              src={film?.img}
              alt={film?.title}
              width={640}
              height={280}
              className="shadow-box mx-auto h-[420px] w-[280px] rounded-md object-cover md:mx-0 md:h-[530px] md:w-[350px]"
              placeholder="blur"
              blurDataURL={film?.imgBlur}
            />
          </CardHover>
        </div>

        <div className=" flex gap-2 pt-6  text-center text-sm">
          <Link
            href={film.homepage}
            target="_blank"
            className={clsx(
              "grow rounded-md border border-[#444] bg-[#141414] p-2 tracking-wider text-white transition-colors hover:bg-[#212121] hover:text-[#f1f1f1]",
              {
                "pointer-events-none": !film.homepage,
              },
            )}
          >
            {film.homepage ? "Page" : "Page: None"}
          </Link>

          <Link
            href={`https://www.imdb.com/title/${film.imdbId}`}
            target="_blank"
            className={clsx(
              "grow rounded-md border border-[#444] bg-[#141414] p-2 tracking-wider text-white transition-colors hover:bg-[#212121] hover:text-[#f1f1f1]",
              {
                "pointer-events-none": !film.imdbId,
              },
            )}
          >
            {film.imdbId ? "IMDB" : "IMDB: None"}
          </Link>
        </div>
      </div>
      <div>
        <div className="py-7 text-center md:pt-0 md:text-left">
          <h2 className="mb-1 text-3xl font-light">{film.title}</h2>

          <p className="mb-2 text-[13px] font-light text-[#888] md:text-sm">
            {film.tagline}
          </p>

          <span className="mb-2 block text-4xl">{film.stars}</span>

          <ReactRating
            className="mx-auto md:mx-0"
            style={{ maxWidth: 90 }}
            value={film?.stars}
            itemStyles={myStyles}
            readOnly={true}
          />
        </div>

        <div className="mb-6 flex justify-between text-sm text-[#f1f1f1]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#888]">Length</h3>
            <span>{film?.runtime}</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-[#888]">Language</h3>
            <span>{film?.language}</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-[#888]">Year</h3>
            <span>{film?.releaseDate}</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-[#888]">Status</h3>
            <span>{film?.status}</span>
          </div>
        </div>

        <div className="mb-8 text-[#f1f1f1]">
          <h3 className="mb-2 text-base font-medium tracking-wider">Genres</h3>

          <ul className="flex flex-wrap gap-2 text-xs">
            {film?.genres.map((genre: any) => (
              <li
                key={genre.id}
                className="rounded-md bg-[#f1f1f1] px-2 py-[1px] text-black"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 text-[#f1f1f1]">
          <h3 className="mb-2 tracking-wider">Synopsis</h3>

          <p className="font-light">{film?.overview}</p>
        </div>

        <div className="text-[#f1f1f1]">
          <h3 className="mb-3 tracking-wider">Top Casts</h3>

          <ul className="grid grid-cols-2 gap-4 text-sm">
            {film?.topCasts.map((cast: any, i: number) => (
              <li key={cast.id}>
                <div className="flex h-full items-center gap-2">
                  <Image
                    src={cast.img}
                    alt={cast.id}
                    width={50}
                    height={75}
                    className="rounded-md"
                    {...(cast.hasBlur && {
                      placeholder: "blur",
                      blurDataURL: cast.blurredImg,
                    })}
                  />
                  <div className="flex flex-col">
                    <span>{cast.character}</span>
                    <span className="text-[#888]">{cast.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
