import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export function ListNow() {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-5 py-5">
        <ul>
          <div className="py-5">
            <h2 className="text-title">· Frontend</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle">Javascript,</p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle">NextJS,</p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle">Axios,</p>
          </li>
          <div className="py-5">
            <h2 className="text-title">· Backend</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle">Socket.io,</p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle">Express,</p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle">Node,</p>
          </li>
          <div className="py-5">
            <h2 className="text-title">· Cloud Server</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle">Google Cloud Services,</p>
          </li>
          <div className="py-5">
            <h2 className="text-title">· Tools</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle">Git and CI/CD pipelines,</p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle">Visual Studio Code,</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function ListAbout() {
  return (
    <section>
      <div className="py-5">
        <h2 className="text-subtitle">{"Social"}</h2>
      </div>
      <h1 className="text-title w-fit hover:text-[#ec41b5] hover:underline underline-offset-4">
        <Link href="/home/about/">Where to find me</Link>
      </h1>
      <div className="flex flex-wrap items-center gap-5 ml-5 py-5">
        <div className="flex flex-col items-center">
          <ul>
            <li className="flex items-center gap-2">
              <p className="text-subtitle">· Twitter:</p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle">· Github:</p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle">· Linkedin:</p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle">· BlueSky:</p>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li className="flex items-center gap-1">
              <p className="text-white">
                <Link
                  href={"https://twitter.com/FolmerAaron"}
                  className="underline underline-offset-4"
                >
                  @FolmerAaron
                </Link>
              </p>
              <MoveUpRightIcon size={15} color="#A9A9A9" />
            </li>
            <li className="flex items-center gap-1">
              <p className="text-white">
                <Link
                  href={"https://github.com/AaronFolmer"}
                  className="underline underline-offset-4"
                >
                  @aaronfolmer
                </Link>
              </p>
              <MoveUpRightIcon size={15} color="#A9A9A9" />
            </li>
            <li className="flex items-center gap-1">
              <p className="text-white">
                <Link
                  href={"https://www.linkedin.com/in/aaronfolmer/"}
                  className="underline underline-offset-4"
                >
                  @aaron-folmer
                </Link>
              </p>
              <MoveUpRightIcon size={15} color="#A9A9A9" />
            </li>
            <li className="flex items-center gap-1">
              <p className="text-white">
                <Link
                  href={"https://bsky.app/profile/aaronfolmer.bsky.social"}
                  className="underline underline-offset-4"
                >
                  @aaronfolmer
                </Link>
              </p>
              <MoveUpRightIcon size={15} color="#A9A9A9" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
