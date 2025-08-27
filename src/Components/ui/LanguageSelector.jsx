import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Dropdown = styled.select`
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  margin: 0;
  color: #333;
  width: 120px;
  height: 30px;
`;

const Option = styled.option`
  font-size: 16px;
`;
const DropDownWrapper = styled.div`
  padding: 25px;
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
