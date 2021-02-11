import { refs, removeListeners } from './close-open-modal'

/*
 === ADD EVENT LOGIC === 
*/

  const eventList = []

function onFormSubmit(e) {
  e.preventDefault();

  const newEvent = {
    name: refs.formEventName.value,
    participants: refs.participantInput.value,
    day: refs.formDay.value,
    time: refs.formTime.value,
    id: `${refs.formDay.value}-${refs.formTime.value}`
  }

  // checking if time is busy
  if (eventList.length > 0) {
    if (eventList.find(el => el.id === newEvent.id) === undefined) {
      eventList.push(newEvent);
      render(eventList)
    } else {
      refs.notification.classList.add('is-open');
      
      setTimeout(() => {
        refs.notification.classList.remove('is-open');
      }, 4000)
    }
  } else {
      eventList.push(newEvent);
      render(eventList)
  } 
}



    
function render(listToRender) {
  refs.eventsContainer.forEach(el => el.innerHTML = '');

  listToRender.forEach((el) => {
  const EventTamplate = `<div class="event" id="${el.id}"><p class="event-name">${el.name}</p><button type="button" class="delete-btn" id="btn-${el.id}"><svg width="10" height="10" viewBox="0 0 32 32" aria-label="delete event"><path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path></svg></button></div>`;
    const palceToRender = document.querySelector(`[data-${el.id}]`)
          
    palceToRender.insertAdjacentHTML('afterbegin', EventTamplate);
    refs.modal.classList.remove('is-open');
    removeListeners()
    refs.form.reset();
  })
}


export {onFormSubmit, render, eventList}