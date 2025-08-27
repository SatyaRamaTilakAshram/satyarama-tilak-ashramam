import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 0;
  padding-left: 250px;
  padding-right: 50px;
  padding-top: 60px;
`;

const CardComponentWrapper = styled.div`
  background-color: white;
`;
const ImageWrapper = styled.div`
  min-width: 400px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 80px;
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
  padding-right: 50px;
`;

const Description1 = styled.p`
  margin-top: 0;
  font-size: 25px;
  width: 700px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;
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
  white-space: pre-line;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin-top: 0;
`;

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
