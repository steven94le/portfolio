import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <p>Developed by Steven Le 👨‍💻 2022 </p>
      </LeftSide>
      <RightSide>
        <a href="mailto:steven94le@gmail.com">EMAIL</a>
        <a
          href="https://github.com/steven94le"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/steven94le/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default Footer;
