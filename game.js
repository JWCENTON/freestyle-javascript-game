let applePosition = getRandomApplePosition(); // { x: 10, y: 10 };
const gameBoard = document.querySelector(".game-container");
customizeSnake();

function drawApple() {
    const appleElement = document.createElement("div");
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add("apple", "item");
    gameBoard.appendChild(appleElement);
}

function endGame(text) {
  const header = document.querySelector('.category-header');
  header.classList.remove("hidden");
  header.classList.add("game-over-text");
  header.textContent = text;

  const background = document.createElement("div");
  background.classList.add("game-over-background");
  document.body.insertAdjacentElement("afterbegin", background);
}

function randomGridPosition() {
    let gameBoardSize = 20;
    return {
        x: Math.floor(Math.random() * gameBoardSize) + 1, // random number from 1 to 20
        y: Math.floor(Math.random() * gameBoardSize) + 1, // random number from 1 to 20
    };
}

function getRandomApplePosition() {

  let newApplePosition;
  while (newApplePosition == null /*|| whereSnakeIs(newApplePosition)*/) {
    newApplePosition = randomGridPosition();
  }

  return newApplePosition;

}

function whereSnakeIs(newApplePosition) {
  return snakePosition.some(segment => { 
    return segment.x === newApplePosition.x && newApplePosition.x === newApplePosition.y
  })
}

/** direction: R, L, U, D */
let direction = "D";
let snakePosition = [
    {x: 6, y: 1},
    {x: 5, y: 1},
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 1},
];

function getDirection() {
    return direction;
}

function updatePosition() {
    const last_x = snakePosition[snakePosition.length - 1].x;
    const last_y = snakePosition[snakePosition.length - 1].y;
    const direction = getDirection();
    console.log("Direction: " + direction);
    for (let index = snakePosition.length - 1; index > 0; index--) {
        snakePosition[index].x = snakePosition[index - 1].x;
        snakePosition[index].y = snakePosition[index - 1].y;
    }
    switch (direction) {
        case "R":
            if (snakePosition[0].x == 21) snakePosition[0].x = 0;
            snakePosition[0].x++;
            break;
        case "L":
            if (snakePosition[0].x == 0) snakePosition[0].x = 21;
            snakePosition[0].x--;
            break;
        case "U":
            if (snakePosition[0].y == 0) snakePosition[0].y = 21;
            snakePosition[0].y--;
            break;
        case "D":
            if (snakePosition[0].y == 21) snakePosition[0].y = 0;
            snakePosition[0].y++;
            break;
    }


    for (let i = 4; i < snakePosition.length; i++) {
        if (snakePosition[0].x == snakePosition[i].x && snakePosition[0].y == snakePosition[i].y)
            return false;
    }

    if (snakePosition[0].x < 21 && snakePosition[0].x > 0 && snakePosition[0].y > 0 && snakePosition[0].y < 21)
        return true;
    return false;

    /* if snakePosition[0] enters apple then add new snake segment (last_x, last_y) */
}

function moveSnake() {
    let snakeElement = document.getElementById("snake0");
    if (snakeElement === null) {
        // let gameBoard = document.querySelector(".game-container"); --made global variable
        for (let i = 0; i < snakePosition.length; i++) {
            snakeElement = document.createElement("div");
            snakeElement.style.gridRowStart = snakePosition[i].y;
            snakeElement.style.gridColumnStart = snakePosition[i].x;
            snakeElement.id = "snake" + i.toString();
            if (i === 0) {
                snakeElement.classList.add("snake-head", "item");
                const snakeHead = snakeElement;
                snakeHead.classList.add("snake-head", "item");
                window.addEventListener("keydown", (event) => {
                    switch (event.key) {
            case "ArrowUp":
              snakeHead.classList.remove("rotate-left", "rotate-right", "rotate-bottom");
              break;
            case "ArrowDown":
              snakeHead.classList.remove("rotate-left", "rotate-right");
              snakeHead.classList.add("rotate-bottom");
              break;
            case "ArrowLeft":
              snakeHead.classList.remove("rotate-right", "rotate-bottom");
              snakeHead.classList.add("rotate-left");
              break;
            case "ArrowRight":
              snakeHead.classList.remove("rotate-left", "rotate-bottom");
              snakeHead.classList.add("rotate-right");
              break;
          }
        });
            } else {
                snakeElement.classList.add("snake", "item");
            }
            gameBoard.appendChild(snakeElement);
        }
    } else {
      if (updatePosition()) {

            for (let i = 0; i < snakePosition.length; i++) {
                snakeElement = document.getElementById("snake" + i.toString());
                snakeElement.style.gridRowStart = snakePosition[i].y;
                snakeElement.style.gridColumnStart = snakePosition[i].x;
            }
        } else {
            clearInterval(interval);
            console.log("End game");
        }
    }
}

function serveDirection() {
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                if (direction === "D") break;
                direction = "U";
                break;
            case "ArrowDown":
                if (direction === "U") break;
                direction = "D";
                break;
            case "ArrowLeft":
                if (direction === "R") break;
                direction = "L";
                break;
            case "ArrowRight":
                if (direction === "L") break;
                direction = "R";
                break;
        }
    });
}

