import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Content Wrapper
const ContentWrapper = styled.div`
  padding: 3.75rem 1rem 1.875rem 3.125rem;

  @media (max-width: 1024px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;
// Card outer wrapper
const CardComponentWrapper = styled.div`
  background-color: white;
`;

// Image wrapper with padding
const ImageWrapper = styled.div`
  flex: 1;
  min-width: 25rem; /* 400px */
  padding: 1.25rem 3.125rem 5rem 1rem;

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
    width: 90%;
  }
`;

// Card container with layout behavior
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

// Text section
const Description1 = styled.p`
  margin-top: 0;
  font-size: 1.5625rem; /* 25px */
  word-wrap: break-word;
  white-space: normal;
  font-weight: 800;
  text-align: left;
  max-width: 43.75rem; /* 700px */

  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 100%;
  }
`;

const Description2 = styled.p`
  font-weight: 400;
  font-size: 1.25rem; /* 20px */
  padding-top: 0.625rem;
  color: #575757;
  font-family: Lato, sans-serif;
  text-align: justify;
  max-width: 40.625rem; /* 650px */

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

// Grid wrapper that becomes column on small screens
const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1.5em;
    padding-left: 1.5rem;
  }
`;

// Component
const DetailsImageRightCard = ({
  imageSrc,
  title,
  description1,
  description2,
}) => {
  const navigate = useNavigate();

  const handleTrustServices = () => {
    navigate("/services");
  };

  return (
    <CardComponentWrapper>
      <CardWrapper>
        <StyledItem>
          <ContentWrapper>
            <Description1>{description1}</Description1>
            <Description2>{description2}</Description2>
          </ContentWrapper>
          <ImageWrapper>
            <img src={imageSrc} alt={title} />
          </ImageWrapper>
        </StyledItem>
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default DetailsImageRightCard;
