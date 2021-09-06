// material ui
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { Result } from "types/LatitudeAndLongitude";

interface Props {
  columns: string[];
  rows: Result[];
}

export default function MuiTable({ columns, rows }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="results">
        <TableHead>
          <TableRow>
            {columns.map((column: string) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Result, i: number) => (
            <TableRow key={i}>
              {Object.entries(row).map(([key, value]) => (
                <TableCell key={key}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
