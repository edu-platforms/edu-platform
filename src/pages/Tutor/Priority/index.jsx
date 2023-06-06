import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import { Wrapper } from "@/UI";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import  'react-big-calendar/lib/sass/styles';


export default function Priority() {
  const [currentEvents, setCurrentEvents] = useState([]);
  
  const events = [
    {
        start: new Date(2023, 4, 19, 14, 30), 
        end: new Date(2023, 4, 19, 16, 30), 
        title: 'Tadbir',
      },
      {
        start: new Date(2023, 4, 18, 14, 30), 
        end: new Date(2023, 4, 18, 16, 30), 
        title: 'Tadbir',
      },
      {
        start: new Date(2023, 4, 10, 10, 30), 
        end: new Date(2023, 4, 10, 11, 30), 
        title: 'Tadbir',
      },
      {
        start: new Date(2023, 4, 2, 14, 30), 
        end: new Date(2023, 4, 2, 16, 30), 
        title: 'Tadbir',
      },

];

const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = '#58db2b';
  const borderColor = '#58db2b';
  const style = {
    backgroundColor,
    borderColor,
  };
  return {
    style,
  };
};




  console.log(currentEvents[0]?.title);
  return (
    <div className="flex-start gap-x-5">
      <div className="w-1/3">
        <div className="border border-gray-100 rounded-10">
          
          <p className="text-lg font-medium bg-gray-100 px-5 py-4 rounded-t-10">
            Calendar display
          </p>

          <ul className="px-6 py-4 space-y-5">
            <li className="flex-center gap-x-3">
              <div className="bg-green w-12 h-8 rounded-5" />

              <span>Priority hours</span>
            </li>

            <li className="flex-center gap-x-3">
              <div className="bg-white w-12 h-8 rounded-5 border border-gray-100" />

              <span>Available priority hours</span>
            </li>
          </ul>
        </div>

        {/* {currentEvents.map((event) => (
          <div key={event.id} className="bg-black text-white">
            <h4>{event?.title}</h4>
            <p>
              {formatDate(event.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        ))} */}
      </div>

      <Wrapper size="small" className="w-2/3">
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      step={15}
      timeslots={2}
       defaultView="week"
       eventPropGetter={eventStyleGetter}
    />
      </Wrapper>
    </div>
  );
}
