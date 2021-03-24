import Layout from "components/Layout";
import Header from "../components/Header";
import Post from "../components/Post";
import Seo from "../components/Seo";
import getPosts from "../lib/getPosts.js";
import config from "../site.config";

export default function Home({ posts }) {
  const { title, description } = config;
  return (
    <Layout>
      <Seo {...{ title, description }} />
      <main className="mt-12">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => ({
  props: { posts: await getPosts() },
});
