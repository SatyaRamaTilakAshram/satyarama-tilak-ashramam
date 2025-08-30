import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  CardComponentWrapper,
  CardWrapper,
  CardTitle,
  Description1,
  Description2,
  StyledButton,
  ButtonWrapper,
} from "../css/Card";

// Reuse the same ContentWrapper from Left
const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    text-align: center;
  }
`;

// Base Image Wrapper
const BaseImageWrapper = styled.div`
  flex: 1;
  min-width: 40%;

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

// For Right Variant
const ImageRightWrapper = styled(BaseImageWrapper)`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 2rem;
  }
`;

const ResponsiveCardWrapper = styled(CardWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 82rem;
  margin: 0 auto;
  flex-wrap: nowrap; /* prevent stacking on desktop */
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2%;
  }
`;

const ImageRightCard = ({ imageSrc, title, description1, description2 }) => {
  const navigate = useNavigate();

  const handleFullHistory = () => {
    navigate("/history");
  };

  return (
    <CardComponentWrapper>
      <ResponsiveCardWrapper>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <Description1>{description1}</Description1>
          <Description2>{description2}</Description2>
          <ButtonWrapper>
            <StyledButton onClick={handleFullHistory}>
              View Full History
            </StyledButton>
          </ButtonWrapper>
        </ContentWrapper>
        <ImageRightWrapper>
          <img src={imageSrc} alt={title} />
        </ImageRightWrapper>
      </ResponsiveCardWrapper>
    </CardComponentWrapper>
  );
};

export default ImageRightCard;
