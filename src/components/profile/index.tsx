import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { ProfileNav } from "./nav";
import { ProfilePicture } from "./profile";
import { ProfileBody, ProfileText } from "./text";

export const Profile = () => {
  return (
    <section
      id="profile"
      className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12"
      aria-labelledby="profile-title"
    >
      <Stagger
        className="order-2 flex flex-col items-start justify-center gap-4 lg:order-1"
        delayChildren={0.05}
        staggerChildren={0.12}
      >
        <StaggerItem>
          <ProfileText />
        </StaggerItem>
        <StaggerItem>
          <ProfileNav />
        </StaggerItem>
        <StaggerItem>
          <ProfileBody />
        </StaggerItem>
      </Stagger>
      <Reveal
        delay={0.12}
        className="order-1 flex w-full items-center justify-center lg:order-2"
        y={32}
      >
        <ProfilePicture />
      </Reveal>
    </section>
  );
};
