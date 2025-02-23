export default function TopPart() {
  return (
    <div className="w-full flex justify-between">
      <div className="basis-[600px] ">
        <h4 className="mt-[50px] text-fontGray text-[14px] font-semibold leading-[22px]">
          Производим металлоконструкции с 2003 года
        </h4>
        <h1 className="text-fontMain text-[50px] hd:text-[56px] leading-[67px] font-semibold mt-[37px] max-w-[550px]">
          Металлообработка на заказ в Москве от 10 000 ₽
        </h1>
        <h3 className="mt-[22px] text-fontMain  font-medium leading-[25px] max-w-[540px]">
          Полный цикл производства изделия на современном оборудовании. Лазерная
          резка, сварка и очистка металла, точная гибка на чпу станке, высокое
          качество порошковой покраски. Доставка на ваш склад по всей России.
        </h3>
      </div>
      <picture className="">
        <img
          src="\img\FirstSection\mainPhoto.svg"
          alt=""
          className="w-[425px] h-[450px] hd:w-auto hd:h-auto"
        ></img>
      </picture>
    </div>
  );
}
