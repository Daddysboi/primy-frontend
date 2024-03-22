import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useLocation } from "react-router-dom";

import "../assets/myCalendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, setSelectedSlot, setSelectedEventId }) => {
  const location = useLocation();

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setSelectedEventId(null);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 200 }}
      />
    </>
  );
};

export default MyCalendar;
