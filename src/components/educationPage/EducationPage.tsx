import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import PhotoSchool from "../../img/foto_zhilichi.jpg";
import PhotoMGU from "../../img/07.jpg";
import PhotoBGU from "../../img/bizn.jpg";
import Illustration from "../../img/iil2.svg";
import { Main, Title, H1 } from "../../style/globalStyle";

const CardBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
  gap: 20px;
  justify-content: space-between;
  margin: 40px 0;
  @media (max-width: 1350px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  border: 2px solid var(--color-violet);
  display: grid;
  justify-items: center;
  text-align: center;
`;

const Photo = styled.img`
  width: 390px;
  filter: grayscale(60%);
`;

const P1 = styled.p`
  color: var(--color-violet);
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 600;
`;

const P2 = styled.p`
  color: #5d47be;
  padding: 5px;
  font-weight: 600;
`;

const Ill = styled.img`
  margin-top: 40px;
  width: 100%;
`;

const CardData: Array<{ p1: string; img: string; p2: string }> = [
  {
    p1: "ГУО «Жиличская школа искусств»",
    img: PhotoSchool,
    p2: "Направление «Изобразительное искусство». Изучал основы рисунка, историю искусств",
  },
  {
    p1: "МГУ им. А. А. Кулешова",
    img: PhotoMGU,
    p2: "Историко-филологический факультет. Изучал педагогику, психологию, историю стран мира",
  },
  {
    p1: "Институт бизнеса БГУ",
    img: PhotoBGU,
    p2: " Web-дизайн и программирование. Изучал серверные технологии, JavaScript, компьютерные сети, основы дизайн и компьютерной графики",
  },
];

const EducationPage = () => {
  return (
    <Main>
      <Title>
        <H1>Моё образование</H1>
        <SchoolIcon sx={{ color: "#a89817", fontSize: "3rem" }} />
      </Title>
      <CardBlock>
        {CardData.map(({ p1, img, p2 }, i) => (
          <Card key={i}>
            <P1>{p1}»</P1>
            <Photo src={img} alt="photo" />
            <P2>{p2}</P2>
          </Card>
        ))}
      </CardBlock>
      <Ill src={Illustration} alt="illustration" />
    </Main>
  );
};

export default EducationPage;
