import { Content } from "@/components/content/__index";
import { posts } from "@/utils/posts";
import Link from "next/link";

export function Posts() {
  return (
    <section>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-10">
            <Content
              subtitle="Latest"
              link={`/home/post/${post.id}`}
              title={post.title}
              date={post.date}
              time={post.time}
              text={
                post.text.length > 200
                  ? post.text.slice(0, 200) + "..."
                  : post.text
              }
              seeMore={
                post.text.length > 200 && (
                  <Link
                    href={`/home/post/${post.id}`}
                    className="ml-2 text-title underline underline-offset-4"
                  >
                    Show more
                  </Link>
                )
              }
            />
            <hr className="mt-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
