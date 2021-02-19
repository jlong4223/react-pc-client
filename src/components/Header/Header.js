const Header = (props) => {
  let nav = props.userState ? (
    <div>
      <p>Hi, {props.userState}!</p>
    </div>
  ) : (
    <div>
      <p>Please Login</p>
    </div>
  );

  return (
    <div>
      <header>Port Chaveriat</header>
      {nav}
    </div>
  );
};

export default Header;
