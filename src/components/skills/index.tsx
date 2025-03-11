import { skillSet } from "./skill"
import { SkillBadge } from "./skill-badge"

export const Skills = () => {
    return (
        <div id="skills" className="w-full flex items-center justify-between">
            {skillSet.map((
                { iconName, title }) => (
                <SkillBadge key={title} iconName={iconName} title={title} />
            ))}
        </div>
    )
}
