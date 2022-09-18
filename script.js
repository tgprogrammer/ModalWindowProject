'use strict';

const modal = document.querySelectorAll('.show-modal');
const openModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function addingClass() {
    openModal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function removingClass() {
        openModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

for(let i = 0; i < modal.length; i ++){
    modal[i].addEventListener('click', removingClass 
    )
}


closeModal.addEventListener('click', addingClass);

overlay.addEventListener('click', addingClass);

document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            addingClass();  
        }       
    }
})