export const renderImg = (colors) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const width = 256;
  const height = 128;

  const imageData = ctx.createImageData(width, height);

  ctx.clearRect(20, 20, width, height);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const count = i / 4;
    let x = Math.floor(Math.random() * width); // It generates a different 'coordinate' each time the function is called.
    let y = Math.floor(Math.random() * height);
    let coord = (y * imageData.width + x) * 4; // Line responsible to change the 'shape' of the image.
    imageData.data[coord] = colors[count].red; //r
    imageData.data[coord + 1] = colors[count].green; //g // Inserting the colors combination
    imageData.data[coord + 2] = colors[count].blue; //b
    imageData.data[coord + 3] = 255; //a
  }

  // Function responsible to process an image each time the function is called.

  ctx.putImageData(imageData, 20, 20);
};

//CICERO TEIXEIRA
