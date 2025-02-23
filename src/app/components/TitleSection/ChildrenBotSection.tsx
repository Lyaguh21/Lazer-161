export default function ChildrenBotSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="p-[20px] max-[560px]:w-full w-[calc(50%-10px)] laptop:w-[calc(25%-10px)] hd:w-[calc(25%-40px)] mb-[5px] laptop:mb-0 h-[120px] bg-gray flex flex-col ">
      <h2 className="text-fontMain text-[22px] leading-[37px] font-bold mb-1">
        {title}
      </h2>
      <h4 className="text-fontMain leading-[25px] ">{subtitle}</h4>
    </div>
  );
}
