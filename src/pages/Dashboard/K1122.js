import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import dayjs from "dayjs";
import Swal from "sweetalert2";
// import BackdropLoad from "../../components/Backdrop/BackdropLoad";
import K1122Card from "./K112.2/K1122Card";
import axios from "axios";

function K1122() {
    const token = localStorage.getItem("uuid");
    const year_length = new Date().getFullYear() - 2024;
    const yearsData = Array.from({ length: year_length + 2 }, (_, index) => {
        return { value: 2024 + index };
    });

    const [data, setData] = useState([
        { display_name: "รวม", B: 16181, A: 1, percent: "1.20" },
        { display_name: "เมืองขอนแก่น", B: 1519, A: 0, percent: "2.98" },
        { display_name: "ชุมแพ", B: 705, A: 1, percent: "3.10" },
        { display_name: "หนองเรือ", B: 2, A: 0, percent: "2.22" },
        { display_name: "บ้านไผ่", B: 653, A: 0, percent: "0.50" },
        { display_name: "เปือยน้อย", B: 31, A: 0, percent: "0.67" },
        { display_name: "เขาสวนกวาง", B: 100, A: 0, percent: "0.34" },
        { display_name: "กระนวน", B: 312, A: 0, percent: "0.52" },
        { display_name: "ชนบท", B: 31, A: 0, percent: "0.32" },
        { display_name: "สีชมพู", B: 299, A: 0, percent: "0.25" },
        { display_name: "น้ำพอง", B: 618, A: 0, percent: "0.71" },
        { display_name: "บ้านฝาง", B: 242, A: 0, percent: "0.91" },
        { display_name: "หนองสองห้อง", B: 932, A: 0, percent: "0.20" },
        { display_name: "แวงน้อย", B: 328, A: 0, percent: "0.45" },
        { display_name: "บ้านแฮด", B: 635, A: 0, percent: "0.23" },
        { display_name: "โนนศิลา", B: 235, A: 0, percent: "0.55" },
        { display_name: "พระยืน", B: 1391, A: 0, percent: "1.20" },
        { display_name: "พล", B: 1359, A: 0, percent: "2.02" },
        { display_name: "มัญจาคีรี", B: 855, A: 0, percent: "1.33" },
        { display_name: "เวียงเก่า", B: 739, A: 0, percent: "0.26" },
        { display_name: "บ้านเป็ด", B: 635, A: 0, percent: "4.52" },
        { display_name: "แวงใหญ่", B: 94, A: 0, percent: "1.32" },
        { display_name: "หนองนาคำ", B: 92, A: 0, percent: "1.25" }
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
    const [searchData, setSearchData] = useState({ amphur: "", tambon: "", hcode: "", year: yearsData[0].value });

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K1122Card
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

export default K1122;
