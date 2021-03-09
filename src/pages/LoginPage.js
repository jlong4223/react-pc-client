import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = (props) => {
  return (
    <main className="page">
      <div>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          history={props.history}
        />
      </div>
    </main>
  );
};

export default LoginPage;
