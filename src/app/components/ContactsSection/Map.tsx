export default function Map() {
  return (
    <div className="h-[540px] w-full laptop:w-[560px]">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9ab915425113695f4860978090a102200cee02a358eac7fba119c63c05e94bd1&amp;source=constructor"
        width="100%"
        height="540"
      ></iframe>
    </div>
  );
}
