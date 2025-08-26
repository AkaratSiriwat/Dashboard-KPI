import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import dayjs from "dayjs";
import Swal from "sweetalert2";
// import BackdropLoad from "../../components/Backdrop/BackdropLoad";
import { headerTable } from "../../untils/static";
import K111HypertensionCard from "./K111Hypertension/K111HypertensionCard";

function K111Hypertension() {
    const year_length = new Date().getFullYear() - 1;
    const yearsData = Array.from({ length: 5 }, (_, index) => {
        return { value: year_length + index };
    });
    const [data, setData] = useState([]);
    const [dataSelect, setDataSelect] = useState("ทั้งหมด");
    const [selectHosp, setSelectHosp] = useState([]);
    const [dataTbl2, setDataTbl2] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);
    const [hname, setHname] = useState("");
    const [hcode, setHcode] = useState("");
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState(dayjs().year());

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <BackdropLoad loading={loading} /> */}
            <K111HypertensionCard
                data={data}
                dataTbl2={dataTbl2}
                setData={setData}
                header={headerTable.Hypertension_header}
                dataSelect={dataSelect}
                setDataSelect={setDataSelect}
                selectHosp={selectHosp}
                setSelectHosp={setSelectHosp}
                hname={hname}
                setHname={setHname}
                setHcode={setHcode}
                year={year}
                yearsData={yearsData}
                setYear={setYear}
                dataGraph={dataGraph}
            />
        </Container>
    );
}

export default K111Hypertension;
