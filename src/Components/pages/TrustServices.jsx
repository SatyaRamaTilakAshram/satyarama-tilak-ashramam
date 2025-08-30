import styled from "styled-components";
import { Header } from "../ui/Header";
import founder from "../../Images/founder.jpeg";
import water_service_for_poor from "../../Images/ServiceImages/water_service_for_poor.jpg";
import serving_food from "../../Images/ServiceImages/serving_food.jpeg";
import before_and_after from "../../Images/ServiceImages/before_after_house.jpeg";
//import before_and_after_house from "../../Images/ServiceImages/before_after_house.png";
import old_people_charity1 from "../../Images/old_people_charity1.jpg";
import DetailsImageLeftCard from "../ui/DetailsImageLeftCard";
import ImageLeftWithListContent from "../ui/ImageLeftWithListContent";
import ImageRightWithListContent from "../ui/ImageRightWithListContent";
import { useTranslation } from "react-i18next";
import Footer from "../ui/Footer";
const ServicesWrapper = styled.div`
  background-color: white;
  @media (max-width: 768px) {
  }
`;

const PaddingComp = styled.div`
  background-color: white;
  padding-top: 6rem;
  @media (max-width: 768px) {
    padding-top: 4rem;
  }
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
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledSubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #444444;
`;
const TitleWrapper = styled.div`
  text-align: center;
`;

export const TrustServices = () => {
  const { t } = useTranslation();
  return (
    <ServicesWrapper>
      <Header />
      <PaddingComp></PaddingComp>
      <TitleWrapper>
        <StyledTitle>Hands That Serve, Hearts That Heal</StyledTitle>
      </TitleWrapper>
      <StyledSubTitle>
        Serving abandoned old people in around our village to help them lead
        their lives peacefully
      </StyledSubTitle>
      <DetailsImageLeftCard
        imageSrc={founder}
        description1={t("trust_service_founder_heading")}
        description2={t("trust_and_service_description")}
      />
      <ImageRightWithListContent
        imageSrc={serving_food}
        description1={t("abandoned_elders_heading")}
        listitem1={t("services_listitem1")}
        listitem2={t("services_listitem2")}
        listitem3={t("services_listitem3")}
      />
      <ImageLeftWithListContent
        imageSrc={before_and_after}
        description1={t("homeless_people_heading")}
        listitem1={t("homeless_listitem1")}
        listitem2={t("homeless_listitem2")}
      />
      <ImageRightWithListContent
        imageSrc={water_service_for_poor}
        description1={t("drinking_water_heading")}
        listitem1={t("drinking_water_listitem1")}
        listitem2={t("drinking_water_listitem2")}
        listitem3={t("drinking_water_listitem3")}
      />
      <DetailsImageLeftCard
        imageSrc={old_people_charity1}
        description1={t("guiding_description1")}
        description2={t("guiding_description2")}
      />
      <Footer />
    </ServicesWrapper>
  );
};
