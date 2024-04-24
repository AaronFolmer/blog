import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export function ListNow() {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-5 py-5">
        <ul>
          <div className="py-5">
            <h2 className="text-title-white dark:text-title-dark">
              · Frontend
            </h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Javascript,
            </p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              NextJS,
            </p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Axios,
            </p>
          </li>
          <div className="py-5">
            <h2 className="text-title-white dark:text-title-dark">· Backend</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Socket.io,
            </p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Express,
            </p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">Node,</p>
          </li>
          <div className="py-5">
            <h2 className="text-title-white dark:text-title-dark">
              · Cloud Server
            </h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Google Cloud Services,
            </p>
          </li>
          <div className="py-5">
            <h2 className="text-title-white dark:text-title-dark">· Tools</h2>
          </div>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Git and CI/CD pipelines,
            </p>
          </li>
          <li className="ml-5">
            <p className="text-subtitle-white dark:text-subtitle-dark">
              Visual Studio Code,
            </p>
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
        <h2 className="text-subtitle-white dark:text-subtitle-dark">
          {"Social"}
        </h2>
      </div>
      <h1 className="text-title-white dark:text-title-dark w-fit hover:text-[#7ce172] dark:hover:text-[#ec41b5] hover:underline underline-offset-4">
        <Link href="/home/about/">Where to find me</Link>
      </h1>
      <div className="flex flex-wrap items-center gap-5 ml-5 py-5">
        <div className="flex flex-col items-center">
          <ul>
            <li className="flex items-center gap-2">
              <p className="text-subtitle-white dark:text-subtitle-dark">
                · Twitter:
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle-white dark:text-subtitle-dark">
                · Github:
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle-white dark:text-subtitle-dark">
                · Linkedin:
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-subtitle-white dark:text-subtitle-dark">
                · BlueSky:
              </p>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li className="flex items-center gap-1">
              <p className="text-title-white dark:text-title-dark">
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
              <p className="text-title-white dark:text-title-dark">
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
              <p className="text-title-white dark:text-title-dark">
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
              <p className="text-title-white dark:text-title-dark">
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
