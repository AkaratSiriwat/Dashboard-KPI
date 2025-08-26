// import { BorderColor } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ information }) {
    const options = {
        plugins: {
            datalabels: {
                display: function (context) {
                    return context.chart.isDatasetVisible(context.datasetIndex);
                },
                borderRadius: 4,
                align: "center",
                anchor: "center",
                color: "black",
                backgroundColor: "#BEBEBD",
            },
            legend: {
                display: true,
                position: "right",
            },
        },
    };

    const data = {
        labels: information.map((e) => e.sbp_dbpl_name),
        datasets: [
            {
                label: "จำนวน",
                data: information.map((e) => e.percent),
                backgroundColor: ["#6DDBA6", "#1DA9B1", "#DBCC4A", "#DBA151", "#DC483D"],
            },
        ],
    };
    return (
        <Grid container columns={12}>
            <Grid
                item
                xs={12}
                className="flex-center"
                style={{
                    overflowX: "hidden",
                    overflowY: "hidden",
                    height: "700px",
                    width: "100%",
                }}
            >
                {information.length !== 0 ? (
                    <Doughnut data={data} options={options} />
                ) : (
                    <Box className="census-info-empty">
                        <Typography>* ไม่มีข้อมูล *</Typography>
                    </Box>
                )}
            </Grid>
        </Grid>
    );
}
