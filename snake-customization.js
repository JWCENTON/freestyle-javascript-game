const category = document.querySelector(".category-header");
const container = document.querySelector(".game-container");

let snakeColor = "";
let snakeShape = "";
let snakeBorder = "";
let borderColor = "";

const deleteButtons = function () {
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((element) => {
    element.remove();
  });
};

const buttons = (function () {
  let x = 3;
  let y = 2;
  for (let i = 0; i < 9; ++i) {
    const button = document.createElement("button");
    button.classList.add("color-element");
    button.style.gridColumn = `${x} / ${x + 4}`;
    button.style.gridRow = `${y} / ${y + 4}`;
    container.insertAdjacentElement("beforeend", button);

    x += 6;

    if (x == 21) {
      x = 3;
      y += 6;
    }
  }
  return Array.from(document.querySelectorAll("button"));
})();


const startGame = function (event) {
  category.textContent = "";
  const chosenButton = event.target;
  snakeShape = chosenButton.style.borderRadius;


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderRadius = snakeShape;
  }
}

const chooseSnakeShape = function (event) {
  category.textContent = "Choose snake shape";

  const chosenButton = event.target;
  snakeBorder = chosenButton.style.borderStyle;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderStyle = snakeBorder;
    buttons[i].style.borderRadius = `${6.5 * i}%`
    buttons[i].onclick = startGame;
  }
}

const chooseBorderStyle = function (event) {
  category.textContent = "Choose border style";

  const chosenButton = event.target;
  borderColor = chosenButton.style.borderColor;

  const borderStyles = [
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "dotted solid",
    "dotted dashed",
    "double solid",
    "solid double",
  ];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderColor = borderColor;
    buttons[i].style.borderStyle = borderStyles[i];
    buttons[i].onclick = chooseSnakeShape;
  }
};

const chooseBorderColor = function (event) {
  category.textContent = "Choose border color";

  const chosenButton = event.target;
  snakeColor = chosenButton.style.backgroundColor;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = snakeColor;
    buttons[i].style.borderStyle = "solid";
    buttons[i].style.borderColor = `rgb(${i * 28}, ${i * 28}, ${i * 28})`;
    buttons[i].onclick = chooseBorderStyle;
  }
};

(function chooseSnakeColor() {
  const colors = [
    "#8A9597",
    "#999950",
    "#1B5583",
    "#B44C43",
    "#1C1C1C",
    "#BDECB6",
    "#F3A505",
    "#CB3234",
    "#2D572C",
  ];
  category.textContent = "Choose snake color";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = colors[i];
    buttons[i].onclick = chooseBorderColor;
  }
})();
