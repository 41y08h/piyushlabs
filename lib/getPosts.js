import { promises as fs } from "fs";
import path from "path";
import getPost from "./getPost";

export default async function getPosts() {
  // Read mdx files from blog directory
  const postsDirectory = path.join(process.cwd(), "pages/blog");

  // Get post by filename
  const filenames = await fs.readdir(postsDirectory);
  const posts = filenames.map(getPost);

  // Return all posts
  return await Promise.all(posts);
}
