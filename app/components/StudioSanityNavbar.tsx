import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { NavbarProps } from "sanity";
export function StudioSanityNavbar(props: NavbarProps) {
  return (
    <>
      <div className="text-orange flex items-center justify-between p-4">
        <Link href="/">
          <ArrowUturnLeftIcon className="h-5 w-5 text-orange mr-2" />
          Back to blog{" "}
        </Link>
      </div>

      <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-orange">
        <h1 className="font-bold text-white">
          Welcome to Gabriel`s blog! Lets go, my friends! 📝💛{" "}
        </h1>
        <Link
          href="https://github.com/ocoiel"
          className="font-bold text-orange ml-4"
        >
          Chekout my github profile!
        </Link>
      </div>
      {props.renderDefault(props)}
    </>
  );
}
