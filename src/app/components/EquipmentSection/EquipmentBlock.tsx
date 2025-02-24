export default function EquipmentBlock({
  photo,
  text,
}: {
  photo: string;
  text: string;
}) {
  return (
    <div className="w-full bigPhone:w-[calc(50%-20px)] hd:w-[calc(25%-40px)] flex flex-col">
      <img src={photo} alt="" className="" />

      <h4 className="my-[37px] text-[18px] text-fontMain leading-[27px] max-w-[250px]">
        {text}
      </h4>
    </div>
  );
}
