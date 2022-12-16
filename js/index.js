//Game Constants And Variables
let direction = { x: 0, y: 0 };
let foodSound = new Audio("food.mp3");
let gameOverSound = new Audio("gameover.mp3");
let moveSound = new Audio("move.mp3");
let musicSound = new Audio("music.mp3");
let speed = 2; //i.e 1/2 means  after 0.5sec screen change
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }]; //add the food after eat in this array
food = { x: 6, y: 7 };

//Game Function
function main(ctime) {
  //currentTIME
  window.requestAnimationFrame(main); // to render the screen
  //to convert the miliseconds to seconds divde by 1000
//   console.log(ctime);
  if ((ctime - lastPaintTime) / 100 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function gameEngine() {
  //part 1:Updating the snake array

  //part 2: Display the snake and Food
  //Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y; //y=row
    snakeElement.style.gridColumnStart = e.x; //x=column
    if (index == 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  // Display Food

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y; //y=row
  foodElement.style.gridColumnStart = food.x; //x=column
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}//start the game
     moveSound.play();
switch (e.key) {
            case "ArrowUp":
                console.log("ArrowUp");
                inputDir.x = 0;
                inputDir.y = -1;
                break;
    
            case "ArrowDown":
                console.log("ArrowDown");
                inputDir.x = 0;
                inputDir.y = 1;
                break;
    
            case "ArrowLeft":
                console.log("ArrowLeft");
                inputDir.x = -1;
                inputDir.y = 0;
                break;
    
            case "ArrowRight":
                console.log("ArrowRight");
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }
    
        }
    });
