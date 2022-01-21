const gameBoard = (() => {
    //start game with array of 9 empty cells
    let gameBoardArray = [];
    // const gameBoardArray = [0,1,2,3,4,5,6,7,8];
    //renders the values in the array in the game cells
    const gameRender = () => {
        const gameCells = document.querySelectorAll(".cell");
        gameCells.forEach(cell => {
            if(gameBoard.gameBoardArray[cell.id] != 0){
                cell.textContent = gameBoardArray[cell.id];
            }
        })   
    }

    const gameReset = () => {
        const gameCells = document.querySelectorAll(".cell");
        gameCells.forEach(cell => {
            if(gameBoard.gameBoardArray[cell.id] != 0){
                cell.textContent = "";
            }
        })   
    }

    const checkGameWinner = () => {
        let result;
        if( gameBoardArray[0] + gameBoardArray[1] + gameBoardArray[2] === "XXX" || 
            gameBoardArray[0] + gameBoardArray[4] + gameBoardArray[8] === "XXX" ||
            gameBoardArray[0] + gameBoardArray[3] + gameBoardArray[6] === "XXX" ||
            gameBoardArray[1] + gameBoardArray[4] + gameBoardArray[7] === "XXX" ||
            gameBoardArray[2] + gameBoardArray[4] + gameBoardArray[6] === "XXX" ||
            gameBoardArray[2] + gameBoardArray[5] + gameBoardArray[8] === "XXX" ||
            gameBoardArray[3] + gameBoardArray[4] + gameBoardArray[5] === "XXX" ||
            gameBoardArray[6] + gameBoardArray[7] + gameBoardArray[8] === "XXX" 
        ){
            result  = alert("PLAYER TWO WINS");
            gameBoardArray.splice(0,gameBoardArray.length);
            gameRender();              
        }
        else if( gameBoardArray[0] + gameBoardArray[1] + gameBoardArray[2] === "OOO" || 
        gameBoardArray[0] + gameBoardArray[4] + gameBoardArray[8] === "OOO" ||
        gameBoardArray[0] + gameBoardArray[3] + gameBoardArray[6] === "OOO" ||
        gameBoardArray[1] + gameBoardArray[4] + gameBoardArray[7] === "OOO" ||
        gameBoardArray[2] + gameBoardArray[4] + gameBoardArray[6] === "OOO" ||
        gameBoardArray[2] + gameBoardArray[5] + gameBoardArray[8] === "OOO" ||
        gameBoardArray[3] + gameBoardArray[4] + gameBoardArray[5] === "OOO" ||
        gameBoardArray[6] + gameBoardArray[7] + gameBoardArray[8] === "OOO" 
        ){
            result  = alert("PLAYER TWO WINS");
            gameBoardArray.splice(0,gameBoardArray.length);
            gameRender();           
        }
         
    }

    return {
        gameBoardArray, 
        gameRender,
        checkGameWinner
    };
})();


const displayController = (() => {
    const clickController = () => {
        const gameCells = document.querySelectorAll(".cell");
        //if playerOne is active, make the selector X, else O
        const playerMarkers = document.querySelectorAll(".player");
        
        gameCells.forEach(cell => {
            cell.addEventListener("click", () => {
                //only execute the click code if the array value matching the cell is empty
                if (gameBoard.gameBoardArray[cell.id] === undefined){
                    //find the current active player (page loads with player one active)
                    const currentPlayer = document.querySelector(".active")
                    //place X or O into the gameBoardArray
                    if (currentPlayer.textContent === "Player One"){
                        gameBoard.gameBoardArray[cell.id] = "X";
                    }
                    else {
                        gameBoard.gameBoardArray[cell.id] = "O";
                    }
                    //flip the active player
                    playerMarkers.forEach(playerMarker => {
                        playerMarker.classList.toggle("active");
                    })     
                    //check if there's a winner, re-render the gameboard with the new array value         
                    gameBoard.gameRender();
                    gameBoard.checkGameWinner();
                }
            })
        })
    }    

    return {clickController};
})();


//factory function for players
const playerFactory = (name) => {
    const sayName = () => console.log(`The player's name is ${name}`);
    return {name, sayName}
}

const playerOne = playerFactory("playerOne");
const playerTwo = playerFactory("playerTwo");


gameBoard.gameRender();
displayController.clickController();
