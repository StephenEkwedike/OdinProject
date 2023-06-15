const { content } = require("googleapis/build/src/apis/content");

const gameboard = (() =>{
    var gamestate = true;
    const container = document.querySelectorAll(".content")
    
    winningCombos = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7],
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ]

    //create object/funcFac of players
    const playerFactory = (playerName)=>{
        return{playerName}
    }
    const playerX = playerFactory('X');
    const playerO = playerFactory('O')
    const startButton = document.querySelector("#play")
    if(gamestate === false){
        startButton.addEventListener("click",()=>{
        gamestate = true;    
        //player X start
        //let currentPlayer = playerX.playerName;
    });
    
    }
    
    let currentPlayer = playerX.playerName;
    const switchPlayer = ()=>{
        currentPlayer = currentPlayer === 'X'?'O':'X';
    }

    container.forEach((space)=>{
        space.addEventListener('click', ()=>{
            space.innerHTML = currentPlayer;
            switchPlayer();
        })
    })
    
    let boxes = document.querySelectorAll("#box")    
    var entriesX = []
    var entiresO = []

    //turn?"X"?"O":"O";
    //Object.entries(boxes).map()
    for(i=0; i<=boxes.length;i++){
        boxes[i].addEventListener('click',(player)=>{ //check if player is a correct parameter here
            const square = player.target;
            if(square.innerHTML == playerX.playerName){
                entriesX.push(i+1);
                
                // i+1 since nodeList returned for querySelector all is 0 indexed
            }
            else if(square.innerHTML == playerO.playerName){
                entiresO.push(i+1)
            }
            
        })
    }

    function restart(){
        boxes.forEach((box)=>{
            box.innerHTML="";
        })
        //Also clear the Arrayentries
        entriesX = [];
        entiresO = [];
    };
    const checkWin = ()=>{
        
        if(entriesX.sort() in winningCombos){
            //stop game, return winner and clear board in countdown
            alert(`Game Over, PlayerX won`)
            setTimeout(restart,5000);
        }

        else if( entiresO.sort() in winningCombos){
            alert(`Game Over, PlayerO won`)
            setTimeout(restart,5000);
        }

        else{
            boxes.forEach((box)=>{
                if(box.childNodes.length != 0 && box.innerHTML != ""){
                    alert(`Draw Game`)
                    setTimeout (restart,5000);
                }
            })
        }
        gamestate=false;
    }

    while(gamestate){
        checkWin(); 
    }
    return{restart,}
})();

