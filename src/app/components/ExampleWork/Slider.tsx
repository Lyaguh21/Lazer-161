"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Slider() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setToggler(!toggler)}>
          <img src="https://storage.yandexcloud.net/imageokoprom/photo_2024-11-26_16-47-16.jpg" />
        </button>
      </div>
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
