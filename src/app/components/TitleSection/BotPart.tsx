import ChildrenBotSection from "./ChildrenBotSection";

export default function BotPart() {
  return (
    <div className="flex flex-wrap laptop:flex-nowrap justify-between py-[40px] w-full">
      <ChildrenBotSection title="До 24 мм" subtitle="Лазерная резка листов" />
      <ChildrenBotSection title="До 16 мм" subtitle="Лазерная 3D резка труб" />
      <ChildrenBotSection
        title="От 1 до 36 мм"
        subtitle="Гибка металла"
      />
      <ChildrenBotSection title="От 3 до 30 мм" subtitle="Роботизированная сварка" />
    </div>
  );
}
