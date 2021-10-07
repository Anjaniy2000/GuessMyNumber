'use strict';

//Define Secret Number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Define Score:
let score = 20;
let highScore = 0;

/* DOM - Manipulation: */

//querySelector():
//console.log(document.querySelector('.message').textContent); // Use '.' For Classes & '#' For Ids.
// document.querySelector('.guess').value = 200;

/* Handling Click Events: */
document.querySelector('.btn_check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //No Input Number:
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  //When Player Wins A Game:
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //Setting The High Score:
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    //Change Background Color Of Whole Page:
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Increse The Width Of Guess Number:
    document.querySelector('.number').style.width = '30rem';
  }

  //When A Gussed Number Is Greater Than Secret Number:
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
    }
  }

  //When A Gussed Number Is Less Than Secret Number:
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
    }
  }
});

/* Reset A Game: */
document.querySelector('.btn_again').addEventListener('click', () => {
  //Saving The High Score:
  if (score > highScore) {
    highScore = score;
  }
  //Reset The Scores:
  score = 20;
  document.querySelector('.score').textContent = score;

  //Reset The Background Color & Width:
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //Reset The Input Number & Create New Rnadom Number For Guessing:
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Reset The Extra Stuffs:
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
