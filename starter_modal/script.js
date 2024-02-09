'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalCross = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModal);
  // modal.classList.remove('hidden'); //class hidden tady tecka nepatri protoze classList!!!
  // overlay.classList.remove('hidden'); //to same classList
  //neupraveny zapis
} // casta zacatecnicka chyba je ze lidi pisou tecku tady nepatri protoze delame s classListem

closeModalCross.addEventListener('click', closeModal); //nepatri zavorky k funkci closeModal 5:53cas vysvetleni

overlay.addEventListener('click', closeModal); // nepatri tady zavorky
//stisknuti klavesy je globalni udalost

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
