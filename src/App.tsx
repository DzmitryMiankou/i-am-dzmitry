import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import PageRoute from "./routes/PageRoute";

const AppStyle = styled.div`
  height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 70px auto 70px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #7b5eff;
`;

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Page>
        <PageRoute />
      </Page>
      <Footer></Footer>
    </AppStyle>
  );
};

export default App;
