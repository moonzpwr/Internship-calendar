# Meeting-calendar

## Basic implementation logic

- each cell of the table has a date attribute depending on its date and time
- when filling out the `form`, an object of a new event is created with the name of the event, a unique ID (date + time), date, time and participants
- when submitting a `form`, the object is added to the array of event objects and rendered in the required cell, depending on its ID
- when deleting an event, removes the required object from the array (depending on its ID) and re-renders the updated array
- when filtering by participants, I'am use `array.filter()` and select events with the selected participant
- custom select multiplay is implemented with `input type='text'` and a set of `checkboxes`

**Below is short description of the functionality implemented in each of the `JS` files:**

#### close-open-modal.js

- all necessary links to `HTML` elements.
- the basic logic of opening/closing a modal window
- several listeners are created/deleted for the custom select

---

#### custom-select.js

- opening/сlosing custom select
- filling the special property `patisipantValue` with the values of the selected participants

---

#### add-event.js

- creating an event object
- an array of events is created and filled by event objects
- checking time, busy or not
- collecting data from a `form`
- render a new event `HTML` element in table
- `form` cleaning

---

#### delete-event.js

- implementation of a pop-up window for confirming the deletion of an event
- the logic of removing the object of the selected event from the event array
- re-render of the updated array of events

---

#### filter.js

- filters the array of events according to the selected participant
- re-renders a filtered array
