import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function CarouselChild({ photo }: { photo: string }) {
  return (
    <CarouselItem className="pl-4 basis-1/3">
      <Card>
        <CardContent className="flex h-[300px] items-center justify-center p-0">
          <img src={photo} alt="" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
