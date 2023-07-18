import React from "react";
import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SvgBehance from "./SvgBehance/SvgBenance";
import GitHubIcon from "@mui/icons-material/GitHub";
import Arrow from "../../img/Arrow.svg";

const FooterB = styled.footer`
  display: flex;
  align-items: center;
  background-color: #7b5eff;
  z-index: 99;
`;

const ContainerWi = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Href = styled.a`
  color: #d3d6e5;
  font-size: 1.5rem;
  display: flex;
  transition: 0.2s;
  &:hover {
    color: var(--colour-white);
  }
`;

const Contact = styled.p`
  color: var(--colour-white);
  font-size: 2.1rem;
  margin-top: -10px;
`;

const ArrowL = styled.img`
  width: 40%;
`;

const Social = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-left: auto;
`;

const Span = styled.div`
  content: " ";
  width: 3px;
  height: 40px;
  background-color: var(--colour-white);
`;

const Copirite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled.span`
  color: #d3d6e5;
`;

const arrContact: Array<{
  href: string;
  ariaLabel: string;
  icon: JSX.Element;
}> = [
  {
    href: "https://github.com/DzmitryMiankou",
    ariaLabel: "github",
    icon: <GitHubIcon sx={{ fontSize: "40px" }} />,
  },
  {
    href: "https://t.me/GariSeldon",
    ariaLabel: "telegram",
    icon: <TelegramIcon sx={{ fontSize: "40px" }} />,
  },
  {
    href: "https://www.behance.net/287986a2",
    ariaLabel: "behance",
    icon: <SvgBehance />,
  },
];

const Footer = () => {
  return (
    <FooterB>
      <ContainerWi>
        <Contact>contact</Contact>
        <ArrowL src={Arrow} alt="arrow" />
        <Social>
          <Href href="mailto:gmiankou@gmail.com" aria-label="gmail">
            <EmailIcon sx={{ fontSize: "40px", marginRight: "10px" }} />
            gmiankou@gmail.com
          </Href>
          <Span />
          {arrContact.map(({ href, ariaLabel, icon }) => (
            <Href
              key={ariaLabel}
              href={href}
              target="_blank"
              aria-label={ariaLabel}
            >
              {icon}
            </Href>
          ))}
        </Social>
        <Span />
        <Copirite>
          <Time>{`© 2022 - ${new Date().getFullYear()}`}</Time>
          <Time>г. Молодечно, Дмитрий Меньков</Time>
        </Copirite>
      </ContainerWi>
    </FooterB>
  );
};

export default Footer;
