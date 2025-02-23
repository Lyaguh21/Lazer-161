export default function Header() {
  return (
    <header className="bg-white z-20 sticky top-0 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex justify-center px-[20px] bigPhone:px-[60px] hd:px-0 h-[80px] tablet:h-[100px] w-full font-montserrat">
      <div className="flex justify-between w-[1200px] items-center">
        <picture>
          <img src="\icons\Logo.svg" alt="" />
        </picture>
        <div className="flex justify-end laptop:justify-between bigPhone:w-[360px] text-fontMain font-semibold leading-[25px] text-base">
          <h2 className="hidden laptop:block">sales@mrbmetall.ru</h2>
          <h2>+7 980 477 12 50</h2>
        </div>
      </div>
    </header>
  );
}
