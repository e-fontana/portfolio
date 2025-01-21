"use client";
import {
  PiDownloadSimpleBold,
  PiEnvelopeSimpleBold,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import { ProfileNavIcon } from "./icon";



export const ProfileNav = () => {
  function handleGetSiac() {
    const allHeaders = {
      "Host": "siac.ufba.br",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Referer": "https://siac.ufba.br/SiacWWW/ConsultarComprovanteMatricula.do",
      "Sec-GPC": "1",
      "Connection": "keep-alive",
      "Cookie": "JSESSIONID=156FB0D472134D4E6DB3D4D1938C1C43.anage",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache"
    }
    const requestOptions = {
      method: "GET",
      headers: allHeaders,
    };

    fetch("https://siac.ufba.br/SiacWWW/ConsultarComprovanteMatricula.do", {
      ...requestOptions,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
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
      <button
        onClick={handleGetSiac}
      >
        <PiDownloadSimpleBold className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
      </button>
      <ProfileNavIcon
        url="mailto:contato@eduardofontana.dev"
        icon={
          <PiEnvelopeSimpleBold className="text-2xl text-zinc-200 duration-300 hover:text-green-600" />
        }
      />
    </div>
  );
};
