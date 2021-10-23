import { renderImg } from "./renderImg.js";

export const colorGenerator = () => {
  const colors = [];
  const steps = 32;

  for (let red = 0; red < steps; red++) {
    for (let green = 0; green < steps; green++) {
      for (let blue = 0; blue < steps; blue++) {
        colors.push({
          red: Math.round((red * 255) / (steps - 1)),
          green: Math.round((green * 255) / (steps - 1)),
          blue: Math.round((blue * 255) / (steps - 1)),
        });
      }
    }
  }

  // This function is responsible to generate all the unique colors combination with a total of 32.768. I decided
  // to generate from 0,0,0 to 255,255,255

  renderImg(colors);
};

//CICERO TEIXEIRA
