import profileImage from "./asset/profileImage.jpeg";
import styled, { keyframes } from "styled-components";

import React from "react";

const LandingPage = () => {
  return (
    <Container>
      <Left>
        <h1>Hello! 👋</h1>
        <h1>I'm Steven, a full-stack developer. 👨‍💻 </h1>
        <h3>
          Constantly discovering & learning, and thinking about how I can create
          meaningful impact at global scale. 🚀
        </h3>
        <h3>
          Get in touch &nbsp;👉 &nbsp;
          <StyledLink href="mailto:steven94le@gmail.com">
            steven94le@gmail.com
          </StyledLink>
        </h3>
      </Left>
      <Right>
        <img
          src={profileImage}
          alt="profile"
          style={{ height: "300px", borderRadius: "50%" }}
        />
      </Right>
    </Container>
  );
};

const fadeInAnimation = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const Container = styled.div`
  height: 100vh;
  width: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  animation: ${fadeInAnimation} 1.5s;
`;

const Left = styled.div``;

const Right = styled.div``;

const StyledLink = styled.a`
  color: var(--grey);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--blue);
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  :hover {
    color: #fff;
    box-shadow: inset 220px 0 0 0 var(--blue);
  }
`;

export default LandingPage;
