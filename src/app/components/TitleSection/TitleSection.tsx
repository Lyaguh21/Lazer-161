import BotPart from "./BotPart";
import TopPart from "./TopPart";

export default function TitleSection() {
  return (
    <section className="flex justify-center bg-white font-montserrat">
      <div className="w-[1200px] px-[20px] bigPhone:px-[60px] hd:px-0 flex flex-col">
        <TopPart />
        <BotPart />
      </div>
    </section>
  );
}
