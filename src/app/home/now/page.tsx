import { Content } from "@/components/content/__index";
import { ListNow } from "@/components/lists/__index";

export default function Now() {
  return (
    <main className="h-screen">
      <section>
        <Content
          link="/home/now/"
          text="Currently working as a 'Fullstack Web Developer' in a startup, developing an app using technologies such as:"
          title="What i'm doing now"
          subtitle="Currently "
          date="April 20, 2024"
          time="1 minute read"
        />
        <ListNow />
      </section>
    </main>
  );
}
