import SignUpForm from "../components/SignUpForm";

const SignUpPage = (props) => {
  return (
    <div>
      <SignUpForm
        history={props.history}
        handleSignupOrLogin={props.handleSignupOrLogin}
      />
    </div>
  );
};

export default SignUpPage;
