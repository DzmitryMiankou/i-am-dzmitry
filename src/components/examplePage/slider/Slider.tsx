import React from "react";
import Slider from "react-slick";
import "./Slick.scss";
import "./SlickTheme.scss";
import styled from "styled-components";

interface Props<T> {
  $img: T;
}

const Figcaption = styled.figcaption`
  display: flex;
  gap: 30px;
  padding: 5px;
`;

const Span = styled.span`
  color: white;
`;

const Icon = styled.span<Props<string>>`
  width: 25px;
  height: 25px;
  background-image: url(${(props) => props.$img});
  background-size: cover;
`;

const Figure = styled.figure`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CenterMode = ({ data }: any) => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 4,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map(({ img, text, program }: any, id: number) => (
        <Figure key={id}>
          <img src={img} alt="images" />
          <Figcaption>
            <Span>{text}</Span>
            <Icon $img={program} />
          </Figcaption>
        </Figure>
      ))}
    </Slider>
  );
};
export default CenterMode;
