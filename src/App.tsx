import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import PageRoute from "./routes/PageRoute";
import Footer from "./components/footer/Footer";

const AppStyle = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 70px auto 70px;
  @media (max-width: 830px) {
    grid-template-rows: 70px auto 150px;
  }
  @media (max-width: 380px) {
    grid-template-rows: 70px auto 280px;
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Page>
        <PageRoute />
      </Page>
      <Footer />
    </AppStyle>
  );
};

export default App;
