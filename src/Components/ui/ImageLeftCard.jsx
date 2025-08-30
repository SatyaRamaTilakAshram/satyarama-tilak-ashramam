import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CardComponentWrapper,
  CardWrapper,
  CardTitle,
  Description1,
  Description2,
  StyledButton,
  ButtonWrapper,
} from "../css/Card";

// Base Text Wrapper
const ContentWrapper = styled.div`
  flex: 1; /* take remaining space */
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;

// Base Image Wrapper
const BaseImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1.25rem;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 100%;
  }
`;

// For Left Variant
const ImageLeftWrapper = styled(BaseImageWrapper)`
  flex: 0 0 50%; /* image takes 50% of row */
  box-sizing: border-box; /* include padding inside width */
  padding: 2rem;
  max-width: 50%; /* ensure it doesn’t exceed 50% */
  height: 28rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

const HeadWrapper = styled.h1`
  text-align: center;
  text-decoration: underline;
  margin: auto;
  font-weight: 500;
  color: #800000;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding-bottom: 1rem;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding-top: 2.5rem;
  }
`;

const ResponsiveCardWrapper = styled(CardWrapper)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem; /* add small horizontal padding */
  max-width: 82rem;
  margin: 0 auto;
  flex-wrap: nowrap; /* prevent stacking on desktop */
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* stack on mobile only */
    align-items: center;
    text-wrap-style: pretty;
    gap: 1.5rem;
  }
`;

const StyledCardComponentWrapper = styled(CardComponentWrapper)`
  height: auto; /* allow the card to expand with content */
  min-height: 30rem; /* optional: ensure some base height */
  padding: 2rem 1rem; /* spacing inside card */
  box-sizing: border-box; /* include padding in height/width */
`;

const ImageLeftCard = ({ imageSrc, title, description1, description2 }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTrustServices = () => {
    navigate("/services");
  };

  return (
    <StyledCardComponentWrapper>
      <HeadWrapper>{t("our_mission_title")}</HeadWrapper>
      <ResponsiveCardWrapper>
        <ImageLeftWrapper>
          <img src={imageSrc} alt={title} />
        </ImageLeftWrapper>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <Description1>{description1}</Description1>
          <Description2>{description2}</Description2>
          <ButtonWrapper>
            <StyledButton onClick={handleTrustServices}>
              See How We Help!
            </StyledButton>
          </ButtonWrapper>
        </ContentWrapper>
      </ResponsiveCardWrapper>
    </StyledCardComponentWrapper>
  );
};

export default ImageLeftCard;
