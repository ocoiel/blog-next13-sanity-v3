import Image from "next/image";
import { LogoProps } from "sanity";

export default function Logo(props: LogoProps) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://github.com/ocoiel.png"
        alt="logo image"
      />
      {renderDefault(props)}
    </div>
  );
}
