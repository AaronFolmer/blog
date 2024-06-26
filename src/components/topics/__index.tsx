import Link from "next/link";

export function Topics() {
  return (
    <section>
      <div className="py-5">
        <h2 className="text-subtitle-white dark:text-subtitle-dark">Topics</h2>
      </div>
      <div>
        <div className="w-full">
          <h2 className="flex flex-wrap gap-2">
            <div>
              <Link
                href="/home/topics/books"
                className="text-title-white dark:text-title-dark underline underline-offset-4"
              >
                books
              </Link>
            </div>
            <div>
              <Link
                href="/home/topics/design"
                className=" text-title-white dark:text-title-dark underline underline-offset-4"
              >
                design
              </Link>
            </div>
            <div>
              <Link
                href="/home/topics/habits"
                className=" text-title-white dark:text-title-dark underline underline-offset-4"
              >
                habits
              </Link>
            </div>
            <div>
              <Link
                href="/home/topics/hobbies"
                className=" text-title-white dark:text-title-dark underline underline-offset-4"
              >
                hobbies
              </Link>
            </div>
            <div>
              <Link
                href="/home/topics/projects"
                className=" text-title-white dark:text-title-dark underline underline-offset-4"
              >
                projects
              </Link>
            </div>
            <div>
              <Link
                href="/home/topics/learning"
                className=" text-title-white dark:text-title-dark underline underline-offset-4"
              >
                learning
              </Link>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
}
