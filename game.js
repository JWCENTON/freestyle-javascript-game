let applePosition = getRandomApplePosition(); // { x: 10, y: 10 };

function drawApple() {
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add('apple', 'item');
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement);
};

function randomGridPosition() {
    let gameBoardSize = 20
    return {
      x: Math.floor(Math.random() * gameBoardSize) + 1, // random number from 1 to 20
      y: Math.floor(Math.random() * gameBoardSize) + 1, // random number from 1 to 20
    };
};

function getRandomApplePosition () {
    let newApplePosition;
    while (newApplePosition == null /* || snake_position */) {
        newApplePosition = randomGridPosition()
    };
    return newApplePosition;
};

/** direction: R, L, U, D */
let direction = 'R';

let snakePosition = [
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 1}
];

function getDirection() {
    return direction
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

function serveDirection() {
    window.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                direction = "U"
                break
            case 'ArrowDown':
                direction = "D"
                break
            case 'ArrowLeft':
                direction = "L"
                break
            case 'ArrowRight':
                direction = "R"
                break
        }
    })
}

function snakeSpeedAndMove() {
    if (snakePosition.length >= 3) {
        setInterval(moveSnake, 500);
    } else if (snakePosition.length >= 10) {
        setInterval(moveSnake, 250);
    } else {
        setInterval(moveSnake, 1000);
    };
};

let startButton = document.getElementById("start-game");
function clickToStartGame () {
    startButton.addEventListener('click', e=> {
        e.currentTarget.style.visibility='hidden';
        initGame();
    });
};

clickToStartGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    serveDirection();
    drawApple();
    snakeSpeedAndMove();
}



