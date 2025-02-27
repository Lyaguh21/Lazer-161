import EquipmentBlock from "./EquipmentBlock";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CarouselEquipChild from "./CarouselEquipChild";
export default function EquipmentSection() {
  return (
    <section className="flex justify-center mb-[130px] px-[20px] bigPhone:px-[42px] hd:px-0 font-montserrat">
      <div className="w-[1000px] flex flex-col justify-between">
        <div className="flex justify-center">
          <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] mb-[45px] bigPhone:mb-[90px]">
            Наше оборудование
          </h2>
        </div>
        <div className="flex justify-center">
          <Carousel
            className="w-[250px] bigPhone:w-[300px] sm:w-[550px] laptop:w-full  "
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\SENFENG.svg"
                  text="Установка лазерной резки металла"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\ASSIMATCH.svg"
                  text="Гибочный гидравлический пресс с ЧПУ"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\KDM.svg"
                  text="Аппарат лазерной сварки"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\ANLAZER.svg"
                  text="Аппарат лазерной сварки"
                />
              </CarouselEquipChild>

              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\SENFENG.svg"
                  text="Установка лазерной резки металла"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\ASSIMATCH.svg"
                  text="Гибочный гидравлический пресс с ЧПУ"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\KDM.svg"
                  text="Аппарат лазерной сварки"
                />
              </CarouselEquipChild>
              <CarouselEquipChild>
                <EquipmentBlock
                  photo="\img\EquipmentSection\ANLAZER.svg"
                  text="Аппарат лазерной сварки"
                />
              </CarouselEquipChild>
            </CarouselContent>
            <CarouselPrevious className="ml-2" />
            <CarouselNext className="mr-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
