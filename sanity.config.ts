import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import { StudioSanityNavbar } from "./app/components/StudioSanityNavbar";
import { Logo } from "./app/components/Logo";

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_DATASET!;

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",
  name: "Blog",
  title: "sanityBlogNext13",
  projectId: "pjyt8nm1",
  dataset: "production",
  plugins: [deskTool(), visionTool()],

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
