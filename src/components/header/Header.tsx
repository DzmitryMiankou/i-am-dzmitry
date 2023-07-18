import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSvg from "../../img/Logo.svg";

const Block = styled.header`
  display: grid;
  align-items: center;
  background-color: #7b5eff;
`;

const BlockWidth = styled.div`
  width: 98%;
  margin: auto;
  display: grid;
  grid-template-columns: 60px auto;
`;

const Menu = styled.nav`
  margin-left: auto;
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;
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

const Logo = styled.img``;

const arrMenu: Array<{ element: string; to: string }> = [
  { element: "главная", to: "/" },
  { element: "образование", to: "/education" },
  { element: "стек", to: "/stack" },
  { element: "примеры", to: "/my-works" },
];

const Header = () => {
  return (
    <Block>
      <BlockWidth>
        <LinkElem to="/">
          <Logo src={LogoSvg} alt="logo" />
        </LinkElem>
        <Menu>
          <Ul>
            {arrMenu.map(({ element, to }, i) => (
              <Li key={i}>
                <LinkElem to={to}>{element}</LinkElem>
              </Li>
            ))}
          </Ul>
        </Menu>
      </BlockWidth>
    </Block>
  );
};

export default Header;
