import { useState } from "react";
import { sendMail } from "../../services/Mailer";
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

  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      await sendMail({ emailState, message })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert(
              "Message Sent -  Port Chavieriat's team will be in touch soon"
            );
          } else if (resData.status === "fail") {
            alert("Message failed to send");
          }
        })
        .then(() => {
          setEmailState({
            email: "",
          });
          setMessage({
            message: "",
          });
        });
    } catch (err) {
      console.log(err);
    }
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