let interval = null;


function snakeSpeedAndMove() {
    if (interval != null) {
        clearInterval(interval);
    }
    if (snakePosition.length >= 3) {
        interval = setInterval(moveSnake, 500);
    } else if (snakePosition.length >= 10) {
        interval = setInterval(moveSnake, 250);
    } else {
        interval = setInterval(moveSnake, 1000);
    }
}

let startButton = document.getElementById("start-game");

function clickToStartGame() {
    startButton.addEventListener("click", (e) => {
        e.currentTarget.style.visibility = "hidden";

        document.body.style.setProperty("--snakeColor", "rgb(6, 214, 160)");
        document.body.style.setProperty("--snakeShape", "1rem");
        document.body.style.setProperty("--snakeBorderColor", "transparent");

        Array.from(document.querySelectorAll('button')).forEach(button => {
            button.remove();
        });
    document.querySelector(".category-header").classList.add("hidden");
    initGame();
  });
}

clickToStartGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    serveDirection();
    drawApple();
    snakeSpeedAndMove();
}

function createSnake() {
    const snake = [];
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.classList.add("item", "snake");
        div.style.gridColumnStart = 8;
        div.style.gridRowStart = i + 7;
        snake.push(div);
    }

    snake[0].classList.remove("snake");
    snake[0].classList.add("snake-head");

    snake.forEach((s) => {
        gameBoard.insertAdjacentElement("afterbegin", s);
    });
}

function customizeSnake() {
    let snakeColor = "";
    let snakeShape = "";
    let borderColor = "";
    const category = document.querySelector(".category-header");

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
            gameBoard.insertAdjacentElement("beforeend", button);

            x += 6;

            if (x == 21) {
                x = 3;
                y += 6;
            }
        }
        return Array.from(document.querySelectorAll("button"));
    })();

    const startGame = function (chosenButton) {
        snakeShape = chosenButton.style.borderRadius;
        category.classList.add("hidden")
        deleteButtons();
        document.body.style.setProperty("--snakeColor", snakeColor);
        document.body.style.setProperty("--snakeShape", snakeShape);
        document.body.style.setProperty("--snakeBorderColor", borderColor);
        initGame();
    };

    const chooseSnakeShape = function (chosenButton) {
        category.textContent = "Choose snake shape";

        borderColor = chosenButton.style.borderColor;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.borderColor = borderColor;
            buttons[i].animate([{borderRadius: `${6.5 * i}%`}], 500);
            setTimeout(() => {
                buttons[i].style.borderRadius = `${6.5 * i}%`;
            }, 450);

            buttons[i].onclick = () => {
                buttons.forEach((button) => {
                    button.onclick = null;
                    button.animate(
                        [{borderRadius: buttons[i].style.borderRadius}],
                        500
                    );
                });
                setTimeout(() => {
                    startGame(buttons[i]);
                }, 450);
            };
        }
    };

    // const chooseBorderStyle = function (chosenButton) {
    //   category.textContent = "Choose border style";
    //
    //   borderColor = chosenButton.style.borderColor;
    //
    //   const borderStyles = [
    //     "hidden",
    //     "dotted",
    //     "dashed",
    //     "solid",
    //     "double",
    //     "dotted solid",
    //     "dotted dashed",
    //     "double solid",
    //     "solid double",
    //   ];
    //
    //   for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].style.borderColor = borderColor;
    //     buttons[i].style.borderStyle = borderStyles[i];
    //     buttons[i].onclick = chooseSnakeShape;
    //   }
    // };

    const chooseBorderColor = function (chosenButton) {
        category.textContent = "Choose border color";

        snakeColor = chosenButton.style.backgroundColor;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = snakeColor;
            buttons[i].style.borderStyle = "solid";
            buttons[i].style.borderColor = "transparent";

            const borderColor =
                i === 0 ? "transparent" : `rgb(${i * 28}, ${i * 28}, ${i * 28})`;

            buttons[i].animate(
                [
                    {
                        borderColor: borderColor,
                    },
                ],
                500
            );
            setTimeout(() => {
                buttons[i].style.borderColor = borderColor;
            }, 450);

            buttons[i].onclick = () => {
                buttons.forEach((button) => {
                    button.onclick = null;
                    button.animate([{borderColor: buttons[i].style.borderColor}], 500);
                });
                setTimeout(() => {
                    chooseSnakeShape(buttons[i]);
                }, 450);
            };
        }
    };

    (function chooseSnakeColor() {
        const colors = [
            "#ef476f",
            "#ffd166",
            "#06d6a0",
            "#118ab2",
            "#073b4c",
            "#c19ab7",
            "#9c95dc",
            "#dcc48e",
            "#605b56",
        ];
        category.textContent = "Choose snake color";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = colors[i];
            buttons[i].onclick = () => {
                buttons.forEach((button) => {
                    button.onclick = null;
                    button.animate(
                        [{backgroundColor: buttons[i].style.backgroundColor}],
                        500
                    );
                });
                setTimeout(() => {
                    chooseBorderColor(buttons[i]);
                }, 450);
            };
        }
    })();
}
