import {refs, participantValue} from './close-open-modal'

/*
 === CUSTOM SELECT MULPIPLE LOGIC === 
*/

function openBackdrop() {
    refs.dropdown.classList.remove('visually-hidden');
}

function closeBackdrop(e) {
    const { className, id, nodeName } = e.target;

  if (className === 'item' || id === 'participants' || nodeName === 'LABEL') {
        return 
  }

  refs.dropdown.classList.add('visually-hidden');
}
 
function changeParticipantsValue(e) {
  const { checked, name } = e.target;

  if (checked) {
    participantValue.push(name) 
  } else if (!checked) {
    const mustDel = participantValue.indexOf(name)
    participantValue.splice(mustDel, 1)
  }
  refs.participantInput.value = participantValue;
}

export {openBackdrop, closeBackdrop, changeParticipantsValue}