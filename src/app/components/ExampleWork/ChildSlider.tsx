export default function ChildSlider({ photo }: { photo: string }) {
  return (
    <picture className="w-[283px] h-[215px] ">
      <img
        src={photo}
        alt=""
        className=" hover:z-10 hover:scale-110 relative hover:transition-all hover:duration-[400ms] "
      />
    </picture>
  );
}
