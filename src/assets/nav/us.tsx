import { SVGAttributes } from 'react'

export function USFlag(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_29_16)">
        <path
          d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
          fill="#F0F0F0"
        />
        <g fill="#D80027">
          <path d="M15.304 16H32c0-1.444-.192-2.843-.551-4.174H15.304V16zM15.304 7.652h14.348a16.084 16.084 0 00-3.692-4.174H15.304v4.174zM16 32c3.766 0 7.227-1.302 9.96-3.478H6.04A15.932 15.932 0 0016 32zM2.348 24.348h27.304a15.898 15.898 0 001.797-4.174H.55a15.903 15.903 0 001.797 4.174z" />
        </g>
        <path
          d="M7.412 2.499H8.87l-1.357.985.518 1.594-1.356-.985-1.356.985.447-1.377A16.088 16.088 0 002.663 7.16h.467l-.863.627c-.134.224-.263.452-.387.683l.412 1.27-.769-.56c-.191.405-.366.82-.523 1.242l.454 1.398H3.13l-1.356.986.518 1.594-1.356-.985-.812.59C.042 14.659 0 15.325 0 16h16V0c-3.16 0-6.107.917-8.588 2.499zm.62 11.901l-1.357-.985-1.356.985.518-1.594-1.356-.986h1.676l.518-1.594.518 1.594H8.87l-1.357.986.518 1.594zm-.519-6.255l.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595.518 1.595H8.87l-1.357.985zm6.258 6.255l-1.357-.985-1.356.985.518-1.594-1.356-.986h1.676l.518-1.594.518 1.594h1.677l-1.357.986.518 1.594zm-.519-6.255l.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595.518 1.595h1.677l-1.357.985zm0-4.661l.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595.518 1.595h1.677l-1.357.985z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_29_16">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
