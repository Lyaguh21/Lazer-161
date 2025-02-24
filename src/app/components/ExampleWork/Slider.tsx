"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import ChildSlider from "./ChildSlider";

function Slider() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)} className="">
        <div className="flex flex-wrap hd:flex-nowrap  w-full justify-center laptop:justify-between gap-[20px]">
          <ChildSlider photo="\img\ExampleSection\firstExample.svg" />
          <ChildSlider photo="\img\ExampleSection\secondExample.svg" />
          <ChildSlider photo="\img\ExampleSection\thirdExample.svg" />
          <ChildSlider photo="\img\ExampleSection\fortyExample.svg" />
        </div>
        <h2 className="text-fontMain text-[20px] font-medium leading-[25px] mt-4 hover:text-fontGray transition-all hover:duration-[350ms]">
          Посмотреть все
        </h2>
      </button>

      <FsLightbox
        toggler={toggler}
        sources={[
          "https://storage.yandexcloud.net/imageokoprom/photo_2024-11-26_16-47-16.jpg",
          "https://i.imgur.com/fsyrScY.jpg",
        ]}
      />
    </>
  );
}

export default Slider;
