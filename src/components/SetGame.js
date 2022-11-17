import React from 'react'
import { useState } from 'react';

const games = ["Overwatch", "Valorant", "Sims"];

let gameAnswer = "";
let userChoice = "";
function SetGame() {
    let randomNumber = Math.floor(Math.random() * 3)
    GamePicker(randomNumber)
    return(
        <div>
            testy
        </div>
    )
}

function GamePicker(randomNumber) {

    const [game, setGames] = useState(games[randomNumber]);
    const [userAnswer, setUserAnswer] = useState("");

    gameAnswer = game;
    console.log("This is da games" + game)
    return game
}


function fileSet(answer) {
    userChoice = answer;
    if (userChoice == gameAnswer) {
        console.log("OMG IT ACTUALLY WORKS")
    }
}

// function ImageHolder(value) {
//     let userInput = value;
//     console.log("value from imageholder" + value)

//     return (
//       <div>
//         boo
//       </div>
//     )
// }

export {SetGame, GamePicker, fileSet}