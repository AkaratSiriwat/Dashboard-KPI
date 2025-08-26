import { Box, Grid, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip, CategoryScale, LinearScale, BarElement } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import AnnotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, AnnotationPlugin);

export default function BarChartVertical({ information }) {
    // console.log("information:", information);
    const targetValue = 1.75;
    const dataBar = {
        //ข้อมูลในแกน x
        labels: information.map((item) => item.display_name),
        datasets: [
            {
                //ข้อมูลร้อยละในแกน y
                label: "ร้อยละ",
                data: information.map((item) => item.percent),
                backgroundColor: ["#8BC7FF"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
            datalabels: {
                display: function (context) {
                    return context.chart.isDatasetVisible(context.datasetIndex);
                },
                borderRadius: 4,
                align: "end",
                anchor: "end",
                color: "black",
                backgroundColor: "#BEBEBD",
            },
            annotation: {
                annotations: {
                    line1: {
                        type: "line",
                        yMin: targetValue,
                        yMax: targetValue,
                        borderColor: "#96C6FF",
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: `ค่าเป้าหมาย ${targetValue}%`,
                            // enabled: true,
                            position: "end",
                            backgroundColor: "transparent",
                            color: "#000",
                            yAdjust: -10,
                        },
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Grid container columns={12}>
            <Grid
                item
                xs={12}
                className="flex-center"
                style={{
                    overflowX: "auto",
                    overflowY: "auto",
                    maxHeight: "500px",
                    width: "100%",
                }}
            >
                {information.length !== 0 ? (
                    <Bar data={dataBar} options={options} />
                ) : (
                    <Box className="census-info-empty">
                        <Typography>* ไม่มีข้อมูล *</Typography>
                    </Box>
                )}
            </Grid>
        </Grid>
    );
}
