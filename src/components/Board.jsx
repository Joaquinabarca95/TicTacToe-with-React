import React, { useEffect, useState } from 'react';
import Square from './Square';



const Board = () =>{

    
    const [play, setPlay] = useState(false)

    const SelectPlayer = () => {

     const start = () => {    
         setPlay(true)
     }
    
        return (
            <div className="selectPlayer">
             <h2>Pick your weapon</h2>      
                <div className="chooseWeapon">
                    <input type="text" name="Player1" placeholder="Player 1 username" />
                    <input type="text" name="Player2" placeholder="Player 2 username" />
                    <br />
                    <button value="X" onClick={start}>X</button>
                    <button value="O" onClick={start}>O</button>
                </div>
            </div>
        )
    }


const [board, setBoard] = useState([
    "","","",
    "","","",
    "","",""
    ]);


const [player, setPlayer] = useState("X", "O");
const [result, setResult] = useState(null);

useEffect(() => {
    checkTie();
    checkWinner();
    if (player === "O"){
        setPlayer("X")
    } else {
        setPlayer("O")
    } // eslint-disable-next-line
}, [board])

useEffect(() => {
    if (result !== null){      
        document.querySelector(".title").innerHTML = `Game over! ${result}`
        document.querySelector(".title").style.color = "peachpuff";     
    } 
}, [result])

const selectSquare = (squareIndex) =>{
    setBoard(board.map((value, index) => {
        if (index === squareIndex && value === ""){
            return player
        } 
        return value;
        })
    )
}

const checkWinner = () =>{
    if ( (board[0]===board[1] && board[1]===board[2] && board[0] !== "") || (board[0]===board[3] && board[3] === board[6] && board[0] !== "") || (board[0]===board[4] && board[4] === board[8] && board[0] !== "") ){ 
        setResult(`${player} is the winner!!`)
    } if (board[1] === board[4] && board[4] === board[7] && board[1] !== ""){
        setResult(`${player} is the winner!!`)
    } if ( (board[2]===board[5] && board[5]===board[8] && board[2] !== "") || (board[2]===board[4] && board[4]===board[6] && board[2] !=="") ){
        setResult(`${player} is the winner!!`)
    } if ( board[3]===board[4] && board[4]===board[5] && board[3] !== ""){
        setResult(`${player} is the winner!!`)
    } if (board[6]===board[7] && board[7] && board[8] && board[6] !== ""){
        setResult(`${player} is the winner!!`)
    } 
}

const checkTie = () => {
    let filled = true;
    board.forEach(square => {
        if (square === "") {
            filled = false;
        }
    });
    if (filled) {
        setResult("It's a tie!");
    }
};

const resetGame = () => {
    document.querySelector(".title").style.color = "white";
    setBoard(["","","",
    "","","",
    "","",""]);
    setPlayer(player)
    document.querySelector(".title").innerHTML = title
    setResult(null)
}

const title = `Its ${player} Turn!`

return (
    <>
    {play === false ? <SelectPlayer /> : (<div className="board">
        <h2 className="title">{title}</h2>
        <button className="btn" onClick={resetGame}>Start over</button>
        <div className="row">
            <Square value={board[0]} selectSquare={() => {selectSquare(0)}}/>
            <Square value={board[1]} selectSquare={() => {selectSquare(1)}}/>
            <Square value={board[2]} selectSquare={() => {selectSquare(2)}}/>
        </div>
        <div className="row">
            <Square value={board[3]} selectSquare={() => {selectSquare(3)}}/>
            <Square value={board[4]} selectSquare={() => {selectSquare(4)}}/>
            <Square value={board[5]} selectSquare={() => {selectSquare(5)}}/>
        </div>
        <div className="row">
            <Square value={board[6]} selectSquare={() => {selectSquare(6)}}/>
            <Square value={board[7]} selectSquare={() => {selectSquare(7)}}/>
            <Square value={board[8]} selectSquare={() => {selectSquare(8)}}/>
        </div>
    </div>)}
    </>
    )
}

export default Board;