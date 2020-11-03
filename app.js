let players=2;
let addPlayers8MaxBtn= document.querySelector(".add-classic");
let delatePlayers8MaxBtn = document.querySelector(".delate-classic");
let classicGameBtn = document.querySelector(".classic-game-btn");
let startBtn = document.querySelector(".start-button");
let spinScenery = document.querySelector(".spin-scenery");

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
});

spinScenery.addEventListener("click", function() 
{
    let bottle = document.querySelector(".bottle-spin");

    bottle.classList.add("bottle-spin-animation-class");

    setTimeout(function()
    {
        bottle.classList.remove("bottle-spin-animation-class");
    },3100);
    
});