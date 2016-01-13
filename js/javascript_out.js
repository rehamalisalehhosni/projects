var gameOver = document.getElementById('gameOver');
var playAgain = document.getElementById('playAgain');
var timer = document.getElementById('timer');

playAgain.onclick = function() {
    location.href = "index.html";
};

var timefu2 ;
function starttime() {
    timer.innerHTML = Game.time;
    timefu2 = setInterval(fuTime,100); // call doMove in 20msec //end set interval 
} // end starttime function 

function fuTime() {
    if (Game.time > 0) {
        Game.time = Game.time - 100;
        timer.innerHTML = Game.time;
    } else {
        clearInterval(timefu2);
        tryAgain();
    }
}
function tryAgain() {
    var aliens = document.getElementById('aliens');
    Game.lives=Game.lives-1;
     console.log(Game.lives);
    if (Game.lives == 0) {
        container.remove();
        gameOver.style.display = "block";
        playAgain.style.display = "block";
    }else {
        Game.levels.noAliens = Game.levels.noAliens;
        Game.levels.Nolevel = Game.levels.Nolevel;
        Game.levels.timemovein3px = Game.levels.timemovein3px;
        aliens.innerHTML = '';
        Game.levels.Aliens = [];
        tempalinenarray = [];
        console.log(Game.levels.noAliens);
        StartGameContainer(Game.username, Game.levels.Nolevel, Game.levels.noAliens, Game.time, Game.charName, Game.levels.diedAfter, Game.score, Game.lives, Game.levels.timemovein3px);
    }
}