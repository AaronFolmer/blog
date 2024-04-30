import Link from "next/link";

export default function Hobbies() {
  return (
    <main className="h-screen">
      <div className="mb-5">
        {/* <!-- ===== Content Area Start ===== --> */}
        {/* <!-- ===== Main Content Start ===== --> */}
        <div className="flex flex-wrap py-5">
          <Link href="/">
            <h2 className="text-subtitle-white dark:text-subtitle-dark">
              Topics
            </h2>
          </Link>
          <h2 className="text-subtitle-white dark:text-subtitle-dark mx-3">
            /
          </h2>
          <h2 className="text-title-white dark:text-title-dark">Hobbies</h2>
        </div>
        <div>
          <div className="text-subtitle-white dark:text-subtitle-dark">
            <h1 className="text-title-white dark:text-title-dark">
              My off-time hobbies
            </h1>
            <p className="py-3">
              Basically my hobbies involves all about learning more about my{" "}
              <Link
                href="/home/topics/learning"
                className="text-title-white dark:text-title-dark underline underline-offset-4"
              >
                coding skills
              </Link>
              , playing games, hangout with friends, read books, and sometimes
              watch series.
            </p>
          </div>
        </div>

        <section className="flex flex-col">
          <div className="text-subtitle-white dark:text-subtitle-dark">
            <p>
              Two of my favorite games of all time is Cyberpunk 2077 and
              Bloodborne ( simply because I love the lore, the ambience and
              environment of gothic and cyberpunk )
            </p>
          </div>
        </section>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
      <hr />
    </main>
  );
}
