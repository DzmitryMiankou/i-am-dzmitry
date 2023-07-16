import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import PhotoSchool from "../../img/foto_zhilichi.jpg";
import PhotoMGU from "../../img/07.jpg";
import PhotoBGU from "../../img/bizn.jpg";
import Illustration from "../../img/iil2.svg";

const Main = styled.main`
  width: 80%;
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

const H1 = styled.h1`
  color: #a89817;
  font-size: 3rem;
  text-transform: uppercase;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

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
  border: 2px solid #7b5eff;
  display: grid;
  justify-items: center;
  text-align: center;
`;

const Photo = styled.img`
  width: 390px;
  filter: grayscale(60%);
`;

const P1 = styled.p`
  color: #7b5eff;
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

const EducationPage = () => {
  return (
    <Main>
      <Title>
        <H1>Моё образование</H1>
        <SchoolIcon sx={{ color: "#a89817", fontSize: "3rem" }} />
      </Title>
      <CardBlock>
        <Card>
          <P1>ГУО «Жиличская школа искусств»</P1>
          <Photo src={PhotoSchool} alt="photo" />
          <P2>
            Направление «Изобразительное искусство». Изучал основы рисунка,
            историю искусств
          </P2>
        </Card>
        <Card>
          <P1>МГУ им. А. А. Кулешова</P1>
          <Photo src={PhotoMGU} alt="photo" />
          <P2>
            Историко-филологический факультет. Изучал педагогику, психологию,
            историю стран мира
          </P2>
        </Card>
        <Card>
          <P1>Институт бизнеса БГУ</P1>
          <Photo src={PhotoBGU} alt="photo" />
          <P2>
            Web-дизайн и программирование. Изучал серверные технологии,
            JavaScript, компьютерные сети, основы дизайн и компьютерной графики
          </P2>
        </Card>
      </CardBlock>
      <Ill src={Illustration} alt="illustration" />
    </Main>
  );
};

export default EducationPage;
