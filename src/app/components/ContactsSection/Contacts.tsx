export default function Contacts() {
  return (
    <div>
      <h1 className="text-fontMain leading-[56px] font-semibold text-4xl mb-[34px]">
        Контакты и схема проезда
      </h1>
      <div className="flex justify-between flex-wrap bigPhone:w-[400px] mb-[50px]">
        <div>
          <h4 className="text-fontGray text-[14px] leading-[22px] mb-[10px]">
            Звоните
          </h4>
          <h2 className="text-[18px] font-medium text-fontMain leading-7">
            +7 951 513 88 58
          </h2>
        </div>
        <div>
          <h4 className="text-fontGray text-[14px] leading-[22px] mb-[8px]">
            Пишите
          </h4>
          <h2 className="text-[18px] font-medium text-fontMain leading-7">
            lazer161snab@yandex.ru
          </h2>
        </div>
      </div>
      <div className="mb-[52px]">
        <h4 className="text-fontGray  text-[14px] leading-[22px] mb-[11px]">
          Приезжайте в гости
        </h4>
        <h2 className="text-[18px] leading-[28px] font-medium text-fontMain max-w-[338px]">
          Ростовская область, г.Шахты, ул. Неглинская 4
        </h2>
      </div>
      <div>
        <h4 className="text-fontGray  text-[14px] leading-[22px] mb-[8px]">
          Часы работы
        </h4>
        <h6 className="leading-[22px] text-fontMain text-[14px]">пн. - пт.</h6>

        <h2 className="text-[18px] font-medium text-fontMain leading-[28px] mb-[11px]">
          с 08:00 до 16:45
        </h2>
        <h4 className="text-fontGray  text-[14px] leading-[22px] mb-[8px]">
          Наименование
        </h4>
        <h2 className="text-[18px] font-medium text-fontMain leading-[28px] mb-[7px]">
          ИП Ткаличев Ю.В. ИНН 615017231456
        </h2>
      </div>
    </div>
  );
}
