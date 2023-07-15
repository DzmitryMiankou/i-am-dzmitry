import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import PageRoute from "./routes/PageRoute";

const AppStyle = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

const App = () => {
  return (
    <AppStyle>
      <Header />
      <PageRoute />
    </AppStyle>
  );
};

export default App;
