interface IBlogList {
  posts: string;
}

export default function BlogList({ posts }: IBlogList) {
  return <div>BlogList</div>;
}
