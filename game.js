let apple = { x: 10, y: 10 };

function drawApple() {
    const appleElement = document.createElement('div')
    appleElement.style.gridRowStart = apple.y + 'px'
    appleElement.style.gridColumnStart = apple.x + 'px'
    appleElement.classList.add('apple', 'item')
    let gameBoard = document.querySelector('.game-container');
    gameBoard.appendChild(appleElement)
};

drawApple();

initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

