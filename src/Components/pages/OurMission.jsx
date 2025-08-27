import ImageLeftCard from "../ui/ImageLeftCard";
import ImageRightCard from "../ui/ImageRightCard";
import old_people_charity1 from "../../Images/old_people_charity1.jpg";
import lord_shiva_image from "../../Images/lord_shiva_Image.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const MainWrapper = styled.div``;
export const OurMission = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainWrapper>
        <ImageLeftCard
          imageSrc={old_people_charity1}
          title={t("trust_services")}
          description1={t("lonliness_title")}
          description2={t("services_description_about")}
        />
        <ImageRightCard
          imageSrc={lord_shiva_image}
          title={t("temple_history_heading")}
          description1={t("temple_history_sub_heading")}
          description2={t("temple_history_description_about")}
        />
      </MainWrapper>
    </>
  );
};
