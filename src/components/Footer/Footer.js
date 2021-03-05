import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f4f87;
  height: 150px;

  p {
    background-color: transparent;
    color: white;
  }
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <p>
        Copyright &copy; All Rights Reserved {new Date().getFullYear()} Port
        Chaveriat
      </p>
    </StyledFooter>
  );
}
