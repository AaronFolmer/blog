import Link from "next/link";

export function Projects() {
  return (
    <section>
      <div className="py-5">
        <h2 className="text-subtitle">Projects</h2>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex flex-col">
          <ul className="list-none">
            <li className="py-1">
              <p className="text-subtitle">Ongoing</p>
            </li>
            <li className="py-1">
              <p className="text-subtitle">2023-10-26</p>
            </li>
            <li className="py-1">
              <p className="text-subtitle">2023-08-29</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="list-none">
            <li>
              <h2 className="text-title">
                <Link className="underline underline-offset-4" href={""}>
                  Juuke
                </Link>
              </h2>
            </li>
            <li>
              <h2 className="text-title">
                <Link
                  href={"https://github.com/AaronFolmer/recipeai"}
                  className="underline underline-offset-4"
                >
                  RecipeAI
                </Link>
              </h2>
            </li>
            <li>
              <h2 className="text-title">
                <Link
                  href={"https://github.com/AaronFolmer/TasteBite"}
                  className="underline underline-offset-4"
                >
                  TasteBite
                </Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
