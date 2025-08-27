// CarouselComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Box } from "@mui/material";
import ashramam_image from "../../Images/ashramam_pic.png";
import founder_home_page from "../../Images/founder_home_page.png";
import temple_night_mode from "../../Images/temple_night_mode.png";
import vrudhulu from "../../Images/vrudhulu.png";
import { useTranslation } from "react-i18next";
import { StyledButton } from "../css/Card";
import { useNavigate } from "react-router-dom";

// Sample data
const slides = [
  { image: founder_home_page, title: "Slide 1" },
  { image: temple_night_mode, title: "Slide 2" },
  { image: vrudhulu, title: "Slide 3" },
];

// Styled Components
const CarouselWrapper = styled(Box)`
  display: flex;
  padding-top: 100px; /* Push down from header */
  padding-left: 10px;
`;

const StyledCarousel = styled.div`
  background-color: #fdf0f4;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 750px;
  height: 500px;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 20px;
    object-fit: cover;
    display: block;
  }

  .slick-slider {
    border-radius: 20px;
  }

  .slick-dots li button:before {
    color: #643399; /* Dot color on image */
    font-size: 12px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FounderDescription = styled.div`
  padding-top: 100px;
  padding-left: 50px;
`;
const TrustDescription1 = styled.h2`
  color: #891155;
  font-size: 30px;
`;
const TrustDescription2 = styled.p`
  color: #891155;
  font-size: 20px;
`;

const ActivityList = styled.ul`
  list-style: none;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #891155;
  justify-content: center;
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
  justify-content: center;
  display: flex;
`;
const ActivityContainer = styled.div`
  border-radius: 10px;
  margin-left: 15px;
  margin-bottom: 10px;
  box-shadow: 3px 3px 5px 5px #a4678aff;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 0;
  justify-content: center;
`;
const SevaTitleWrapper = styled.div`
  background-color: #ffc007;
  width: 400px;
  border-radius: 15px;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  display: flex; /* ✅ enable flexbox */
  align-items: center; /* ✅ center vertically */
`;
const SevasWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  padding-top: 0px;
  background-color: white;
`;
const ButtonWrapper = styled.div`
  justify-content: center;
`;
const StyledTrustImage = styled.img`
  width: 500px;
  margin-left: 150px;
  margin-right: 60px;
  margin-top: 25px;
  margin-bottom: 50px;
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
    margin-bottom: 50px;
  `;

  const Bold = styled.span`
    font-weight: 700;
    font-size: 20px;
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
