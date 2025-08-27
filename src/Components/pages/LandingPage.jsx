import { Header } from "../ui/Header";
import CarouselComponent from "../ui/Carousel";
import { About } from "./About";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <About />
    </>
  );
};
