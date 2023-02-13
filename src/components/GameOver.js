import React from "react";
import "./GameOver.css";

const GameOver = ({returGame}) => {
    return (
        <div>
            <h1>GameOver</h1>
            <button onClick={returGame}>Recomeçar jogo</button>   
        </div>
    )
}

export default GameOver;