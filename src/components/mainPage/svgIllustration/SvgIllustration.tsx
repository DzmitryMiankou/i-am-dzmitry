import React from "react";
import styled from "styled-components";

const Rect1 = styled.rect`
  fill: var(--color-violet);
`;

const Rect2 = styled.rect`
  fill: var(--color-yellow);
`;

const SvgIllustration = () => {
  return (
    <svg viewBox="0 0 993 360">
      <Rect1 x="13" y="205" width="141" height="141" />
      <Rect1 x="171" y="248" width="98" height="98" />
      <Rect2 x="426" y="263" width="83" height="83" />
      <Rect2 x="203" y="121" width="114" height="114" />
      <Rect2 x="509" y="180" width="49" height="49" />
      <Rect2 x="817" y="275" width="71" height="71" />
      <Rect2 x="76" y="121" width="71" height="71" />
      <Rect1 x="896" y="239" width="71" height="71" />
      <Rect1 x="852" y="215" width="28" height="28" />
      <Rect1 x="781" y="215" width="48" height="48" />
      <Rect1 x="379" y="170" width="78" height="78" />
      <Rect1 x="322" y="279" width="64" height="64" />
      <Rect2 x="842" y="157" width="48" height="48" />
      <Rect2 x="744" y="298" width="48" height="48" />
      <Rect1 x="567" y="193" width="153" height="153" />
    </svg>
  );
};

export default SvgIllustration;
