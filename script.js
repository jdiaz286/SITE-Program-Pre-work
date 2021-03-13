// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = []; //will be filled with randomlyFillOptions()
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var guessesFailed; //keep track of the number of missed guesses
var clueHoldTime; //how long to hold each clue's light/sound
var currentTimeLeft = (currentTimeLeft = setInterval(updateTimer, 1000));
var timeForGuess;
var timesPlayed = 0;

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function startGame() {
  //initialize game variables
  randomlyFillOptions();
  progress = 0;
  gamePlaying = true;
  guessesFailed = 0;
  clueHoldTime = 980;
  console.log("array length: " + pattern.length); // just to be able to see the length of pattern
  timeForGuess = pattern.length * 7; // based off length, give time to solve
  timesPlayed++;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("triesLabel").classList.remove("hidden");
  document.getElementById("timerLabel").classList.remove("hidden");

  clearInterval(currentTimeLeft);
  startTimer();
  playClueSequence();
  updateTriesLeft();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  currentTimeLeft = null;
  clearInterval(currentTimeLeft);

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("triesLabel").classList.add("hidden");
  document.getElementById("timerLabel").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.6,
  6: 550.7
};

function playTone(btn, len) {
  switch (btn) {
    case 1:
      sayA();
      break;
    case 2:
      sayB();
      break;
    case 3:
      sayC();
      break;
    case 4:
      sayD();
      break;
    case 5:
      sayE();
      break;
    case 6:
      sayF();
      break;
  }
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    tonePlaying = true;

    switch (btn) {
      case 1:
        sayA();
        break;
      case 2:
        sayB();
        break;
      case 3:
        sayC();
        break;
      case 4:
        sayD();
        break;
      case 5:
        sayE();
        break;
      case 6:
        sayF();
        break;
    }
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    if (clueHoldTime == 940) {
      clueHoldTime = 940;
    } else if (clueHoldTime > 940) {
      clueHoldTime -= 30;
    }
  }
}

//methods to check if the user has lost or won
function loseGame() {
  clearInterval(currentTimeLeft);
  stopGame();
  alert("Game Over. You used up your three tries.");
  guessesFailed = 0;
}

function timeRunOut() {
  if (timesPlayed == 0) {
    console.log("nothing");
  } else {
    clearInterval(currentTimeLeft);
    stopGame();
    alert("Game Over. You ran out of time.");
  }
}

function winGame() {
  clearInterval(currentTimeLeft);
  stopGame();
  alert("Congrats! You have great memory.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //checks to see if the user guessed the right pattern
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        addTime();
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    //checks to see if the user answered incorrectly 3 times
    if (guessesFailed == 2) {
      clearInterval(currentTimeLeft);
      loseGame();
      guessesFailed = 0;
    } else {
      guessesFailed += 1;
      updateTriesLeft();
      playClueSequence();
    }
  }
}

function randomlyFillOptions() {
  // Produce a random amount of patterns in a sequence
  //between 4 and 11. This guarantees at least 4 buttons
  //will be hit each time
  let numOfPatterns = Math.floor(Math.random() * 9) + 4;
  for (let currentIndex = 0; currentIndex < numOfPatterns; currentIndex++) {
    //in current index, choose between button 1 and 6 and place value in pattern
    pattern[currentIndex] = Math.floor(Math.random() * 6) + 1;
  }
}

function updateTriesLeft() {
  document.getElementById("triesLabel").textContent =
    "Tries left: " + (3 - guessesFailed);
}

//All methods for the countdown go here
function startTimer() {
  clearInterval(currentTimeLeft);
  currentTimeLeft = timeForGuess;

  document.getElementById("timerLabel").textContent =
    "Time left: " + currentTimeLeft;
}

function updateTimer() {
  console.log("currentTimeLeft value: " + currentTimeLeft);
  if (currentTimeLeft == 0) {
    clearInterval(currentTimeLeft);
    timeRunOut();
    //clearInterval(currentTimeLeft);
  } else {
    currentTimeLeft += -1;
    document.getElementById("timerLabel").textContent =
      "Time left: " + currentTimeLeft + " seconds";
  }
}

function addTime() {
  currentTimeLeft += 5;
  document.getElementById("timerLabel").textContent =
    "Time left: " + currentTimeLeft + " seconds";
}

//All methods to say letters below
function sayA() {
  document.getElementById("a_audio").play();
}
function sayB() {
  document.getElementById("b_audio").play();
}
function sayC() {
  document.getElementById("c_audio").play();
}
function sayD() {
  document.getElementById("d_audio").play();
}
function sayE() {
  document.getElementById("e_audio").play();
}
function sayF() {
  document.getElementById("f_audio").play();
}
