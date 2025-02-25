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
      className=" flex items-center justify-center bg-bgTable w-auto h-[65px]"
      style={{ background: center ? "#F2F2F2" : odd ? "#D9D9D9" : "#FFF" }}
    >
      <h2 className="text-fontMain font-semibold text-[24px] leading-[37px]">
        {text}
      </h2>
    </div>
  );
}
