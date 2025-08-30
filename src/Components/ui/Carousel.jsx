// CarouselComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Box } from "@mui/material";
import ashramam_image from "../../Images/ashramam_pic.jpeg";
import founder from "../../Images/founder.jpeg";
import temple_night_mode from "../../Images/temple_night_mode.jpeg";
import vrudhulu from "../../Images/vrudhulu.jpeg";
import { useTranslation } from "react-i18next";
import { StyledButton } from "../css/Card";
import { useNavigate } from "react-router-dom";

// Sample data
const slides = [
  { image: founder, title: "Slide 1" },
  { image: temple_night_mode, title: "Slide 2" },
  { image: vrudhulu, title: "Slide 3" },
];

// Styled Components
const CarouselWrapper = styled(Box)`
  flex: 1;
  max-width: 35rem; /* limit width on desktop */
  width: 100%; /* take full width on mobile */
`;

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: row; /* desktop: carousel + description side by side */
  align-items: center; /* align top */
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap; /* prevent automatic wrapping on desktop */

  @media (max-width: 768px) {
    flex-direction: column; /* mobile: stack vertically */
    align-items: center;
    gap: 1rem;
    padding-left: 1rem; /* reduce spacing on mobile */
    padding-right: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 40rem; /* limit carousel size */
  margin: 0 auto; /* center horizontally */
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FounderDescription = styled.div`
  flex: 1;
  max-width: 40rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-top: 1rem; /* small spacing between carousel & text */
  }
`;
const TrustDescription1 = styled.h2`
  padding-top: 1rem;
  paddin-bottom: 0;
  margin: 0;
  color: #891155;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const TrustDescription2 = styled.p`
  color: #891155;
  font-size: 1.2rem;
  margin-top: 0.2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ActivityList = styled.ul`
  list-style: none;
  font-family: "Lato", sans-serif;
  color: #891155;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  algin-ietms: center;
`;

const Section = styled.li`
  margin-bottom: 24px;
`;

const Heading = styled.h3`
  margin-bottom: 8px;
  color: #891155;
`;

const SubList = styled.ul`
  list-style: none;
  padding-left: 16px;
`;

const SubItem = styled.li`
  margin-bottom: 6px;
`;

const SevasTtile = styled.h2`
  text-align: center;
`;

const ActivityContainer = styled.div`
  border-radius: 10px;
  margin: 0 auto 20px;
  box-shadow: 3px 3px 5px 5px #a4678aff;
  background: #fff;
  max-width: 600px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SevaTitleWrapper = styled.div`
  background-color: #ffc007;
  width: fit-content;
  padding: 0 20px;
  border-radius: 15px;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const SevasWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
  padding: 20px;
  background-color: white;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const StyledTrustImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const CarouselComponent = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();
  const handleFullHisoty = () => {
    navigate("/contact");
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const MainContainer = styled.div`
    margin-top: 1rem;

    @media (max-width: 768px) {
    }
  `;

  const Bold = styled.span`
    font-weight: 700;
    font-size: 1.1rem;
  `;
  const Italic = styled.span`
    font-style: italic;
  `;

  return (
    <MainContainer>
      <StyledCarousel>
        <CarouselWrapper>
          <ImageContainer>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <StyledImage src={slide.image} alt={slide.title} />
                </div>
              ))}
            </Slider>
          </ImageContainer>
        </CarouselWrapper>
        <FounderDescription>
          <TrustDescription1>{t("trust_subheading1")}</TrustDescription1>
          {currentLanguage === "en" ? (
            <TrustDescription2>
              <Bold>{t("trust_description1")}</Bold>
              {t("trust_description2")}
              <Bold>{t("trust_description3")}</Bold>
              {t("trust_description4")}
              <Italic>{t("trust_description5")}</Italic>
              {t("trust_description6")}
              <Bold>{t("trust_description7")}</Bold>
              {t("trust_description8")}
            </TrustDescription2>
          ) : (
            <TrustDescription2>{t("trust_description")}</TrustDescription2>
          )}
          <ButtonWrapper>
            <StyledButton onClick={handleFullHisoty}>
              View Full History
            </StyledButton>
          </ButtonWrapper>
        </FounderDescription>
      </StyledCarousel>
      <SevasWrapper>
        <ActivityList>
          <TitleContainer>
            <SevaTitleWrapper>
              <SevasTtile>{t("sevas_title")}</SevasTtile>
            </SevaTitleWrapper>
          </TitleContainer>
          <ActivityContainer>
            <Section>
              <Heading>{t("dailyActivities")}</Heading>
              <SubList>
                <SubItem>{t("dailyList")}</SubItem>
              </SubList>
            </Section>

            <Section>
              <Heading>{t("weeklyRituals")}</Heading>
              <SubList>
                <SubItem>
                  <Bold>{t("monday")}</Bold> – {t("rudrabhishekam")}
                </SubItem>
                <SubItem>
                  <Bold>{t("tuesdayFriday")}</Bold> – {t("lakshmiPooja")}
                </SubItem>
                <SubItem>
                  <Bold>{t("saturday")}</Bold> – {t("venkateswara")}
                </SubItem>
              </SubList>
            </Section>

            <Section>
              <Heading>{t("monthlySpecial")}</Heading>
              <SubList>
                <SubItem>
                  <Bold>{t("amavasya")}</Bold> – {t("chandiHomam")}
                </SubItem>
                <SubItem>
                  <Bold>{t("pournami")}</Bold> – {t("kalasarpaHomam")}
                </SubItem>
              </SubList>
            </Section>

            <Section>
              <Heading>{t("annualFestivals")}</Heading>
              <SubList>
                <SubItem>
                  <Bold>{t("kartik")}</Bold> – {t("kartikInfo")}
                </SubItem>
                <SubItem>
                  <Bold>{t("gopashtami")}</Bold>
                </SubItem>
                <SubItem>
                  <Bold>{t("mahaShivaratri")}</Bold>
                </SubItem>
              </SubList>
            </Section>
          </ActivityContainer>
        </ActivityList>
        <StyledTrustImage src={ashramam_image} />
      </SevasWrapper>
    </MainContainer>
  );
};

export default CarouselComponent;
