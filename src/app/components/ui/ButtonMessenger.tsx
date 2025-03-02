import { message } from "../../../../public/icons/massagers/message";

export default function ButtonMessenger() {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex flex-col gap-3 ">
        <div className="relative flex size-[60px] items-center cursor-pointer">
          <div className="absolute flex size-[45px] ml-[7.5px] animate-ping rounded-full bg-sky-400 opacity-85 " />
          <a
            href="https://wa.me/whatsappphonenumber"
            target="_blank"
            className="bg-blue-500 rounded-full size-[60px] z-20 hover:bg-blue-800 pt-[11px] flex align-middle justify-center"
          >
            {message}
          </a>
        </div>
      </div>
    </div>
  );
}
