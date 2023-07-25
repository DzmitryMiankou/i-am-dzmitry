import React from "react";
import styled from "styled-components";
import MainPhoto from "../../img/mainPhoto.jpg";
import SvgIllustration from "./svgIllustration/SvgIllustration";
import { Main } from "../../style/globalStyle";

const Main2 = styled(Main)`
  display: flex;
  gap: 40px;
  @media (max-width: 1570px) {
    gap: 30px;
  }
  @media (max-width: 1145px) {
    flex-direction: column;
  }
`;

const NameContainer = styled.div`
  width: 750px;
  @media (max-width: 1570px) {
    margin-left: auto;
    width: 550px;
  }
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 1145px) {
    margin: auto;
    width: 70%;
  }
`;

const H1 = styled.h1`
  color: var(--color-yellow);
  font-size: 10rem;
  line-height: 10rem;
  @media (max-width: 1570px) {
    font-size: 7rem;
    line-height: 7.6rem;
  }
  @media (max-width: 1145px) {
    font-size: 6rem;
    text-align: center;
  }
  @media (max-width: 710px) {
    font-size: 5rem;
    line-height: 5rem;
  }
  @media (max-width: 590px) {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media (max-width: 461px) {
    font-size: 50px;
  }
  @media (max-width: 471px) {
    font-size: 45px;
  }
`;

const H2 = styled.h2`
  color: #a89717c3;
  font-size: 3rem;
  margin: 20px 0;
  @media (max-width: 1570px) {
    margin: 15px 0;
    font-size: 2.5rem;
  }
  @media (max-width: 1200px) {
    font-size: 2rem;
    margin: 10px 0;
  }
  @media (max-width: 1145px) {
    text-align: center;
  }
`;

const BorderPhoto = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: start;
  margin-left: auto;
  @media (max-width: 1570px) {
    margin-right: auto;
    margin-top: 20px;
  }
  @media (max-width: 1145px) {
    margin-bottom: 20px;
  }
`;

const Photo = styled.img`
  width: 500px;
  border: 20px solid var(--color-violet);
  border-bottom: 70px solid var(--color-violet);
  box-shadow: 20px 0px 0px 0px var(--color-yellow);
  @media (max-width: 1570px) {
    width: 400px;
  }
  @media (max-width: 1200px) {
    width: 370px;
  }
  @media (max-width: 1145px) {
    width: 370px;
  }
  @media (max-width: 500px) {
    width: 250px;
    border-bottom: 30px solid var(--color-violet);
  }
`;

const Before = styled.p`
  color: var(--color-violet);
  font-size: 1.5rem;
  margin: 20px 0 0 0;
  @media (max-width: 1145px) {
    text-align: center;
  }
`;

const Before2 = styled(Before)`
  margin: 0;
`;

const ContainerSVG = styled.div`
  @media (max-width: 1145px) {
    display: none;
  }
`;

const MainPage = () => {
  return (
    <Main2>
      <NameContainer>
        <H1>Front-end developer</H1>
        <H2>Дмитрий Меньков</H2>
        <Before>...педагог, гуманист</Before>
        <Before2>...</Before2>
        <ContainerSVG>
          <SvgIllustration />
        </ContainerSVG>
      </NameContainer>
      <BorderPhoto>
        <Photo src={MainPhoto} alt="my-photo" />
      </BorderPhoto>
    </Main2>
  );
};

export default MainPage;
