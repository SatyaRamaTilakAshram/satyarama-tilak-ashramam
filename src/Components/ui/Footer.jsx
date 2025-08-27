import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trust_logo from "../../trust_logo.png";
const MainContainer = styled.div`
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: #3a1364ff;
  color: white;
  margin-bottom: 0px;
`;
const AddressContainer = styled.div``;
const Address = styled.p`
  white-space: pre-line;
  margin: 0;
`;
const QuickLinksContainer = styled.div`
  padding-left: 70px;
`;
const StayConnectedContainer = styled.div``;
const AddressTitle = styled.h2`
  margin-bottom: 10px;
`;
const StayConnectedTitle = styled.h2`
  margin-bottom: 10px;
`;
const QuickLinksTitle = styled.h2`
  margin-bottom: 10px;
`;
const NavWrapper = styled.div``;

const LineSeparator = styled.hr`
  margin-top: 0px;
  color: white;
`;
const NavLinks = styled.nav`
  display: grid;
  grid-row-columns: 1fr 1fr 1fr;
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 20px;
    padding-right: 25px;
    padding-bottom: 2px;
    padding-left: 2px;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;
const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-left: 30px;
  display: block;
`;
const RowContainer = styled.div`
  margin-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const CopyRightTitle = styled.p`
  display: flex;
  justify-content: center;
`;
const CopyRightWrapper = styled.div``;
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
            <QuickLinksTitle>{t("quick_links")}</QuickLinksTitle>
            <NavWrapper>
              <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </NavLinks>
            </NavWrapper>
          </QuickLinksContainer>
          <StayConnectedContainer>
            <StayConnectedTitle>{t("stay_connected")}</StayConnectedTitle>
            <StyledLogo src={trust_logo} />
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
