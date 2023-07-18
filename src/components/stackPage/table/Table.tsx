import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const P = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
`;

const A = styled.a`
  color: blue;
  text-decoration: underline;
  transition: 0.2s;
  &:hover {
    color: #7676ff;
  }
`;

type RowDataType = { text: string; href: string };

interface Data {
  frontEnd: string;
  carbs: string;
  fat: string;
  name: RowDataType;
}

function createData(
  name: RowDataType,
  frontEnd: string,
  fat: string,
  carbs: string
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
    "React",
    "NodeJS",
    "Figma"
  ),
  createData(
    { text: "TypeScript", href: "https://ru.wikipedia.org/wiki/TypeScript" },
    "Redux",
    "ExpressJS",
    "Adobe Illustrator"
  ),
  createData(
    { text: "HTML5", href: "https://ru.wikipedia.org/wiki/HTML5" },
    "Style-component",
    "Mesql server",
    "Adobe Photoshop"
  ),
  createData(
    {
      text: "CSS3",
      href: "https://ru.wikipedia.org/wiki/CSS#%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C_3_(CSS3)",
    },
    "MUI",
    "JWT-token",
    "Corel Drow"
  ),
  createData(
    { text: "SCSS", href: "https://ru.wikipedia.org/wiki/Sass" },
    "RTK-Query",
    "SocketIO",
    "Miro"
  ),
  createData(
    { text: "MySQL", href: "https://ru.wikipedia.org/wiki/MySQL" },
    "React-router-dom",
    "Ubuntu",
    "Adobe after Effect"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Языки и метаязыки",
  },
  {
    id: "frontEnd",
    numeric: true,
    disablePadding: false,
    label: "Front-end",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Back-end",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Графика",
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            <P>{headCell.label}</P>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [dense] = React.useState(false);

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator("asc", "frontEnd")).slice(),
    []
  );

  return (
    <Box sx={{ width: "100%", margin: "40px 0" }}>
      <Paper sx={{ width: "100%", mb: 2, boxShadow: "none" }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow tabIndex={-1} key={row.name.text}>
                    <TableCell component="th" id={labelId} padding="none">
                      <A href={row.name.href} target="_blank" rel="noreferrer">
                        {row.name.text}
                      </A>
                    </TableCell>
                    <TableCell align="right">{row.frontEnd}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
