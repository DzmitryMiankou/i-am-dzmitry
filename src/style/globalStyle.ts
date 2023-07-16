import styled from "styled-components";

const Main = styled.main`
  width: 80%;
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
`;

const H1 = styled.h1`
  color: var(--color-yellow);
  font-size: 3rem;
  text-transform: uppercase;
`;

export { Main, Title, H1 };
