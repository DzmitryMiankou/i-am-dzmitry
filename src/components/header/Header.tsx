import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSvg from "../../img/Logo.svg";
import TemporaryDrawer from "./Drawer/Drawer";

const Block = styled.header`
  display: grid;
  align-items: center;
  background-color: var(--color-violet);
`;

const BlockWidth = styled.div`
  width: 98%;
  margin: auto;
  display: grid;
  grid-template-columns: 60px auto;
`;

const Menu = styled.nav`
  margin-left: auto;
  @media (max-width: 900px) {
    display: none;
  }
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

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    margin-left: auto;
  }
`;

const arrMenu: Array<{ element: string; to: string }> = [
  { element: "главная", to: "/" },
  { element: "образование", to: "/education" },
  { element: "стек", to: "/stack" },
  { element: "примеры", to: "/my-works" },
];

const Link = () => {
  return (
    <>
      {arrMenu.map(({ element, to }, i) => (
        <Li key={i}>
          <LinkElem to={to}>{element}</LinkElem>
        </Li>
      ))}
    </>
  );
};

const Header = () => {
  return (
    <Block>
      <BlockWidth>
        <LinkElem to="/">
          <Logo src={LogoSvg} alt="logo" />
        </LinkElem>
        <MobileMenu>
          <TemporaryDrawer element={<Link />} />
        </MobileMenu>
        <Menu>
          <Ul>
            <Link />
          </Ul>
        </Menu>
      </BlockWidth>
    </Block>
  );
};

export default Header;
