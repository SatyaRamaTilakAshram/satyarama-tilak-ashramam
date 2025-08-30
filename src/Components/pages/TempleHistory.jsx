import styled from "styled-components";
import { Header } from "../ui/Header";
import before_after_lord_shiva from "../../Images/before_after_lord_shiva.jpeg";
import shiva_108_pillar_temple from "../../Images/shiva_108_pillar_temple.jpeg";
import swamy from "../../Images/swamy.jpg";
import serving_food_to_people from "../../Images/serving_food_to_people.jpg";
import temple_with_clouds from "../../Images/temple_with_clouds.jpeg";
import ishta from "../../Images/ishta.jpg";
import annapurnadevi from "../../Images/annapurnadevi.jpg";
import DetailsImageLeftCard from "../ui/DetailsImageLeftCard";
import DetailsImageRightCard from "../ui/DetailsImageRightCard";
import ImageLeftWithListContent from "../ui/ImageLeftWithListContent";
import { useTranslation } from "react-i18next";
import Footer from "../ui/Footer";
const HistoryWrapper = styled.div`
  background-color: white;
  margin-top: 0;
`;

const PaddingComp = styled.div`
  background-color: white;
  padding-top: 6rem;
`;
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #2c2c2c;
  border-bottom: 2px solid #653399;
  &:hover {
    border-bottom: 4px solid #653399;
  }
  display: inline-block;
  padding-bottom: 0px;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
  }
`;
const TitleWrapper = styled.div`
  text-align: center;
`;

export const TempleHistory = () => {
  const { i18n, t } = useTranslation();
  console.log("Detected language:", i18n.language);
  return (
    <HistoryWrapper>
      <Header />
      <PaddingComp />
      <TitleWrapper>
        <StyledTitle>{t("temple_history_title")}</StyledTitle>
      </TitleWrapper>
      <DetailsImageLeftCard
        imageSrc={shiva_108_pillar_temple}
        description1={t("temple_history_subheading1")}
        description2={t("temple_history_description1")}
      />
      <DetailsImageRightCard
        imageSrc={before_after_lord_shiva}
        description1={t("shiva_subheading2")}
        description2={t("shiva_description2")}
      />
      <DetailsImageLeftCard
        imageSrc={ishta}
        description1={t("ishta_subheading3")}
        description2={t("ishta_description3")}
      />
      <DetailsImageRightCard
        imageSrc={swamy}
        description1={t("swamy_subheading4")}
        description2={t("swamy_description4")}
      />
      <DetailsImageLeftCard
        imageSrc={annapurnadevi}
        description1={t("annapoorna_subheading5")}
        description2={t("annapoorna_description5")}
      />
      <DetailsImageRightCard
        imageSrc={serving_food_to_people}
        description1={t("serving_devotees_subheading6")}
        description2={t("serving_devotees_description6")}
      />
      <ImageLeftWithListContent
        imageSrc={temple_with_clouds}
        description1={t("highlights_subheading7")}
        listitem1={t("hightlights_listitem1")}
        listitem2={t("hightlights_listitem2")}
        listitem3={t("hightlights_listitem3")}
        listitem4={t("hightlights_listitem4")}
        listitem5={t("hightlights_listitem5")}
      />
      <Footer />
    </HistoryWrapper>
  );
};
