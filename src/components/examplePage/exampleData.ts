type CardDataType = {
  title: string;
  data: Array<{ text: string; img: string; href: string }>;
};

const CardData: Array<CardDataType> = [
  {
    title: "Программирование",
    data: [
      { text: "1", img: "sdbsd", href: "sfdbs" },
      { text: "2", img: "sdbdsvsd", href: "sfdsvdbs" },
      { text: "3", img: "sdbdsvsd", href: "sfdsvdbs" },
    ],
  },
  {
    title: "Анимация",
    data: [
      { text: "1", img: "sdbsd", href: "sfdbs" },
      { text: "2", img: "sdbdsvsd", href: "sfdsvdbs" },
      { text: "3", img: "sdbdsvsd", href: "sfdsvdbs" },
    ],
  },
];

export { CardData };
