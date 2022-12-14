import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import { StudioSanityNavbar } from "./app/components/StudioSanityNavbar";
import { Logo } from "./app/components/Logo";
import { getDefaultDocumentNode } from "./lib/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_DATASET;

if (projectId) {
  console.log("Project ID: OK");
} else {
  throw new Error("Project ID is missing");
}

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",
  name: "Blog",
  title: "sanityBlogNext13",
  // Protect this! //Dot Env dont get recognized, i dont know why...
  projectId,
  dataset: "production",
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioSanityNavbar,
    },
  },
  theme: myTheme,
});
