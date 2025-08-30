import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  color: #800000;
  align-items: normal;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  height: auto;
`;

export const CardComponentWrapper = styled.div`
  background-color: white;
  padding: 0;
  margin: 0;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  color: #333333;
  font-size: 35px;
`;

export const Description1 = styled.p`
  margin: 0;
  font-size: 25px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  padding-left: 15px;
  font-weight: 800;
  border-left: 5px solid black;
  @media (max-width: 768px) {
    border: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
export const Highlight = styled.span`
  color: white;
`;

export const Description2 = styled(Description1)`
  font-weight: 400;
  font-size: 20px;
  padding-top: 10px;
  padding-right: 5rem;
  color: #4b5320;
  text-align: justify;
  @media (max-width: 768px) {
    border: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
export const StyledButton = styled.button`
  background-color: #ffc007;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  border: none;
  display: inline-block;
  border-radius: 5px;
  &:hover {
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  margin: auto;
  align: center;
`;
