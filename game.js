let applePosition = { x: 10, y: 10 };

function drawApple() {
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add('apple', 'item');
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement);
}




// let snakeElement = document.getElementById("snake-element");
// console.log(snakeElement);
// let snakeElementStyles = getComputedStyle(snakeElement);
// console.log(snakeElementStyles)
// let gridColumnStart = snakeElementStyles.getPropertyValue("grid-column-start");
// console.log(gridColumnStart)

/** direction: R, L, U, D */
let direction = 'R';
let snakePosition = { x: 1, y: 1};

function moveSnake() {
    // let snakeElementStyles = getComputedStyle(snakeElement);
    // let root = document.querySelector(':root');
    // let rootStyles = getComputedStyle(root);
    // var xposition = parseInt(rootStyles.getPropertyValue('--xposition'));
    // var yposition = parseInt(rootStyles.getPropertyValue('--yposition'));
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
                snakePosition.x++;
                break;
        }
        snakeElement.style.gridRowStart = snakePosition.y
        snakeElement.style.gridColumnStart = snakePosition.x;
    }
}
    // root.style.setProperty('--xposition', xposition.toString());
    // root.style.setProperty('--yposition', yposition.toString());



initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    drawApple();
    setInterval(moveSnake,1000);
}



