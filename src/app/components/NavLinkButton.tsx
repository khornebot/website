export function NavLinkButton({
  href,
  children
}: React.PropsWithChildren & { href: string }) {
  return (
    <a
      href={href}
      className="mt-[15px] my-auto mb-[5px] block h-[72px] w-[72px]"
    >
      {children}
    </a>
  );
}

export default NavLinkButton;
