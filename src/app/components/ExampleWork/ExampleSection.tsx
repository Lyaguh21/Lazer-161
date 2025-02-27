import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CarouselChild from "./CarouselChild";
import Autoplay from "embla-carousel-autoplay";

import * as React from "react";
export default function ExampleSection() {
  return (
    <section className="flex justify-center mb-[130px] px-[20px] bigPhone:px-[42px] hd:px-0 font-montserrat">
      <div className="w-[1000px] flex flex-col justify-between">
        <div className="flex justify-center">
          <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] mb-[45px] bigPhone:mb-[90px]">
            Примеры выполненных заказов
          </h2>
        </div>
        <div className="flex  justify-center">
          <Carousel
            className="w-[250px] bigPhone:w-[300px] sm:w-full "
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
              <CarouselChild photo="\img\ExampleSection\secondExample.svg" />
              <CarouselChild photo="\img\ExampleSection\thirdExample.svg" />
              <CarouselChild photo="\img\ExampleSection\fortyExample.svg" />
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
              <CarouselChild photo="\img\ExampleSection\secondExample.svg" />
              <CarouselChild photo="\img\ExampleSection\thirdExample.svg" />
            </CarouselContent>
            <CarouselPrevious className="ml-2" />
            <CarouselNext className="mr-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
