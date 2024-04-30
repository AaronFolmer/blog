import Link from "next/link";

export default function Books() {
  return (
    <main className="h-screen">
      {/* <!-- ===== Content Area Start ===== --> */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="flex flex-wrap py-5">
            <Link href="/">
              <h2 className="text-subtitle-white dark:text-subtitle-dark">
                Topics
              </h2>
            </Link>
            <h2 className="text-subtitle-white dark:text-subtitle-dark mx-3">
              /
            </h2>
            <h2 className="text-title-white dark:text-title-dark">Books</h2>
          </div>
          <div>
            <div className="text-subtitle-white dark:text-subtitle-dark">
              <h1 className="text-title-white dark:text-title-dark">
                Books that im reading at this moment
              </h1>
              <p className="py-3">
                Some of the themes that I most enjoy to read is specially
                cyberpunk themes, and tech. Since I was a kid ive always liked
                this thematic, because of the super-powers the technology will
                bring to us, for example{" "}
                <Link
                  href={"https://esperbionics.com/ecosystem/"}
                  className="text-title-white dark:text-title-dark underline underline-offset-4"
                >
                  cyber-prosthetics.
                </Link>
              </p>
            </div>
          </div>

          <section className="py-5">
            <div className="flex flex-wrap gap-5">
              <div className="w-1/2">
                <ul className="text-subtitle-white dark:text-subtitle-dark">
                  <li>
                    <p>The World of Cyberpunk 2077 by</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-title-white dark:text-title-dark">
                  <li>
                    <p>#Marcin Batylda</p>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex flex-wrap gap-5">
              <div className="w-1/2">
                <ul className="text-subtitle-white dark:text-subtitle-dark">
                  <li>
                    <p>Neuromancer by</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-title-white dark:text-title-dark">
                  <li>
                    <p>#William Gibson</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
      <hr />
    </main>
  );
}
