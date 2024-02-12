import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QueryProvider from "@/lib/tanstack-query/QueryProvider";
import SearchBar from "@/components/SearchBar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Next Movies DB",
  description: "Trending Movies using TMDB APIs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <div className="mx-auto max-w-xxl px-3 py-6 md:px-6">
          <Nav />

          <SearchBar placeholder="Search for movies or TV series" />

          <main>
            <QueryProvider>{children}</QueryProvider>
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
