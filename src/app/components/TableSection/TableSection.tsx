import GridChild from "./GridChild";

export default function TableSection() {
  return (
    <section className="flex justify-center w-full font-montserrat  bg-white px-[8px] bigPhone:px-[42px] hd:px-0 py-[77px]">
      <div className="w-[1200px]">
        <h2 className="font-semibold text-fontMain text-[36px]  leading-[44px] mb-[45px] bigPhone:mb-[90px]">
          Расценки
        </h2>
        <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(12,1fr)] gap-y-0 gap-x-0  ">
          <div className="sm:hidden">
            <GridChild text="Толщина" odd={true} />
          </div>
          <div className="hidden sm:block">
            <GridChild text="Толщина Металла" odd={true} />
          </div>
          <GridChild text="Сталь" odd={true} />
          <GridChild text="Нержавейка" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500р" odd={true} />
          <GridChild text="600р" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500р" odd={true} />
          <GridChild text="600р" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500р" odd={true} />
          <GridChild text="600р" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500р" odd={true} />
          <GridChild text="600р" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />

          <GridChild text="4 мм" odd={true} />
          <GridChild text="500р" odd={true} />
          <GridChild text="600р" odd={true} />

          <GridChild text="2 мм" />
          <GridChild text="300р" center={true} />
          <GridChild text="400р" />
        </div>
      </div>
    </section>
  );
}
