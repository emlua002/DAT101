"use strict"
import {printOut} from "../../common/script/utils.mjs";


function addText(aNewText) {
    let text = aNewText;
    text += "<br />"
    return text;
}

let greetings = addText("Hei på deg!");
printOut(greetings);  // Hei på deg!