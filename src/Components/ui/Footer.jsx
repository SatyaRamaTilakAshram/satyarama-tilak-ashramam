import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trust_logo from "../../trust_logo.png";

const MainContainer = styled.div`
  padding: 1rem 2rem;
  background-color: #3a1364ff;
  color: white;
  margin-bottom: 0;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const AddressContainer = styled.div`
  text-align: left;
  justify-self: start; /* align to left within grid */
  padding-left: 1rem; /* add equal inner padding */
`;

const Address = styled.p`
  white-space: pre-line;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

const StayConnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* keep title right aligned */
  justify-self: end;
  padding-right: 1rem;
`;

const AddressTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const StayConnectedTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  text-align: right; /* explicit right alignment */
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NavWrapper = styled.div``;
const QuickLinksContainer = styled.div`
  display: flex;
  justify-content: center; /* center this section in its column */
`;

const InnerQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* title + links left aligned */
`;

const QuickLinksTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  text-align: left; /* ensure left-aligned */
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column; /* stack vertically */
  align-items: flex-start; /* left align */
  margin-top: 0.5rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 6px;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const LineSeparator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  border-top: 1px solid white;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center; /* center logo horizontally */
  width: 100%; /* take full column width */
  margin-top: 0.5rem;
`;

const StyledLogo = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* equal columns */
  gap: 2rem;
  padding-top: 2rem; /* equal padding all around */
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 5rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
  }
`;

const CopyRightTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
`;

const CopyRightWrapper = styled.div`
  padding: 1rem;
  margin: 0;
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainContainer>
        <RowContainer>
          <AddressContainer>
            <AddressTitle>{t("address_title")}</AddressTitle>
            <Address>{t("address")}</Address>
          </AddressContainer>

          <QuickLinksContainer>
            <InnerQuickLinks>
              <QuickLinksTitle>{t("quick_links")}</QuickLinksTitle>
              <NavWrapper>
                <NavLinks>
                  <Link to="/">{t("home")}</Link>
                  <Link to="/about">{t("about")}</Link>
                  <Link to="/contact">{t("contact")}</Link>
                </NavLinks>
              </NavWrapper>
            </InnerQuickLinks>
          </QuickLinksContainer>

          <StayConnectedContainer>
            <StayConnectedTitle>{t("stay_connected")}</StayConnectedTitle>
            <LogoWrapper>
              <StyledLogo src={trust_logo} alt="Trust Logo" />
            </LogoWrapper>
          </StayConnectedContainer>
        </RowContainer>
      </MainContainer>

      <LineSeparator />
      <CopyRightWrapper>
        <CopyRightTitle>{t("copy_right_warning")}</CopyRightTitle>
      </CopyRightWrapper>
    </>
  );
};

export default Footer;
