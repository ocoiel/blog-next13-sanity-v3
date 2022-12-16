"use client";

import { usePreview } from "../../lib/sanity.preview";
import BlogList from "./BlogList";

interface IPreviewBlogList {
  query: string;
}

export default function PreviewBlogList({ query }: IPreviewBlogList) {
  const posts = usePreview(null, query);

  return <BlogList posts={posts} />;
}
