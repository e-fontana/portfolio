import { Subtitle } from "@/components/text/subtitle";
import StackIcon from "tech-stack-icons"

export type TSkillBadge = {
    iconName: 'typescript' | 'python' | 'reactjs' | 'docker' | 'gcloud' | 'nestjs' | 'git' | 'linux' | 'java' | 'go' | 'postgresql';
    title: string;
}

export const SkillBadge = ({ iconName, title }: TSkillBadge) => {
    return (
        <div className="flex items-center justify-center gap-4 flex-col">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                <StackIcon name={iconName} />
            </div>
            <Subtitle>{title}</Subtitle>
        </div>
    )
}