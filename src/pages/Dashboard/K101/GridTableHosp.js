import { Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { StyledTblK103 } from "../../../Theme";
// import { StyledTblK103 } from "../../../Theme";

export default function GridTableHosp({ data, header }) {

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
              {header.map((labelHeader) => (
                <StyledTblK103 style={{ minWidth: labelHeader.minWidth, textAlign: labelHeader.align }}>
                  {labelHeader.label}
                </StyledTblK103>
              ))}
            </TableRow>
            </TableHead>
          <TableBody >
            {data.map((item) => {
              return (
                <TableRow style={{ backgroundColor: "#FAFAFA" }}>
                  <StyledTblK103 align="left">{item.hname}</StyledTblK103>
                  <StyledTblK103 align="center">{item.qty_criteria}</StyledTblK103>
                  <StyledTblK103 align="center">{item.qty}</StyledTblK103>
                  <StyledTblK103 align="center">{item.percent}</StyledTblK103>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {data.length === 0 && (
          <Grid container justifyContent="center" my={3}>
            <Typography noWrap>* ไม่มีข้อมูลในตาราง *</Typography>
          </Grid>
        )}
      </TableContainer>
    </Paper>
  );
}
