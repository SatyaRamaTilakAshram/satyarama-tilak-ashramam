import styled from "styled-components";
import trust_logo from "../../trust_logo.png";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import thatagaru from "../../Images/thatagaru.jpeg";

const HeaderWrapper = styled.div`
  background-color: #653399;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  /* instead of fixed height */
  padding: 0.5rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center; /* vertically align items */
  justify-content: space-between;
  padding: 0 3rem;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex: unset;
    gap: 0.1rem;
    padding: 0.2rem 1rem;
  }
`;

/* Each section takes equal space */
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0; /* prevent shrinking */
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const CenterGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const RightGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;
const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTrustLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  border-radius: 0.8rem;

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 1.4rem;
  margin: 0;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StyledSubtitle = styled.p`
  color: #f0e6ff;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.2rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const StyledThatagaru = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid white;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    text-decoration: none;
    color: #fdf0f4;
    font-weight: 500;
    font-size: 1.1rem;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    a {
      font-size: 0.85rem;
    }
  }
`;

export const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* Left: Trust logo + title */}
        <LeftGroup>
          <StyledLogoWrapper>
            <StyledTrustLogo src={trust_logo} alt="trustlogo" />
          </StyledLogoWrapper>
          <div>
            <StyledTitle>{t("trust_name")}</StyledTitle>
            <StyledSubtitle>{t("temple_name")}</StyledSubtitle>
          </div>
        </LeftGroup>

        {/* Center: Thatagaru image */}
        <CenterGroup>
          <StyledThatagaru src={thatagaru} alt="thatagaru" />
        </CenterGroup>

        {/* Right: Nav + Language Selector */}
        <RightGroup>
          <NavLinks>
            <Link to="/">{t("Home")}</Link>
            <Link to="/about">{t("About")}</Link>
            <Link to="/contact">{t("Contact")}</Link>
          </NavLinks>
          <LanguageSelector />
        </RightGroup>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
