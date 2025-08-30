import styled from "styled-components";
import { Header } from "../ui/Header";
import CarouselComponent from "../ui/Carousel";
import { About } from "./About";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
  }
`;
const CarouselWrapper = styled.div`
  margin-top: 5rem; /* adjust as needed */
  @media (max-width: 480px) {
  }
`;

export const LandingPage = () => {
  return (
    <PageWrapper>
      <Header />
      <CarouselWrapper>
        <CarouselComponent />
      </CarouselWrapper>
      <About />
    </PageWrapper>
  );
};
