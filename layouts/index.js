import Layout from "components/Layout";
import Seo from "../components/Seo";
import config from "../site.config";

export default function Index({ frontMatter, children }) {
  return (
    <Layout>
      <Seo
        title={`${frontMatter.title} | ${config.title}`}
        description={frontMatter.description}
      />
      <div className="mt-12">
        <time className="text-sm text-gray-400">
          {new Date(frontMatter.date).toDateString()}
        </time>
        <h1 className="text-red-600 text-3xl font-extrabold mt-2">
          {frontMatter.title}
        </h1>
      </div>
      <article className="prose mt-8">{children}</article>
    </Layout>
  );
}
