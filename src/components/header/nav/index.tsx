import { NavItem } from './item'
import { LanguageSwitch } from './language-switch'

export const Nav = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-end gap-16">
      <NavItem title="Profile" href={'#profile'} />
      <NavItem title="About" href={'#about'} />
      <NavItem title="Projects" href={'#projects'} />
      <NavItem title="Skills" href={'#skills'} />
      <NavItem title="Contact" href={'#contact'} />
      <LanguageSwitch />
    </div>
  )
}
