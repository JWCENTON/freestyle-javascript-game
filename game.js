// initGame();
//
// function initGame() {
//
//     // Your game can start here, but define separate functions, don't write everything in here :)
//
// }

let snakeElement = document.getElementById("snake-element");
console.log(snakeElement);
let snakeElementStyles = getComputedStyle(snakeElement);
console.log(snakeElementStyles)
let gridColumnStart = snakeElementStyles.getPropertyValue("grid-column-start");
console.log(gridColumnStart)

/** direction: R, L, U, D */
let direction = 'R';


function moveSnake() {
    let snakeElementStyles = getComputedStyle(snakeElement);
    let root = document.querySelector(':root');
    let rootStyles = getComputedStyle(root);
    var xposition = parseInt(rootStyles.getPropertyValue('--xposition'));
    var yposition = parseInt(rootStyles.getPropertyValue('--yposition'));
    switch(direction) {
        case "R":
            xposition++;
            break;
        case "L":
            xposition--;
            break;
        case "U":
            yposition--;
            break;
        case "D":
            yposition++;
            break;
    }
    root.style.setProperty('--xposition', xposition.toString());
    root.style.setProperty('--yposition', yposition.toString());
}

setInterval(moveSnake,1000);


