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
const ContentWrapper = styled.div`
  flex: 2;
  padding-top: 60px;
  padding-bottom: 50px;
`;
const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
  }
`;
export const HeadWrapper = styled.h1`
  text-align: center;
  text-decoration: underline;
  margin: auto;
  height: auto;
  font-wieght: 500;
  color: #800000;
  font-size: 10.5emm;
  background-color: white;
  box-shadow: 0px 0px 0px rgba(2, 2, 12, 0.91);
`;

const ImageLeftCard = ({ imageSrc, title, description1, description2 }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleTrustServices = () => {
    navigate("/services");
  };

  return (
    <CardComponentWrapper>
      <HeadWrapper>{t("our_mission_title")}</HeadWrapper>
      <CardWrapper>
        <ImageWrapper>
          <img src={imageSrc} alt={title} />
        </ImageWrapper>
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
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default ImageLeftCard;
