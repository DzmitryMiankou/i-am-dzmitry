import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import EducationPage from "../components/educationPage/EducationPage";
import StackPage from "../components/stackPage/StackPage";
import ExamplePage from "../components/examplePage/ExamplePage";

const H1 = styled.h1`
  color: #aa0000;
`;

const PageRoute = () => {
  const arrToElem: Array<{ element: JSX.Element; path: string }> = [
    { element: <MainPage />, path: "/" },
    { element: <EducationPage />, path: "/education" },
    { element: <StackPage />, path: "/stack" },
    { element: <ExamplePage />, path: "/my-works" },
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
