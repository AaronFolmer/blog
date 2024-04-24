import { Circle } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

interface ContentProps {
  seeMore?: ReactNode;
  subtitle?: string;
  time?: string;
  title?: string;
  text?: string;
  link: string;
  date?: string;
}

export function Content(props: ContentProps): JSX.Element {
  return (
    <div className="w-full">
      <div className="py-5">
        <h2 className="text-subtitle-white dark:text-subtitle-dark">
          {props.subtitle}
        </h2>
      </div>
      <h1 className="text-title-white dark:text-title-dark w-fit hover:text-[#7ce172] dark:hover:text-[#ec41b5] hover:underline underline-offset-4">
        <Link href={props.link}>{props.title}</Link>
      </h1>
      <div className="flex flex-wrap items-center gap-3 py-3">
        <p className="text-subtitle-white dark:text-subtitle-dark">
          {props.date}
        </p>
        <Circle size={10} className="text-subtitle-white dark:text-subtitle-dark" />
        <p className="text-subtitle-white dark:text-subtitle-dark">
          {props.time}
        </p>
      </div>
      <p className="text-subtitle-white dark:text-subtitle-dark">
        {props.text}
        {props.seeMore}
      </p>
    </div>
  );
}
