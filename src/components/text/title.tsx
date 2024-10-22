import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ children, className, ...rest }: Props) => {
    return (
        <h1 className={twMerge("text-zinc-200 font-bold text-xl", className)} {...rest}>
            {children}
        </h1>
    )
}