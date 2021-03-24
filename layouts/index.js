import Layout from "components/Layout";

export default function Index({ frontMatter, children }) {
  return (
    <Layout>
      <div className="prose mt-16">
        <h1 className="f-mon">{frontMatter.title}</h1>
        {children}
      </div>
    </Layout>
  );
}
