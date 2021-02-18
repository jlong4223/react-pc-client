import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/UserService";

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
      //   TODO why is the login function not grabbing a token?
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
    <div>
      <form onSubmit={handleSubmit}>
        <legend>Login</legend>
        <div>
          <input
            type="email"
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
            placeholder="Password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button disabled={!formValid()}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
