import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ children, ...rest }: Props) => {
    return (
        <p {...rest}>
            {children}
        </p>
    )
}