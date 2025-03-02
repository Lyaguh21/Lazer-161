import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function ModalLayout({
  title,
  subtitle,
  mainPhoto,
  photo1,
  photo2,
  photo3,
  photo4,
}: {
  title: string;
  subtitle: string;
  mainPhoto: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
}) {
  return (
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle className="flex justify-center font-semibold text-fontMain mb-[35px] text-[36px] leading-[44px]">
          {title}
        </DialogTitle>
      </DialogHeader>
      <DialogTitle className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <div className="max-h-[250px] min-[900px]:max-h-[381px] sm:h-[250px] min-[900px]:h-[381px] w-full sm:w-[320px] flex-grow tabletPlus:w-[381px] bg-gray p-3">
            <h2 className=" max-h-[230px] min-[900px]:max-h-[381px] text-fontMain font-normal overflow-scroll min-[900px]:overflow-hidden">
              {subtitle}
            </h2>
          </div>
          <div className="h-[250px] w-[250px] min-[900px]:h-[381px] min-[900px]:w-[381px] hidden sm:flex bg-[#273043] items-center">
            <img src={mainPhoto} alt="" className="opacity-70" />
          </div>
        </div>
        <div className="w-full gap-4 inline-flex bg-gray p-3 justify-center  flex-wrap">
          <img
            src={photo1}
            alt=""
            className="h-[120px] w-[120px] sm:w-[170px] sm:h-[170px]"
            style={{ display: photo1 == undefined ? "none" : "block" }}
          />
          <img
            src={photo2}
            alt=""
            className="h-[120px] w-[120px] sm:w-[170px] sm:h-[170px]"
            style={{ display: photo2 == undefined ? "none" : "block" }}
          />
          <div className="flex gap-4">
            <img
              src={photo3}
              alt=""
              className="h-[120px] w-[120px] sm:w-[170px] sm:h-[170px]"
              style={{ display: photo3 == undefined ? "none" : "block" }}
            />
            <img
              src={photo4}
              alt=""
              className="h-[120px] w-[120px] sm:w-[170px] sm:h-[170px]"
              style={{ display: photo4 == undefined ? "none" : "block" }}
            />
          </div>
        </div>
      </DialogTitle>
    </DialogContent>
  );
}
