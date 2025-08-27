import styled from "styled-components";
import trust_logo from "../../trust_logo.png";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import thatagaru from "../../Images/thatagaru.png";

const HeaderWrapper = styled.div`
  background-color: #653399;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding-left: 60px;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTrustLogo = styled.img`
  width: 60px;
  height: 60px;
  border: 2px solid black;
  border-radius: 15px;
`;

const Styledtitle = styled.h1`
  color: white;
  font-size: 22px;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #fdf0f4;
    font-weight: 500;
    font-size: 18px;
    margin-right: 20px;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 100px;
`;
const StyledThatagaru = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 220px;
  border: 2px solid white;
  border-radius: 50px;
  display: block;
`;
const StyledSubtitle = styled.p`
  color: #f0e6ff;
  font-size: 16px;
  margin: 0;
  margin-top: 4px;
`;

export const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <HeaderWrapper>
          <LeftGroup>
            <StyledLogoWrapper>
              <StyledTrustLogo src={trust_logo} alt="trustlogo" />
            </StyledLogoWrapper>

            <div>
              <Styledtitle>{t("trust_name")}</Styledtitle>
              <StyledSubtitle>{t("temple_name")}</StyledSubtitle>
            </div>

            <StyledThatagaru src={thatagaru} />
          </LeftGroup>

          {/* Optional image or selector on the right */}
          <RightContent>
            <NavLinks>
              <Link to="/">{t("Home")}</Link>
              <Link to="/about">{t("About")}</Link>
              <Link to="/contact">{t("Contact")}</Link>
            </NavLinks>
            <LanguageSelector />
          </RightContent>
        </HeaderWrapper>
      </div>
    </>
  );
};
