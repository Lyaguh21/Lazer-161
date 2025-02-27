export default function EquipmentBlock({
  photo,
  text,
}: {
  photo: string;
  text: string;
}) {
  return (
    <div className="w-full  items-center flex flex-col">
      <img
        src={photo}
        alt=""
        className="sm:h-[200px] sm:w-[200px] laptop:h-[260px] laptop:w-[260px]"
      />

      <h4 className="mt-5 text-[18px] text-fontMain  leading-[27px] max-w-[250px]">
        {text}
      </h4>
    </div>
  );
}
