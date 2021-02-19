import { Link } from "react-router-dom";

const Header = (props) => {
  let nav = props.userState ? (
    <div>
      <p>Hi, {props.userState}!</p>
      <Link to="" onClick={props.handleLogout}>
        Logout
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
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
