import React from "react";
import styled, { keyframes } from "styled-components";

const pulse1 = keyframes`
 0% {  fill: var(--color-violet); }
 50% { fill: #4e3aa4;}
 100% {  fill: var(--color-violet);}
`;

const pulse2 = keyframes`
 0% {  fill: var(--color-yellow); }
 50% { fill: #5c530d;}
 100% {  fill: var(--color-yellow);}
`;

const Rect1A = styled.rect`
  fill: var(--color-violet);
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-name: ${pulse1};
`;

const Rect1B = styled(Rect1A)`
  animation-duration: 5s;
`;

const Rect2A = styled.rect`
  fill: var(--color-yellow);
  animation-duration: 6s;
  animation-name: ${pulse2};
  animation-iteration-count: infinite;
`;

const Rect2B = styled(Rect2A)`
  animation-duration: 9s;
`;

const SvgIllustration = () => {
  return (
    <svg viewBox="0 0 993 360">
      <Rect1A x="13" y="205" width="141" height="141" />
      <Rect1B x="171" y="248" width="98" height="98" />
      <Rect2B x="426" y="263" width="83" height="83" />
      <Rect2A x="203" y="121" width="114" height="114" />
      <Rect2B x="509" y="180" width="49" height="49" />
      <Rect2A x="817" y="275" width="71" height="71" />
      <Rect2A x="76" y="121" width="71" height="71" />
      <Rect1B x="896" y="239" width="71" height="71" />
      <Rect1A x="852" y="215" width="28" height="28" />
      <Rect1A x="781" y="215" width="48" height="48" />
      <Rect1B x="379" y="170" width="78" height="78" />
      <Rect1B x="322" y="279" width="64" height="64" />
      <Rect2A x="842" y="157" width="48" height="48" />
      <Rect2B x="744" y="298" width="48" height="48" />
      <Rect1A x="567" y="193" width="153" height="153" />
    </svg>
  );
};

export default SvgIllustration;
