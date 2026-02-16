import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ children, ...params }: Props) => {
    return (
        <p {...params}>
            {children}
        </p>
    )
}