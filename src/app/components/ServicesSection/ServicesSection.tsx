import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ModalLayout from "./Modal/ModalLayout";
export default function ServicesSection() {
  return (
    <section className="flex justify-center w-full font-montserrat  bg-gray px-[20px] bigPhone:px-[42px] hd:px-0">
      <div className="w-[1200px] pt-[75px] pb-[40px] ">
        <h2 className="font-semibold text-fontMain text-[36px] leading-[44px] mb-[45px] bigPhone:mb-[90px]">
          Услуги производства
        </h2>
        <div className="flex-wrap flex hd:flex-nowrap gap-[20px] hd:gap-[40px] w-full justify-center hd:justify-between">
          <Dialog>
            <DialogTrigger>
              <img
                src="\img\ServicesSection\Lazer.svg"
                alt=""
                className="basis-1/3 shadow-xl hover:z-10 hover:scale-105 transition-transform duration-500 "
              />
            </DialogTrigger>
            <ModalLayout
              title="Лазерная резка"
              subtitle="Лазерная резка — технология резки и раскроя материалов, использующая лазер высокой мощности и обычно применяемая на промышленных производственных линиях. Сфокусированный лазерный луч, обычно управляемый компьютером, обеспечивает высокую концентрацию энергии и позволяет разрезать практически любые материалы независимо от их теплофизических свойств. В процессе резки, под воздействием лазерного луча материал разрезаемого участка плавится, возгорается, испаряется или выдувается струей газа. Легкодеформируемых и нежестких заготовок и деталей, можно осуществлять с высокой степенью точности."
              mainPhoto="\img\Modal\modalLazer.jpg"
              photo1="\img\EquipmentSection\SENFENG.svg"
              photo2="\img\EquipmentSection\SENFENG.svg"
              photo3="\img\EquipmentSection\SENFENG.svg"
              photo4="\img\EquipmentSection\SENFENG.svg"
            />
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <img
                src="\img\ServicesSection\Gibka.svg"
                alt=""
                className="basis-1/3 shadow-xl hover:z-10 hover:scale-105 transition-transform duration-500 "
              />
            </DialogTrigger>
            <ModalLayout
              title="Гибка металла"
              subtitle="Гибка — это производственный процесс, в результате которого в пластичных материалах, чаще всего в листовом металле, образуется V-образная, U-образная или канальная форма вдоль прямой оси. Обычно используемое оборудование включает гибочные прессы, гибочные прессы-автоматы и другие специализированные гибочные прессы. Типичными изделиями, которые изготавливаются таким образом, являются коробки, такие как электрические корпуса, и прямоугольные воздуховоды."
              mainPhoto="\img\Modal\modalGibka.jpg"
              photo1="\img\EquipmentSection\ASSIMATCH.svg"
              photo2="\img\EquipmentSection\ASSIMATCH.svg"
              photo3="\img\EquipmentSection\ASSIMATCH.svg"
              photo4="\img\EquipmentSection\ASSIMATCH.svg"
            />
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <img
                src="\img\ServicesSection\Svarka.svg"
                alt=""
                className="basis-1/3 shadow-xl hover:z-10 hover:scale-105 transition-transform duration-500 "
              />
            </DialogTrigger>
            <ModalLayout
              title="Лазерная сварка"
              subtitle="Лазерная сварка — сварка с использованием лазера в качестве энергетического источника.

Лазерная сварка применяется для сварки радиоэлектронике и электронной технике, она позволяет материалы с толщинами от нескольких микрометров до десятков миллиметров. ущность лазерного процесса сварки состоит в следующем: лазерное излучение направляется в фокусирующую систему, где фокусируется в пучок меньшего сечения и попадает на свариваемые детали, где частично отражается, частично проникает внутрь материала, где поглощается, нагревает и расплавляет металл, формируя сварной шов."
              mainPhoto="\img\Modal\modalSvarka.jpg"
              photo1="\img\EquipmentSection\KDM.svg"
              photo2="\img\EquipmentSection\ANLAZER.svg"
              photo3="\img\EquipmentSection\KDM.svg"
              photo4="\img\EquipmentSection\ANLAZER.svg"
            />
          </Dialog>
        </div>
      </div>
    </section>
  );
}
