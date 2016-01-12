function starttime(){
    
    timer.innerHTML=Game.time ;
        var timefu = setInterval(function(){
           if(Game.time>0) {
            Game.time=Game.time-100;
             timer.innerHTML=Game.time ;
         } else{
            clearInterval(timefu);
            container.remove();
            gameOver.style.display = "block" ;
            playAgain.style.display = "block" ;
         }

        }, 100); // call doMove in 20msec //end set interval 

} // end starttime function 