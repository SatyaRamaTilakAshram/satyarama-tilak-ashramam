import React from "react";
import styled from "styled-components";

// Responsive content wrapper
const ContentWrapper = styled.div`
  padding: 3.75rem 3.125rem 3.125rem 2rem; /* top, right, bottom, left */

  @media (max-width: 1024px) {
    padding-left: 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CardComponentWrapper = styled.div`
  background-color: white;
`;

const ImageWrapper = styled.div`
  min-width: 25rem; /* 400px */
  padding: 1.25rem 2rem 5rem 3.125rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    box-shadow: 0.1875rem 0.1875rem 1.5rem 0.625rem rgba(0, 0, 0, 1);
    border-radius: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-width: 80%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  color: #800000;
  align-items: flex-start;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  overflow: hidden;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const Description1 = styled.p`
  margin-top: 0;
  font-size: 1.5625rem; /* 25px */
  word-wrap: break-word;
  white-space: pre-line;
  font-weight: 800;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

const Description2 = styled.p`
  font-weight: 400;
  font-size: 1.25rem; /* 20px */
  padding-top: 0.625rem; /* 10px */
  color: #575757;
  font-family: Lato, sans-serif;
  text-align: justify;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    width: 100%vw;
    grid-template-columns: 1fr;
  }
`;

// Component
const DetailsImageLeftCard = ({
  imageSrc,
  title,
  description1,
  description2,
}) => {
  return (
    <CardComponentWrapper>
      <CardWrapper>
        <StyledItem>
          <ImageWrapper>
            <img src={imageSrc} alt={title} />
          </ImageWrapper>
          <ContentWrapper>
            <Description1>{description1}</Description1>
            <Description2>{description2}</Description2>
          </ContentWrapper>
        </StyledItem>
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default DetailsImageLeftCard;
