"use client";
import { Header } from "@/components/navbar/__index";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background-200 dark:bg-background-100 h-screen">
      <div className="px-10 m-auto lg:w-2/5 xl:w-2/2 sm:w-full">
        <header>
          <Header />
        </header>
        <div>{children}</div>
      </div>
    </main>
  );
}
