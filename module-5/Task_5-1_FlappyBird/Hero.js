"use strict";
import { TSprite } from "libSprite";

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor (aSpcvs, aSPI){
        super (aSpcvs, aSPI, 50, 200);
        this.animationSpeed = 15;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
    }

    animate(){
        if(this.y < 400 - this.height){
            this.#speed += this.#gravity; // increase speed due to gravity
            this.y += this.#speed; // update position based on speed
            if(this.rotation < 90){ // limit rotation to max 90 degrees
            this.rotation = this.#speed * 25; //tilt down based on speed
            }
        }
    } // end of animate

    flap(){
        this.#speed = -3; // give an instant upward speed
        this.rotation = -25; // tilt up
    }
}