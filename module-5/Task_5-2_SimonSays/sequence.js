"use strict"
import { EGameStatusType, spawnColorButton, gameOver, updateRound } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];
let round = 0;
let seqIndex = 0;

export function addRandomButton(aColorButtons){
    const index = Math.floor(Math.random() * aColorButtons.length);
    colorButton = aColorButtons[index];
    sequence.push(colorButton);
    seqIndex = 0;
    colorButton = sequence[0];
    setTimeout(setButtonDown, 1000);
}

export function testOfUserInput(aColorButton) {
    if (aColorButton === colorButton) {
        console.log("yes!");
        seqIndex++;
        if (seqIndex < sequence.length) {
            // We have not reached the end of the sequence yet
            colorButton = sequence[seqIndex];
        } else {
            // we have reached the end of the sequence
            round++;
            updateRound(round);
            spawnColorButton();

        }
    } else {
        gameOver();
    }
}

export function resetSequence() {
    sequence = [];
    round = 0;
    seqIndex = 0;
}

function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 200);
}

function setButtonUp() {
    colorButton.onMouseUp();
    seqIndex++;
    if (seqIndex < sequence.length) {
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown, 200);
    } else {
        EGameStatusType.state = EGameStatusType.Gamer;
        seqIndex = 0; //if not, the sequence starts too early.
        colorButton = sequence[0]; // reset to first button in sequence
    }
}