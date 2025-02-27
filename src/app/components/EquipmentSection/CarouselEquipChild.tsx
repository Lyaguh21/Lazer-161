import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
export default function CarouselEquipChild({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CarouselItem className=" sm:basis-1/3">
      <Card>
        <CardContent className="flex items-center p-0">{children}</CardContent>
      </Card>
    </CarouselItem>
  );
}
