import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Dropdown = styled.select`
  font-size: 1rem; /* scales with root font size */
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  margin: 0;
  color: #333;
  padding: 0.4rem 0.1rem; /* instead of fixed height */
  width: 100%;
  max-width: 10rem; /* caps on large screens */
  min-width: 5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 4rem;
    padding-left: 0.1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    max-width: 3rem;
    padding-left: 0.1rem;
  }
`;

const Option = styled.option`
  font-size: inherit; /* inherits from Dropdown */
`;

const DropDownWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end; /* aligns nicely to right side */
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center; /* center it on tablets */
  }

  @media (max-width: 480px) {
    padding: 0.1rem;
    justify-content: center; /* center on mobile */
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <DropDownWrapper>
      <Dropdown value={i18n.language} onChange={handleChange}>
        <Option value="en">English</Option>
        <Option value="hi">हिन्दी</Option>
        <Option value="te">తెలుగు</Option>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default LanguageSelector;
