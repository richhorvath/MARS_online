import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import dec2Bin from "../../utils/dec2Bin.js";
export default function MemoryTable({ memoryArr }) {
  return (
    <div style={{ width: "50%", height: "400px" }}>
      <TableContainer
        style={{ width: "100%", height: "100%" }}
        component={Paper}
      >
        <h4>Instructions</h4>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }}>Address</TableCell>
              <TableCell style={{ minWidth: 100 }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memoryArr.map((value, index) => {
              return (
                <TableRow key={dec2Bin(index)}>
                  <TableCell>{dec2Bin(index)}</TableCell>
                  <TableCell>{dec2Bin(value)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
