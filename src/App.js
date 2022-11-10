import LandingPage from "./LandingPage";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <LandingPage />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--grey);
`;

export default App;
