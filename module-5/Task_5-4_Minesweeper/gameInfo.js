"use strict";
import { TSpriteButton, TSpriteNumber } from "libSprite";

export class TGameInfo {
    #spLeftNmb;
    #spRightNmb;
    #spSmiley
    constructor(aSpcvs, aSPI) {
        this.#spLeftNmb = new TSpriteNumber(aSpcvs, aSPI, 20, 20);
        this.#spRightNmb = new TSpriteNumber(aSpcvs, aSPI, 400, 20);
        this.#spSmiley = new TSpriteButton(aSpcvs, aSPI, 200, 20);
    }
}