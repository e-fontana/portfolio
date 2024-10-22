import { Logo } from './logo'
import { Nav } from './nav'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-center">
      <Logo />
      <Nav />
    </header>
  )
}
