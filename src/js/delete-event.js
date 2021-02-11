import { refs } from './close-open-modal'
import {render, eventList} from './add-event'

/*
 === DELETE EVENT LOGIC === 
*/

refs.tableBody.addEventListener('click', onClickDel)


function onClickDel(e) {
  const { className } = e.target;
    
  if (className === 'delete-btn') {  
    const shouldDelId = e.target.id.slice(4, 10)

    refs.confirmationBackdrop.classList.add('is-open')
  
    refs.confirmationBackdrop.addEventListener('click', isEvtDel)

    function isEvtDel(e) {
      if (e.target.className === 'y-btn') {
        eventList.forEach((el, i) => {
          if (el.id === shouldDelId) {
            eventList.splice(i, 1);
          }
        })

        render(eventList);

        refs.confirmationBackdrop.classList.remove('is-open');
        refs.confirmationBackdrop.removeEventListener('click', isEvtDel)
      } else if (e.target.className === 'n-btn') {
        refs.confirmationBackdrop.classList.remove('is-open')
        refs.confirmationBackdrop.removeEventListener('click', isEvtDel)
      }
    }  

    
 }
}
