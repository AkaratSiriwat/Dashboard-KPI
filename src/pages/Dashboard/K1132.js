import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import dayjs from "dayjs";
import Swal from "sweetalert2";
// import BackdropLoad from "../../components/Backdrop/BackdropLoad";
import K1132Card from "./K113.2/K1132Card";
import axios from "axios";

function K1132() {
    const token = localStorage.getItem("uuid");
    const year_length = new Date().getFullYear() - 2024;
    const yearsData = Array.from({ length: year_length + 2 }, (_, index) => {
        return { value: 2024 + index };
    });
    
    const [data, setData] = useState([
        { display_name: "รวม", B: 1219, A: 2, percent: "0.16" },
        { display_name: "เมืองขอนแก่น", B: 96, A: 1, percent: "0.08" },
        { display_name: "พล", B: 110, A: 0, percent: "0.50" },
        { display_name: "บ้านไผ่", B: 85, A: 0, percent: "0.70" },
        { display_name: "เปือยน้อย", B: 11, A: 0, percent: "0.64" },
        { display_name: "เขาสวนกวาง", B: 31, A: 0, percent: "0.74" },
        { display_name: "เวียงเก่า", B: 18, A: 1, percent: "0.23" },
        { display_name: "พระยืน", B: 31, A: 0, percent: "0.92" },
        { display_name: "สีชมพู", B: 29, A: 0, percent: "0.20" },
        { display_name: "ชุมแพ", B: 6, A: 0, percent: "0.33" },
        { display_name: "อุบลรัตน์", B: 51, A: 0, percent: "0.53" },
        { display_name: "น้ำพอง", B: 67, A: 0, percent: "0.14" },
        { display_name: "บ้านฝาง", B: 13, A: 0, percent: "0.02" },
        { display_name: "ซำสูง", B: 42, A: 0, percent: "0.64" },
        { display_name: "หนองเรือ", B: 103, A: 0, percent: "0.55" },
        { display_name: "หนองสองห้อง", B: 128, A: 0, percent: "0.27" },
        { display_name: "แวงน้อย", B: 19, A: 0, percent: "0.85" },
        { display_name: "โนนศิลา", B: 5, A: 0, percent: "0.99" },
        { display_name: "บ้านแฮด", B: 9, A: 0, percent: "0.53" },
        { display_name: "ภูผาม่าน", B: 10, A: 0, percent: "0.34" },
        { display_name: "โคกโพธิ์ไชย", B: 23, A: 0, percent: "0.62" },
        { display_name: "ชนบท", B: 33, A: 0, percent: "0.19" },
        { display_name: "มัญจาคีรี", B: 33, A: 0, percent: "0.05" },
        { display_name: "พระยืน", B: 18, A: 0, percent: "0.64" },
        { display_name: "บ้านแฮด", B: 11, A: 0, percent: "0.35" },
        { display_name: "หนองนาคำ", B: 36, A: 0, percent: "0.24" },
            ]);
    const [dataByQ, setDataByQ] = useState([
        {
    display_name: "เมืองขอนแก่น",
    B: 852,
    A: 333,
    header: 2567,
    percent: "0.39"
  },
  {
    display_name: "พล",
    B: 922,
    A: 400,
    header: 2567,
    percent: "0.43"
  },
  {
    display_name: "หนองเรือ",
    B: 271,
    A: 121,
    header: 2567,
    percent: "0.45"
  },
  {
    display_name: "บ้านไผ่",
    B: 760,
    A: 654,
    header: 2567,
    percent: "0.86"
  },
  {
    display_name: "เปือยน้อย",
    B: 423,
    A: 275,
    header: 2567,
    percent: "0.65"
  },
  {
    display_name: "เขาสวนกวาง",
    B: 990,
    A: 767,
    header: 2567,
    percent: "0.77"
  },
  {
    display_name: "เขื่อนอุบลรัตน์",
    B: 334,
    A: 225,
    header: 2567,
    percent: "0.67"
  },
  {
    display_name: "กระนวน",
    B: 876,
    A: 405,
    header: 2567,
    percent: "0.46"
  },
  {
    display_name: "ชนบท",
    B: 712,
    A: 611,
    header: 2567,
    percent: "0.86"
  },
  {
    display_name: "สีชมพู",
    B: 450,
    A: 332,
    header: 2567,
    percent: "0.74"
  },
  {
    display_name: "น้ำพอง",
    B: 553,
    A: 261,
    header: 2567,
    percent: "0.47"
  },
  {
    display_name: "บ้านฝาง",
    B: 984,
    A: 123,
    header: 2567,
    percent: "0.13"
  },
  {
    display_name: "หนองสองห้อง",
    B: 873,
    A: 714,
    header: 2567,
    percent: "0.82"
  },
  {
    display_name: "แวงน้อย",
    B: 931,
    A: 550,
    header: 2567,
    percent: "0.59"
  },
  {
    display_name: "บ้านแฮด",
    B: 702,
    A: 250,
    header: 2567,
    percent: "0.36"
  },
  {
    display_name: "โนนศิลา",
    B: 315,
    A: 114,
    header: 2567,
    percent: "0.36"
  },
  {
    display_name: "พระยืน",
    B: 834,
    A: 519,
    header: 2567,
    percent: "0.62"
  },
  {
    display_name: "เวียงเก่า",
    B: 867,
    A: 416,
    header: 2567,
    percent: "0.48"
  },
  {
    display_name: "มัญจาคีรี",
    B: 601,
    A: 339,
    header: 2567,
    percent: "0.56"
  },
  {
    display_name: "บ้านเป็ด",
    B: 472,
    A: 403,
    header: 2567,
    percent: "0.85"
  },
  {
    display_name: "แวงใหญ่",
    B: 655,
    A: 552,
    header: 2567,
    percent: "0.84"
  },
  {
    display_name: "หนองนาคำ",
    B: 339,
    A: 320,
    header: 2567,
    percent: "0.94"
  },
  {
    display_name: "รวม",
    B: 999,
    A: 100,
    header: 2567,
    percent: "0.10"
  }
    ]);
    const [headerByQ, setHeaderByQ] = useState({});
    const [total, setTotal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState(dayjs().year());
    const [location, setLocation] = useState("");
    const [dataAmphur, setDataAmphur] = useState([]);
    const [dataTambon, setDataTambon] = useState([]);
    const [dataLocation, setDataLocation] = useState([]);
    const [searchData, setSearchData] = useState({ amphurname: "", tambonname: "", hcode: "", year: yearsData[0].value });

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K1132Card
                data={data}
                dataByQ={dataByQ}
                headerByQ={headerByQ}
                total={total}
                yearsData={yearsData}
                year={searchData.year}
                amphur={searchData.amphur}
                tambon={searchData.tambon}
                hname={searchData.hname}
                dataAmphur={dataAmphur}
                dataTambon={dataTambon}
                dataLocation={dataLocation}
                searchData={searchData}
                setYear={setYear}
                setLocation={setLocation}
            />
        </Container>
    );
}

export default K1132;
