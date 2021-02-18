import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../services/UserService";

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
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit}>
        <legend>SignUp Below:</legend>
        <h2>Name:</h2>
        <input
          value={formState.name}
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
        <h2>Email:</h2>
        <input
          value={formState.email}
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <h2>Password:</h2>
        <input
          value={formState.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <h2>Confirm Password:</h2>
        <input
          value={formState.passwordConfirm}
          name="passwordConfirm"
          type="password"
          placeholder="confirm Password"
          onChange={handleChange}
        />
        <div>
          <button disabled={isFormInvalid()}>Signup</button> &nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
