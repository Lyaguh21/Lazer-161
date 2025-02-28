import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function GibkaModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex justify-center font-semibold text-fontMain mb-[35px] text-[36px] leading-[44px]">
          Гибка металла
        </DialogTitle>
      </DialogHeader>
      <DialogTitle className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <div className="h-auto sm:h-[auto] w-full sm:w-[320px] flex-grow tabletPlus:w-[381px] bg-gray p-3">
            <h2 className="text-fontMain">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, beatae! Magni fugit dolores iure ex porro eum id!
              Temporibus voluptates illum magni error doloribus beatae facilis
              qui veniam dicta! Aliquam.
            </h2>
          </div>
          <div className="h-[250px] w-[250px] min-[900px]:h-[381px] min-[900px]:w-[381px] hidden sm:flex bg-[#273043] items-center">
            <img
              src="\img\Modal\modalGibka.jpg"
              alt=""
              className="opacity-70"
            />
          </div>
        </div>
        <div className="w-full gap-3 flex bg-gray p-3 justify-center bigPhone:justify-start flex-wrap">
          <img
            src="\img\EquipmentSection\ASSIMATCH.svg"
            alt=""
            className="w-[170px] h-[170px]"
          />
          <img
            src="\img\EquipmentSection\ASSIMATCH.svg"
            alt=""
            className="w-[170px] h-[170px]"
          />
        </div>
      </DialogTitle>
    </DialogContent>
  );
}
