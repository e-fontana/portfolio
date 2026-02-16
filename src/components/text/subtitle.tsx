import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Subtitle = ({ children, className, ...params }: Props) => {
    return (
        <h3 className={twMerge("text-zinc-200 font-medium", className)} {...params}>
            {children}
        </h3>
    )
}