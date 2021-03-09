import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchEventData } from "../services/Events";
import EventForm from "../components/EventForm/EventForm";

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
    // console.log(data);
    setEventData(data);
  }
  // TODO figure out why events go in 6 hrs behind when connected to clearDB
  const allEvents = eventData.map((event) => {
    event.start = moment.utc(event.start).toDate();
    event.end = moment.utc(event.end).toDate();
    return event;
  });

  // TODO allow user to create an event based off time drag selection
  const handleSelectSlot = ({ start, end, resourceId }) => {
    console.log("Selected", start, end);
    prompt("Enter a title");
  };

  return (
    <div>
      <Calendar
        // selectable={true}
        popup={true}
        // onSelectSlot={handleSelectSlot}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginBottom: 20, marginTop: 100 }}
      />
      <EventForm
        getEventData={getEventData}
        id={props.id}
        handleSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default SchedulePage;
