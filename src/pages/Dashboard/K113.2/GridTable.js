import { Grid, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

import { StyledTblK103 } from "../../../Theme";
// import { tofieds } from "../../../untils/shortcut";

export default function GridTable({ dataByQ, headerByQ = {} }) {
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
                            <StyledTblK103 rowSpan={2} style={{ minWidth: 400, textAlign: "center" }}>
                                อำเภอ
                            </StyledTblK103>
                            <StyledTblK103 colSpan={3} style={{ minWidth: 100, textAlign: "center" }}>
                               2567
                            </StyledTblK103>
                        </TableRow>
                        <TableRow>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "center" }}>B</StyledTblK103>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "center" }}>A</StyledTblK103>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "center" }}>%</StyledTblK103>
                        </TableRow>
                    </TableHead>
                   <TableBody>
                    {dataByQ.length > 0 ? (
                        <>
                        {dataByQ
                            .filter((item) => item.display_name !== "รวม")
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage - 1)
                            .map((item, index) => {
                            const isLastItemInPage = index === rowsPerPage;
                            return (
                                <TableRow
                                style={{
                                    backgroundColor: isLastItemInPage ? "#eeeeee" : "#FAFAFA",
                                }}
                                >
                                <StyledTblK103 align="left">{item.display_name}</StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                                    {item.B}
                                </StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                                    {item.A}
                                </StyledTblK103>
                                <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                                    {item.percent}
                                </StyledTblK103>
                                </TableRow>
                            );
                            })}

                        {/* แถวรวม */}
                        <TableRow style={{ backgroundColor: "#eeeeee" }}>
                            <StyledTblK103 align="left">{dataByQ[dataByQ.length - 1]?.display_name}</StyledTblK103>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                            {dataByQ[dataByQ.length - 1]?.B}
                            </StyledTblK103>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                            {dataByQ[dataByQ.length - 1]?.A}
                            </StyledTblK103>
                            <StyledTblK103 style={{ minWidth: 100, textAlign: "right" }}>
                            {dataByQ[dataByQ.length - 1]?.percent}
                            </StyledTblK103>
                        </TableRow>
                        </>
                    ) : null}
                    </TableBody>
                </Table>
                {dataByQ.length === 0 ? (
                    <Grid container justifyContent="center" my={3}>
                        <Typography noWrap>* ไม่มีข้อมูลในตาราง *</Typography>
                    </Grid>
                ) : (
                    <TablePagination
                        rowsPerPageOptions={[10, 50, 100]}
                        component="div"
                        count={dataByQ.length - 1}
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
