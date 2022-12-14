import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { LogoProps, NavbarProps } from "sanity";
export default function StudioSanityNavbar(props: NavbarProps) {
  return (
    <>
      <div className="text-[#f7ab0a] flex items-center justify-between p-4">
        <Link href="/">
          <ArrowUturnLeftIcon className="h-5 w-5 text-[#f7ab0a] mr-2" />
          Back to blog{" "}
        </Link>
      </div>

      <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#f7ab0a]">
        <h1 className="font-bold text-white">
          Welcome to Gabriel`s blog! Lets go, my friends! 📝💛{" "}
        </h1>
        <Link
          href="https://github.com/ocoiel"
          className="font-bold text-[#f7ab0a] ml-4"
        >
          Chekout my github profile!
        </Link>
      </div>
      {props.renderDefault(props)}
    </>
  );
}
