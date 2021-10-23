import React, { useState } from "react";

import { colorGenerator } from "../utils/colorGenerator.js";

const Main = () => {
  const [image, setImage] = useState(colorGenerator());
  const [time, setTime] = useState(0);

  const handleImage = () => {
    const start = new Date().getTime();
    setImage(colorGenerator);
    const end = new Date().getTime();
    setTime((end - start) / 1000);
  };

  return (
    <>
      {image}
      <button onClick={() => handleImage()}>CLICK</button>
      <p>Processing time: {`${time}`}ms</p>
    </>
  );
};

export default Main;

//CICERO TEIXEIRA
