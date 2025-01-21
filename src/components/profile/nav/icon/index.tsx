import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  url: string
  icon: ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ProfileNavIcon = ({ url, icon, ...props }: Props) => {
  return (
    <Link href={url} target="_blank" {...props}>
      {icon}
    </Link>
  )
}
