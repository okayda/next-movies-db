import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asean Drama",
  description: "Trending to the Asean Dramas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
