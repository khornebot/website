export function Article(props: React.PropsWithChildren) {
  return (
    <article className="w-[598px] py-[10px] px-[20px] border bg-[#99232e] my-[10px] mx-auto rounded-[10px] border-solid">
      {props.children}
    </article>
  );
}
