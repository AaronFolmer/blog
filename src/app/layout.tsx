// components
import { Header } from "@/components/header/__index";
/* import { Footer } from "@/components/footer/__index"; */

import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-10 m-auto lg:w-2/5 xl:w-2/2 sm:w-full">
        <header>
          {/* Header */}
          <Header />
        </header>
        {children}
        <footer className="mt-20">
          {/* <Footer /> */}
        </footer>
      </body>
    </html>
  );
}
