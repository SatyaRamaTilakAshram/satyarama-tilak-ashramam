import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 0;
  padding-left: 250px;
  padding-top: 60px;
  padding-right: 1000px;
`;

const CardComponentWrapper = styled.div`
  background-color: white;
`;
const ImageWrapper = styled.div`
  min-width: 400px;
  padding-right: 50px;
  padding-left: 50px;
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

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 2px;
  padding: 10px 15px;
  margin-bottom: 8px;
  max-width: 600px;
  font-size: 20px;
  background-color: #ffffff;
  border-radius: 6px;
  text-align: left;
  color: #444;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin-top: 0;
`;

const ImageLeftWithListContent = ({
  imageSrc,
  title,
  description1,
  listitem1,
  listitem2,
  listitem3,
  listitem4,
  listitem5,
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
            <List>
              {listitem1 && <ListItem>{listitem1}</ListItem>}
              {listitem2 && <ListItem>{listitem2}</ListItem>}
              {listitem3 && <ListItem>{listitem3}</ListItem>}
              {listitem4 && <ListItem>{listitem4}</ListItem>}
              {listitem5 && <ListItem>{listitem5}</ListItem>}
            </List>
          </ContentWrapper>
        </StyledItem>
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default ImageLeftWithListContent;
