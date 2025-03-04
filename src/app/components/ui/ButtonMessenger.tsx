
import { whatsapp } from "../../../../public/icons/massagers/whatsapp";

export default function ButtonMessenger() {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex flex-col gap-3 ">
        <div className="relative flex size-[60px] items-center cursor-pointer">
          <div className="absolute flex size-[45px] ml-[7.5px] animate-ping rounded-full bg-emerald-600 opacity-85 " />
          <a
            href="https://wa.me/whatsappphonenumber"
            target="_blank"
            className="bg-green-500 rounded-full size-[60px] z-20 hover:bg-green-800 pt-[13px] flex align-middle justify-center"
          >
            {whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
