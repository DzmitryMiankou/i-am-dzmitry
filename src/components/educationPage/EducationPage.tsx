import React from "react";
import styled from "styled-components";

const Main = styled.main`
  margin-right: auto;
`;

const H1 = styled.h1`
  color: #a89817;
  font-size: 3rem;
  text-transform: uppercase;
`;

const EducationPage = () => {
  return (
    <Main>
      <H1>Мое образование</H1>
    </Main>
  );
};

export default EducationPage;
