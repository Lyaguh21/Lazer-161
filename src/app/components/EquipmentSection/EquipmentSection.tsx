import EquipmentBlock from "./EquipmentBlock";

export default function EquipmentSection() {
  return (
    <section className="flex justify-center w-full font-montserrat mb-[44px] bg-gray px-[20px] bigPhone:px-[42px] hd:px-0">
      <div className="w-[1200px] pt-[75px]  ">
        <h2 className="font-semibold text-fontMain text-[36px] leading-[44px] mb-[45px] bigPhone:mb-[90px]">
          Наше оборудование
        </h2>
        <div className="flex-wrap flex hd:flex-nowrap gap-[20px] hd:gap-[40px] w-full justify-between">
          <EquipmentBlock
            photo="\img\EquipmentSection\SENFENG.svg"
            text="Установка лазерной резки металла"
          />
          <EquipmentBlock
            photo="\img\EquipmentSection\ASSIMATCH.svg"
            text="Гибочный гидравлический пресс с ЧПУ"
          />
          <EquipmentBlock
            photo="\img\EquipmentSection\KDM.svg"
            text="Аппарат лазерной сварки"
          />
          <EquipmentBlock
            photo="\img\EquipmentSection\ANLAZER.svg"
            text="Аппарат лазерной сварки"
          />
        </div>
      </div>
    </section>
  );
}
