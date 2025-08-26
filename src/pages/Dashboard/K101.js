import { Container } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import K101Card from "./K101/K101Card";

function K101() {
    const year_length = new Date().getFullYear() - 2;
    const yearsData = Array.from({ length: 3 }, (_, index) => {
        return { value: year_length + index };
    });
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState(dayjs().year());
    const [tablePregnant, setTablePregnant] = useState([
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", qty_criteria: 5, qty: 20, percent: "25.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", qty_criteria: 7, qty: 28, percent: "25.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", qty_criteria: 4, qty: 22, percent: "18.18" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", qty_criteria: 3, qty: 14, percent: "21.43" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", qty_criteria: 6, qty: 26, percent: "23.08" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", qty_criteria: 5, qty: 25, percent: "20.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", qty_criteria: 8, qty: 30, percent: "26.67" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", qty_criteria: 2, qty: 15, percent: "13.33" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", qty_criteria: 2, qty: 10, percent: "20.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", qty_criteria: 5, qty: 21, percent: "23.81" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", qty_criteria: 3, qty: 19, percent: "15.79" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", qty_criteria: 4, qty: 20, percent: "20.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", qty_criteria: 5, qty: 16, percent: "31.25" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", qty_criteria: 7, qty: 22, percent: "31.82" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", qty_criteria: 6, qty: 29, percent: "20.69" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", qty_criteria: 3, qty: 18, percent: "16.67" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", qty_criteria: 4, qty: 14, percent: "28.57" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", qty_criteria: 7, qty: 27, percent: "25.93" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", qty_criteria: 5, qty: 19, percent: "26.32" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", qty_criteria: 4, qty: 16, percent: "25.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", qty_criteria: 3, qty: 15, percent: "20.00" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", qty_criteria: 6, qty: 23, percent: "26.09" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", qty_criteria: 5, qty: 18, percent: "27.78" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", qty_criteria: 4, qty: 21, percent: "19.05" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", qty_criteria: 3, qty: 20, percent: "15.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", qty_criteria: 5, qty: 20, percent: "33.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", qty_criteria: 7, qty: 28, percent: "25.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", qty_criteria: 4, qty: 22, percent: "18.18" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", qty_criteria: 3, qty: 14, percent: "21.43" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", qty_criteria: 6, qty: 26, percent: "23.08" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", qty_criteria: 5, qty: 25, percent: "20.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", qty_criteria: 8, qty: 30, percent: "26.67" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", qty_criteria: 2, qty: 15, percent: "13.33" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", qty_criteria: 2, qty: 10, percent: "20.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", qty_criteria: 5, qty: 21, percent: "23.81" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", qty_criteria: 3, qty: 19, percent: "15.79" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", qty_criteria: 4, qty: 20, percent: "20.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", qty_criteria: 5, qty: 16, percent: "31.25" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", qty_criteria: 7, qty: 22, percent: "31.82" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", qty_criteria: 6, qty: 29, percent: "20.69" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", qty_criteria: 3, qty: 18, percent: "16.67" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", qty_criteria: 4, qty: 14, percent: "28.57" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", qty_criteria: 7, qty: 27, percent: "25.93" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", qty_criteria: 5, qty: 19, percent: "26.32" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", qty_criteria: 4, qty: 16, percent: "25.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", qty_criteria: 3, qty: 15, percent: "20.00" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", qty_criteria: 6, qty: 23, percent: "26.09" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", qty_criteria: 5, qty: 18, percent: "27.78" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", qty_criteria: 4, qty: 21, percent: "19.05" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", qty_criteria: 3, qty: 20, percent: "15.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", qty_criteria: 5, qty: 20, percent: "12.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", qty_criteria: 7, qty: 28, percent: "25.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", qty_criteria: 4, qty: 22, percent: "18.18" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", qty_criteria: 3, qty: 14, percent: "21.43" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", qty_criteria: 6, qty: 26, percent: "23.08" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", qty_criteria: 5, qty: 25, percent: "20.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", qty_criteria: 8, qty: 30, percent: "26.67" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", qty_criteria: 2, qty: 15, percent: "13.33" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", qty_criteria: 2, qty: 10, percent: "20.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", qty_criteria: 5, qty: 21, percent: "23.81" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", qty_criteria: 3, qty: 19, percent: "15.79" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", qty_criteria: 4, qty: 20, percent: "20.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", qty_criteria: 5, qty: 16, percent: "31.25" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", qty_criteria: 7, qty: 22, percent: "31.82" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", qty_criteria: 6, qty: 29, percent: "20.69" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", qty_criteria: 3, qty: 18, percent: "16.67" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", qty_criteria: 4, qty: 14, percent: "28.57" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", qty_criteria: 7, qty: 27, percent: "25.93" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", qty_criteria: 6, qty: 24, percent: "25.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", qty_criteria: 5, qty: 19, percent: "26.32" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", qty_criteria: 4, qty: 16, percent: "25.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", qty_criteria: 3, qty: 15, percent: "20.00" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", qty_criteria: 6, qty: 23, percent: "26.09" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", qty_criteria: 4, qty: 12, percent: "33.33" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", qty_criteria: 5, qty: 18, percent: "27.78" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", qty_criteria: 3, qty: 17, percent: "17.65" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", qty_criteria: 4, qty: 21, percent: "19.05" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", qty_criteria: 2, qty: 12, percent: "16.67" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", qty_criteria: 3, qty: 20, percent: "15.00" },
]);

