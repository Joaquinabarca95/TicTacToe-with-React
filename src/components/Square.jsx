import React from 'react';

const Square = ({value, selectSquare}) =>{
    return (
        <div className="square" onClick={selectSquare}>
            {value}
        </div>
    )

}

export default Square;