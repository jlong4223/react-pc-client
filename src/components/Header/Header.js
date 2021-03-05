import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 50px;
  background-color: #eae8e1;
  /* border: 1px solid green; */
`;

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  let nav = props.userState ? (
    <div className="nav">
      <Link to={`/profile/${props.userState}`}>Hi, {props.userState}!</Link>
      <a href="#weatherHolder">Weather</a>
      <Link to="/schedule">Schedule</Link>
      <Link to="" onClick={props.handleLogout}>
        Logout
      </Link>
    </div>
  ) : (
    <div className="nav">
      <a href="#weatherHolder">Weather</a>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );

  return (
    <StyledHeader
      className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      <div id="headerIcons">
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
