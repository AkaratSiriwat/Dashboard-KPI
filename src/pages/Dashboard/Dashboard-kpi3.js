import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// ----- GLOBAL STYLE -----
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
  }
`;

// ----- ANIMATION -----
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to   { opacity: 1; transform: translateY(0);}
`;

// ----- STYLED COMPONENTS -----
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 10px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  p {
    color: #7f8c8d;
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
  }
`;

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 25px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.7s;
  &::before {
    content: '';
    position: absolute;
    top:0; left:0; right:0; height:4px;
    background: linear-gradient(90deg,#667eea,#764ba2);
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
  h3 { color: #2c3e50; font-size: 1.3rem; margin-bottom: 15px;}
`;

const Percentage = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({status}) =>
    status === "pass" ? "#27ae60" :
    status === "fail" ? "#e74c3c" :
    status === "borderline" ? "#f39c12" : "#3498db"};
`;

const StatusText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  background: ${({status}) =>
    status === "pass" ? "#d5f4e6" :
    status === "fail" ? "#fdeaea" :
    status === "borderline" ? "#fef9e7" : "#ebf3fd"};
  color: ${({status}) =>
    status === "pass" ? "#27ae60" :
    status === "fail" ? "#e74c3c" :
    status === "borderline" ? "#f39c12" : "#3498db"};
  margin-bottom: 10px;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex; align-items: center; gap: 8px;
  padding: 10px 15px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;
const LegendColor = styled.div`
  width: 20px; height: 20px; border-radius: 50%;
  background: ${({status}) =>
    status === "pass" ? "#27ae60" :
    status === "fail" ? "#e74c3c" :
    "#f39c12"};
`;

const HospitalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
  gap: 25px;
  margin-top: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const HospitalCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s;
  border-left: 5px solid #ddd;
  animation: ${fadeInUp} 0.7s;
  border-left-color: ${({status}) =>
    status === "pass" ? "#27ae60" :
    status === "fail" ? "#e74c3c" :
    "#f39c12"};
  &:hover { transform: translateY(-3px);}
`;

const HospitalName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const ProgressContainer = styled.div`
  position: relative;
  background: #ecf0f1;
  border-radius: 10px;
  height: 20px;
  margin: 15px 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  transition: width 0.8s;
  position: relative;
  background: ${({status}) =>
    status === "pass"
      ? "linear-gradient(90deg, #27ae60, #2ecc71)"
      : status === "fail"
      ? "linear-gradient(90deg, #e74c3c, #c0392b)"
      : "linear-gradient(90deg, #f39c12, #e67e22)"};
  width: ${({width}) => width}%;
  &::after {
    content: '';
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2s infinite;
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%);}
    100% { transform: translateX(100%);}
  }
`;

const ThresholdLine = styled.div`
  position: absolute;
  left: 80%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #34495e;
  z-index: 1;
`;

const ThresholdLine2 = styled.div`
  position: absolute;
  left: 75%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #34495e;
  z-index: 1;
`;

const ThresholdLabel = styled.div`
  position: absolute;
  left: 80%;
  top: -25px;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #34495e;
  font-weight: bold;
`;

const HospitalStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 0.95rem;
  color: #7f8c8d;
`;

const Metric = styled.div`
  text-align: center;
  .metric-value {
    font-size: 1.3rem;
    font-weight: bold;
    color: #2c3e50;
  }
