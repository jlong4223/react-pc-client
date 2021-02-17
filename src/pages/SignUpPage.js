import SignUpForm from "../components/SignUpForm";

const SignUpPage = (props) => {
  return (
    <div>
      <SignUpForm history={props.history} />
    </div>
  );
};

export default SignUpPage;
