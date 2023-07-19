import React from "react";
import styled from "styled-components";
import { Main, Title, H1, titleIconStyleSX } from "../../style/globalStyle";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { CardData } from "./exampleData";
import CenterMode from "./slider/Slider";

interface Props<T> {
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
  gap: 10px;
`;

const Photo = styled.img<Props<string>>`
  width: 390px;
  transition: 0.2s;
`;

const P1 = styled.p<Props<string>>`
  transition: 0.2s;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 600;
`;

const P2 = styled.p`
  color: #5d47be;
  padding: 5px;
  font-weight: 600;
`;

const Block = styled.h2`
  color: #5d47be;
  font-weight: 600;
  margin-top: 20px;
`;

const ExamplePage = () => {
  return (
    <Main>
      <Title>
        <H1>Примеры</H1>
        <HexagonIcon sx={titleIconStyleSX} />
      </Title>
      <Block>Графика и дизайн</Block>
      <CenterMode />
      <div>
        {CardData.map(({ title, data }, i) => (
          <React.Fragment key={i}>
            <Block>{title}</Block>
            <CardBlock>
              {data.map(({ text, img, href }, id) => (
                <div key={id}>
                  <Card $idel={`${id}`}>
                    <P1 $idel={`${id}`}>{text}</P1>
                    <Photo $idel={`${id}`} alt="photo" src={img} />
                    <P2>{href}</P2>
                  </Card>
                </div>
              ))}
            </CardBlock>
          </React.Fragment>
        ))}
      </div>
    </Main>
  );
};

export default ExamplePage;
