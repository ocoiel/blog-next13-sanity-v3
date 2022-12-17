import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex flex-1 flex-row items-center space-2 p-2">
        <Link href="/" className="flex flex-row">
          <Image
            className="rounded-full"
            src="https://github.com/ocoiel.png"
            width={64}
            height={64}
            alt="Logo blog"
          />
          <div className="flex items-center justify-center mx-2 px-2">
            <h1 className="flex text-center">
              Hi, good morning{" "}
              <span className="font-bold italic mx-1">
                {" Gabriel Albuquerque"}
              </span>
            </h1>
          </div>
        </Link>
      </div>

      <div>
        <Link
          href="https://github.com/ocoiel"
          className="px-5 py-3 sm:text-base bg-gray-900 text-orange flex items-center rounded-full text-center"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
