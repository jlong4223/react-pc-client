import { useState } from "react";
import { addEventData } from "../../services/Events";
import "./EventForm.css";

const EventForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    start: null,
    end: null,
    // userId: props.id,
  });

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    try {
      await addEventData(formState)
        .then(() => props.getEventData())
        .then(() => {
          setFormState({
            title: "",
            start: "",
            end: "",
            // userId: `${props.id}`,
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="eventComp">
      <form style={{ marginBottom: 20 }}>
        <legend>Example/Format</legend>
        <input style={{ margin: 5, width: 300 }} value="Example Title" />
        <input style={{ margin: 5 }} value="2021-08-25 12:30:00" />
        <input style={{ margin: 5 }} value="2021-08-25 13:30:00" />
      </form>
      <form id="eventForm" onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <legend>Add an event:</legend>
        <input
          placeholder="Title"
          name="title"
          value={formState.title}
          onChange={handleChange}
          style={{ margin: 5, width: 300 }}
        />
        <input
          placeholder="Start Date and Time"
          type="text"
          name="start"
          value={formState.start}
          onChange={handleChange}
          style={{ margin: 5 }}
        />
        <input
          placeholder="End Date and Time"
          name="end"
          type="text"
          value={formState.end}
          onChange={handleChange}
          style={{ margin: 5 }}
        />
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
