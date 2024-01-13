import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QueryProvider from "@/lib/tanstack-query/QueryProvider";
import CardsGrid from "../components/CardsGrid";
import SearchBar from "@/components/SearchBar";

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
      <body className={`${outfit.className} relative antialiased`}>
        <div className="mx-auto max-w-xxl px-3 py-6 md:px-6">
          <Nav />

          <SearchBar placeholder="Search for movies or TV series" />

          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
