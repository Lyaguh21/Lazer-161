import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
export default function CarouselChild({
  photo,
  text,
}: {
  photo: string;
  text: string;
}) {
  return (
    <CarouselItem className=" tablet:basis-[calc(33.33%-3px)]">
      <Card>
        <CardContent className="flex  flex-col justify-between items-center p-0">
          <img src={photo} alt="" />
          <h2 className="flex-grow text-fontMain mt-2 max-w-[260px] text-[14px] leading-[22px] ]">
            {text}
          </h2>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
