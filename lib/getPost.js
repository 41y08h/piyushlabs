import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";

export default async function getPost(filename) {
  const blogDirectory = path.join(process.cwd(), "pages/blog");
  const slug = filename.replace(/\.mdx/, "");

  // Read file and process front matter
  const pathToPostMDX = path.join(blogDirectory, filename);
  const fileContents = await fs.readFile(pathToPostMDX, "utf8");
  const { data } = matter(fileContents);

  // Return front-matter and slug only, because blog index
  // doesn't need actual content
  return { link: `/blog/${slug}`, frontMatter: data };
}
