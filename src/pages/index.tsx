import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-white bg-black min-h-screen flex">
        <div className="grid content-center justify-center min-h-full w-full text-center bg-gradient-to-t from-black to-[#100000]">
          <div className="grid pb-5 grid-cols-1 items-center">
            <Image
              src="/favicon.svg"
              alt="Khorne Bot Logo"
              width={128}
              height={128}
              className="justify-self-center"
            />
            <h1 className="text-5xl">Khorne Bot</h1>
          </div>
          <p className="text-xl">Coming Soon</p>
        </div>
      </main>
    </>
  );
}
