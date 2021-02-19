import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  return (
    <main class="page">
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
