import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="">
      <Link href={post.link}>
        <a className="text-3xl text-pink-700 font-extrabold f-mon w-full">
          {post.frontMatter.title}
        </a>
      </Link>
    </article>
  );
}
