import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/UserService";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      // Using Computed Property Names
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(formState);
      //   props.handleSignupOrLogin();
      props.history.push("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  function isFormInvalid() {
    return !(
      formState.name &&
      formState.email &&
      formState.password === formState.passwordConfirm
    );
  }

  return (
    <div id="signupDiv">
      <legend>Register</legend>
      <form id="signup" onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.name}
            className="form-control"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            value={formState.email}
            className="form-control"
            name="email"
            type="email"
            placeholder="Email"
            style={{ marginTop: 10 }}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={formState.password}
            name="password"
            className="form-control"
            type="password"
            placeholder="Password"
            style={{ marginTop: 10 }}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            value={formState.passwordConfirm}
            name="passwordConfirm"
            className="form-control"
            style={{ marginTop: 10 }}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary"
            disabled
            style={{ marginTop: 10 }}
            disabled={isFormInvalid()}
          >
            Signup
          </button>{" "}
          &nbsp;&nbsp;
          <div id="links">
            {/* <Link to="/">Cancel</Link> */}
            <Link to="/login">Have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
