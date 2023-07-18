import React from "react";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Main, Title, H1, titleIconStyleSX } from "../../style/globalStyle";
import Table from "./table/Table";

const StackPage = () => {
  return (
    <Main>
      <Title>
        <H1>Технологический стек</H1>
        <BiotechIcon sx={titleIconStyleSX} />
      </Title>
      <Table />
    </Main>
  );
};

export default StackPage;
