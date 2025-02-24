export default function ChildSlider({ photo }: { photo: string }) {
  return (
    <picture className="w-full bigPhone:w-[calc(50%-20px)] flex hd:block justify-center">
      <img
        src={photo}
        alt=""
        className=" hover:z-10 w-full hover:scale-110 relative hover:transition-all hover:duration-[400ms] shadow-xl "
      />
    </picture>
  );
}
