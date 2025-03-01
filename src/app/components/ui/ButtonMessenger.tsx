import React, { useState, useEffect } from "react";
import { message } from "../../../../public/icons/massagers/message";
import { mail } from "../../../../public/icons/massagers/mail";
import { phone } from "../../../../public/icons/massagers/phone";
import { whatsapp } from "../../../../public/icons/massagers/whatsapp";

export default function ButtonMessenger() {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(visible ? "flex" : "none");
  const [animateIn, setAnimateIn] = useState(false);
  const style = {
    opacity: animateIn ? "1" : "0",
    visibility: animateIn ? "visible" : "hidden",
    display: display,
    transition: "opacity 1s ease",
  };

  useEffect(() => {
    let timeoutId: any;
    if (visible) {
      // При включении сначала сразу задаём display: "flex",
      // чтобы элемент отобразился, но начнёт с прозрачностью 0 (animateIn = false)
      setDisplay("flex");
      // Делаем короткую задержку, чтобы браузер успел отрендерить элемент,
      // затем переключаем animateIn в true — это запустит переход opacity от 0 к 1
      setTimeout(() => {
        setAnimateIn(true);
      }, 30);
    } else {
      // При скрытии сразу запускаем анимацию затухания, устанавливая animateIn в false.
      // В результате opacity переходит к 0
      setAnimateIn(false);
      // И через 1 секунду (время анимации) блок убирается из DOM, меняя display на "none"
      timeoutId = setTimeout(() => {
        setDisplay("none");
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex flex-col gap-3 ">
        <div
          className="flex-col gap-2 transition-all ease-in-out duration-1000"
          style={style}
        >
          <a href="https://wa.me/whatsappphonenumber" target="_blank">
            <div className="bg-green-500 pt-[9px] cursor-pointer rounded-full size-[50px] ml-[4px] hover:bg-green-700 transition-all flex align-middle justify-center duration-300 linear">
              {whatsapp}
            </div>
          </a>
          <a href="tel:88005553535">
            <div className="bg-black rounded-full size-[50px] ml-[4px] hover:bg-hoverMessenger pt-[9px] flex align-middle justify-center transition-all duration-500 ease-in-out linear">
              {phone}
            </div>
          </a>
          <a href="mailto:name@email.ru">
            <div className="bg-black rounded-full cursor-pointer size-[50px] ml-[4px] hover:bg-hoverMessenger pt-[9px] flex align-middle justify-center transition-all duration-700 ease-in-out linear">
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
