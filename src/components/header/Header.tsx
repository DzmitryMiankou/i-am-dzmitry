import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Block = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #6172e6;
`;

const Menu = styled.menu`
  width: 98%;
  margin: auto;
`;

const Ul = styled.ul`
  display: flex;
  gap: 3%;
  justify-content: flex-end;
`;

const Li = styled.li``;

const LinkElem = styled(NavLink)`
  font-size: 20px;
  text-transform: uppercase;
  color: #d3d6e5;
  transition: 0.2s;
  &:hover {
    color: var(--colour-white);
  }
  &.active {
    color: var(--colour-white);
    cursor: default;
  }
`;

const arrMenu: Array<{ element: string; to: string }> = [
  { element: "главная", to: "/" },
  { element: "образование", to: "/education" },
  { element: "примеры", to: "/my-works" },
  { element: "котакты", to: "/contacts" },
];

const Header = () => {
  return (
    <Block>
      <Menu>
        <Ul>
          {arrMenu.map(({ element, to }, i) => (
            <Li key={i}>
              <LinkElem to={to}>{element}</LinkElem>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Block>
  );
};

export default Header;
