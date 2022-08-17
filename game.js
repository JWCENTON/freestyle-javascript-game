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
let direction = 'R';
let snakePosition = [{x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 1}]


function moveSnake() {
    let snakeElement = document.getElementById('snake');
    if (snakeElement === null) {
        for (let i = 0; i < snakePosition.length; i++) {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snakePosition[i].y;
        snakeElement.style.gridColumnStart = snakePosition[i].x;
        snakeElement.classList.add('snake-element');
        snakeElement.id = "snake";
        let gameBoard = document.querySelector('.game-container');
        gameBoard.appendChild(snakeElement);
        }
    } else {
        switch (direction) {
            case "R":
                snakePosition[0].x++;
                snakePosition[1] = snakePosition[0];
                snakePosition[2] = snakePosition[1];
                // snakePosition[1].x++;
                // snakePosition[2].x++;
                break;
            case "L":
                snakePosition.x--;
                break;
            case "U":
                snakePosition.y--;
                break;
            case "D":
                snakePosition.x++;
                break;
        }
        snakeElement.style.gridRowStart = snakePosition[0].y;
        snakeElement.style.gridColumnStart = snakePosition[0].x;
        console.log('Ruszam się 1');
        snakeElement.style.gridRowStart = snakePosition[1].y;
        snakeElement.style.gridColumnStart = snakePosition[1].x;
        console.log('Ruszam się 2');
        snakeElement.style.gridRowStart = snakePosition[2].y;
        snakeElement.style.gridColumnStart = snakePosition[2].x;
        console.log('Ruszam się 3');
    }
}

initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    drawApple();
    setInterval(moveSnake, 1000);
}



