import Img1 from "../../img/sliderImg/3394d9154335645.Y3JvcCw5OTksNzgyLDAsMTA4.jpg";
import Img2 from "../../img/sliderImg/4c0641154334663.Y3JvcCwxMzg4LDEwODYsMCwxNTE.png";
import Img3 from "../../img/sliderImg/Screenshot 2023-07-19 143917.png";
import Img4 from "../../img/sliderImg/Screenshot 2023-07-19 150254.png";
import Img5 from "../../img/sliderImg/Screenshot 2023-07-19 150404.png";
import ImgA from "../../img/sliderImg/mystude/3.jpg";
import ImgB from "../../img/sliderImg/mystude/bear.jpg";
import ImgV from "../../img/sliderImg/mystude/home.jpg";
import ImgG from "../../img/sliderImg/mystude/mart.jpg";
import ImgD from "../../img/sliderImg/mystude/sky .jpg";
import AdobeIL from "../../img/srbhrehre.jpg";
import AdobePS from "../../img/Adobe-CC-01-1080x675.jpg";
import Code1 from "../../img/codeEx/Screenshot 2023-07-19 214117.png";
import Code2 from "../../img/codeEx/Screenshot 2023-07-19 214230.png";
import Code3 from "../../img/codeEx/Screenshot 2023-07-19 214328.png";
import Code4 from "../../img/codeEx/Screenshot 2023-07-19 214354.png";
import Code5 from "../../img/codeEx/Screenshot 2023-07-20 155511.png";

type CardDataType = {
  title: string;
  data: Array<{ text: string; img: string; href: string }>;
};

type CardDataType2 = {
  title: string;
  data: Array<{ text: string; img: string; program: string }>;
};

const CardData: Array<CardDataType> = [
  {
    title: "Программирование",
    data: [
      {
        text: "Lead",
        img: Code1,
        href: "https://dzmitrymiankou.github.io/my-app/",
      },
      {
        text: "Moondog",
        img: Code2,
        href: "https://dzmitrymiankou.github.io/moondog-main/",
      },
      {
        text: "Skilla (No adaptive)",
        img: Code3,
        href: "https://dzmitrymiankou.github.io/test/",
      },
      {
        text: "Web Dev",
        img: Code4,
        href: "https://dzmitrymiankou.github.io/AboutMe/",
      },
      {
        text: "Currency Converter",
        img: Code5,
        href: "https://dzmitrymiankou.github.io/My-bank/",
      },
    ],
  },
];

const MyGraphic: Array<CardDataType2> = [
  {
    title: "Графика и дизайн",
    data: [
      { text: "Зелёноглазое такси", img: Img1, program: AdobeIL },
      { text: "Осень на Родине", img: Img2, program: AdobeIL },
      { text: "Подарки", img: Img3, program: AdobeIL },
      { text: "Беседка", img: Img4, program: AdobeIL },
      { text: "Космическая одиссея 2001 года", img: Img5, program: AdobePS },
    ],
  },
  {
    title: "Графические работы моих учеников",
    data: [
      { text: "11 класс, Кристина", img: ImgA, program: AdobeIL },
      { text: "8 класс, Софья", img: ImgB, program: AdobeIL },
      { text: "11 класс, Кристина", img: ImgV, program: AdobeIL },
      { text: "8 класс, Юлия", img: ImgG, program: AdobePS },
      { text: "8 класс, Юлия", img: ImgD, program: AdobeIL },
    ],
  },
];

export { CardData, MyGraphic };
