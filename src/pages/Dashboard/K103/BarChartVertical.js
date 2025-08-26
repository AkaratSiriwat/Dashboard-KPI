import { Box, Grid, Typography } from "@mui/material";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
// import { tofieds } from "../../../untils/shortcut";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function BarChartVertical({ information }) {
     // console.log("information", information);

     const labels = information.map((e) => { return e.hname });

     const BCG = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "BCG").avg
     );

     const HBV1 = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "HBV1").avg
     );

     const IPV = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "IPV").avg
     );

     const MEASLES_MMR = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "MEASLES/MMR").avg
     );

     const OPV3 = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "OPV3").avg
     );

     const Rota = information.map((e) =>
          e.vaccineData.find((item) => item.vaccine_name === "Rota").avg
     );

     // console.log(avg_data);

     const options = {
          indexAxis: "x",
          elements: {
               bar: {
                    borderWidth: 2,
               },
          },
          responsive: true,

          plugins: {
               interaction: {
                    intersect: false,
                    mode: 'index',
               },
               datalabels: {
                    display: function (context) {
                         return null;
                    },
                    formatter: function (value) {
                         return null;
                    },
                    borderRadius: 4,
                    align: "start",
                    anchor: "start",
                    color: "black",
                    // backgroundColor: "#BEBEBD",
               },
               tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                         label: function (context) {
                              var label = context.dataset.label || '';
                              var value = context.formattedValue;
                            //   return `${label} : ${value > 0 ? tofieds(value) : value} %`;
                         },
                    },
               },
          },
          legend: {
               display: false,
          },
          scales: {
               y: {
                    min: 0,
                    max: 100,
               }
          }
     };

     const data = {
          labels,
          datasets: [
               {
                    label: 'BCG',
                    data: BCG,
                    borderColor: "rgb(23, 144, 255)",
                    backgroundColor: "rgba(23, 144, 255, 0.5)",
               },
               {
                    label: 'HBV1',
                    data: HBV1,
                    borderColor: "rgb(14, 32, 142)",
                    backgroundColor: "rgba(14, 32, 142, 0.5)",
               },
               {
                    label: 'IPV',
                    data: IPV,
                    borderColor: "rgb(239, 117, 68)",
                    backgroundColor: "rgba(239, 117, 68, 0.5)",
               },
               {
                    label: 'MEASLES/MMR',
                    data: MEASLES_MMR,
                    borderColor: "rgb(83, 176, 39)",
                    backgroundColor: "rgba(83, 176, 39, 0.5)",
               },
               {
                    label: 'OPV3',
                    data: OPV3,
                    borderColor: "rgb(225, 68, 175)",
                    backgroundColor: "rgba(225, 68, 175, 0.5)",
               },
               {
                    label: 'Rota',
                    data: Rota,
                    borderColor: "rgb(113, 74, 191)",
                    backgroundColor: "rgba(113, 74, 191, 0.5)",
               },
          ],
     };
     return (
          <Grid container columns={12}>
               <Grid item xs={12} className="census-info-chart-h" mt={3}>
                    {information.length > 0 ?
                         // <Bar data={data} options={options} />
                         <Bar data={data} options={options} />
                         :
                         <Box >
                              <Typography>
                                   * ไม่มีข้อมูล *
                              </Typography>
                         </Box>
                    }
                    {/* <Bar data={data} options={options} /> */}
               </Grid>
          </Grid>
     );
}
