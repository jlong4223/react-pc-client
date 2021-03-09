import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1f4f87;
  height: 150px;

  p {
    background-color: transparent;
    color: white;
  }

  #contact {
    color: white;
    text-decoration: none;
  }
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <p>
        <Link id="contact" to="/contact">
          Contact
        </Link>
      </p>
      <p>
        Copyright &copy; All Rights Reserved {new Date().getFullYear()} Port
        Chaveriat
      </p>
    </StyledFooter>
  );
}
