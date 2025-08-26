import React from "react";
import { Route, Routes } from "react-router-dom";

// dashboard
import DashboardKPI from "./Dashboard/Dashboard-kpi";
import DashboardKPI2 from "./Dashboard/Dashboard-kpi2";
import DashboardKPI3 from "./Dashboard/Dashboard-kpi3";
import DashboardKPI4 from "./Dashboard/Dashboard-kpi4";
import K101 from "./Dashboard/K101";
import K103 from "./Dashboard/K103";
import K111Diabetes from "./Dashboard/K111Diabetes";
import K111Hypertension from "./Dashboard/K111Hypertension";
import K1122 from "./Dashboard/K1122";
import K1132 from "./Dashboard/K1132";

function RouterMain() {
    return (
        <Routes>
            <Route path="/" element={<DashboardKPI />} />

            <Route path="/DashboardKPI2" element={<DashboardKPI2 />} />
            <Route path="/DashboardKPI3" element={<DashboardKPI3 />} />
            <Route path="/DashboardKPI4" element={<DashboardKPI4 />} />

            <Route path="/DashboardK101" element={<K101 />} />
            <Route path="/DashboardK103" element={<K103 />} />
            {/* <Route path="/DashboardK111Diabetes" element={<K111Diabetes />} />
            <Route path="/DashboardK111Hypertension" element={<K111Hypertension />} /> */}
            <Route path="/DashboardK1122" element={<K1122 />} />
            <Route path="/DashboardK1132" element={<K1132 />} />

            {/* <Route path="/401" element={<Error401 />} /> */}
            {/* <Route path="*" element={<Error401 />} /> */}
        </Routes>
    );
}

export default RouterMain;
