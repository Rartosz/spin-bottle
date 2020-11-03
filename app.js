let players=2;
let addPlayers8MaxBtn= document.querySelector(".add-classic");
let delatePlayers8MaxBtn = document.querySelector(".delate-classic");
let classicGameBtn = document.querySelector(".classic-game-btn");
let startBtn = document.querySelector(".start-button");

let circle = document.querySelector(".circle");

let polygons = [...document.querySelectorAll(".polygon")];

let addPlayers8Max = function() 
{
    if(players==8)
    {
        players=8;
    }
    else
    {
        players++;
        let players_show = document.querySelector("h4");
        players_show.textContent = players;
    }

}


let delatePlayers = function() 
{
    if(players==2)
    {
        players=2;
    }
    else
    {
        players--;
        let players_show = document.querySelector("h4");
        players_show.textContent = players;
    }

}



let howManyParts = function() 
{
    let rotate = 360/players;
    let adrotate = rotate;
    let skew = 90 - rotate;

    if(players>3)
    {
        for(let i=0; i<players; i++)
    {
        polygons[i].style.display="flex";
      
        polygons[i].style.transform = `rotate(${rotate}deg) skewY(${-1*skew}deg)`;
         rotate=rotate+adrotate;
        
    }

    }
    else if(players==2)
    {
        let r=0;
        
        for(let i=0; i<2; i++)
        {
            polygons[i].style.display="flex";
            polygons[i].style.transform = `rotate(${r}deg) skewY(${-1*r}deg)`;
            polygons[i].style.transformOrigin = `0% 50%`;
            polygons[i].style.width = "50%";
            polygons[i].style.height = "100%";
            r=180;
        }
    }
    
}




addPlayers8MaxBtn.addEventListener("click", addPlayers8Max);
delatePlayers8MaxBtn.addEventListener("click", delatePlayers);

classicGameBtn.addEventListener("click", function() 
{
    let mainMenu = document.querySelector(".main-menu");
    let addUsersClassic = document.querySelector(".add-users-classic");

    mainMenu.style.display = "none";
    addUsersClassic.style.display = "flex";
    
});

startBtn.addEventListener("click", function() 
{
    let addUsersClassic = document.querySelector(".add-users-classic");
    addUsersClassic.style.display = "none";
    let classicSpin = document.querySelector(".classic-spin-container");
    classicSpin.style.display = "flex";

    howManyParts();
});

