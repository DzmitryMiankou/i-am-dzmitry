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
import { rows, Data } from "./dataTable";

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
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => any {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => any) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, any]);
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
  label: any;
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
                    <TableCell align="right">
                      <A
                        href={row.frontEnd.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {row.frontEnd.text}
                      </A>
                    </TableCell>
                    <TableCell align="right">
                      <A href={row.fat.href} target="_blank" rel="noreferrer">
                        {row.fat.text}
                      </A>
                    </TableCell>
                    <TableCell align="right">
                      <A href={row.carbs.href} target="_blank" rel="noreferrer">
                        {row.carbs.text}
                      </A>
                    </TableCell>
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
