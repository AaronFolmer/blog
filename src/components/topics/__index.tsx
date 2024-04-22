import Link from "next/link";

export function Topics() {
  return (
    <section>
      <div className="py-5">
        <h2 className="text-subtitle">Topics</h2>
      </div>
      <div>
        <div className="w-full">
          <h2 className="flex flex-wrap gap-2">
            <div>
              <Link
                href="/topics/books"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
              >
                books
              </Link>
            </div>
            <div>
              <Link
                href="/topics/design"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
              >
                design
              </Link>
            </div>
            <div>
              <Link
                href="/topics/habits"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
              >
                habits
              </Link>
            </div>
            <div>
              <Link
                href="/topics/hobbies"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
              >
                hobbies
              </Link>
            </div>
            <div>
              <Link
                href="/topics/projects"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
              >
                projects
              </Link>
            </div>
            <div>
              <Link
                href="/topics/learning"
                className="text-title-200 dark:text-title-100 underline underline-offset-4"
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
