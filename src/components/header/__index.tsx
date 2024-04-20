import Link from "next/link";

export function Header() {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between py-10">
        <h1>
          <Link href="/home/" className="text-title">
            f/olmer
          </Link>
        </h1>
        <div>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link href="/home/about" className="text-subtitle  text-[14pt]">
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
          </ul>
        </div>
      </div>
    </section>
  );
}
