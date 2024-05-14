import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MyCalendar from "../../components/MyCalender";
import AppInput from "../../components/Input";
import AppButton from "../../components/Button";
import { primaryColors } from "../../assets/Colors";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 3rem;
`;

const Left = styled.div`
  background-color: ${primaryColors.White};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;

const Container = styled.div``;

const Inputs = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 2rem;
`;

const Right = styled.div`
  flex: 1;
  background-color: ${primaryColors.White};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0.5rem 0 0.5rem;
`;

const Events = () => {
  const [title, setTitle] = useState("");
  const [events, setEvents] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);

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
  };

  useEffect(() => {
    const selectedEvent = events.find((event) => event.id === selectedEventId);
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDescription(selectedEvent.description);
    }
  }, [selectedEventId, events]);

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
    <Wrapper>
      <Left>
        <MyCalendar
          events={events}
          setSelectedSlot={setSelectedSlot}
          setSelectedEventId={setSelectedEventId}
          selectedEventId={selectedEventId}
        />

        <Container>
          <Inputs>
            <AppInput
              label="Event Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              height="30px"
            />
            <AppInput
              label="Event Description:"
              type="text"
              height="30px"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Inputs>
          <AppButton
            text={selectedEventId ? "Update Event" : "Add Event"}
            onClick={selectedEventId ? handleUpdateEvent : handleAddEvent}
          />
        </Container>
      </Left>
      <Right>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong> - {event.start.toString()} to{" "}
              {event.end.toString()} - {event.description}
              <button onClick={() => handleEditEvent(event.id)}>Edit</button>
              <button onClick={() => handleDeleteEvent(event.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Right>
    </Wrapper>
  );
};

export default Events;
