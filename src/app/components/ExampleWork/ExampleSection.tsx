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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
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
            setApi={setApi}
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
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} / {count}
        </div>
      </div>
    </section>
  );
}
