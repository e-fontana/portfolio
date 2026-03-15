import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
    title: string
} & React.HTMLAttributes<HTMLAnchorElement> & LinkProps;


export const NavItem = ({ title, className, ...props }: Props) => {
    return (
        <div className="group w-fit shrink-0">
            <Link className={twMerge("text-sm sm:text-base lg:text-lg", className)} {...props}>{title}</Link>
            <div className="h-px w-0 bg-green-600 group-hover:w-full duration-300" />
        </div>
    )
}
