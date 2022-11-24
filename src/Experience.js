import React from "react";
import styled from "styled-components";
import { revealSection } from "./utils";

const Experience = () => {
  window.addEventListener("scroll", revealSection);
  revealSection();

  return (
    <Container className="fade-in">
      <Column1>
        <h3>Background</h3>
        <ColumnText>
          <p>
            Currently a full-stack developer who's always excited about learning
            new tech capabilities. Started in the world of Finance but now out
            of the matrix, I'm looking to build cool things for the web with
            awesome people.
          </p>
          <p>
            As a developer, I love combining my technical knowledge with my keen
            eye for detail to create impactful and empowering products. A goal
            is to always create applications that are scalable and efficient
            under the hood while providing an engaging and smooth user
            experience.
          </p>
          <p>
            When I'm not in front of a computer screen, I'm probably out and
            about taking pictures, exploring local cuisines and coffee shops, or
            crossing off another item on my bucket list.
          </p>
        </ColumnText>
      </Column1>
      <Column2>
        <h3>Skills</h3>
        <ColumnText>
          <Skill>
            <p>Languages</p>
            <div>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>SQL</p>
            </div>
          </Skill>
          <Skill>
            <p>Frameworks</p>
            <div>
              <p>React</p>
              <p>jQuery</p>
              <p>Node</p>
              <p>Express</p>
            </div>
          </Skill>
          <Skill>
            <p>Tools</p>
            <div>
              <p>Git & GitHub</p>
              <p>Chrome DevTools</p>
              <p>Postman</p>
              <p>MongoDB</p>
            </div>
          </Skill>
        </ColumnText>
      </Column2>
      <Column3>
        <h3>Experience</h3>
        <ColumnText>
          <Job>
            <div>
              <p>S&P Global Ratings</p>
              <p>Structured Finance Associate</p>
            </div>
            <p>2021 - 2022</p>
          </Job>
          <Job>
            <div>
              <p>DBRS Morningstar</p>
              <p>Structured Finance Analyst</p>
            </div>
            <p>2019 - 2021</p>
          </Job>
          <Job>
            <div>
              <p>Sportlogiq</p>
              <p>Finance & Operations Analyst</p>
            </div>
            <p>2015 - 2019</p>
          </Job>
          <Job>
            <div>
              <p>McGill Microfinance Competition</p>
              <p>Director of Finance</p>
            </div>
            <p>2015 - 2016</p>
          </Job>
          <Job>
            <div>
              <p>Wavo</p>
              <p>Business Development Intern</p>
            </div>
            <p>2015</p>
          </Job>
          <Job>
            <div>
              <p>McGill Investment Club</p>
              <p>Volunteer</p>
            </div>
            <p>2014 - 2015</p>
          </Job>
        </ColumnText>
      </Column3>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 75px;
  grid-template-areas:
    "background skills experience"
    "background skills experience"
    "background skills experience";

  transform: translateY(100px);
  opacity: 0;
  transition: 1s;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    text-align: center;
    text-transform: uppercase;
    color: var(--blue);
  }
`;

const Column1 = styled(Column)`
  grid-area: background;
`;

const Column2 = styled(Column)`
  grid-area: skills;
`;

const Column3 = styled(Column)`
  grid-area: experience;
`;

const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 1rem;
`;

const Skill = styled.div`
  display: flex;
  padding: 0 25px;

  > div:last-child {
    width: 100%;
    text-align: right;
  }

  p {
    padding-bottom: 5px;
  }
`;

const Job = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Experience;
