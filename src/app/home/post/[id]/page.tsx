"use client";
import { Breadcrumbs } from "@/components/breadcrumbs/__index";
import { Content } from "@/components/content/__index";
import { useParams } from "next/navigation";
import { posts } from "@/utils/posts";

export default function PostPage() {
  const params = useParams();
  const postId = params.id;

  const post = postId ? posts.find((post) => post.id === postId) : null;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="flex flex-wrap">
        <Breadcrumbs id={post.id} title="Post" link={`${post.id}`} />
      </div>
      <Content
        text={post.text}
        link={`/${""}`}
        title={post.title}
        subtitle={post.subtitle}
        date={post.date}
        time={post.time}
      />
    </main>
  );
}
