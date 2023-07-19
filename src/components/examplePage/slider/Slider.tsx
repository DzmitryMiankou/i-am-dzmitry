import React from "react";
import Slider from "react-slick";
import "./Slick.scss";
import "./SlickTheme.scss";
import Img1 from "../../../img/sliderImg/3394d9154335645.Y3JvcCw5OTksNzgyLDAsMTA4.jpg";
import Img2 from "../../../img/sliderImg/4c0641154334663.Y3JvcCwxMzg4LDEwODYsMCwxNTE.png";
import Img3 from "../../../img/sliderImg/Screenshot 2023-07-19 143917.png";
import Img4 from "../../../img/sliderImg/Screenshot 2023-07-19 150254.png";
import Img5 from "../../../img/sliderImg/Screenshot 2023-07-19 150404.png";

const CenterMode = () => {
  const settings = {
    className: "center",
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
      <figure>
        <img src={Img1} alt="images" />
        <figcaption>
          <span>htfh</span>
          <span>xtf</span>
        </figcaption>
      </figure>
      <figure>
        <img src={Img2} alt="images" />
        <figcaption>
          <span>htfh</span>
          <span>xtf</span>
        </figcaption>
      </figure>
      <figure>
        <img src={Img3} alt="images" />
        <figcaption>
          <span>htfh</span>
          <span>xtf</span>
        </figcaption>
      </figure>
      <figure>
        <img src={Img4} alt="images" />
        <figcaption>
          <span>htfh</span>
          <span>xtf</span>
        </figcaption>
      </figure>
      <figure>
        <img src={Img5} alt="images" />
        <figcaption>
          <span>htfh</span>
          <span>xtf</span>
        </figcaption>
      </figure>
    </Slider>
  );
};
export default CenterMode;
