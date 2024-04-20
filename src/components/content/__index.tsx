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
        <h2 className="text-subtitle">{props.subtitle}</h2>
      </div>
      <h1 className="text-title w-fit hover:text-[#ec41b5] hover:underline underline-offset-4">
        <Link href={props.link}>{props.title}</Link>
      </h1>
      <div className="flex flex-wrap items-center gap-3 py-3">
        <p className="text-subtitle">{props.date}</p>
        <Circle size={10} color="#A9A9A9" />
        <p className="text-subtitle">{props.time}</p>
      </div>
      <p className="text-subtitle">
        {props.text}
        {props.seeMore}
      </p>
    </div>
  );
}
