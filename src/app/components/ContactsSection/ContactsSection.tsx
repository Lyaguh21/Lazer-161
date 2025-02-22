import Map from "./Map";
import Contacts from "./Contacts";
export default function ContactsSection() {
  return (
    <section className="flex justify-center bg-white  font-montserrat px-[20px] bigPhone:px-[60px] hd:px-0">
      <div className="w-[1200px] flex justify-between flex-wrap laptop:flex-nowrap">
        <div className="basis-full laptop:basis-1/2 flex flex-col justify-between">
          <Contacts />
        </div>
        <div className="basis-full laptop:basis-1/2 flex justify-center">
          <Map />
        </div>
      </div>
    </section>
  );
}
