import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="bg-gray-100 p-4 mb-2">
      <time className="text-sm text-gray-400">
        {new Date(post.frontMatter.date).toDateString()}
      </time>
      <Link href={post.link}>
        <a className="text-lg text-red-400 font-extrabold f-mon w-full">
          {post.frontMatter.title}
        </a>
      </Link>
    </article>
  );
}
