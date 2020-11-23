var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");

function jump()
{
    if (character.classList != "animate")
    {
        character.classList.add("animate"); 
    }

    setTimeout (function(){
        character.classList.remove("animate"); 
    } , 500)
}

var endGame = setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("margin-left"));
    if (obLeft < 20 && obLeft >0 && charTop >= 130)
    {
        obstacle.style.display = "none";
        alert ("You Lose!");
    }
},10)

//