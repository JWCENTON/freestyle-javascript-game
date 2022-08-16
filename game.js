let applePosition = { x: 10, y: 10 };

function drawApple() {
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = applePosition.y;
    appleElement.style.gridColumnStart = applePosition.x;
    appleElement.classList.add('apple', 'item');
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement);
};


initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

    drawApple();

}

