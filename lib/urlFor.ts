import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// Preview CDN settings
const builder = imageUrlBuilder(client);

export default function urlFor(source: Image) {
  return builder.image(source);
}
