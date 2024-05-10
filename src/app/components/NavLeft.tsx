import NavLabel from "./NavLabel";
import NavLinkButton from "./NavLinkButton";

export function NavLeft() {
  return (
    <nav className="float-left w-[152px]">
      <NavLinkButton href="/about">
        <img width={72} height={72} src="/about.png" />
      </NavLinkButton>
      <NavLabel>About</NavLabel>
      <NavLinkButton href="/invite">
        <img width={72} height={72} src="/discord.png" />
      </NavLinkButton>
      <NavLabel>Discord Invite</NavLabel>
    </nav>
  );
}

export default NavLeft;
