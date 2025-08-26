import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import GridTableHosp from "./GridTableHosp";
import GridTable from "./GridTable";
import BarChartVertical from "../K101/BarChartVertical";

import { headerTable } from "../../../untils/static";
import { Dashboard } from "../../../untils/icons";
import { useTealTextStyle } from "../../../Theme";

function K101Card({ yearsData, year, setYear, tablePregnant, tablePregnantTarget, targetValue, dataHname, dataSelect, setDataSelect }) {
    const [cleared, setCleared] = useState(false);
    const tealTextStyle = useTealTextStyle();
    const filteredTablePregnant = tablePregnant.filter(
    (item) =>
        (!year || item.year === year) &&
        (
        !dataSelect ||
        dataSelect === "ทั้งหมด" ||
        item.hname === (typeof dataSelect === "object" ? dataSelect.hname : dataSelect)
        )
    );

    const filteredTablePregnantTarget = tablePregnantTarget.filter(
  (item) =>
    (!year || item.year === year) &&
    (
      !dataSelect ||
      dataSelect === "ทั้งหมด" ||
      item.hname === (typeof dataSelect === "object" ? dataSelect.hname : dataSelect)
    )
);

    useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => {};
    }, [cleared]);
    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Box display="flex" justifyContent="center">
                <Paper className="paper-bg" elevation={0}>
                    <Grid container columns={12} spacing={3}>
                        <Grid item xs={12} className="flex-start">
                            <Stack direction="row" spacing={2}>
                                <Dashboard fontSize="medium" style={tealTextStyle}/>
                                <Typography className="main-header" style={tealTextStyle}>
                                    K101 ร้อยละของหญิงตั้งครรภ์และหญิงหลังคลอดได้รับบริการตามเกณฑ์คุณภาพ
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} mt={3}>
                            <FormControl sx={{ minWidth: 180 }} >
                                <InputLabel shrink>ปีงบประมาณ</InputLabel>
                                <Select
                                    name="year"
                                    value={year}
                                    label="เลือกปีงบประมาณ"
                                    required
                                    onChange={(e) => setYear(e.target.value)}
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        เลือกปีงบประมาณ
                                    </MenuItem>
                                    {yearsData.map((year) => (
                                        <MenuItem key={year.value} value={year.value}>
                                            {Number(year.value) + 543}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} mt={3}>
                            <Autocomplete
                                fullWidth
                                getOptionLabel={(option) => (typeof option === "string" ? option : `${option.hcode} ${option.hname}`)}
                                options={dataHname}
                                value={dataSelect}
                                onChange={(event, newValue) => {
                                    setDataSelect(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกรพ.สต." />}
                            />
                        </Grid>

                        {/* Bar Chart */}
                        <Grid item xs={12}>
                            <Box className="census-info-frame-header">
                                <Typography className="text-info-header">ร้อยละของหญิงตั้งครรภ์และหญิงหลังคลอดได้รับบริการตามเกณฑ์คุณภาพ</Typography>
                            </Box>
                            <Box className="census-info-frame">
                                <BarChartVertical data={tablePregnantTarget} targetValue={targetValue} />
                            </Box>
                        </Grid>

                        {/* Table */}
                        <Grid item xs={12} my={3}>
                            <GridTableHosp data={filteredTablePregnant} header={headerTable.K101_TablePregnant} />
                        </Grid>

                        {/* Table ที่แสดงค่าเป้าหมาย 81*/}
                        <Grid item xs={12}>
                            <GridTable data={filteredTablePregnantTarget} header={headerTable.K101_TablePregnantTarget} />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}

export default K101Card;