import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

const EventCalendar = () => {
  const events = [
    {
      title: "Event 1",
      start: "2024-03-11",
      end: "2024-03-12",
    },
    {
      title: "Event 2",
      start: "2024-03-15",
      end: "2024-03-16",
    },
    // Add more sample events as needed
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default EventCalendar;
