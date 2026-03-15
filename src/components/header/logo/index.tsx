import Link from "next/link";

export const Logo = ({ text }: { text: string }) => {
  return (
    <Link href="/">
      <span className="flex items-center whitespace-nowrap text-xl sm:text-2xl">
        <span className="font-extrabold text-green-600">{"<"}</span>
        <span className="pr-2 font-extrabold">{text}</span>
        <span className="font-extrabold text-green-600">{"/>"}</span>
      </span>
    </Link>
  );
};
