import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Subtitle = ({ children, className, ...rest }: Props) => {
    return (
        <h3 className={twMerge("text-zinc-200 font-medium", className)} {...rest}>
            {children}
        </h3>
    )
}