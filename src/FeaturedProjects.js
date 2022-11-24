import React from "react";
import styled from "styled-components";
import tastyNoodles from "./asset/tastyNoodles.png";
import spotifyApp from "./asset/spotifyApp.png";
import ecommerce from "./asset/ecommerce.png";
import { revealSection } from "./utils";

const FeaturedProjects = () => {
  window.addEventListener("scroll", revealSection);
  revealSection();

  return (
    <Container className="fade-in">
      <h3>Featured Projects</h3>
      <Project className="fade-in">
        <LeftSide>
          <a
            href="https://github.com/steven94le/capstone-tasty-noodles"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Tasty Noodles 🍜</h3>
          </a>
          <p>
            Users can browse noodle recipes via search or ingredient filters. I
            used the latter feature myself as someone who's trying to cook more
            while using left-over ingredients to prevent waste! Recipes can be
            sorted by amounts of ingredients, prep/cook time, calorie count, and
            ratings. Users can also find top-rated ramen restaurants near them
            via the Google Maps API. If logged in, recipes and restaurant
            locations can be bookmarked. Users can also check other members'
            profiles and mutual bookmarks. Account data is stored and accessed
            within MongoDB database.
          </p>
        </LeftSide>
        <RightSide>
          <a
            href="https://github.com/steven94le/capstone-tasty-noodles"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tastyNoodles}
              alt="profile"
              style={{ height: "100%", width: "100%" }}
            />
          </a>
        </RightSide>
      </Project>
      <Project className="fade-in">
        <LeftSide>
          <a
            href="https://github.com/steven94le/spotify-app"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Personal Spotify App 🎶</h3>
          </a>
          <p>
            Once logged in with a Spotify account, users can search and play
            songs, save songs into their library, and read the lyrics for a
            selected song. Each user is given a Spotify Access Token so that the
            client can make requests to Spotify Web API Node and Spotify Web
            Player. Track lyrics are obtained through Lyrics Searcher. Refresh
            Tokens are used to let the application get new Access Tokens without
            having to ask the user to log in again.
          </p>
        </LeftSide>
        <RightSide>
          <a
            href="https://github.com/steven94le/spotify-app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotifyApp}
              alt="profile"
              style={{ height: "100%", width: "100%" }}
            />
          </a>
        </RightSide>
      </Project>
      <Project className="fade-in">
        <LeftSide>
          <a
            href="https://github.com/steven94le/ecommerce-project"
            target="_blank"
            rel="noreferrer"
          >
            <h3>E-commerce Project 🛒</h3>
          </a>
          <p>
            An online store with mock wearable items. Users can browse the
            collection, filter with product specifications, review their cart,
            and purchase items after filling out necessary form information.
            Users can create an account or sign into their existing account.
            Google sign-in is also available via Google Identity Services.
            Account data and purchase records are stored and accessed within
            MongoDB database.
          </p>
        </LeftSide>
        <RightSide>
          <a
            href="https://github.com/steven94le/ecommerce-project"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ecommerce}
              alt="profile"
              style={{ height: "100%", width: "100%" }}
            />
          </a>
        </RightSide>
      </Project>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
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
  }

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Project = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  height: 50vh;
  transform: translateY(100px);
  opacity: 0;
  transition: 1s;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const LeftSide = styled.div`
  width: 60%;
  margin-right: 5rem;
`;

const RightSide = styled.div`
  width: 100%;
  text-align: right;
`;

export default FeaturedProjects;