`;

// ---------- MOCK DATA ----------
const hospitalData = [
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลสำราญ", percentage: 69, pregnant: 45, postpartum: 38, total: 83, served: 71 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโคก", percentage: 92, pregnant: 32, postpartum: 28, total: 60, served: 55 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลโคกสี", percentage: 78, pregnant: 28, postpartum: 22, total: 50, served: 39 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองบัวดีหมี", percentage: 88, pregnant: 35, postpartum: 30, total: 65, served: 57 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าพระ", percentage: 65, pregnant: 40, postpartum: 35, total: 75, served: 49 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านทุ่ม", percentage: 76, pregnant: 25, postpartum: 20, total: 45, served: 34 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลเมืองเก่า", percentage: 82, pregnant: 30, postpartum: 25, total: 55, served: 45 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านดอนบม", percentage: 58, pregnant: 35, postpartum: 28, total: 63, served: 37 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านผือ", percentage: 77, pregnant: 22, postpartum: 18, total: 40, served: 31 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลพระลับ", percentage: 75, pregnant: 28, postpartum: 24, total: 52, served: 47 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลสาวะถี", percentage: 72, pregnant: 33, postpartum: 27, total: 60, served: 43 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนรัง", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },  
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหว้า", percentage: 58, pregnant: 45, postpartum: 38, total: 83, served: 71 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านค้อ", percentage: 92, pregnant: 32, postpartum: 28, total: 60, served: 55 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านซำจาน", percentage: 78, pregnant: 28, postpartum: 22, total: 50, served: 39 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลแดงใหญ่", percentage: 88, pregnant: 35, postpartum: 30, total: 65, served: 57 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนช้าง", percentage: 65, pregnant: 40, postpartum: 35, total: 75, served: 49 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลดอนหัน", percentage: 76, pregnant: 25, postpartum: 20, total: 45, served: 34 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านหนองหญ้าแพรก", percentage: 63, pregnant: 30, postpartum: 25, total: 55, served: 45 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านโนนม่วง", percentage: 58, pregnant: 35, postpartum: 28, total: 63, served: 37 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลศิลา", percentage: 77, pregnant: 22, postpartum: 18, total: 40, served: 31 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเป็ด", percentage: 90, pregnant: 28, postpartum: 24, total: 52, served: 47 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองตูม", percentage: 72, pregnant: 33, postpartum: 27, total: 60, served: 43 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบึงเนียม", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนท่อน", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลหนองบัว", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่าหวายนั่ง", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลโนนฆ้อง", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเหล่า", percentage: 49, pregnant: 26, postpartum: 21, total: 47, served: 38 },
  { name: "โรงพยาบาลส่งเสริมสุขภาพตำบลป่ามะนาว", percentage: 81, pregnant: 26, postpartum: 21, total: 47, served: 38 },
];

// ---------- UTILS ----------
function getStatusClass(percentage) {
  if (percentage >= 80) return "pass";
  if (percentage >= 75) return "borderline";
  return "fail";
}
function getStatusText(percentage) {
  if (percentage >= 80) return "ผ่านเกณฑ์";
  if (percentage >= 75) return "พอดีเกณฑ์";
  return "ไม่ผ่านเกณฑ์";
}

// ---------- COMPONENT ----------
export default function DashboardKPI3() {
  // District summary
  const [districtPercent, setDistrictPercent] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredHospitalData = statusFilter === "all"
  ? hospitalData
  : hospitalData.filter(h => getStatusClass(h.percentage) === statusFilter);

  useEffect(() => {
    // คำนวณอัตราภาพรวม
    const totalServed = hospitalData.reduce((sum, h) => sum + h.served, 0);
    const totalPatients = hospitalData.reduce((sum, h) => sum + h.total, 0);
    const percent = Math.round((totalServed / totalPatients) * 100);
    setDistrictPercent(percent);
    setPassCount(hospitalData.filter(h => h.percentage >= 80).length);
  }, []);

  const districtStatus = getStatusClass(districtPercent);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Dashboard การบริการหญิงตั้งครรภ์และหลังคลอดรพ.สต.ขอนแก่น</h1>
          <p>ติดตามร้อยละของหญิงตั้งครรภ์และหญิงหลังคลอดที่ได้รับบริการตามเกณฑ์คุณภาพ</p>
        </Header>

        <SummaryCards>
          <SummaryCard>
            <h3>ภาพรวมอำเภอ</h3>
            <Percentage status={districtStatus}>31.45%</Percentage>
            <StatusText status={districtStatus}>{getStatusText(districtPercent)}</StatusText>
            <p>เกณฑ์มาตรฐาน: 80%</p>
          </SummaryCard>
          <SummaryCard>
            <h3>จำนวน รพ.สต. ทั้งหมด</h3>
            <Percentage style={{color: "#3498db"}}>{248}</Percentage>
            <StatusText status="">หน่วยบริการ</StatusText>
          </SummaryCard>
          <SummaryCard>
            <h3>รพ.สต. ผ่านเกณฑ์</h3>
            <Percentage status="pass">{105}</Percentage>
            <StatusText status="pass">
              42.33% ของทั้งหมด
            </StatusText>
          </SummaryCard>
        </SummaryCards>

        <Legend>
          <LegendItem
            style={{ cursor: "pointer", border: statusFilter === "pass" ? "2px solid #27ae60" : "" }}
            onClick={() => setStatusFilter("pass")}
          >
            <LegendColor status="pass" />
            <span>ผ่านเกณฑ์ (≥80%)</span>
          </LegendItem>
          <LegendItem
            style={{ cursor: "pointer", border: statusFilter === "borderline" ? "2px solid #f39c12" : "" }}
            onClick={() => setStatusFilter("borderline")}
          >
            <LegendColor status="borderline" />
            <span>พอดีเกณฑ์ (75-79%)</span>
          </LegendItem>
          <LegendItem
            style={{ cursor: "pointer", border: statusFilter === "fail" ? "2px solid #e74c3c" : "" }}
            onClick={() => setStatusFilter("fail")}
          >
            <LegendColor status="fail" />
            <span>ไม่ผ่านเกณฑ์ (&lt;75%)</span>
          </LegendItem>
          <LegendItem
            style={{ cursor: "pointer", border: statusFilter === "all" ? "2px solid #8884d8" : "" }}
            onClick={() => setStatusFilter("all")}
          >
            <LegendColor status="" style={{ background: "#8884d8" }} />
            <span>แสดงทั้งหมด</span>
          </LegendItem>
        </Legend>

        <HospitalGrid>
          {filteredHospitalData.map((h, idx) => {
            const status = getStatusClass(h.percentage);
            return (
              <HospitalCard key={h.name + idx} status={status} style={{ animationDelay: `${idx * 0.08}s` }}>
                <HospitalName>{h.name}</HospitalName>
                <Percentage status={status}>{h.percentage}%</Percentage>
                <StatusText status={status}>{getStatusText(h.percentage)}</StatusText>
                <ProgressContainer>
                  <ThresholdLine />
                  <ThresholdLine2 />
                  <ThresholdLabel>เกณฑ์ 80%</ThresholdLabel>
                  <ProgressBar status={status} width={h.percentage} />
                </ProgressContainer>
                <HospitalStats>
                  <Metric>
                    <div className="metric-value">{h.pregnant}</div>
                    <div>หญิงตั้งครรภ์</div>
                  </Metric>
                  <Metric>
                    <div className="metric-value">{h.postpartum}</div>
                    <div>หญิงหลังคลอด</div>
                  </Metric>
                  <Metric>
                    <div className="metric-value">{h.served}/{h.total}</div>
                    <div>ได้รับบริการ</div>
                  </Metric>
                </HospitalStats>
              </HospitalCard>
            );
          })}
        </HospitalGrid>
        
      </Container>
    </>
  );
}
