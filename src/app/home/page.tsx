import { Posts } from "@/components/posts/__index";
import { Topics } from "@/components/topics/__index";

export default function HomePage() {
  return (
    <main className="relative flex flex-col gap-5 pb-20 overflow-x-hidden overflow-y-auto">
      <Posts />
      <Topics />
    </main>
  );
}
