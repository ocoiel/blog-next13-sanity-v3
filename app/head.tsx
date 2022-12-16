export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Blog GA</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
    </>
  );
}
