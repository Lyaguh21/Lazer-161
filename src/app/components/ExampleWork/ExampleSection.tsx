import Slider from "./Slider";

export default function ExampleSection() {
  return (
    <section className="flex justify-center mb-[130px] px-[20px] bigPhone:px-[42px] hd:px-0">
      <div className="w-[1200px] flex flex-col justify-between font-montserrat">
        <h2 className="text-fontMain font-semibold leading-[44px] text-[36px] mb-[110px]">
          Примеры выполненных заказов
        </h2>

        <Slider />
      </div>
    </section>
  );
}
