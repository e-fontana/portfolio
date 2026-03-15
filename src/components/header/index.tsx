import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between gap-6">
      <Logo text="Eduardo Fontana" />
      <Nav />
    </header>
  );
};
