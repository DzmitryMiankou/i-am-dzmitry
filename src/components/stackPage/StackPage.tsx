import React from "react";
import styled from "styled-components";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Main, Title, H1 } from "../../style/globalStyle";

const P = styled.p`
  color: var(--color-yellow);
  font-size: 2rem;
  line-height: 10rem;
`;

const StackPage = () => {
  return (
    <Main>
      <Title>
        <H1>Стек технологий</H1>
        <BiotechIcon sx={{ color: "var(--color-yellow)", fontSize: "3rem" }} />
      </Title>
      <P>Front-end</P>
      <P>Back-end</P>
      <P>Дизайн</P>
    </Main>
  );
};

export default StackPage;
