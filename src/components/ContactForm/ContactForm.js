import { useState } from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
  const [emailState, setEmailState] = useState({
    email: "",
    // message: "",
  });
  const [message, setMessage] = useState({
    message: "",
  });

  function handleEmailChange(e) {
    setEmailState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleMessageChange(e) {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  // TODO change to pc-api
  //   TODO move to services
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ emailState, message });
    const response = await fetch(
      "https://jlong-portfolio-backend.herokuapp.com/send",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ emailState, message }),
      }
    )
      .then((res) => res.json())
      .then(alert("Message Sent"))
      .then(() => {
        setEmailState({
          email: "",
        });
        setMessage({
          message: "",
        });
      });
  };

  function formValid() {
    return !!(emailState.email && message.message);
  }

  return (
    <div className="container" id="messageme">
      <div>
        <form className="form-horizontal" onSubmit={submitEmail}>
          <fieldset className="fieldset">
            <legend>Let's Chat</legend>
            <div className="form-group">
              <div id="envelope" className="col-sm-12">
                <h3>
                  <i className="fas fa-envelope-square fa-lg"></i>
                </h3>
                <input
                  type="text"
                  className="form-control message"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                  value={emailState.email}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div id="pencil" className="col-sm-12">
                <h3>
                  <i className="fas fa-pen-square fa-lg"></i>
                </h3>
                <textarea
                  name="message"
                  className="form-control message"
                  type="text"
                  placeholder="Message"
                  value={message.message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
            </div>
            <div>
              <button
                id="submit"
                className="btn btn-sm btn-primary"
                disabled
                disabled={!formValid()}
                type="submit"
              >
                Send Message
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
