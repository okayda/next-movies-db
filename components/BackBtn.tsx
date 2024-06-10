"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BackBtn() {
  const router = useRouter();

  return (
    <Button
      className="bg-yellow-500  text-[13px] font-medium tracking-wide text-gray-900 hover:bg-yellow-400 md:text-base"
      onClick={router.back}
    >
      Back
    </Button>
  );
}
