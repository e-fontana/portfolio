import { Stagger, StaggerItem } from "../motion/reveal";
import { skillSet } from "./skill";
import { SkillBadge } from "./skill-badge";

export const Skills = () => {
  return (
    <Stagger
      id="skills"
      className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-7"
      delayChildren={0.08}
      staggerChildren={0.06}
    >
      {skillSet.map(({ iconName, title }) => (
        <StaggerItem key={title} className="flex w-full justify-center">
          <SkillBadge iconName={iconName} title={title} />
        </StaggerItem>
      ))}
    </Stagger>
  );
};
