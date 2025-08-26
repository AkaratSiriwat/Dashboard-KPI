import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import dayjs from "dayjs";
import Swal from "sweetalert2";
// import BackdropLoad from "../../components/Backdrop/BackdropLoad";
import { headerTable } from "../../untils/static";
import K111DiabetesCard from "./K111Diabetes/K111DiabetesCard";

function K111Diabetes() {
    const year_length = new Date().getFullYear() - 5;
    const yearsData = Array.from({ length: 10 }, (_, index) => {
        return { value: year_length + index };
    });
    const [data, setData] = useState([]);
    const [dataTbl2, setDataTbl2] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);
    const [dataSelect, setDataSelect] = useState("ทั้งหมด");
    const [hname, setHname] = useState("");
    const [hcode, setHcode] = useState("");
    const [year, setYear] = useState(dayjs().year());
    const [loading, setLoading] = useState(false);
    const [selectHosp, setSelectHosp] = useState([]);

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K111DiabetesCard
                data={data}
                dataTbl2={dataTbl2}
                header={headerTable.Diabetes_header}
                dataSelect={dataSelect}
                setDataSelect={setDataSelect}
                hname={hname}
                hcode={hcode}
                setHname={setHname}
                setHcode={setHcode}
                year={year}
                yearsData={yearsData}
                setYear={setYear}
                dataGraph={dataGraph}
                selectHosp={selectHosp}
            />
        </Container>
    );
}

export default K111Diabetes;
