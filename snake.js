//board
let tile=25;
let rows=20;
let columns=20;
let context;
//score;
let score=0;
//snake

let snakeX=tile*5;
let snakeY=tile*5;
let snakeWidth=tile;
let snakeheight=tile;
let velocityX=0;
let velocityY=0;
//snake body
let snakebody=[];

//gameover
let gameover=false;
//food
let foodX;
let foodY;
let foodWidth=tile;
let foodheight=tile;
//gamover
window.onload=function()
{
    let board=document.getElementById("board");
    board.width=columns*tile;
    board.height=rows*tile;
    context=board.getContext("2d");
   document.addEventListener("keyup",changeDirection);
    placeFood();
    
   setInterval(update,1000/10);
}
function update()
{
    if(gameover)
    {
     
    context.fillStyle = "red";
    context.font = "32px Courier";
    context.fillText("GAME OVER", (tile*columns) / 2 - 100, (tile*rows) / 2);   
        return;
    }
   
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);
  context.fillStyle = "white";
context.font = "20px Courier";
context.fillText("Score: " + score, 10, 20);

    context.fillStyle="red";
context.fillRect(foodX,foodY,foodWidth,foodheight);
if(snakeX===foodX && snakeY== foodY)
{
    snakebody.push([foodX,foodY]);
    score+=10;
    placeFood();
}
//moving one forward
for(let i=snakebody.length-1;i>0;i--){
    snakebody[i]=snakebody[i-1];
}
//assigningthe sanke head
if(snakebody.length)
{
    snakebody[0]=[snakeX,snakeY];
}
    context.fillStyle="lime";
    snakeX+=velocityX*tile;
    snakeY+=velocityY*tile;
    console.log(snakeY);
    console.log(snakeX);
    //drawing the sanke head
    context.fillRect(snakeX,snakeY,snakeWidth,snakeheight);
    //drawing snake remaining body
    for(let i=0;i<snakebody.length;i++)
    {
      context.fillRect(snakebody[i][0],snakebody[i][1],tile,tile);
    }
   //game over condition
   if(snakeX<0 || snakeX>=columns*tile || snakeY<0 || snakeY>=rows*tile)
   {
    gameover=true;
    alert("Game Over");
   }
   for(let i=0;i<snakebody.length;i++)
   {
    if(snakeX==snakebody[i][0]  && snakeY=== snakebody[i][1])
    {
        gameover=true;
        alert("Game Over");
    }
   }


}
function placeFood()
{
    foodX=Math.floor(Math.random()*rows)*25;
    foodY=Math.floor(Math.random()*columns)*25;
}
function changeDirection(e)
{
if(e.code==="ArrowUp" && velocityY!=1)
{
 velocityY=-1;
 velocityX=0;  
}
else if(e.code==="ArrowDown" && velocityY!=-1)
{
velocityY=1;
velocityX=0;
}
else if(e.code==="ArrowLeft" && velocityX!=1)
{
    velocityX=-1;
    velocityY=0
}
else if(e.code==="ArrowRight" && velocityX!=-1)
{
    velocityX=1;
    velocityY=0;
}
}
