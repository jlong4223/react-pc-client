import { useState } from "react";
import { addEventData } from "../services/Events";

const EventForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    start: null,
    end: null,
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
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <legend>Add an event:</legend>
        <legend>Format Date & Time: 0000-00-00 00:00</legend>
        <input
          placeholder="Title"
          name="title"
          value={formState.title}
          onChange={handleChange}
          style={{ margin: 5 }}
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
