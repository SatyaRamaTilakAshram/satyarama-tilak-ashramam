import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContentWrapper = styled.div`
  margin-top: 0;
  padding-top: 60px;
  padding-bottom: 30px;
  padding-left: 50px;
`;

const CardComponentWrapper = styled.div`
  background-color: white;
`;
const ImageWrapper = styled.div`
  min-width: 400px;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-right: 50px;
  img {
    width: 650px;
    height: 100%;
    object-fit: cover;
    display: block;
    box-shadow: 3px 3px 24px 10px rgb(0, 0, 0);
    border-radius: 20px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  color: #800000;
  align-items: normal;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 100vw;
  margin: 0;
`;

const Description1 = styled.p`
  margin-top: 0;
  font-size: 25px;
  width: 700px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-weight: 800;
  text-align: left;
`;
const Description2 = styled.p`
  font-weight: 400;
  font-size: 20px;
  padding-top: 10px;
  color: #575757;
  font-family: Lato, sans-serif;
  text-align: justify;
  width: 650px;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin-top: 0;
`;

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
