"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { EGameStatus, resetWorld, startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spInfoText;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #highScores;
  #soundMuted;
  constructor(aSpcvs, aSPI){
    // Main title shown in idle menu.
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    // Play button is reused for both first start and replay.
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    // infoText index 0 = "Get Ready".
    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 190, 120);
    this.#spInfoText.index = 0; // Get Ready
    this.#spInfoText.hidden = true;
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10, 0, 0);
    this.#spGameScore.alpha = 0.5;

    // Game-over panel elements.
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 175, 130);
    this.#spGameOver.hidden = true;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 201, 173);
    this.#spMedal.index = 0;
    this.#spMedal.hidden = true;
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 165, 0, 0);
    this.#spFinalScore.visible = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 205, 0, 0);
    this.#spHighScore.visible = false;
    // Keep a small history; highest value is shown as best score.
    this.#highScores = [0];

    this.#soundMuted = false;
  }

  incGameScore(aScore){
    // Increment current run score.
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    if (this.#sfRunning !== null) {
      this.#sfRunning.stop();
    }
  }

  setSoundMute(aIsMuted){
    this.#soundMuted = aIsMuted;
    if (this.#sfRunning === null) {
      return;
    }

    if (aIsMuted) {
      this.#sfRunning.pause();
    } else if (EGameStatus.state === EGameStatus.gaming) {
      this.#sfRunning.play();
    }
  }

  draw(){
    // Draw order controls layering on screen.
    this.#spTitle.draw();
    this.#spGameOver.draw();
    this.#spPlayBtn.draw();
    this.#spInfoText.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  showGameOver() {
    // Stop running loop sound when run ends.
    this.stopSound();

    // Hide in-game HUD elements.
    this.#spInfoText.hidden = true;
    this.#spCountDown.visible = false;
    this.#spGameScore.visible = false;

    // Show game-over panel + replay controls.
    this.#spGameOver.hidden = false;
    this.#spPlayBtn.hidden = false;
    // Reposition play button under the game-over panel.
    this.#spPlayBtn.x = 236;
    this.#spPlayBtn.y = 255;
    this.#spMedal.hidden = false;
    this.#spFinalScore.visible = true;
    this.#spHighScore.visible = true;

    const score = this.#spGameScore.value;
    this.#spFinalScore.value = score;

    // Update top-score history and display best value.
    this.#highScores.push(score);
    this.#highScores.sort((a, b) => b - a);
    this.#highScores = this.#highScores.slice(0, 5);
    this.#spHighScore.value = Math.max(...this.#highScores);

    // Medal mapping (based on the sprite sheet order in this project):
    // 0 = none, 1 = silver, 2 = gold, 3 = bronze.
    if (score >= 3) {
      this.#spMedal.index = 2; // Gold
    } else if (score >= 2) {
      this.#spMedal.index = 1; // Silver
    } else if (score >= 1) {
      this.#spMedal.index = 3; // Bronze
    } else {
      this.#spMedal.index = 0; // None
    }
  }

  countDown(){
    // Countdown sequence: 3 -> 2 -> 1 -> start.
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spInfoText.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
        if (!this.#soundMuted) {
          this.#sfRunning.play();
        }
      startGame();
    }
    
  }

  spPlayBtnClick(){
    console.log("Click!");

    // Restore default menu position for the normal start button.
    this.#spPlayBtn.x = 240;
    this.#spPlayBtn.y = 180;

    if (EGameStatus.state === EGameStatus.gameOver) {
      // Replay: reset world and score before countdown starts.
      resetWorld();
      this.#spGameScore.value = 0;
    }

    EGameStatus.state = EGameStatus.countDown;
    this.#spTitle.hidden = true;
    this.#spPlayBtn.hidden = true;
    this.#spInfoText.hidden = false;
    this.#spGameOver.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;
    this.#spGameScore.visible = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!this.#soundMuted) {
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }

}