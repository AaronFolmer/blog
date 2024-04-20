import { Content } from "@/components/content/__index";
import { ListAbout } from "@/components/lists/__index";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <section>
        <Content
          subtitle="About me"
          link="/home/about"
          title="Everything you need to know"
          date="November 21, 2023"
          time="1 minute read"
          text="After completing a professional 'Management and
              Programming of Computer Systems' course at my school, I
              am enthusiastic about applying my skills and knowledge
              in a work setting. I consider myself dedicated,
              ambitious, and selftaught."
        />
        <hr className="mt-10" />
      </section>
      <ListAbout />
    </main>
  );
}
