export function MainHeader() {
  return (
    <header
      className="w-[960px] h-[250px]"
      style={{
        background:
          "linear-gradient(140deg, rgba(255,179,179,1) 0%, rgba(187,67,67,1) 100%);"
      }}
    >
      <a
        href="/"
        className="flex w-[960px] h-[250px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/header.png)"
        }}
      ></a>
    </header>
  );
}

export default MainHeader;
