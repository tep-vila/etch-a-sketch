const canvas = document.querySelector(".main-container");

/* FILL UPON LOADING*/
fillGrid(16);

function fillGrid(sideLength) {
  for (let length = 0; length < sideLength; length++) {
    for (let width = 0; width < sideLength; width++) {
      const pixels = document.createElement("div");
      pixels.className = "pixels";
      canvas.append(pixels);
    }
  }
}
