import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StyledButton, ButtonWrapper } from "../css/Card";
import {
  CardComponentWrapper,
  CardWrapper,
  CardTitle,
  Description1,
  Description2,
} from "../css/Card";
const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 20px;
`;
const ImageWrapper = styled.div`
  flex: 2;
  min-width: 300px;
  width: max-content;
  padding-right: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
  }
`;

const ImageRightCard = ({ imageSrc, title, description1, description2 }) => {
  const navigate = useNavigate();
  const handleFullHisoty = () => {
    navigate("/history");
  };
  return (
    <CardComponentWrapper>
      <CardWrapper>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <Description1>{description1}</Description1>
          <Description2>{description2}</Description2>
          <ButtonWrapper>
            <StyledButton onClick={handleFullHisoty}>
              View Full History
            </StyledButton>
          </ButtonWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <img src={imageSrc} alt={title} />
        </ImageWrapper>
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default ImageRightCard;
