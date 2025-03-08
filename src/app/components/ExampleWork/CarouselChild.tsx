import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
export default function CarouselChild({ photo }: { photo: string }) {
  return (
    <CarouselItem className=" tablet:basis-[calc(33.33%-4px)] ">
      <Card>
        <CardContent className="flex h-[215px]  items-center justify-center p-0">
          <img src={photo} alt="" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
