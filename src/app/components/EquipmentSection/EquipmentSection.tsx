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
            Примеры выполненных заказов
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
              <CarouselEquipChild photo="\img\EquipmentSection\ANLAZER.svg" />
              <CarouselEquipChild photo="\img\EquipmentSection\ASSIMATCH.svg" />
              <CarouselEquipChild photo="\img\EquipmentSection\KDM.svg" />
              <CarouselEquipChild photo="\img\EquipmentSection\SENFENG.svg" />
            </CarouselContent>
            <CarouselPrevious className="ml-2 hidden laptop:flex" />
            <CarouselNext className="mr-4 hidden laptop:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
