import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useLocation } from "react-router-dom";

import AppInput from "../components/Input";
import AppButton from "../components/Button";
import "../assets/myCalendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [title, setTitle] = useState("");
  const [events, setEvents] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const location = useLocation();

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setSelectedEventId(null);
  };

  const handleAddEvent = () => {
    if (!selectedSlot) return;

    const newEvent = {
      id: events.length + 1,
      start: selectedSlot.start,
      end: selectedSlot.end,
      title: title,
      description: description,
    };

    setEvents([...events, newEvent]);
    setTitle("");
    setDescription("");
    setSelectedSlot(null);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEditEvent = (id) => {
    setSelectedEventId(id);
    const selectedEvent = events.find((event) => event.id === id);
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDescription(selectedEvent.description);
    }
  };

  const handleUpdateEvent = () => {
    if (!selectedEventId) return;

    const updatedEvents = events.map((event) =>
      event.id === selectedEventId
        ? { ...event, title: title, description: description }
        : event
    );
    setEvents(updatedEvents);
    setTitle("");
    setDescription("");
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

      {location.pathname === "dashboard/events" && (
        <>
          <AppInput
            label="Event Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            height="30px"
            width="50%"
          />
          <AppInput
            label="Event Description:"
            type="text"
            height="30px"
            width="50%"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <AppButton
            text={selectedEventId ? "Update Event" : "Add Event"}
            onClick={selectedEventId ? handleUpdateEvent : handleAddEvent}
          />
          {location.pathname === "http://localhost:5173/dashboard/events" && (
            <div>
              <ul>
                {events.map((event) => (
                  <li key={event.id}>
                    <strong>{event.title}</strong> - {event.start.toString()} to{" "}
                    {event.end.toString()} - {event.description}
                    <button onClick={() => handleEditEvent(event.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteEvent(event.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyCalendar;
