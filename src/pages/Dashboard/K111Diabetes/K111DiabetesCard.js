import React, { useEffect, useState } from "react";

import { Autocomplete, Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";

// import { Dashboard } from "../../../untils/icons";
import BarChartVertical from "./BarChartVertical";
import GridTable from "./GridTable";
import GridTableHosp from "./GridTableHosp";
import { useTealTextStyle } from "../../../Theme";
import { Dashboard } from "@mui/icons-material";

function K111DiabetesCard({ profile, data, header, dataTbl2, yearsData, setYear, year, dataGraph, selectHosp, setHcode, dataSelect, setDataSelect }) {
    const [cleared, setCleared] = useState(false);
    const tealTextStyle = useTealTextStyle();

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
                                <Typography className="main-header" style={tealTextStyle}>K111 โรคเบาหวาน</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} mt={3}>
                            <FormControl fullWidth>
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
                                    {yearsData.map((el) => (
                                        <MenuItem key={el.value} value={el.value}>
                                            {Number(el.value) + 543}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} mt={3}>
                            <Autocomplete
                                fullWidth
                                getOptionLabel={(option) => (typeof option === "string" ? option : `${option.hcode} ${option.hname}`)}
                                options={selectHosp}
                                autoComplete
                                includeInputInList
                                filterSelectedOptions
                                value={dataSelect}
                                noOptionsText="No hospital"
                                onChange={(event, newValue) => {
                                    // console.log("newValue:", newValue);
                                    setDataSelect(newValue);
                                    if (newValue) {
                                        setHcode(newValue.hcode);
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกรพ.สต." />}
                            ></Autocomplete>
                        </Grid>

                        {/* Chart */}
                        {data && (
                            <Grid item xs={12}>
                                <Box className="census-info-frame-header">
                                    <Typography className="text-info-header">
                                        ประชากร 35 ปีขึ้นไปที่ได้รับการคัดกรอง และเสี่ยงต่อโรคเบาหวาน
                                    </Typography>
                                </Box>
                                <Box className="census-info-frame">
                                    <BarChartVertical information={dataGraph} />
                                </Box>
                            </Grid>
                        )}
                        {/* Table */}
                        <Grid item xs={12}>
                            <GridTableHosp data={data} header={header} profile={profile} />
                        </Grid>
                        <Grid item xs={12}>
                            <GridTable dataTbl2={dataTbl2} profile={profile} />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}

// const dataQuarter = [
//     { label: "ทั้งหมด", value: "" },
//     { label: "Q1", value: "Q1" },
//     { label: "Q2", value: "Q2" },
//     { label: "Q3", value: "Q3" },
//     { label: "Q4", value: "Q4" },
// ];

export default K111DiabetesCard;
