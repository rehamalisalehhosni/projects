// Fathi
function alienOperations(id) {
    var click = Game.levels.Aliens[id - 1].noClick;
    click++;

    var shape = Game.levels.Aliens[id - 1].id;
    var x = "alian_" + shape;
    var a = document.getElementById(x);
    if (click == Game.levels.diedAfter) {
        a.setAttribute('style', 'display:none');
        var audio = new Audio('./audio/neck_snap.mp3');
        audio.play();
        Game.levels.Aliens[id - 1].live = false;
        //  incrementScore();
        tempalinenarray.push(id - 1);
        incrementScore();
        checkAlines();
    }
}
function checkAlines() {
    var aliens = document.getElementById('aliens');
    if (tempalinenarray.length == Game.levels.Aliens.length) {
        Game.levels.noAliens = Game.levels.noAliens + 10;
        Game.levels.Nolevel = Game.levels.Nolevel++;
        Game.levels.timemovein3px = 60;
        aliens.innerHTML = '';
        Game.levels.Aliens=[];
        tempalinenarray=[];
        StartGameContainer(Game.username, Game.levels.Nolevel, Game.levels.noAliens, Game.time, Game.charName, Game.levels.diedAfter, 0, Game.lives, Game.levels.timemovein3px);

    }// enf if

} //end of fun
