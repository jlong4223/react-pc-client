import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchEventData } from "../services/Events";

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

  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
    {
      start: moment().add(1, "days").toDate(),
      end: moment().add(2, "days").toDate(),
      title: "second title",
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginBottom: 20 }}
      />
    </div>
  );
};

export default SchedulePage;
