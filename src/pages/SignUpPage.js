import SignUpForm from "../components/SignUpForm";

const SignUpPage = (props) => {
  return (
    <main class="page">
      <div>
        <SignUpForm
          history={props.history}
          handleSignupOrLogin={props.handleSignupOrLogin}
        />
      </div>
    </main>
  );
};

export default SignUpPage;
