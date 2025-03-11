"use client";
import {
  PiDownloadSimpleBold,
  PiEnvelopeSimpleBold,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import { ProfileNavIcon } from "./icon";

export const ProfileNav = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <ProfileNavIcon
        url="https://github.com/e-fontana"
        icon={
          <PiGithubLogoFill className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
        }
      />
      <ProfileNavIcon
        url="https://www.linkedin.com/in/eduardolfontana"
        icon={
          <PiLinkedinLogoFill className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
        }
      />
      <ProfileNavIcon
        url="/curriculo.pdf"
        download="Currículo - Eduardo Fontana.pdf"
        icon={
          <PiDownloadSimpleBold className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
        }
      />
      <ProfileNavIcon
        url="mailto:contato@eduardofontana.dev"
        icon={
          <PiEnvelopeSimpleBold className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
        }
      />
    </div>
  );
};
