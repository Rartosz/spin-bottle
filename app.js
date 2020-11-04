let players=2;
let addPlayers8MaxBtn= document.querySelector(".add-classic");
let delatePlayers8MaxBtn = document.querySelector(".delate-classic");
let classicGameBtn = document.querySelector(".classic-game-btn");
let startBtn = document.querySelector(".start-button");
let circle = document.querySelector(".circle");
let addPlayer = document.querySelector(".add-player");
let polygons = [...document.querySelectorAll(".polygon")];

let playersArray = [];

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
        
    polygons[0].style.display="flex";
    polygons[0].style.transform = `rotate(${0}deg) skewY(${-1*skew}deg)`;

    for(let i=1; i<players; i++)
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

    else if(players==3)
    {
        let rot=0;
        let sk = 30;
        for(let i=0; i<3; i++)
        {
            polygons[i].style.display="flex";
            polygons[i].style.transform = `rotate(${rot}deg) skewY(${sk}deg)`;
            polygons[i].style.transformOrigin = `0% 100%`;
            polygons[i].style.width = "70%";
            polygons[i].style.height = "70%";
            polygons[i].style.top = "-20%";
            polygons[i].style.right = "-20%";

            rot=rot+120;
        }
    }
    
}


let showEffect = function(bottleRotate) 
{
    
    let result = document.querySelector(".result")
    let deg = 360/players;

    
    for(let i=0; i<players; i++)
    {
    
        if(bottleRotate>=(i*deg) && bottleRotate<(deg*(i+1)))
        {
            
            let bgcolor = polygons[i].style.backgroundColor;
            result.style.backgroundColor = bgcolor;
            result.textContent = bgcolor;
            
            
        }
        if(bottleRotate>=(i*deg)+360 && bottleRotate<(deg*(i+1))+360)
        {
            
            let bgcolor = polygons[i].style.backgroundColor;
            result.style.backgroundColor = bgcolor;
            result.textContent = bgcolor;
            
            
        }
        if(bottleRotate>=(i*deg)+720 && bottleRotate<(deg*(i+1))+720)
        {
            
            let bgcolor = polygons[i].style.backgroundColor;
            result.style.backgroundColor = bgcolor;
            result.textContent = bgcolor;
            
            
        }
        if(bottleRotate>=(i*deg)+1080 && bottleRotate<(deg*(i+1))+1080)
        {
            
            let bgcolor = polygons[i].style.backgroundColor;
            result.style.backgroundColor = bgcolor;
            result.textContent = bgcolor;
            
            
        }
        if(bottleRotate>=(i*deg)+1440 && bottleRotate<(deg*(i+1))+1440)
        {
            
            let bgcolor = polygons[i].style.backgroundColor;
            result.style.backgroundColor = bgcolor;
            result.textContent = bgcolor;
            
            
        }
        
    }

}

let addPlayersRandom = function() 
{
    let screen = document.querySelector(".container");

    let playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    screen.appendChild(playerContainer);
    
    let playerInput = document.createElement("input");
    playerInput.classList.add("player-name");
    playerInput.placeholder = "Name...";
    playerContainer.appendChild(playerInput);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    playerContainer.appendChild(editBtn);

    let delateBtn = document.createElement("button");
    delateBtn.classList.add("delate-player");
    playerContainer.appendChild(delateBtn);

    let spanOne = document.createElement("span");
    delateBtn.appendChild(spanOne);
    spanOne.classList.add("del-span");

    let spanTwo = document.createElement("span");
    delateBtn.appendChild(spanTwo);
    spanTwo.classList.add("del-span");
    spanTwo.classList.add("span-two");

    

    
}


let delateFunction = setInterval(function()
{
    let del = [...document.querySelectorAll(".delate-player")];
    let cont = [...document.querySelectorAll(".player-container")];
    for(let i=0; i<del.length; i++)
    {
    del[i].addEventListener("click", function()
    {
        cont[i].remove();
    });
    }
},100);




// addPlayers8MaxBtn.addEventListener("click", addPlayers8Max);
// delatePlayers8MaxBtn.addEventListener("click", delatePlayers);
// classicGameBtn.addEventListener("click", function() 
// {
//     let mainMenu = document.querySelector(".main-menu");
//     let addUsersClassic = document.querySelector(".add-users-classic");
//     mainMenu.style.display = "none";
//     addUsersClassic.style.display = "flex";
// });
// startBtn.addEventListener("click", function() 
// {
//     let addUsersClassic = document.querySelector(".add-users-classic");
//     addUsersClassic.style.display = "none";
//     let classicSpin = document.querySelector(".classic-spin-container");
//     classicSpin.style.display = "flex";
//     howManyParts();
// });
// circle.addEventListener("click", function()
// {
//     let bottleRotate = Math.floor(Math.random() * 1800) + 0; 
//     let bottle = document.querySelector(".bottle-spin");
//     bottle.style.transform = `rotate(${bottleRotate}deg)`;
//     let result = document.querySelector(".result");
//     result.style.backgroundColor = "rgba(255,111,2,1)";
//     result.textContent = "color...";
//     setTimeout(function()
//     {
//         showEffect(bottleRotate);
//     },3700);
// });

addPlayer.addEventListener("click", addPlayersRandom);


    

delateFunction();