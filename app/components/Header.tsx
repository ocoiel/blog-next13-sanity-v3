import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://github.com/ocoiel.png"
            width={64}
            height={64}
            alt="Logo blog"
          />
        </Link>
        <h1>Hi, there</h1>
      </div>

      <div>
        <Link
          href="https://github.com/ocoiel"
          className="px-5 py-3 sm:text-base bg-gray-900 text-orange flex items-center rounded-full text-center"
        >
          Sign in and subscribe to newsletter
        </Link>
      </div>
    </header>
  );
}
