import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function InstructionTable({ instList }) {
  return (
    <div style={{ width: "50%" }}>
      <TableContainer style={{ width: "100%" }} component={Paper}>
        <h4>Instructions</h4>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }}>
                Instruction Memory
              </TableCell>
              <TableCell style={{ minWidth: 100 }}>
                Binary Instruction
              </TableCell>
              <TableCell style={{ minWidth: 100 }}>
                Source Instruction
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instList.map((instruction) => {
              return (
                <TableRow id={"inst" + instruction.id}>
                  <TableCell>{instruction.memory}</TableCell>
                  <TableCell>{instruction.binInst}</TableCell>
                  <TableCell>{instruction.source}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
