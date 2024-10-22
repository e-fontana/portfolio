import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  url: string
  icon: ReactNode
}

export const ProfileNavIcon = ({ url, icon }: Props) => {
  return (
    <Link href={url} target="_blank">
      {icon}
    </Link>
  )
}
