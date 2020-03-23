import React, { useContext } from "react";

import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((image, index) => {
    return <Image key={image.id} img={image} className={getClass(index)} />;
  });

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
