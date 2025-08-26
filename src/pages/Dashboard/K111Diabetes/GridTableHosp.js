import { Grid, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

import { StyledTblK103 } from "../../../Theme";

export default function GridTableHosp({ data, header, profile }) {
    // console.log("data:", data);
    let length = data.length;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                                <StyledTblK103 style={{ minWidth: 300, textAlign: "center" }}>ชื่อรพ.สต.</StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 300, textAlign: "center" }}>เป้าหมาย</StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 300, textAlign: "center" }}>คัดกรอง</StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 300, textAlign: "center" }}>ร้อยละ</StyledTblK103>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                return (
                                    <TableRow style={{ backgroundColor: data.length === index + 1 ? "#eeeeee" : "#FAFAFA" }}>
                                        <StyledTblK103 align="left">{item.hname}</StyledTblK103>
                                        <StyledTblK103 align="center">{item.qty}</StyledTblK103>
                                        <StyledTblK103 align="center">{item.qty_status}</StyledTblK103>
                                        <StyledTblK103 align="center">{item.percent}</StyledTblK103>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                </Table>
            </TableContainer>
            {data.length === 0 ? (
                <Grid container justifyContent="center" my={3}>
                    <Typography noWrap>* ไม่มีข้อมูลในตาราง *</Typography>
                </Grid>
            ) : (
                <TablePagination
                    rowsPerPageOptions={[10, 50, 100, 200]}
                    component="div"
                    count={length - 1}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="จำนวนรายการที่แสดงต่อหน้า"
                />
            )}
        </Paper>
    );
}
