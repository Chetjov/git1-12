'use strict';
// Math.floor - odsekne desetinnou carku
// Math.ceil - odsekne destinnou carku, ale vysledek zvysi o jednicku
// vybere prvni element v zavorce na ktery narazi
//pro vybrani querySelectoru vsech prvku je querySelectorAll
// console.log(document.querySelector('.message').textContent); //text content vybere samotny obsah v tagu

// document.querySelector('.message').textContent = 'Zadej nejake cislo';
// document.querySelector('.guess').value = 0; // hodnota v inputu pres value

//dalsi vlastnosti jsou: innerHTML vybere uplne vsechno vcetne html Markupu
//innerText vybere pouze text jako takovy bez mezer
//textContent vybere veskery text uvnitr tagu i s mezeram vcetne toho co je skryte
//Event Listener hlidac zmen nebo udalosti na strance pomoci JS
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// trunc stejne jako floor

const displayMessage = function () {
  document.querySelector('.message').textContent = str;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  displayMessage('zacni hadat');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.style').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Nezadal jsi zadne cislo !');
  } else if (guess === secret) {
    displayMessage('Uhodl jsi, vyhrals!');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#59B200'; // Pristup na css !!!
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(
        guess > secret ? '.. Secret is Lower' : ' .. Secret is higher'
      );
    }
  }
});

// prvni par click- udalost na kterou se ma neco stat
//druhy par - co se ma spustit
// Number protoze JS vse prevadi na string
