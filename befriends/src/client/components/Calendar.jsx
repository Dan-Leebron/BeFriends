import React, { useState, useRef, useEffectß } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);
const events = [
  { title: 'Alabama Jousting Meet', start: new Date('June 13, 2023 07:30:00'), end: new Date('June 13, 2023 21:30:00') },
  { title: 'Big Chungus Hunt', start: new Date('June 15, 2023 07:30:00'), end: new Date('June 15, 2023 21:30:00') },
  { title: 'Antonio Banderas Day', start: new Date('June 4, 2023 07:30:00'), end: new Date('June 5, 2023 21:30:00') }
];

const MyCalendar = () => {
  const [displayEvent, toggleDisplay] = useState(false);
  const [userEvents, setUserEvents] = useState(events);
  const EventName = useRef('');
  const StartDate = useRef('');
  const EndDate = useRef('');

  useEffect(() => {
    axios
  }, [])
  const displayEventModal = () => {
    toggleDisplay(true);
  };

  const closeEventModal = () => {
    toggleDisplay(false);
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const newEvent = {}
    newEvent.name = EventName.current.value;
    newEvent.start_date = new Date(StartDate.current.value).getTime();
    newEvent.end_date = new Date(EndDate.current.value).getTime();
    console.log(newEvent);
    axios.post('http://localhost:3000/event', newEvent)
    .then((res) => {
      setUserEvents(userEvents.concat(res.data))
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <div>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

      <button className="btn" onClick={displayEventModal}>Add Event</button>
      <dialog id="my_modal_3" className="modal" open={displayEvent}>
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeEventModal}>✕</button>
          <input placeholder="Event Name" ref={EventName} /> <br />
          <label>StartDate <br /><input type="date" ref={StartDate} /></label>
          <label>End Date <br /><input placeholder="End Date" type="date" ref={EndDate} /></label>
          <button type="button" className="btn" onClick={submitEvent}>Add!</button>

        </form>
      </dialog>
    </div>
  );
};

export default MyCalendar;
