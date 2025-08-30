import styled from "styled-components";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import TrustLocation from "../ui/TrustLocation";
import contact_background from "../../Images/contact_us.jpeg";
import { useTranslation } from "react-i18next";

const MainContainer = styled.div``;

const PaddingWrapper = styled.div`
  padding-top: 3.75rem; /* 60px */

  @media (max-width: 768px) {
    padding-top: 2.5rem; /* 40px */
  }
`;

const BackgroundWrapper = styled.div`
  background-image: url(${contact_background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-position: center;
    margin-top: 1rem;
  }
`;

const Content = styled.div`
  padding-left: 3.125rem; /* 50px */
  padding-right: 3.125rem;

  @media (max-width: 768px) {
    padding: 1.25rem; /* 20px */
  }
`;

const ContentDescription = styled.p`
  color: black;
  font-size: 1.25rem; /* 20px */
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem; /* 16px */
  }
`;

const ContactInfoTitle = styled.h2`
  color: #800000;
  font-size: 1.75rem; /* 28px */

  @media (max-width: 768px) {
    font-size: 1.375rem; /* 22px */
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.25rem; /* 20px */

  @media (max-width: 768px) {
    font-size: 1rem; /* 16px */
  }
`;

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Header />
      <PaddingWrapper />
      <BackgroundWrapper />
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
  );
};
