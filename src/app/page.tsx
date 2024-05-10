import Image from "next/image";
import MainHeader from "./components/MainHeader";
import PageContentBox from "./components/PageContentBox";
import MainFooter from "./components/MainFooter";
import { Article } from "./components/Article";

export default function Home() {
  return (
    <main>
      <MainHeader />

      <PageContentBox>
        <Article>
          <h1 className="text-2xl text-stone-100">How to Get</h1>
          <p>
            To get Khorne Bot in your Discord server, press the "Discord Invite"
            link and choose the server you want the bot to join. You must have
            administrator role in the server you want the bot to join.
          </p>
        </Article>
        <Article>
          <h1 className="text-2xl text-stone-100">Feature Guide</h1>
          <p>
            Khorne Bot is able to keep track of your items. Collect wood and get
            money. When you're done, save your user passcode somewhere safe, and
            then use it again later to refresh your data.
          </p>
        </Article>
      </PageContentBox>

      <MainFooter />
    </main>
  );
}
