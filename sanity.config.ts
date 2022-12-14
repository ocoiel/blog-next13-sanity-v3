import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Blog",
  title: "sanityBlogNext13",
  projectId: "pjyt8nm1",
  dataset: "production",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
