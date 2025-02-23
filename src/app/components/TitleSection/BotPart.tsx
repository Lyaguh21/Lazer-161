import ChildrenBotSection from "./ChildrenBotSection";

export default function BotPart() {
  return (
    <div className="flex flex-wrap laptop:flex-nowrap justify-between py-[40px] w-full">
      <ChildrenBotSection title="До 18 мм" subtitle="Лазерная резка металла" />
      <ChildrenBotSection title="До 8 мм" subtitle="Гибка листового металла" />
      <ChildrenBotSection
        title="От 0.5 до 20 мм"
        subtitle="Лазерная сварка,
полуавтомат, аргон"
      />
      <ChildrenBotSection title="4 х 2 х 2 м" subtitle="Порошковая покраска" />
    </div>
  );
}
