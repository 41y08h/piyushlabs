import Layout from "components/Layout";
import { NextSeo } from "next-seo";
import config from "../site.config";
import { MDXProvider } from "@mdx-js/react";

export default function Index({ frontMatter, children }) {
  const path = frontMatter.__resourcePath.replace(/\.mdx/, "");
  const url = `${config.url}/${path}`;
  const title = `${frontMatter.title} | ${config.title}`;
  const description = frontMatter.description;

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: "article",
          article: {
            publishedTime: new Date(frontMatter.publishedOn),
          },
        }}
      />
      <div className="mt-12">
        <time className="text-sm text-gray-400">
          {new Date(frontMatter.publishedOn).toDateString()}
        </time>
        <h1 className="text-red-600 text-3xl font-extrabold mt-2">
          {frontMatter.title}
        </h1>
      </div>
      <article className="prose mt-8">
        <MDXProvider
          components={{
            a: (props) => <a target="_blank" {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </article>
    </Layout>
  );
}
