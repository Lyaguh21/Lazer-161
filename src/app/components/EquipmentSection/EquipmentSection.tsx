import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import * as React from "react";
import CarouselEquipChild from "./CarouselEquipChild";
export default function ExampleSection() {
  return (
    <section className="flex justify-center mb-[45px] px-[20px] bigPhone:px-[50px] hd:px-0 font-montserrat">
      <div className="w-[1000px] flex flex-col justify-between ">
        <div className="flex justify-center mb-[50px] ">
          <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] ">
            Наше оборудование
          </h2>
        </div>
        <div className="flex justify-center">
          <Carousel
            className="w-[250px] bigPhone:w-[300px] tablet:w-full"
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}
          >
            <CarouselContent className="gap-[4px]">
              <CarouselEquipChild
                photo="\img\OurEquipment\GigaPress.jpeg"
                text="Аппарат лазерной сварки"
              />
              <CarouselEquipChild
                photo="\img\OurEquipment\LazerSheet.jpeg"
                text="Гибочный гидравлический пресс с ЧПУ"
              />
              <CarouselEquipChild
                photo="\img\OurEquipment\Mashine.jpeg"
                text="Аппарат лазерной сварки"
              />

              <CarouselEquipChild
                photo="\img\OurEquipment\Rollers.jpeg"
                text="Установка лазерной резки металла"
              />
              <CarouselEquipChild
                photo="\img\OurEquipment\SheetPress.jpeg"
                text="Установка лазерной резки металла"
              />
              <CarouselEquipChild
                photo="\img\OurEquipment\Presses.jpeg"
                text="Установка лазерной резки металла"
              />
            </CarouselContent>
            <CarouselPrevious className="ml-2 hidden laptop:flex" />
            <CarouselNext className="mr-4 hidden laptop:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
