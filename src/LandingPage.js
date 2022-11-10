import profileImage from "./asset/profileImage.jpeg";
import styled from "styled-components";

import React from "react";

const LandingPage = () => {
  return (
    <Container>
      <Left>
        <h1>Hello! 👋</h1>
        <h1>I'm Steven, a junior full-stack developer. 👨‍💻 </h1>
        <h3>
          Constantly discovering & learning, and thinking about how I can create
          meaningful impact at global scale. Open to new opportunities and
          interesting projects. 🚀
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

const Container = styled.div`
  height: 100vh;
  width: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
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
