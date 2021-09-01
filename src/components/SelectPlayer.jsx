import React, { useState } from 'react';

const SelectPlayer = () => {

    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
 

    return (
        <div className="selectPlayer">
         <h2>Pick your weapon</h2>      
            <div className="chooseWeapon">
                <input type="text" name="Player1" placeholder="Player 1 username" onChange={e => setPlayer1(e.target.value)} value={player1}/>
                <input type="text" name="Player2" placeholder="Player 2 username" onChange={e => setPlayer2(e.target.value)} value={player2}/>
                <br />
                <button value="X">X</button>
                <button value="O">O</button>
            </div>
        </div>
    )
}



export default SelectPlayer;