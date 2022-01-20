const gameBoard = (() => {
    const gameBoardArray = [];
    //renders the values in the array in the game cells
    const gameRender = () => {
        const gameCells = document.querySelectorAll(".cell");
        gameCells.forEach(cell => {
            if(gameBoard.gameBoardArray[cell.id] != 0){
                cell.textContent = gameBoardArray[cell.id];
            }
        })
    }
    return {
        gameBoardArray, 
        gameRender
    };
})();

const displayController = (() => {
    const clickController = () => {
        const gameCells = document.querySelectorAll(".cell");
        gameCells.forEach(cell => {
            cell.addEventListener("click", () => {
                //listener code here
                gameBoard.gameBoardArray[cell.id] = "X";
                gameBoard.gameRender();
            })
        })
    }    

    return {clickController};
})();



const Player = (name) => {
    const sayName = () => console.log(`The player's name is ${name}`);
    return {sayName}
}


gameBoard.gameRender();
displayController.clickController();
