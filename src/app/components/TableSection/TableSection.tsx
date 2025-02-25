import GridChild from "./GridChild";

export default function TableSection() {
  return (
    <section className="flex justify-center w-full font-montserrat  bg-white px-[20px] bigPhone:px-[42px] hd:px-0 py-[77px]">
      <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(12,1fr)] gap-y-0 gap-x-0  w-[1200px]">
        <GridChild text="Толщина Металла" odd={true} />
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
    </section>
  );
}
