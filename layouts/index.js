import Layout from "components/Layout";

export default function Index({ frontMatter, children }) {
  return (
    <Layout>
      <div className="mt-12">
        <time className="text-sm text-gray-400">
          {new Date(frontMatter.date).toDateString()}
        </time>
        <h1 className="text-red-600 text-3xl font-extrabold mt-2">
          {frontMatter.title}
        </h1>
      </div>
      <div className="prose mt-8">{children}</div>
    </Layout>
  );
}
