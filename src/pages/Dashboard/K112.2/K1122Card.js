import React, { useEffect, useState } from "react";

import {
    Autocomplete,
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import BarChartVertical from "./BarChartVertical";
import GridTable from "./GridTable";
import { useTealTextStyle } from "../../../Theme";
import DashboardIcon from "@mui/icons-material/Dashboard";

function K1122Card({
    profile,
    data,
    dataByQ,
    total,
    headerByQ,
    yearsData,
    year,
    amphur,
    tambon,
    dataAmphur,
    dataTambon,
    onSearch,
    dataLocation,
    hname,
    genExcel,
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
                                <DashboardIcon fontSize="medium" style={tealTextStyle} />
                                <Typography className="main-header" style={tealTextStyle}>
                                    ร้อยละของผู้ป่วยเบาหวานรายใหม่จากกลุ่มเสี่ยงเบาหวานปีที่ผ่านมา ไม่เกินร้อยละ 1.75
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} mt={3}>
                            <FormControl fullWidth>
                                <InputLabel shrink>เลือกปีงบประมาณ</InputLabel>
                                <Select
                                    name="year"
                                    value={year}
                                    label="เลือกปีงบประมาณ"
                                    required
                                    onChange={(e) => onSearch(e.target.name, e.target.value)}
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
                        <Grid item xs={12} sm={12} md={3} mt={3}>
                            <Autocomplete
                                disabled={true}
                                fullWidth
                                getOptionLabel={(option) => (typeof option === "string" ? option : `${option.district}`)}
                                options={dataAmphur}
                                autoComplete
                                includeInputInList
                                filterSelectedOptions
                                value={amphur}
                                noOptionsText="No Amphur"
                                onChange={(event, newValue) => {
                                    onSearch("amphur", newValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกอำเภอ" />}
                            >
                                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                            </Autocomplete>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} mt={3}>
                            <Autocomplete
                                disabled={true}
                                fullWidth
                                getOptionLabel={(option) => (typeof option === "string" ? option : `${option.subdistrict}`)}
                                options={dataTambon}
                                autoComplete
                                includeInputInList
                                filterSelectedOptions
                                value={tambon}
                                noOptionsText="No Tambon"
                                onChange={(event, newValue) => {
                                    onSearch("tambon", newValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกตำบล" />}
                            >
                                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                            </Autocomplete>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} mt={3}>
                            <Autocomplete
                                disabled={true}
                                fullWidth
                                getOptionLabel={(option) => (typeof option === "string" ? option : `${option.hname}`)}
                                options={dataLocation}
                                autoComplete
                                includeInputInList
                                filterSelectedOptions
                                value={hname}
                                noOptionsText="No locations"
                                onChange={(event, newValue) => {
                                    onSearch("hcode", newValue.hcode);
                                }}
                                renderInput={(params) => <TextField {...params} label="เลือกรพ.สต." />}
                            >
                                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                            </Autocomplete>
                        </Grid>

                        {/* Chart */}
                        {data && (
                            <Grid item xs={12}>
                                <Box className="census-info-frame-header">
                                    <Typography className="text-info-header">แผนภูมิแสดงร้อยละ</Typography>
                                </Box>
                                <Box className="census-info-frame">
                                    <BarChartVertical information={data} />
                                </Box>
                            </Grid>
                        )}
                        {/* Table */}
                        <Grid item xs={12}>
                            <Typography>
                                <b>B หมายถึง</b> จำนวนประชากรอายุ 35 ปี ขึ้นไป ในเขตรับผิดชอบทั้งหมด มีค่าระดับน้ำตาลอดอาหาร (FPG) อยู่ระหว่าง 100-125
                                mg/dl ในปีที่ผ่านมา
                            </Typography>
                            <Typography>
                                <b>A หมายถึง</b> จำนวนประชากรอายุ 35 ปี ขึ้นไป ในเขตรับผิดชอบ มีค่าระดับน้ำตาลอดอาหาร (FPG) อยู่ระหว่าง 100-125 mg/dl
                                ในปีที่ผ่านมา ได้รับการวินิจฉัยว่าเป็นโรคเบาหวานรายใหม่ และขึ้นทะเบียนในปีงบประมาณปัจจุบัน
                            </Typography>
                            <Grid item xs={12} sm={12} md={12} className="flex-end">
                                <Stack direction="row">
                                    <Button variant="contained" color="success" size="medium" onClick={genExcel}>
                                        Excel
                                    </Button>
                                </Stack>
                            </Grid>
                            <GridTable data={data} dataByQ={dataByQ} total={total} headerByQ={headerByQ} />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}

export default K1122Card;
