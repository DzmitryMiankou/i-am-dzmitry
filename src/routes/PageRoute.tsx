import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import EducationPage from "../components/educationPage/EducationPage";

const H1 = styled.h1`
  color: #aa0000;
`;

const PageRoute = () => {
  const arrToElem: Array<{ element: JSX.Element; path: string }> = [
    { element: <MainPage />, path: "/" },
    { element: <EducationPage />, path: "/education" },
    { element: <H1>стек</H1>, path: "/stack" },
    { element: <H1>Примеры</H1>, path: "/my-works" },
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
