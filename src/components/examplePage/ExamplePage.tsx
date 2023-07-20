import React from "react";
import styled from "styled-components";
import { Main, Title, H1, titleIconStyleSX } from "../../style/globalStyle";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { CardData, MyGraphic } from "./exampleData";
import CenterMode from "./slider/Slider";

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

const Card = styled.a`
  border: 2px solid var(--color-violet);
  display: grid;
  justify-items: center;
  text-align: center;
  min-height: 300px;
  gap: 10px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    margin-top: -10px;
  }
`;

const Photo = styled.img`
  width: 390px;
  transition: 0.2s;
`;

const P1 = styled.p`
  transition: 0.2s;
  font-size: 1.2rem;
  padding: 10px;
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
      <Block>{MyGraphic[0].title}</Block>
      <CenterMode data={MyGraphic[0].data} />
      <div>
        {CardData.map(({ title, data }, i) => (
          <React.Fragment key={i}>
            <Block>{title}</Block>
            <CardBlock>
              {data.map(({ text, img, href }, id) => (
                <div key={id}>
                  <Card href={href} target="_blank">
                    <P1>{text}</P1>
                    <Photo alt="photo" src={img} />
                  </Card>
                </div>
              ))}
            </CardBlock>
          </React.Fragment>
        ))}
      </div>
      <Block>{MyGraphic[1].title}</Block>
      <CenterMode data={MyGraphic[1].data} />
    </Main>
  );
};

export default ExamplePage;
