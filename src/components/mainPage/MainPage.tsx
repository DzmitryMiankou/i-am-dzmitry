import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 98%;
`;

const NameContainer = styled.main`
  width: 750px;
`;

const H1 = styled.h1`
  color: #a89817;
  font-size: 10rem;
  line-height: 10rem;
`;
const H2 = styled.h2`
  color: #a89817;
  font-size: 3rem;
  line-height: 10rem;
  text-align: right;
`;

const MainPage = () => {
  return (
    <Main>
      <NameContainer>
        <H1>Front-end developer</H1>
        <H2>Дмитрий Меньков</H2>
      </NameContainer>
    </Main>
  );
};

export default MainPage;
