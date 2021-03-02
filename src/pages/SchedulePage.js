import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchEventData } from "../services/Events";
import EventForm from ".././components/EventForm";

const localizer = momentLocalizer(moment);

const SchedulePage = (props) => {
  const [eventData, setEventData] = useState([
    {
      title: "",
      start: null,
      end: null,
    },
  ]);

  useEffect(() => {
    getEventData();
  }, []);

  async function getEventData() {
    const data = await fetchEventData();
    setEventData(data);
  }

  const allEvents = eventData.map((event) => {
    event.start = moment.utc(event.start).toDate();
    event.end = moment.utc(event.end).toDate();
    return event;
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginBottom: 20, marginTop: 100 }}
      />
      <EventForm getEventData={getEventData} />
    </div>
  );
};

export default SchedulePage;
