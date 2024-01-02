import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
        <div className="mx-auto max-w-xxl px-4 py-6 md:px-6">
          <Nav />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
