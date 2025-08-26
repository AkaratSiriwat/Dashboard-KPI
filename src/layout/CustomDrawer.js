import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard รายงานสุขภาพพื้นที่", path: "/" },
  // { label: "NCDs (โรคเรื้อรัง)", path: "/" },
  { label: "Dashboard ตัวชี้วัดการคัดกรองเบาหวาน", path: "/DashboardKPI2" },
  { label: "Dashboard ควบคุมความดันโลหิตสูง", path: "/DashboardKPI4" },
  { label: "Dashboard การบริการหญิงตั้งครรภ์และหลังคลอด", path: "/DashboardKPI3" },
  // { label: "KPI ยาสมุนไพร", path: "/DashboardKPI3" },
  { label: "K101", path: "/DashboardK101" },
  { label: "K103", path: "/DashboardK103" },
  { label: "Dashboard K112.2", path: "/DashboardK1122" },
  { label: "Dashboard K113.2", path: "/DashboardK1132" },
];

export default function CustomDrawer() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <button
        style={{
          position: "fixed",
          top: 24,
          left: 24,
          zIndex: 1100,
          background: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24
        }}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span style={{fontSize: 30}}>☰</span>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 1099
          }}
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : -240,
          width: 240,
          height: "100%",
          background: "#fff",
          boxShadow: "2px 0 10px rgba(0,0,0,0.12)",
          zIndex: 1200,
          transition: "left 0.22s cubic-bezier(.4,0,.2,1)",
          display: "flex",
          flexDirection: "column",
          paddingTop: 30,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: 2,
            margin: "0 0 10px 0",
            color: "#673ab7"
          }}>
          เมนูหลัก
        </h1>
        <button
          onClick={() => setOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            fontSize: 30,
            marginRight: 14,
            marginBottom: 10,
            cursor: "pointer",
          }}
          aria-label="Close menu"
        >×</button>

        {menuItems.map((item, i) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              padding: "16px 32px",
              textDecoration: "none",
              color:
                location.pathname === item.path
                  ? "#673ab7"
                  : hoveredIndex === i
                  ? "#512da8"
                  : "#222",
              background:
                location.pathname === item.path
                  ? "#f3eafe"
                  : hoveredIndex === i
                  ? "#ede7f6"
                  : "none",
              fontWeight:
                location.pathname === item.path
                  ? "bold"
                  : hoveredIndex === i
                  ? "bold"
                  : "normal",
              fontSize: 17,
              borderLeft:
                location.pathname === item.path
                  ? "1px solid #673ab7"
                  : hoveredIndex === i
                  ? "1px solid #b39ddb"
                  : "1px solid transparent",
              transition: "background 0.16s, color 0.16s, border-left 0.16s"
            }}
          >
            {item.label}
          </Link>
        ))}
        <div style={{flex: 1}} />
      </nav>
    </>
  );
}
