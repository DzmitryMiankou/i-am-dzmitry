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
