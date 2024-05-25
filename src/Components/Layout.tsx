"use client";

import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: any) {
  return (
    <div
      className={`${inter.className} min-h-screen bg-deepDark text-lightGray`}
    >
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
