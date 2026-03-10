"use strict";
// Import necessary modules
import { TSpriteCanvas } from "libSprite";
import { TBackground } from "./background.js";
import { THero } from "./Hero.js";
import { TObstacle } from "./obstacle.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);

// prettier-ignore
const SpriteInfoList = {
  hero1:        { x: 0   , y: 545 , width: 34   , height: 24  , count: 4  },
  hero2:        { x: 0   , y: 569 , width: 34   , height: 24  , count: 4  },
  hero3:        { x: 0   , y: 593 , width: 34   , height: 24  , count: 4  },
  obstacle:     { x: 0   , y: 0   , width: 52   , height: 320 , count: 4  },
  background:   { x: 246 , y: 0   , width: 576  , height: 512 , count: 2  },
  flappyBird:   { x: 0   , y: 330 , width: 178  , height: 50  , count: 1  },
  ground:       { x: 246 , y: 512 , width: 1152 , height: 114 , count: 1  },
  numberSmall:  { x: 681 , y: 635 , width: 14   , height: 20  , count: 10 },
  numberBig:    { x: 422 , y: 635 , width: 24   , height: 36  , count: 10 },
  buttonPlay:   { x: 1183, y: 635 , width: 104  , height: 58  , count: 1  },
  gameOver:     { x: 0   , y: 384 , width: 226  , height: 114 , count: 1  },
  infoText:     { x: 0   , y: 630 , width: 200  , height: 55  , count: 2  },
  food:         { x: 0   , y: 696 , width: 70   , height: 65  , count: 34 },
  medal:        { x: 985 , y: 635 , width: 44   , height: 44  , count: 4  },
};

export const EGameStatus = { idle: 0, countDown: 1, gaming: 2, heroIsDead: 3, gameOver: 4, state: 0 };
export let soundMuted = false;
const background = new TBackground(spcvs, SpriteInfoList);
export const hero = new THero(spcvs, SpriteInfoList.hero1);
const obstacles = [];
const baits = [];
export const menu = new TMenu(spcvs, SpriteInfoList);
// Used to prevent scoring multiple times for the same obstacle pair.
let obstaclePassed = false;
// Current visual theme used by background + newly spawned obstacles.
let isDayMode = true;
// Guards game-over UI so it is shown once per run.
let gameOverShown = false;

//--------------- Functions ----------------------------------------------//
export function startGame() {
  // Gameplay starts after menu countdown.
  EGameStatus.state = EGameStatus.gaming;
  gameOverShown = false;
  setTimeout(spawnObstacle, 1000);
  setTimeout(spawnBait, 1000);
}

export function resetWorld() {
  // Full world reset before starting a new run.
  hero.restart();
  obstacles.length = 0;
  baits.length = 0;
  obstaclePassed = false;
  gameOverShown = false;
}

function spawnBait() {
  // Keep spawning only while actively playing.
  if (EGameStatus.state === EGameStatus.gaming) {
    const bait = new TBait(spcvs, SpriteInfoList.food);
    baits.push(bait);
    const nextTime = Math.ceil(Math.random() * 3) + 1;
    setTimeout(spawnBait, nextTime * 1000);
  }
}

function spawnObstacle() {
  // Keep spawning only while actively playing.
  if (EGameStatus.state === EGameStatus.gaming) {
    const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle, isDayMode);
    obstacles.push(obstacle);
    const nextTime = Math.ceil(Math.random() * 3) + 1;
    setTimeout(spawnObstacle, nextTime * 1000);
  }
}

function animateGame() {
  // Hero animation always runs (idle bobbing, gravity, death fall...).
  hero.animate();

  // Show game-over menu exactly once when run ends.
  if ((EGameStatus.state === EGameStatus.heroIsDead || EGameStatus.state === EGameStatus.gameOver) && !gameOverShown) {
    gameOverShown = true;
    menu.showGameOver();
  }

  // Detect bait eaten by hero.
  let eaten = -1;
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.animate();
    if (bait.distanceTo(hero.center) < 20) {
      eaten = i;
    }
  }
  if (eaten >= 0) {
    console.log("Eaten!");
    baits.splice(eaten, 1);
    hero.eat();
    // +1 point for each eaten bait.
    menu.incGameScore(1);
  }

  if (EGameStatus.state === EGameStatus.gaming) {
    background.animate();
    let deleteObstacle = false;
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      obstacle.animate();
      if (obstacle.x < -50) {
        // Remove obstacle pair when off-screen.
        deleteObstacle = true;
        obstaclePassed = false;
      }else if((obstacle.x + obstacle.width) < hero.x){
        if(!obstaclePassed){
          // +1 point when hero passes an obstacle pair.
          menu.incGameScore(1);
          obstaclePassed = true;
        }
      }
    }
    if (deleteObstacle) {
      obstacles.splice(0, 1);
    }
  }
}

function drawGame() {
  // Draw order controls visual layers (back -> front).
  background.drawBackground();
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.draw();
  }

  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    obstacle.draw();
  }
  hero.draw();
  background.drawGround();
  menu.draw();
}

function loadGame() {
  console.log("Game Loaded");
  // Set canvas size to background size
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  // Overload the spcvs draw function here!
  spcvs.onDraw = drawGame;

  //Start animate engine
  setInterval(animateGame, 10);
} // end of loadGame

function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      console.log("Space key pressed, flap the hero!");
      if (EGameStatus.state !== EGameStatus.heroIsDead) {
        hero.flap();
      }
      break;
  }
} // end of onKeyDown

function setSoundOnOff() {
  // Read checkbox state and pass to menu audio handler.
  soundMuted = chkMuteSound.checked;
  menu.setSoundMute(soundMuted);
} // end of setSoundOnOff

function setDayNight(aEvent) {
  // Radio value is "1" for day and "0" for night.
  isDayMode = Number(aEvent.target.value) === 1;
  // Update current background immediately.
  background.setDayNight(isDayMode);

  // Update already spawned obstacles immediately.
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].setDayNight(isDayMode);
  }

  console.log(`Day/Night mode changed: ${aEvent.target.value}`);
} // end of setDayNight

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Apply initial mute state from checkbox
setSoundOnOff();

// Apply initial day/night state from radio buttons
if (rbDayNight[0].checked) {
  setDayNight({ target: rbDayNight[0] });
} else {
  setDayNight({ target: rbDayNight[1] });
}

// Load the sprite sheet
spcvs.loadSpriteImage("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
