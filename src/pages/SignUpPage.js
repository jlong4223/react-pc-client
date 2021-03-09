import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignUpPage = (props) => {
  return (
    <main className="page">
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
