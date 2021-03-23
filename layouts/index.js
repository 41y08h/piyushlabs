import Layout from "components/Layout";

export default function Index({ frontMatter, children }) {
  return (
    <Layout>
      <pre>{JSON.stringify(frontMatter, null, 2)}</pre>
      {children}
    </Layout>
  );
}
