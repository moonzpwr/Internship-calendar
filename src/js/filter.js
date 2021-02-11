import { refs } from './close-open-modal'
import {render, eventList} from './add-event'
/*
 === FILTER === 
*/

refs.filter.addEventListener('change', onFilter)


function onFilter(e) {

  const filteredEventList = [];

  filteredEventList.push(...eventList.filter(el => el.participants.includes(e.target.value)));

  render(filteredEventList)

}