'use strict';

const modal = document.querySelectorAll('.show-modal');
const openModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for(let i = 0; i < modal.length; i ++){
    modal[i].addEventListener('click', function () {
        openModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

closeModal.addEventListener('click', function() {
    openModal.classList.add('hidden');
    overlay.classList.add('hidden');
})

