export default function TopPart() {
  return (
    <div className="w-full flex justify-between gap-2">
      <div className="basis-full laptop:basis-[550px]">
        <div className="bg-[#1F5BFF] h-[230px] laptop:h-auto flex justify-between flex-col py-[15px] px-[10px] laptop:p-0 laptop:bg-white">
          <h4 className=" laptop:mt-[20px] text-fontGray text-[14px] font-semibold leading-[22px]">
            Производим металлоконструкции с 2003 года
          </h4>
          <h1 className="text-white laptop:text-fontMain text-[22px] laptop:text-[50px] hd:text-[56px] leading-9 laptop:leading-[67px] font-semibold mt-[37px] max-w-[250px] laptop:max-w-[550px]">
            Металлообработка на заказ в Москве от 10 000 ₽
          </h1>
        </div>
        <h3 className="ml-[10px] laptop:ml-0 mt-[22px] text-fontMain  font-medium leading-[25px] max-w-[540px]">
          Полный цикл производства изделия на современном оборудовании. Лазерная
          резка, сварка и очистка металла, точная гибка на чпу станке, высокое
          качество порошковой покраски. Доставка на ваш склад по всей России.
        </h3>
      </div>
      <div className="hidden laptop:block">
        <img
          src="\img\FirstSection\mainPhoto.svg"
          alt=""
          className="w-[425px] h-[450px]"
        />
      </div>
    </div>
  );
}
