import LandingPage from "./LandingPage";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Experience from "./Experience";
import Footer from "./Footer";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <LandingPage />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--grey);

  > div {
    margin: 0 10rem 1rem 10rem;
  }
`;

export default App;
