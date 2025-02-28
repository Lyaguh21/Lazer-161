export default function GridChild({
  text,
  center,
  odd,
}: {
  text: string;
  center?: boolean;
  odd?: boolean;
}) {
  return (
    <div
      className=" flex items-center justify-center bg-bgTable h-[40px]"
      style={{ background: center ? "#F2F2F2" : odd ? "#D9D9D9" : "#FFF" }}
    >
      <h2 className="text-fontMain font-semibold text-[16px] sm:text-[18px] text-nowrap tablet:text-[20px] leading-[37px]">
        {text}
      </h2>
    </div>
  );
}
