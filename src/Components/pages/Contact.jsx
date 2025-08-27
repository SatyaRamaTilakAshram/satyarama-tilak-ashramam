import styled from "styled-components";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import TrustLocation from "../ui/TrustLocation";
import contact_background from "../../Images/contact_us.png";
import { useTranslation } from "react-i18next";
const MainContainer = styled.div``;
const PaddingWrapper = styled.div`
  padding-top: 60px;
`;
const BackgroundWrapper = styled.div`
  background-image: url(${contact_background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;
const ContentDescription = styled.p`
  color: black;
  font-size: 20px;
  white-space: pre-line;
`;

const ContactInfoTitle = styled.h2`
  color: #800000;
`;
const Bold = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainContainer>
        <Header />
        <PaddingWrapper></PaddingWrapper>
        <BackgroundWrapper></BackgroundWrapper>
        <Content>
          <ContactInfoTitle>{t("contact_subheading")}</ContactInfoTitle>
          <ContentDescription>{t("contact_text1")}</ContentDescription>
          <Bold>{t("contact_bold_word1")}</Bold>
          <ContentDescription>{t("contact_text2")}</ContentDescription>
          <Bold>{t("contact_bold_word2")}</Bold>
          <ContentDescription>{t("contact_text3")}</ContentDescription>
          <Bold>{t("contact_bold_word3")}</Bold>
          <br />
          <br />
          <br />
          <Bold>{t("contact_bold_word4")}</Bold>
          <ContentDescription>{t("contact_text4")}</ContentDescription>
          <Bold>{t("contact_bold_word5")}</Bold>
          <ContentDescription>{t("contact_text5")}</ContentDescription>
        </Content>
        <TrustLocation />
        <Footer />
      </MainContainer>
    </>
  );
};
