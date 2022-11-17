import React from 'react'
import { useState } from 'react';

const games = ["Overwatch", "Valorant", "Roblox"];

function SetGame() {
    randomNumbers()

}

function randomNumbers() {
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    GamePicker(randomNumber)
}

function GamePicker(randomNumber) {

    // const [game, setGame] = useState(games[randomNumber]);
    const [game, setGame] = useState("");
    setGame("overwatch")
    
    console.log(game)
    return {game, setGame}
}

// export default Setgame
export {SetGame, GamePicker}