const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  form: document.querySelector('#js-form'),
  participantInput: document.querySelector('#participants'),
  dropdown: document.querySelector('.dropdown'),
  formEventName: document.querySelector('#name'),
  formDay: document.querySelector('#day'),
  formTime: document.querySelector('#time'),
  notification: document.querySelector('.notofication'),
  filter: document.querySelector('#filter'),
  confirmationBackdrop: document.querySelector('.confirmation-backdrop'),
  yesBtn: document.querySelector('.y-btn'),
  noBtn: document.querySelector('.n-btn'),
  eventsContainer: document.querySelectorAll('.evt-container'),
  tableBody: document.querySelector('.calendar-body')
};

import { openBackdrop, closeBackdrop, changeParticipantsValue } from './custom-select'
import {onFormSubmit} from './add-event'

let participantValue = [];//creating a variable for custom select

/* 
=== OPEN/CLOSE MODAL LOGIC ===
*/
refs.openModalBtn.addEventListener('click', openModal);//to open modal window
  

function openModal() {
  refs.modal.classList.add('is-open');
  refs.openModalBtn.removeEventListener('click', openModal);// removal of unnecessary listener while modal is open
  addListeners()

  participantValue = []; //clear participants value from previos input
}

function closeModal({ code, target }) { 
  if (code === 'Escape' || target === refs.closeModalBtn) {
    refs.modal.classList.remove('is-open');
    removeListeners()
    refs.form.reset();
  }
  
  refs.openModalBtn.addEventListener('click', openModal);//again add listener to opem modal when modal is close
}
  

function removeListeners() {
  // removal of unnecessary listeners while modal is close
    window.removeEventListener('keydown', closeModal);
    refs.modal.removeEventListener('click', closeModal);
    refs.participantInput.removeEventListener('focus', openBackdrop);
    refs.modal.removeEventListener('click', closeBackdrop);
    refs.dropdown.removeEventListener('change', changeParticipantsValue);
    refs.form.removeEventListener('submit', onFormSubmit);
}

function addListeners() {
  //adding required listeners when modal window is open
  window.addEventListener('keydown', closeModal);
  refs.modal.addEventListener('click', closeModal);
  refs.participantInput.addEventListener('focus', openBackdrop);
  refs.modal.addEventListener('click', closeBackdrop);
  refs.dropdown.addEventListener('change', changeParticipantsValue);
  refs.form.addEventListener('submit', onFormSubmit);
}


export  { refs, participantValue, removeListeners, addListeners }









