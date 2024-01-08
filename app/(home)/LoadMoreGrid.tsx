"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchLoadGrid } from "@/app/(home)/fetchGrid";

let page = 0;

export default function LoadMoreGrid() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchGridData = async () => {
      if (inView && page <= 3 && !fetching) {
        try {
          setFetching(true);

          const movieGrid = await fetchLoadGrid(page);
          setData((prevData) => [...prevData, movieGrid]);

          ++page;
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

      {page <= 3 && (
        <section>
          <div className="flex w-full items-center justify-center py-24">
            <Image
              src="/assets/spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <div ref={ref}>&nbsp;</div>
        </section>
      )}
    </>
  );
}