const [tablePregnantTarget, setTablePregnantTarget] = useState([
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2023, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", target_value: 81, qty_criteria: 5, percent: "6.17" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", target_value: 81, qty_criteria: 1, percent: "1.55" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2024, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", target_value: 81, qty_criteria: 5, percent: "6.17" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", target_value: 81, qty_criteria: 3, percent: "3.70" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", target_value: 81, qty_criteria: 2, percent: "2.47" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ", target_value: 81, qty_criteria: 1, percent: "1.23" },
  { year: 2025, hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น", target_value: 81, qty_criteria: 5, percent: "6.17" },
]);

    const [targetValue, setTargetValue] = useState([81]);
    const [hname, setHname] = useState([]);
    const [hcode, setHcode] = useState("ทั้งหมด");
    const [dataSelect, setDataSelect] = useState("ทั้งหมด");
    const [dataHname, setDataHname] = useState([   
        { hcode: "",hname:"ทั้งหมด" },
        { hcode: "04248", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ" },
        { hcode: "04249", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก" },
        { hcode: "04250", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี" },
        { hcode: "04251", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี" },
        { hcode: "04252", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ" },
        { hcode: "04253", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม" },
        { hcode: "04254", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า" },
        { hcode: "04255", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม" },
        { hcode: "04256", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ" },
        { hcode: "04257", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ" },
        { hcode: "04258", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี" },
        { hcode: "04259", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง" },
        { hcode: "04260", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า" },
        { hcode: "04261", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ" },
        { hcode: "04262", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน" },
        { hcode: "04263", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่" },
        { hcode: "04264", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง" },
        { hcode: "04265", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน" },
        { hcode: "04266", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก" },
        { hcode: "04267", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง" },
        { hcode: "04268", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา" },
        { hcode: "04269", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด" },
        { hcode: "04270", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม" },
        { hcode: "04271", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม" },
        { hcode: "04272", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน" },
        { hcode: "04273", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว" },
        { hcode: "04274", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง" },
        { hcode: "04275", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง" },
        { hcode: "04276", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า" },
        { hcode: "04277", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว" },
        { hcode: "04278", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกงาม" },
        { hcode: "04279", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระบุ" },
        { hcode: "04280", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโต้น" },
    ]);

    const onSelect = async (name, value) => {
        // console.log("name:", name);
        // console.log("value:", value);
        if (name === "hcode") {
            setHcode(value);
        }
    };

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K101Card
                yearsData={yearsData}
                year={year}
                setYear={setYear}
                tablePregnant={tablePregnant}
                tablePregnantTarget={tablePregnantTarget}
                targetValue={targetValue}
                hname={hname}
                hcode={hcode}
                dataHname={dataHname}
                dataSelect={dataSelect}
                setDataSelect={setDataSelect}
                setHname={setHname}
                setHcode={setHcode}
                onSelect={onSelect}
            />
        </Container>
    );
}

export default K101;





// { hcode: "04281", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองแวง" },
//         { hcode: "04282", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลขามป้อม" },
//         { hcode: "04283", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองเรือ" },
//         { hcode: "04284", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหมือดแอ่" },
//         { hcode: "04285", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเม็ง" },
//         { hcode: "04286", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านกง" },
//         { hcode: "04287", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลยางคำ" },
//         { hcode: "04288", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลจระเข้" },
//         { hcode: "04289", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนทอง" },
//         { hcode: "04290", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทรัพย์เจริญ" },
//         { hcode: "04291", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนฟันเรือ" },
//         { hcode: "04292", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลกุดกว้าง" },
//         { hcode: "04293", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนทัน" },
//         { hcode: "04294", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนสะอาด" },
//         { hcode: "04295", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนสวรรค์" },
//         { hcode: "04296", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ" },
//         { hcode: "04297", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านมาลา" },
//         { hcode: "04298", hname: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนหัน" },
        