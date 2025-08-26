import { Grid, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

import { StyledTblK103 } from "../../../Theme";

export default function GridTable({ dataTbl2 }) {
    let length = dataTbl2.length;
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
                            <StyledTblK103 rowSpan={2} style={{ minWidth: 300, textAlign: "center" }}>
                                ชื่อ รพ.สต.
                            </StyledTblK103>

                            {dataTbl2.length > 0 &&
                                dataTbl2[0].datas?.map((label) => (
                                    <StyledTblK103 colSpan={2} style={{ minWidth: 300, textAlign: "center" }}>
                                        {label.header}
                                    </StyledTblK103>
                                ))}
                        </TableRow>
                        <TableRow>
                            {dataTbl2.length > 0 &&
                                dataTbl2[0].datas?.map((label) => (
                                    <>
                                        <StyledTblK103 style={{ minWidth: 150, textAlign: "center" }}>จำนวน</StyledTblK103>
                                        <StyledTblK103 style={{ minWidth: 150, textAlign: "center" }}>ร้อยละ</StyledTblK103>
                                    </>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTbl2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                            return (
                                <TableRow style={{ backgroundColor: dataTbl2.length === index + 1 ? "#eeeeee" : "#FAFAFA" }}>
                                    <StyledTblK103 align="left">{item.hname}</StyledTblK103>
                                    {item.datas.map((item_data) => {
                                        return (
                                            <>
                                                <StyledTblK103 style={{ minWidth: 150, textAlign: "right" }}>{item_data.qty_status}</StyledTblK103>
                                                <StyledTblK103 style={{ minWidth: 150, textAlign: "right" }}>{item_data.percent}</StyledTblK103>
                                            </>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                {dataTbl2.length === 0 ? (
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
            </TableContainer>
        </Paper>
    );
}
