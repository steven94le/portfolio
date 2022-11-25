import React from "react";
import styled from "styled-components";
import { revealSection } from "./utils";

const OtherProjects = () => {
  window.addEventListener("scroll", revealSection);
  revealSection();

  return (
    <Container className="fade-in">
      <h3>Other Tinkerings</h3>
      <List>
        <Project>
          <a
            href="https://github.com/steven94le/twitter-clone-project"
            target="_blank"
            rel="noreferrer"
          >
            <p>Twitter Clone 🐦</p>
          </a>
          <p>
            Twiitter replica built using React for front-end. Back-end server
            was constructed using Node and Express, with API endpoints fetching
            tweets and user data.
          </p>
          <p>JS | HTML | CSS | React | Node | Express</p>
        </Project>
        <Project>
          <a
            href="https://github.com/steven94le/slingair-project"
            target="_blank"
            rel="noreferrer"
          >
            <p>Slingair Airlines ✈️</p>
          </a>
          <p>
            Users can book a seat and review/delete their reservation. Admins
            can see all reservations made. Learned RESTful server endpoints,
            MongoDB integration, and data persistence.
          </p>
          <p>JS | HTML | CSS | React | Node | Express | MongoDB</p>
        </Project>
        <Project>
          <a
            href="https://github.com/steven94le/oop-game"
            target="_blank"
            rel="noreferrer"
          >
            <p>OOP Game 🕹</p>
          </a>
          <p>
            Built with vanilla JS, focusing on OOP and DOM manipulation. Users
            need to dodge projectiles that progressively speed up and increase
            in number as the game goes on.
          </p>
          <p>JS | HTML | CSS | Netlify | OOP</p>
        </Project>
        <Project>
          <a
            href="https://github.com/steven94le/react-typescript-noteapp"
            target="_blank"
            rel="noreferrer"
          >
            <p>Note App 📝</p>
          </a>
          <p>
            Simple note-taking app developed to learn about TypeScript/
            Bootstrap. Users can create/delete notes as well as change color of
            the note itself.
          </p>
          <p>TypeScript | React | HTML | Bootstrap</p>
        </Project>
        <Project>
          <a
            href="https://github.com/steven94le/react-typescript-noteapp"
            target="_blank"
            rel="noreferrer"
          >
            <p>Calculator App ➕</p>
          </a>
          <p>
            Learning about jQuery and GitHub Pages deployment for the first time
            via building a calculator app.
          </p>
          <p>JS | HTML | CSS | jQuery | GitHub Pages</p>
        </Project>
        <Project>
          <a
            href="https://github.com/steven94le/yf-stock-ticker"
            target="_blank"
            rel="noreferrer"
          >
            <p>Ticker Tracker 📈</p>
          </a>
          <p>
            Using Yahoo Finance's WebSocket API, and protocol buffers to
            structure message exchanges, real-time stock price is displayed.
          </p>
          <p>JS | HTML | CSS | protobufjs | Surge </p>
        </Project>
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transform: translateY(100px);
  opacity: 0;
  transition: 1s;

  > h3 {
    text-transform: uppercase;
    color: var(--blue);
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const List = styled.div`
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1rem 1rem;
  font-size: 16px;
  margin: 1rem 0;
  line-height: 1.5;

  > p:first-child {
    font-weight: bold;
  }

  > p:last-child {
    color: var(--blue);
    font-size: 12px;
    text-transform: uppercase;
    vertical-align: bottom;
    margin-top: 5px;
  }
`;

export default OtherProjects;
