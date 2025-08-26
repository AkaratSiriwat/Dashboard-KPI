import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import dayjs from "dayjs";
import Swal from "sweetalert2";
// import BackdropLoad from "../../components/Backdrop/BackdropLoad";
import K103Card from "./K103/K103Card";

function K103() {
    const year_length = new Date().getFullYear() - 2024;
    const yearsData = Array.from({ length: year_length + 2 }, (_, index) => {
        return { value: 2024 + index };
    });
    const [data, setData] = useState([
   {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหลื่อม",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 4, qty_received: 3, avg: "75.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 6, qty_received: 2, avg: "33.33" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 3, qty_received: 3, avg: "100.00" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 7, qty_received: 4, avg: "57.14" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 8, qty_received: 6, avg: "75.00" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหัน",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 5, qty_received: 2, avg: "40.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 9, qty_received: 8, avg: "88.89" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 3, avg: "75.00" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 7, qty_received: 3, avg: "42.86" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 0, qty_received: 0, avg: "0.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 10, qty_received: 9, avg: "90.00" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนสะอาด",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 2, avg: "100.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 2, avg: "66.67" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 5, qty_received: 4, avg: "80.00" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 8, qty_received: 7, avg: "87.50" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 4, avg: "80.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 6, qty_received: 6, avg: "100.00" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 0, avg: "0.00" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 4, qty_received: 2, avg: "50.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 9, qty_received: 8, avg: "88.89" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลลำห้วย",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 2, avg: "100.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 3, avg: "60.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 3, qty_received: 3, avg: "100.00" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 6, qty_received: 5, avg: "83.33" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 1, avg: "100.00" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านม่วง",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 7, qty_received: 7, avg: "100.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 2, avg: "40.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 6, qty_received: 5, avg: "83.33" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 2, avg: "100.00" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 9, qty_received: 7, avg: "77.78" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 10, qty_received: 6, avg: "60.00" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนน",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 8, avg: "100.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 7, qty_received: 6, avg: "85.71" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 5, qty_received: 3, avg: "60.00" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 4, qty_received: 4, avg: "100.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 6, qty_received: 2, avg: "33.33" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 9, qty_received: 9, avg: "100.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 8, qty_received: 5, avg: "62.50" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 6, qty_received: 2, avg: "33.33" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 3, qty_received: 3, avg: "100.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 7, qty_received: 3, avg: "42.86" },
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนเมืองมน",
    vaccineData: [
      { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 2, avg: "100.00" },
      { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 2, avg: "66.67" },
      { vaccine_id: "111", vaccine_name: "IPV", qty: 7, qty_received: 6, avg: "85.71" },
      { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 5, qty_received: 2, avg: "40.00" },
      { vaccine_id: "083", vaccine_name: "OPV3", qty: 5, qty_received: 3, avg: "60.00" },
      { vaccine_id: "R11", vaccine_name: "Rota", qty: 8, qty_received: 6, avg: "75.00" },
    ]
  }
]);
    const [dataByQ, setDataByQ] = useState([
           {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหลื่อม",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหัน",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 7, qty_received: 5, avg: "71.43" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 2, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 6, qty_received: 3, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 8, qty_received: 8, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 1, avg: "100.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 0, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนสะอาด",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลลำห้วย",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านม่วง",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนน",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
  {
    hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนเมืองมน",
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 6, qty_received: 4, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 8, qty_received: 7, avg: "87.50" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 5, qty_received: 2, avg: "40.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 3, qty_received: 3, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 6, qty_received: 6, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 4, qty_received: 3, avg: "75.00" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 3, qty_received: 2, avg: "66.67" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 5, qty_received: 5, avg: "100.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 4, qty_received: 1, avg: "25.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 2, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 3, qty_received: 2, avg: "66.67" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 3, qty_received: 1, avg: "33.33" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 2, qty_received: 1, avg: "50.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 2, qty_received: 1, avg: "50.00" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: 1, qty_received: 0, avg: "0.00" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: 0, qty_received: 0, avg: "0.00" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: 1, qty_received: 1, avg: "100.00" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: 1, qty_received: 0, avg: "0.00" }
        ]
      }
    ]
  },
    ]);
    const [headerByQ, setHeaderByQ] = useState(  {
    hname: "สถานพยาบาล",  // แก้ชื่อ รพ. ตามต้องการ
    datas: [
      {
        header: "รวม",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" }
        ]
      },
      {
        header: "ไตรมาส1",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" }
        ]
      },
      {
        header: "ไตรมาส2",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" }
        ]
      },
      {
        header: "ไตรมาส3",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" }
        ]
      },
      {
        header: "ไตรมาส4",
        vaccineData: [
          { vaccine_id: "010", vaccine_name: "BCG", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "041", vaccine_name: "HBV1", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "111", vaccine_name: "IPV", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "061", vaccine_name: "MEASLES/MMR", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "083", vaccine_name: "OPV3", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" },
          { vaccine_id: "R11", vaccine_name: "Rota", qty: "จำนวนทั้งหมด", qty_received: "จำนวนผู้ได้รับวัคซีน", avg: "ร้อยละผู้ได้รับวัคซีน" }
        ]
      }
    ]
  });
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState(dayjs().year());
    const [quarter, setQuarter] = useState("");
    const [location, setLocation] = useState("");
    const [dataAmphur, setDataAmphur] = useState([
            { id: 0, name: "ทั้งหมด" },
            { id: 1, name: "หนองเรือ" },
            { id: 2, name: "เมืองขอนแก่น" },
            { id: 3, name: "เขื่อนอุบลรัตน์" },
            { id: 4, name: "บ้านไผ่" },
            { id: 5, name: "โนนศิลา" },
            { id: 6, name: "โคกโพธิ์ไชย" },
            { id: 7, name: "สีชมพู" },
            { id: 8, name: "กระนวน" },
            { id: 9, name: "เขาสวนกวาง" }
    ]);
    const [dataTambon, setDataTambon] = useState([]);
    const [dataLocation, setDataLocation] = useState([
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหลื่อม" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหัน" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนสะอาด" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลลำห้วย" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านม่วง" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนน" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก" },
            { hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนเมืองมน" }
    ]);
    const [searchData, setSearchData] = useState({
        amphur: dataAmphur[0], // ถูก!
        hname: null,
        // แนะนำเพิ่ม quarter/year ด้วยนะ ถ้ามี filter เหล่านี้
    });
    const handleSearch = (field, value) => {
    setSearchData(prev => ({
        ...prev,
        [field]: value
    }));
    };
    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K103Card
                data={data}
                dataByQ={dataByQ}
                headerByQ={headerByQ}
                yearsData={yearsData}
                year={searchData.year}
                amphur={searchData.amphur}
                tambon={searchData.tambon}
                quarter={searchData.quarter}
                hname={searchData.hname}
                dataAmphur={dataAmphur}
                dataTambon={dataTambon}
                dataLocation={dataLocation}
                searchData={searchData}
                setQuarter={setQuarter}
                setYear={setYear}
                setLocation={setLocation}
                onSearch={handleSearch}
            />
        </Container>
    );
}

export default K103;
