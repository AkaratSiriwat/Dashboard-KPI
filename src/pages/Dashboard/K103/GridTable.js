import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

import { StyledTblK103 } from "../../../Theme";
// import { fixAmount, tofieds } from "../../../untils/shortcut";

export default function GridTable({ data, dataByQ, headerByQ = {} }) {
    // console.log("headerByQ:", headerByQ);
    return (
         <Paper sx={{ width: "100%" }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTblK103 rowSpan={3} style={{ minWidth: 300, textAlign: "center" }}>
                                {headerByQ.hname}
                            </StyledTblK103>
                            {headerByQ.datas?.map((item) => (
                                <StyledTblK103 colSpan={item.vaccineData.length * 3} style={{ minWidth: 300, textAlign: "center" }}>
                                    {item.header}
                                </StyledTblK103>
                            ))}
                        </TableRow>
                        <TableRow>
                            {headerByQ.datas?.map((item) => (
                                <>
                                    {item.vaccineData.map((vaccine_item) => {
                                        return (
                                            <StyledTblK103 colSpan={3} style={{ minWidth: 300, textAlign: "center" }}>
                                                {vaccine_item.vaccine_name}
                                            </StyledTblK103>
                                        );
                                    })}
                                </>
                            ))}
                        </TableRow>
                        <TableRow>
                            {headerByQ.datas?.map((item) => (
                                <>
                                    {item.vaccineData.map((vaccine_item) => {
                                        return (
                                            <>
                                                <StyledTblK103 style={{ minWidth: 180, textAlign: "center" }}>{vaccine_item.qty}</StyledTblK103>
                                                <StyledTblK103 style={{ minWidth: 180, textAlign: "center" }}>
                                                    {vaccine_item.qty_received}
                                                </StyledTblK103>
                                                <StyledTblK103 style={{ minWidth: 180, textAlign: "center" }}>{vaccine_item.avg}</StyledTblK103>
                                            </>
                                        );
                                    })}
                                </>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataByQ.map((item, index) => {
                            return (
                                <TableRow style={{ backgroundColor: dataByQ.length === index + 1 ? "#eeeeee" : "#FAFAFA" }}>
                                    <StyledTblK103 align="left">{item.hname}</StyledTblK103>
                                    {item.datas.map((item_data) => {
                                        return (
                                            <>
                                                {/* <StyledTblK103 align="right">{item_data.header}</StyledTblK103> */}
                                                {item_data.vaccineData.map((vaccine) => {
                                                    return (
                                                        <>
                                                            <StyledTblK103 align="right">{(vaccine.qty)}</StyledTblK103>
                                                            <StyledTblK103 align="right">{(vaccine.qty_received)}</StyledTblK103>
                                                            <StyledTblK103 align="right">{(vaccine.avg)}</StyledTblK103>
                                                        </>
                                                    );
                                                })}
                                            </>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
