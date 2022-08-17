let applePosition = {x: 10, y: 10};

function drawApple() {
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add('apple', 'item');
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement);
}


/** direction: R, L, U, D */
let direction = 'D';
let snakePosition = [
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 1}
];


function updatePosition() {
    const last_x = snakePosition[snakePosition.length - 1].x;
    const last_y = snakePosition[snakePosition.length - 1].y;
    for (let index = snakePosition.length - 1; index > 0; index--) {
        snakePosition[index].x = snakePosition[index - 1].x;
        snakePosition[index].y = snakePosition[index - 1].y;
    }
    switch (direction) {
        case "R":
            snakePosition[0].x++;
            break;
        case "L":
            snakePosition[0].x--;
            break;
        case "U":
            snakePosition[0].y--;
            break;
        case "D":
            snakePosition[0].y++;
            break;
    }
    /* if snakePosition[0] enters apple then add new snake segment (last_x, last_y) */
}

function moveSnake() {
    let snakeElement = document.getElementById('snake0');
    if (snakeElement === null) {
        let gameBoard = document.querySelector('.game-container');
        for (let i = 0; i < snakePosition.length; i++) {
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = snakePosition[i].y;
            snakeElement.style.gridColumnStart = snakePosition[i].x;
            snakeElement.classList.add('snake-element');
            snakeElement.id = "snake" + i.toString();
            gameBoard.appendChild(snakeElement);
        }
    } else {
        updatePosition();
        for (let i = 0; i < snakePosition.length; i++) {
            snakeElement = document.getElementById("snake" + i.toString())
            snakeElement.style.gridRowStart = snakePosition[i].y;
            snakeElement.style.gridColumnStart = snakePosition[i].x;
        }

    }
}

initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    drawApple();
    setInterval(moveSnake, 1000);
}



