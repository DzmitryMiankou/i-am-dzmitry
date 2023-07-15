import React from "react";
import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SvgBehance from "./SvgBehance/SvgBenance";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterB = styled.footer`
  display: flex;
  align-items: center;
  background-color: #7b5eff;
`;

const ContainerWi = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

const Contact = styled.div`
  color: var(--colour-white);
  font-size: 3rem;
`;

const Email = styled.a`
  color: #d3d6e5;
  font-size: 1.5rem;
  display: flex;
  &:hover {
    color: var(--colour-white);
  }
`;

const Prel = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  content: " ";
  width: 50%;
  height: 3px;
  background-color: var(--colour-white);
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

const Footer = () => {
  return (
    <FooterB>
      <ContainerWi>
        <Prel>
          <Contact>contact</Contact>
        </Prel>
        <Line />
        <Social>
          <Email href="mailto:gmiankou@gmail.com">
            <EmailIcon sx={{ fontSize: "40px" }} />
            gmiankou@gmail.com
          </Email>
          <Span />
          <Email href="https://github.com/DzmitryMiankou" target="_blank">
            <GitHubIcon sx={{ fontSize: "40px" }} />
          </Email>
          <Email href="https://t.me/GariSeldon" target="_blank">
            <TelegramIcon sx={{ fontSize: "40px" }} />
          </Email>
          <Email href="https://www.behance.net/287986a2" target="_blank">
            <SvgBehance />
          </Email>
        </Social>
      </ContainerWi>
    </FooterB>
  );
};

export default Footer;
