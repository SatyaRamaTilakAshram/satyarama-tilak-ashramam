import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  padding: 2.5rem 5rem 2.5rem 7.5rem; /* top, right, bottom, left */
  background-color: #f9f9f9;

  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 75rem; /* 1200px */
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem; /* 32px */
  margin-bottom: 1.875rem; /* 30px */
  color: #0d2c54;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem; /* 40px */
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-height: 28.125rem; /* 450px */
  border-radius: 0.75rem; /* 12px */
  overflow: hidden;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const InfoCard = styled.div`
  flex: 1;
  background: #fff;
  padding: 1.875rem; /* 30px */
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.25rem;
    text-align: center;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem; /* 24px */
`;

const InfoTitle = styled.h3`
  white-space: pre-line;
  color: #0d2c54;
  font-size: 1.125rem; /* 18px */
  margin-bottom: 0.5rem; /* 8px */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoText = styled.p`
  white-space: pre-line;
  margin: 0;
  line-height: 1.6;
  color: #333;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9375rem; /* 15px */
  }
`;

const TrustLocation = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Heading>{t("find_our_trust")}</Heading>
        <FlexWrapper>
          <MapContainer>
            <StyledIframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63251.49773689852!2d82.00428657175145!3d16.969252206687298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3785c904b1a489%3A0x983c5a15e243af20!2s108%20pillar%20temple%20shivapuram(sri%20satya%20rama%20tilak%20ashramam)!5e0!3m2!1sen!2sin!4v1756289872694!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Trust Location Map"
            />
          </MapContainer>
          <InfoCard>
            <InfoSection>
              <InfoTitle>{t("contact_trust_address_title")}</InfoTitle>
              <InfoText>{t("contact_trust_address_value")}</InfoText>
            </InfoSection>

            <InfoSection>
              <InfoTitle>{t("contact_trust_contact_title")}</InfoTitle>
              <InfoText>{t("contact_trust_contact_info")}</InfoText>
            </InfoSection>

            <InfoSection>
              <InfoTitle>{t("contact_temple_hours_title")}</InfoTitle>
              <InfoText>
                {t("contact_temple_hours_morning")}
                <br />
                {t("contact_temple_hours_noon")}
                <br />
                {t("contact_special_darshan_info")}
              </InfoText>
            </InfoSection>
          </InfoCard>
        </FlexWrapper>
      </Container>
    </Section>
  );
};

export default TrustLocation;
