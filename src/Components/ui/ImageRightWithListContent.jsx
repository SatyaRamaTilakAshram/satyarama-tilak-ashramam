import React from "react";
import styled from "styled-components";

const CardComponentWrapper = styled.div`
  background-color: white;
  padding: 2rem 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 83rem;
  margin: 0 auto;
  flex-wrap: wrap; /* allows stacking on mobile */
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse; /* image first on mobile */
    gap: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description1 = styled.p`
  font-size: 1.2rem;
  color: #800000;
  font-weight: 800;
  text-align: left;
  margin-bottom: 1rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  text-align: left;
  color: #444;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    width: 100%;
    max-width: 40rem; /* limits size on desktop */
    height: auto; /* auto height maintains aspect ratio */
    object-fit: cover;
    display: block;
    box-shadow: 3px 3px 24px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    min-width: 80%;
  }
`;

const ImageRightWithListContent = ({
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
          <ImageWrapper>
            <img src={imageSrc} alt={title} />
          </ImageWrapper>
        </StyledItem>
      </CardWrapper>
    </CardComponentWrapper>
  );
};

export default ImageRightWithListContent;
