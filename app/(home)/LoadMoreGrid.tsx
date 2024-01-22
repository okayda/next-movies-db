"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import fetchFilmGrid from "@/app/(home)/fetchFilmGrid";
import Spinner from "@/components/Spinner";

const homePageGridSection = 6;

export default function LoadMoreGrid() {
  const [page, setPage] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  const [data, setData] = useState<any[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchGridData = async () => {
      if (inView && page <= homePageGridSection && !fetching) {
        try {
          setFetching(true);

          const movieGrid = await fetchFilmGrid(page);
          setData((prevData) => [...prevData, movieGrid]);

          setPage((prev) => (prev += 1));
        } catch (error) {
          console.error("Fetch grid movie: ", error);
        } finally {
          setFetching(false);
        }
      }
    };

    fetchGridData();
  }, [inView, page]);

  return (
    <>
      {data}

      {/* Only for footer top space */}
      {page === homePageGridSection + 1 && (
        <div className="pt-14 sm:pt-20">&nbsp;</div>
      )}

      {page <= homePageGridSection && (
        <section>
          <div className="flex items-center justify-center py-8" ref={ref}>
            <Spinner />
          </div>

          {/* Only for footer top space */}
          <div className="pt-4">&nbsp;</div>
        </section>
      )}
    </>
  );
}
