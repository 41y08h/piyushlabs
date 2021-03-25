import Layout from "components/Layout";
import { NextSeo } from "next-seo";
import Post from "../components/Post";
import getPosts from "../lib/getPosts.js";
import config from "../site.config";

export default function Home({ posts }) {
  const { title, description, url, tagline } = config;
  return (
    <Layout>
      <NextSeo
        title={`${title} - ${tagline}`}
        description={description}
        canonical={url}
        openGraph={{
          type: "website",
        }}
      />
      <main className="mt-12">
        {posts.map((post) => (
          <Post key={post.frontMatter.title} post={post} />
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => ({
  props: { posts: await getPosts() },
});
