import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselChild from "./CarouselChild";
export default function ExampleSection() {
  return (
    <section className="flex justify-center mb-[130px] px-[20px] bigPhone:px-[42px] hd:px-0">
      <div className="w-[1200px] flex flex-col justify-between font-montserrat">
        <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] mb-[45px] bigPhone:mb-[90px]">
          Примеры выполненных заказов
        </h2>
        <div className="flex justify-center">
          <Carousel className="w-full ">
            <CarouselContent>
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
              <CarouselChild photo="\img\ExampleSection\firstExample.svg" />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
