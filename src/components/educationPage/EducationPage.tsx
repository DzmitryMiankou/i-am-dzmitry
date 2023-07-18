import React, { useState } from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import PhotoSchool from "../../img/foto_zhilichi.jpg";
import PhotoMGU from "../../img/07.jpg";
import PhotoBGU from "../../img/bizn.jpg";
import Illustration from "../../img/iil2.svg";
import { Main, Title, H1, titleIconStyleSX } from "../../style/globalStyle";

interface Props<T> {
  $getisshown: T;
  $idel: T;
}

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

const Card = styled.div<Props<string>>`
  border: 2px solid var(--color-violet);
  display: grid;
  justify-items: center;
  text-align: center;
  min-height: 300px;
`;

const Photo = styled.img<Props<string>>`
  width: 390px;
  transition: 0.2s;
  filter: ${(p: Props<string>) =>
    p.$getisshown === p.$idel ? "grayscale(0%)" : "grayscale(50%)"};
`;

const P1 = styled.p<Props<string>>`
  transition: 0.2s;
  color: ${(p: Props<string>) =>
    p.$getisshown === p.$idel ? "var(--color-yellow)" : "var(--color-violet)"};
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
    p2: " Web-дизайн и программирование. Изучал серверные технологии, JavaScript, компьютерные сети, основы дизайна и компьютерной графики",
  },
];

const EducationPage = () => {
  const [getIsShown, setIsShown] = useState<string>(" ");

  const handleFocusEvent = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    setIsShown(`${id}`);
  };

  return (
    <Main>
      <Title>
        <H1>Моё образование</H1>
        <SchoolIcon sx={titleIconStyleSX} />
      </Title>
      <CardBlock>
        {CardData.map(({ p1, img, p2 }, i) => (
          <Card
            $idel={`${i}`}
            $getisshown={getIsShown}
            key={i}
            onMouseEnter={(e) => handleFocusEvent(e, `${i}`)}
            onMouseLeave={(e) => handleFocusEvent(e, " ")}
          >
            <P1 $idel={`${i}`} $getisshown={getIsShown}>
              {p1}
            </P1>
            <Photo
              $idel={`${i}`}
              $getisshown={getIsShown}
              src={img}
              alt="photo"
            />
            <P2>{p2}</P2>
          </Card>
        ))}
      </CardBlock>
      <Ill src={Illustration} alt="illustration" />
    </Main>
  );
};

export default EducationPage;
