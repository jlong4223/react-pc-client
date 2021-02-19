import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 50px;
  /* border: 1px solid green; */
`;

const Header = (props) => {
  let nav = props.userState ? (
    <div className="nav">
      <Link to="">Hi, {props.userState}!</Link>
      <Link to="" onClick={props.handleLogout}>
        Logout
      </Link>
    </div>
  ) : (
    <div className="nav">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );

  return (
    <StyledHeader>
      <div>
        <Link className="title" to="/">
          <i className="fas fa-ship fa-lg"></i>
          Port Chaveriat
        </Link>
      </div>
      <div>{nav}</div>
    </StyledHeader>
  );
};

export default Header;
