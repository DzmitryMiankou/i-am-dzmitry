type RowDataType = { text: string; href: string };

export interface Data {
  frontEnd: RowDataType;
  carbs: RowDataType;
  fat: RowDataType;
  name: RowDataType;
}

function createData(
  name: RowDataType,
  frontEnd: RowDataType,
  fat: RowDataType,
  carbs: RowDataType
): Data {
  return {
    name,
    frontEnd,
    fat,
    carbs,
  };
}

const rows = [
  createData(
    { text: "JavaScript", href: "https://ru.wikipedia.org/wiki/JavaScript" },
    { text: "React", href: "https://ru.wikipedia.org/wiki/React" },
    { text: "Node.JS", href: "https://ru.wikipedia.org/wiki/Node.js" },
    { text: "Figma", href: "https://ru.wikipedia.org/wiki/Figma" }
  ),
  createData(
    { text: "TypeScript", href: "https://ru.wikipedia.org/wiki/TypeScript" },
    { text: "Redux", href: "https://ru.wikipedia.org/wiki/Redux" },
    {
      text: "Express.js",
      href: "https://ru.wikipedia.org/wiki/Express_(%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)",
    },
    {
      text: "Adobe Illustrator",
      href: "https://ru.wikipedia.org/wiki/Adobe_Illustrator",
    }
  ),
  createData(
    { text: "HTML5", href: "https://ru.wikipedia.org/wiki/HTML5" },
    {
      text: "Styled Components",
      href: "https://tproger.ru/articles/styled-components-idealnaja-stilizacija-react-prilozhenija/",
    },
    {
      text: "Mysql server",
      href: "https://timeweb.com/ru/community/articles/chto-takoe-mysql-server",
    },
    {
      text: "Adobe Photoshop",
      href: "https://ru.wikipedia.org/wiki/Adobe_Photoshop",
    }
  ),
  createData(
    {
      text: "CSS3",
      href: "https://ru.wikipedia.org/wiki/CSS#%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C_3_(CSS3)",
    },
    {
      text: "MUI",
      href: "https://habr.com/ru/articles/731964/",
    },
    {
      text: "JWT-token",
      href: "https://ru.wikipedia.org/wiki/JSON_Web_Token",
    },
    {
      text: "CorelDRAW",
      href: "https://ru.wikipedia.org/wiki/CorelDRAW",
    }
  ),
  createData(
    { text: "SCSS", href: "https://ru.wikipedia.org/wiki/Sass" },
    {
      text: "RTK-Query",
      href: "https://dev-gang.ru/article/uprosczennyi-vybor-dannyh-s-pomosczu-rtk-query-podrobnoe-rukovodstvo-euk50brw6y/",
    },
    {
      text: "Socket.IO",
      href: "https://ru.wikipedia.org/wiki/Socket.IO",
    },
    {
      text: "Miro",
      href: "https://ru.wikipedia.org/wiki/Miro_(%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0)",
    }
  ),
  createData(
    { text: "MySQL", href: "https://ru.wikipedia.org/wiki/MySQL" },
    {
      text: "React-router-dom",
      href: "https://ru.hexlet.io/blog/posts/react-router-v6",
    },
    {
      text: "Ubuntu",
      href: "https://ru.wikipedia.org/wiki/Ubuntu",
    },
    {
      text: "Adobe After Effects",
      href: "https://ru.wikipedia.org/wiki/Adobe_After_Effects",
    }
  ),
];

export { rows };
