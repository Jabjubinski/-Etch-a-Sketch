//containers
const divContainer = document.querySelector(".container");
const gridSizeValue = document.querySelector(".grid-size-value");
//buttons
const clear = document.getElementById("clear");
const btnCreate = document.getElementById("btn-create");
const rainbow = document.getElementById("rainbow");
const monoChrome = document.getElementById("monochrome");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const backgroundColor = document.getElementById("background-color");
//grid rows and columns inputs
const gridNumber = document.getElementById("grid-number");

//grid pixel number changer event listener
gridNumber.addEventListener("input", () => {
  gridSizeValue.innerHTML = `${gridNumber.value} x ${gridNumber.value}`;
  divContainer.innerHTML = "";

  for (let i = 0; i < gridNumber.value * gridNumber.value; i++) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.style.width = `calc(100%/${gridNumber.value})`;
    pixel.style.backgroundColor = `${backgroundColor.value}`;
    pixel.setAttribute("data-index", i);
    divContainer.appendChild(pixel);
  }
});
//grid making function
const allPixel = document.querySelectorAll(".pixel");

rainbow.addEventListener("click", () => {
  allPixel.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      const r = Math.floor(Math.random() * 257);
      const g = Math.floor(Math.random() * 257);
      const b = Math.floor(Math.random() * 257);

      pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  });
});
monoChrome.addEventListener("click", () => {
  allPixel.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      pixel.style.backgroundColor = `${color.value}`;
    });
  });
});
eraser.addEventListener("click", () => {
  pixel.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      pixel.style.backgroundColor = `${backgroundColor.value}`;
    });
  });
});
backgroundColor.addEventListener("input", () => {
  allPixel.forEach((pixel) => {
    pixel.style.backgroundColor = `${backgroundColor.value}`;
  });
});

clear.addEventListener("click", () => {
  allPixel.forEach((pixel) => {
    pixel.style.backgroundColor = `${backgroundColor.value}`;
  });
});

window.onload = () => {
  for (let i = 0; i < 16 * 16; i++) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.style.width = `calc(100%/${gridNumber.value})`;
    pixel.style.backgroundColor = `${backgroundColor.value}`;
    pixel.setAttribute("data-index", i);
    divContainer.appendChild(pixel);
  }
};
