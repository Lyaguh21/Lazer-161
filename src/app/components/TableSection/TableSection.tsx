import GridChild from "./GridChild";

export default function TableSection() {
  return (
    <section className="flex justify-center w-full font-montserrat  bg-white px-[8px] bigPhone:px-[30px] hd:px-0 py-[40px]">
      <div className="w-[1200px]">
        <h2 className="font-semibold text-fontMain text-[36px]  leading-[40px] mb-[45px] bigPhone:mb-[90px]">
          Стоимость лазерной резки
        </h2>
        <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(12,1fr)] gap-y-0 gap-x-0  ">
          <div className="sm:hidden ">
            <GridChild text="Толщина" odd={true} />
          </div>
          <div className="hidden sm:block">
            <GridChild text="Толщина металла" odd={true} />
          </div>
          <GridChild text="Углеродистая" odd={true} />
          <GridChild text="Нержавеющая" odd={true} />

          <GridChild text="3 мм" />
          <GridChild text="300" center={true} />
          <GridChild text="400" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500" odd={true} />
          <GridChild text="600" odd={true} />

          <GridChild text="5 мм" />
          <GridChild text="300" center={true} />
          <GridChild text="400" />

          <GridChild text="6 мм" odd={true} />
          <GridChild text="500" odd={true} />
          <GridChild text="600" odd={true} />

          <GridChild text="8 мм" />
          <GridChild text="300" center={true} />
          <GridChild text="400" />

          <GridChild text="10 мм" odd={true} />
          <GridChild text="500" odd={true} />
          <GridChild text="600" odd={true} />

          <GridChild text="12 мм" />
          <GridChild text="300" center={true} />
          <GridChild text="400" />

          <GridChild text="16 мм" odd={true} />
          <GridChild text="500" odd={true} />
          <GridChild text="600" odd={true} />

          <GridChild text="20 мм" />
          <GridChild text="300" center={true} />
          <GridChild text="400" />

          <GridChild text="22 мм" odd={true} />
          <GridChild text="500" odd={true} />
          <GridChild text="600" odd={true} />

          <GridChild text="Резка труб" />
          <GridChild text="Договорная" center={true} />
          <GridChild text="Договорная" />
        </div>
      </div>
    </section>
  );
}
