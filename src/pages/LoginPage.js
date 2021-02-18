import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  return (
    <div>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        history={props.history}
      />
    </div>
  );
};

export default LoginPage;
