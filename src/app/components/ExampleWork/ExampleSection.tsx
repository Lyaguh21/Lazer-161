import Slider from "./Slider";

export default function ExampleSection() {
  return (
    <div className="flex justify-center mb-[130px]">
      <div className="w-[1200px] flex flex-col justify-between font-montserrat">
        <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] mb-[110px]">
          Примеры выполненных заказов
        </h2>

        <Slider />
      </div>
    </div>
  );
}
