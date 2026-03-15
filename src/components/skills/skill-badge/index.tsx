import { Subtitle } from "@/components/text/subtitle";
import StackIcon from "tech-stack-icons"

export type TSkillBadge = {
    iconName: string;
    title: string;
}

export const SkillBadge = ({ iconName, title }: TSkillBadge) => {
    return (
        <div className="flex w-[88px] flex-col items-center justify-center gap-3 text-center sm:w-[96px]">
            <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                <StackIcon name={iconName} />
            </div>
            <Subtitle className="text-sm sm:text-base">{title}</Subtitle>
        </div>
    )
}
