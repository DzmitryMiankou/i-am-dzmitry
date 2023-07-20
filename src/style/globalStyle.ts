import styled, { keyframes } from "styled-components";

const opacity = keyframes`
 0% {  opacity: 0;  margin-top: -50px; }
 100% {  opacity: 1;  margin-left: 0px;}
`;

const Main = styled.main`
  width: 80%;
  animation-duration: 0.7s;
  animation-name: ${opacity};
  animation-timing-function: ease-in-out;
  @media (max-width: 1675px) {
    width: 85%;
  }
  @media (max-width: 1570px) {
    width: 90%;
  }
  @media (max-width: 1570px) {
    width: 92%;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
  }
`;

const H1 = styled.h1`
  color: var(--color-yellow);
  font-size: 3rem;
  text-transform: uppercase;
  @media (max-width: 550px) {
    font-size: 30px;
  }
`;

const titleIconStyleSX = {
  color: "var(--color-yellow)",
  fontSize: "3rem",
  "@media (max-width: 700px)": { display: "none" },
};

export { Main, Title, H1, titleIconStyleSX };
