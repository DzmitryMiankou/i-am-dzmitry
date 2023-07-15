import React from "react";
import styled from "styled-components";
import MainPhoto from "../../img/mainPhoto.jpg";

const Main = styled.main`
  width: 80%;
  display: flex;
  gap: 40px;
  @media (max-width: 1675px) {
    width: 85%;
  }
  @media (max-width: 1570px) {
    width: 90%;
  }
  @media (max-width: 1570px) {
    width: 92%;
  }
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
  color: #a89717c3;
  font-size: 3rem;
  line-height: 10rem;
  text-align: right;
`;

const BorderPhoto = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: start;
  margin-left: auto;
`;

const Photo = styled.img`
  width: 500px;
  border-radius: 50px 0;
  border: 20px solid #7b5eff;
`;

const MainPage = () => {
  return (
    <Main>
      <NameContainer>
        <H1>Front-end developer</H1>
        <H2>Дмитрий Меньков</H2>
      </NameContainer>
      <BorderPhoto>
        <Photo src={MainPhoto} alt="my-photo" />
      </BorderPhoto>
    </Main>
  );
};

export default MainPage;
