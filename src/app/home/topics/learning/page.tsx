import Link from "next/link";

export default function Learning() {
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
            <h2 className="text-title-white dark:text-title-dark">Learning</h2>
          </div>
          <div>
            <div className="text-subtitle-white dark:text-subtitle-dark">
              <p>
                So in my “off-time”, I always like to spent more time searching
                and learning about something, for example, i’m always eager to
                learn more about some new technology.
              </p>
            </div>
          </div>

          <section className="py-5 flex flex-col text-subtitle-white dark:text-subtitle-dark">
            <p>
              One of the things right now, that i’m interested in learning more,
              is about arduinos, i’ve never tried to make something with
              arduino, but one ideia that I have in my mind, is to make a smart
              mirror, a lot of videos on internet, show how you can do it in
              your own home, so yeah, it’s pretty simple.
            </p>
          </section>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
      <hr />
    </main>
  );
}
