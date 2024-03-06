const canvas = document.querySelector(".main-container");
const button = document.querySelector("button");
/* FILL UPON LOADING*/
window.addEventListener("load", () => {
  for (let length = 0; length < 16; length++) {
    for (let width = 0; width < 16; width++) {
      const pixels = document.createElement("div");
      pixels.className = "pixels";
      canvas.append(pixels);
    }
  }
});

button.addEventListener("click", () => {
  let size = prompt("Enter size: ");
  fillGrid(size);
});

/*MAIN FUNCTION*/
function fillGrid(sideLength) {
  if (sideLength > 64) {
    alert("64 is max");
    return;
  }
  resetGrid();

  for (let length = 0; length < sideLength; length++) {
    for (let width = 0; width < sideLength; width++) {
      const pixels = document.createElement("div");
      pixels.className = "pixels";
      pixels.style.flex = `1 1 calc(100%/${sideLength})`;

      canvas.append(pixels);
    }
  }
}

function resetGrid() {
  canvas.innerHTML = "";
}
// add function for adding click listener to pixel divs
