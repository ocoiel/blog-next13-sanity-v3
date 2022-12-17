export function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 items-center justify-between space-x-2 font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Gabriel Albuquerque Blog</h1>
        <h2>
          Welcome to{" "}
          <span className="underline decoration-2 decoration-orange ">
            every people
          </span>{" "}
          safe place to read about technologies
        </h2>
      </div>
      <p className="hidden mt-5 md:flex md:mt-2 text-gray-400 max-w-sm">
        Newest features | The latest in technologies
      </p>
    </div>
  );
}
