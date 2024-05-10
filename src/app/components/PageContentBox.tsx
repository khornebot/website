import NavLeft from "./NavLeft";

export function PageContentBox(props: React.PropsWithChildren) {
  return (
    <section className="px-[10px] py-[8px] h-[100%] w-[944px] float-left">
      <NavLeft />
      <main className="float-left w-[640px] h-auto">{props.children}</main>
    </section>
  );
}

export default PageContentBox;
