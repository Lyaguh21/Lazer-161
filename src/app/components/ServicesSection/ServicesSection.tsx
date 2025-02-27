import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LazerModal from "./LazerModal";
import GibkaModal from "./GibkaModal";
import SvarkaModal from "./SvarkaModal";
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
                className="basis-1/3"
              />
            </DialogTrigger>
            <LazerModal />
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <img
                src="\img\ServicesSection\Gibka.svg"
                alt=""
                className="basis-1/3"
              />
            </DialogTrigger>
            <GibkaModal />
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <img
                src="\img\ServicesSection\Svarka.svg"
                alt=""
                className="basis-1/3"
              />
            </DialogTrigger>
            <SvarkaModal />
          </Dialog>
        </div>
      </div>
    </section>
  );
}
