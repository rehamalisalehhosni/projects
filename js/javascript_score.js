///Dahlia
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function incrementScore(){

Game.score +=  parseInt(Game.levels.diedAfter)*100;
console.log(Game.score);

var scorehtml=document.getElementById('score');
scorehtml.innerHTML=Game.score;
}

function level() {

var level=document.getElementById('level');
level.innerHTML=Game.levels.Nolevel;
}
function life() {

var life=document.getElementById('life');
life.innerHTML=Game.lives;
}