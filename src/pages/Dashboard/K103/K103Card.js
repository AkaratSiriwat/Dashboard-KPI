import React, { useEffect, useState } from "react";

import { Autocomplete, Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";

// import { Dashboard } from "../../../untils/icons";
import BarChartVertical from "./BarChartVertical";
import GridTable from "./GridTable";
import { useTealTextStyle } from "../../../Theme";
import { Dashboard } from "@mui/icons-material";

function K103Card({
    data,
    dataByQ,
    headerByQ,
    yearsData,
    year,
    hname,
    amphur,
    tambon,
    dataAmphur,
    dataTambon,
    dataLocation,
    quarter,
    onSearch,
    }) {
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
                                <Typography className="main-header" style={tealTextStyle}>
                                    ร้อยละความครอบคลุมของเด็กอายุ 0-5 ปี ได้รับการสร้างเสริมภูมิคุ้มกันโรคตามเกณฑ์
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} mt={3}>
                            <FormControl fullWidth>
                                <InputLabel shrink>เลือกปีไตรมาส</InputLabel>
                                <Select
                                    name="year"
                                    value={year}
                                    label="เลือกปีไตรมาส"
                                    required
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        เลือกปีไตรมาส
                                    </MenuItem>
                                    {yearsData.map((el) => (
                                        <MenuItem key={el.value} value={el.value}>
                                            {Number(el.value) + 543}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} mt={3}>
                            <FormControl fullWidth>
                                <InputLabel shrink>เลือกไตรมาส</InputLabel>
                                <Select
                                    name="quarter"
                                    value={quarter}
                                    label="เลือกไตรมาส"
                                    required
                                    displayEmpty
                                >
                                    <MenuItem disabled>เลือกไตรมาส</MenuItem>
                                    {dataQuarter.map((el) => (
                                        <MenuItem key={el.value} value={el.value}>
                                            {el.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} mt={3}>
                            <Autocomplete
                            fullWidth
                            getOptionLabel={option => typeof option === "string" ? option : option.name}
                            options={dataAmphur}
                            autoComplete
                            includeInputInList
                            filterSelectedOptions
                            value={amphur}
                            noOptionsText="No Amphur"
                            onChange={(event, newValue) => {
                                // newValue จะเป็น object ที่เลือก
                                // ส่งไปอัพเดท parent (เช่น setSearchData)
                                if (onSearch) onSearch("amphur", newValue || dataAmphur[0]);
                            }}
                            renderInput={(params) => <TextField {...params} label="เลือกอำเภอ" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} mt={3}>
                            <Autocomplete
                                fullWidth
                                getOptionLabel={option => typeof option === "string" ? option : option.hname}
                                options={dataLocation} // <<< รายการรพ.สต.
                                autoComplete
                                includeInputInList
                                filterSelectedOptions
                                value={hname}
                                noOptionsText="No locations"
                                onChange={(event, newValue) => {
                                    if (onSearch) onSearch("hname", newValue); // ส่งค่าที่เลือกกลับไป parent
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกรพ.สต." />}
                            />

                        </Grid>

                        {/* Chart */}
                        {data && (
                            <Grid item xs={12}>
                                <Box className="census-info-frame-header">
                                    <Typography className="text-info-header">ความครอบคลุมของเด็กอายุ 1 ปี ที่ได้รับวัคซีน</Typography>
                                </Box>
                                <Box className="census-info-frame">
                                    <BarChartVertical information={data} />
                                </Box>
                            </Grid>
                        )}
                        {/* Table */}
                        <Grid item xs={12}>
                            <GridTable data={data} dataByQ={dataByQ} headerByQ={headerByQ} />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}

const dataQuarter = [
    { label: "ทั้งหมด", value: "" },
    { label: "Q1", value: "Q1" },
    { label: "Q2", value: "Q2" },
    { label: "Q3", value: "Q3" },
    { label: "Q4", value: "Q4" },
];

export default K103Card;
