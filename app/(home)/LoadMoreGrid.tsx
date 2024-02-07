"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
import fetchHomeFilmsGrid from "@/app/(home)/fetchHomeFilmsGrid";
import Spinner from "@/components/Spinner";

const homePageGridSection = 6;

export default function LoadMoreGrid() {
  // Page state
  const [page, setPage] = useState(0);

  // Loading spinner state
  const ref = useRef(null);
  const inView = useInView(ref);

  // Getting state
  const [data, setData] = useState<ReactNode[]>([]);
  const [fetching, setFetching] = useState(false);

  // Execution state
  useEffect(() => {
    const fetchGridData = async () => {
      if (inView && page <= homePageGridSection && !fetching) {
        try {
          setFetching(true);

          const movieGrid = await fetchHomeFilmsGrid(page);
          setData((prevData) => [...prevData, movieGrid]);

          setPage((prev) => (prev += 1));
        } catch (error) {
          console.error("Fetch grid film: ", error);
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
