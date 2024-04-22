"use client";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [dark, setDark] = useState(document.body.classList.contains("dark"));
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between py-10">
        <h1>
          <Link href="/home/" className=" text-title-200 dark:text-title-100">
            f/olmer
          </Link>
        </h1>
        <div>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link href="/home/about" className="text-subtitle text-[14pt]">
                About
              </Link>
            </li>
            <li>
              <div className="h-full border-l-[1px] border-subtitle" />
            </li>
            <li>
              <Link href="/home/now" className="text-subtitle  text-[14pt]">
                Now
              </Link>
            </li>
            <li>
              <div className="h-full border-l-[1px] border-subtitle" />
            </li>
            <li className="self-center">
              <div
                onClick={() => {
                  if (dark) {
                    document.body.classList.remove("dark");
                    setDark(false);
                  } else {
                    document.body.classList.add("dark");
                    setDark(true);
                  }
                }}
                className="border-2 border-subtitle rounded-full p-[2px] w-16"
              >
                {dark ? (
                  <motion.div animate={{ x: 0 }}>
                    <Sun size={18} className="cursor-pointer dark:text-title-100" />
                  </motion.div>
                ) : (
                  <motion.div animate={{ x: 35 }}>
                    <Moon size={18} className="cursor-pointer text-subtitle" />
                  </motion.div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
