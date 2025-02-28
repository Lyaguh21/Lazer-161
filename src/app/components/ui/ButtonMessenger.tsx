import { useState } from "react";
import { message } from "../../../../public/icons/massagers/message";
import { mail } from "../../../../public/icons/massagers/mail";
import { phone } from "../../../../public/icons/massagers/phone";
import { whatsapp } from "../../../../public/icons/massagers/whatsapp";

export default function ButtonMessenger() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex flex-col gap-3 ">
        <div
          className="flex-col gap-3 "
          style={{
            display: visible ? "flex" : "none",
          }}
        >
          <div className="bg-green-500 pt-[9px] cursor-pointer rounded-full size-[50px] ml-[5px] hover:bg-green-700 transition-all flex align-middle justify-center duration-300 ">
            {whatsapp}
          </div>
          <a href="tel:88005553535">
            <div className="bg-black rounded-full size-[50px] ml-[5px] hover:bg-hoverMessenger pt-[9px] flex align-middle justify-center transition-all duration-300 ease-in-out">
              {phone}
            </div>
          </a>
          <a href="mailto:name@email.ru">
            <div className="bg-black rounded-full cursor-pointer size-[50px] ml-[5px] hover:bg-hoverMessenger pt-[9px] flex align-middle justify-center transition-all duration-500 ease-in-out ">
              {mail}
            </div>
          </a>
        </div>
        <div className="relative flex size-[60px] items-center cursor-pointer">
          <div className="absolute flex size-[45px] ml-[7.5px] animate-ping rounded-full bg-sky-400 opacity-85 " />
          <div
            className="bg-blue-500 rounded-full size-[60px] z-20 hover:bg-blue-800 pt-[11px] flex align-middle justify-center"
            onClick={() => setVisible(!visible)}
          >
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
