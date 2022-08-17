let applePosition = { x: 10, y: 10 };

function drawApple() {
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add('apple', 'item');
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement);
}

/** direction: R, L, U, D */
let direction = 'R';
let snakePosition = { x: 1, y: 1};

function moveSnake() {
    let snakeElement = document.getElementById('snake');
    if (snakeElement === null) {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snakePosition.y;
        snakeElement.style.gridColumnStart = snakePosition.x;
        snakeElement.classList.add('snake-element');
        snakeElement.id = "snake";
        let gameBoard = document.querySelector('.game-container');
        gameBoard.appendChild(snakeElement);
    } else {
        switch (direction) {
            case "R":
                snakePosition.x++;
                break;
            case "L":
                snakePosition.x--;
                break;
            case "U":
                snakePosition.y--;
                break;
            case "D":
                snakePosition.y++;
                break;
        }
        snakeElement.style.gridRowStart = snakePosition.y
        snakeElement.style.gridColumnStart = snakePosition.x;
    }
}


initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    drawApple();
    setInterval(moveSnake,1000);
}



