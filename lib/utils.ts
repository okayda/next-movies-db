import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Responsbile for bluring the URL Imgs using Base64 mechanism
export async function getBase64(imgUrl: any) {
  /*
  NEXT_PUBLIC_DOMAIN env variable represent the deployed web URL 
  and should be provided in the .env file after deployment
  */

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : process.env.NEXT_PUBLIC_DOMAIN;

  const base64str = await fetch(
    `${baseUrl}/_next/image?url=${imgUrl}&w=16&q=75`,
  ).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

export async function addBlurredUrls(imgs: any[]) {
  const base64Promises = imgs.map((imgUrl: string) => getBase64(imgUrl));

  const base64Results = Promise.all(base64Promises);

  return base64Results;
}
