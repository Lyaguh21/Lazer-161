export default function ServicesSection() {
  return (
    <section className="flex justify-center w-full font-montserrat  bg-gray px-[20px] bigPhone:px-[42px] hd:px-0">
      <div className="w-[1200px] pt-[75px] pb-[40px] ">
        <h2 className="font-semibold text-fontMain text-[36px] leading-[44px] mb-[45px] bigPhone:mb-[90px]">
          Услуги производства
        </h2>
        <div className="flex-wrap flex hd:flex-nowrap gap-[20px] hd:gap-[40px] w-full justify-center hd:justify-between">
          <img
            src="\img\ServicesSection\Lazer.svg"
            alt=""
            className="basis-1/3"
          />
          <img
            src="\img\ServicesSection\Gibka.svg"
            alt=""
            className="basis-1/3"
          />
          <img
            src="\img\ServicesSection\Svarka.svg"
            alt=""
            className="basis-1/3"
          />
        </div>
      </div>
    </section>
  );
}
