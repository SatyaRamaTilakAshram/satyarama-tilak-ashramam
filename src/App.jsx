import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  About,
  Contact,
  TrustServices,
  TempleHistory,
} from "./Components/pages";
import "./i18n";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle> </GlobalStyle>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<TrustServices />} />
          <Route path="/history" element={<TempleHistory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
