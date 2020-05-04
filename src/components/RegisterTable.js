import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import dec2Bin from "../../utils/dec2Bin.js";

export default function RegisterTable({ registers }) {
  useEffect(() => {}, [registers]);
  return (
    <div style={{ width: "50%" }}>
      <TableContainer style={{ width: "100%" }} component={Paper}>
        <h4>Registers</h4>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }}>Name</TableCell>
              <TableCell style={{ minWidth: 100 }}>Number</TableCell>
              <TableCell style={{ minWidth: 100 }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(registers).map((key) => {
              return (
                <TableRow id={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{registers[key].regNum}</TableCell>
                  <TableCell>{dec2Bin(registers[key].value)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
