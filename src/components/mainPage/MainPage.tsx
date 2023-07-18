import React from "react";
import styled from "styled-components";
import MainPhoto from "../../img/mainPhoto.jpg";
import SvgIllustration from "./svgIllustration/SvgIllustration";
import { Main } from "../../style/globalStyle";

const Main2 = styled(Main)`
  display: flex;
  gap: 40px;
`;

const NameContainer = styled.main`
  width: 750px;
`;

const H1 = styled.h1`
  color: var(--color-yellow);
  font-size: 10rem;
  line-height: 10rem;
`;

const H2 = styled.h2`
  color: #a89717c3;
  font-size: 3rem;
  margin: 20px 0;
`;

const BorderPhoto = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: start;
  margin-left: auto;
`;

const Photo = styled.img`
  width: 500px;
  border: 20px solid var(--color-violet);
  border-bottom: 70px solid var(--color-violet);
  box-shadow: 20px 0px 0px 0px var(--color-yellow);
`;

const Before = styled.p`
  color: var(--color-violet);
  font-size: 1.5rem;
  margin: 20px 0;
`;

const MainPage = () => {
  return (
    <Main2>
      <NameContainer>
        <H1>Front-end developer</H1>
        <H2>Дмитрий Меньков</H2>
        <Before>Педагог, филантроп</Before>
        <SvgIllustration />
      </NameContainer>
      <BorderPhoto>
        <Photo src={MainPhoto} alt="my-photo" />
      </BorderPhoto>
    </Main2>
  );
};

export default MainPage;
