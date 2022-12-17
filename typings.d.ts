interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Category extends SanityBase {
  desription: string;
  title: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Author extends SanityBase {
  bio: Block[];
  image: Image;
  name: string;
  slug: string;
}

interface Post extends SanityBase {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _type: "reference";
  _ref: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

// Sanity distinction it from 'Image' interface
interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "title";
  current: string;
}
