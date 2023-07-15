import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";

const H1 = styled.h1`
  color: #aa0000;
`;

const PageRoute = () => {
  const arrToElem: Array<{ element: any; path: string }> = [
    { element: <MainPage />, path: "/" },
    { element: <H1>Образование</H1>, path: "/education" },
    { element: <H1>Примеры</H1>, path: "/my-works" },
    { element: <H1>контакты</H1>, path: "/contacts" },
  ];

  return (
    <Routes>
      {arrToElem.map(({ element, path }, i) => (
        <Route key={i} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default PageRoute;
