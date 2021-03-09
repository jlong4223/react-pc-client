import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/UserService";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
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
    if (!formValid()) return;
    try {
      await login(formState);
      props.handleSignupOrLogin();
      props.history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      // alert("Invalid Credentials!");
      console.log(err);
    }
  }

  function formValid() {
    return !!(formState.email && formState.password);
  }

  return (
    <div id="loginDiv">
      <legend>Login</legend>
      <form id="login" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="form-control"
            style={{ marginTop: 10 }}
            placeholder="Password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-sm btn-primary"
          disabled
          disabled={!formValid()}
          style={{ marginTop: 10 }}
        >
          Submit
        </button>
        <Link to="/signup">Don't have an account?</Link>
      </form>
    </div>
  );
};

export default LoginForm;
