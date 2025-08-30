import { Header } from "../ui/Header";
import { OurMission } from "./OurMission";
import Footer from "../ui/Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  /* Default desktop */
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;

  /* Tablets */
  @media (max-width: 48rem) {
    max-width: 100%;
    padding: 1.5rem;
  }

  /* Mobiles */
  @media (max-width: 30rem) {
    max-width: 100%;
    padding: 1rem;
  }
`;

export const About = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <OurMission />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};
