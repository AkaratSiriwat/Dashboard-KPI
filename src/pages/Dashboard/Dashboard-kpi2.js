import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Global Style
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

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 30px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255,255,255,0.2);
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(102,126,234,0.3);
  .stat-number {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  height: 400px;
  margin-top: 20px;
`;

const DiseaseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DiseaseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #f8f9fa, #e9ecef);
  border-radius: 10px;
  border-left: 4px solid #667eea;
  transition: all 0.3s;
  &:hover {
    background: linear-gradient(90deg, #e3f2fd, #bbdefb);
    transform: translateX(5px);
  }
  .disease-rank {
    background: #667eea;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .disease-name {
    flex: 1;
    margin: 0 15px;
    font-weight: 500;
    color: #2c3e50;
  }
  .disease-count {
    background: #764ba2;
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const HerbalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 15px;
`;

const HerbalItem = styled.div`
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(76,175,80,0.3);
  transition: transform 0.3s;
  &:hover { transform: scale(1.05);}
  .herbal-name {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .herbal-usage {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  background: #eee8ff;
  padding: 28px 20px 24px;
  border-radius: 20px;
  margin-bottom: 32px;
  box-shadow: 0 3px 16px #b8b5e7;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const AgeSliderWrap = styled.div`
  min-width: 260px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.9rem;
`;

const UpdateTime = styled.div`
  text-align: center;
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  margin-top: 20px;
`;

const AgeValue = styled.span`
  margin-top: 5px;
  font-size: 0.95rem;
  color: #764ba2;
  font-weight: bold;
`;

const HOSPITALS = [
  { name: "รพ.สต.สำราญ", target: 2500, screened: 2180, risk: 87 },
  { name: "รพ.สต.บ้านโคก", target: 1800, screened: 1584, risk: 63 },
  { name: "รพ.สต.บ้านหนองนาดี", target: 2200, screened: 1870, risk: 74 },
  { name: "รพ.สต.โคกสี", target: 1500, screened: 1365, risk: 51 },
  { name: "รพ.สต.บ้านหนองบัวดีหมี", target: 3000, screened: 2520, risk: 101 },
  { name: "รพ.สต.ท่าพระ", target: 1900, screened: 1501, risk: 67 },
  { name: "รพ.สต.บ้านทุ่ม", target: 2100, screened: 1701, risk: 71 },
  { name: "รพ.สต.บ้านดอนบม", target: 1600, screened: 1392, risk: 55 },
  { name: "รพ.สต.บ้านผือ", target: 2400, screened: 2064, risk: 82 },
  { name: "รพ.สต.พระลับ", target: 1700, screened: 1343, risk: 49 },
  { name: "รพ.สต.สาวะถี", target: 2000, screened: 1720, risk: 76 },
  { name: "รพ.สต.บ้านโนนรัง", target: 2300, screened: 1955, risk: 89 },
  { name: "รพ.สต.บ้านหว้า", target: 2500, screened: 2180, risk: 87 },
  { name: "รพ.สต.บ้านค้อ", target: 1800, screened: 1584, risk: 63 },
  { name: "รพ.สต.บ้านซำจาน", target: 2200, screened: 1870, risk: 74 },
  { name: "รพ.สต.โนนสะอาด", target: 1500, screened: 1365, risk: 51 },
  { name: "รพ.สต.ดงเมืองแอม", target: 3000, screened: 2520, risk: 101 },
  { name: "รพ.สต.บ้านไผ่", target: 1900, screened: 1501, risk: 67 },
  { name: "รพ.สต.บ้านท่าขาม", target: 2100, screened: 1701, risk: 71 },
  { name: "รพ.สต.ไชยสอ", target: 1600, screened: 1392, risk: 55 },
  { name: "รพ.สต.บ้านเหล่านาดี", target: 2400, screened: 2064, risk: 82 },
  { name: "รพ.สต.บ้านโคก", target: 1700, screened: 1343, risk: 49 },
  { name: "รพ.สต.บ้านโนนสวรรค์", target: 2000, screened: 1720, risk: 76 },
  { name: "รพ.สต.บ้านเป็ด", target: 2300, screened: 1955, risk: 89 },
  { name: "รพ.สต.สำราญ", target: 2500, screened: 2180, risk: 87 },
  { name: "รพ.สต.บ้านโคก", target: 1800, screened: 1584, risk: 63 },
  { name: "รพ.สต.หนองบัว", target: 2200, screened: 1870, risk: 74 },
  { name: "รพ.สต.โคกสี", target: 1500, screened: 1365, risk: 51 },
  { name: "รพ.สต.บ้านหนองบัวดีหมี", target: 3000, screened: 2520, risk: 101 },
  { name: "รพ.สต.ท่าพระ", target: 1900, screened: 1501, risk: 67 },
  { name: "รพ.สต.บ้านทุ่ม", target: 2100, screened: 1701, risk: 71 },
  { name: "รพ.สต.บ้านดอนบม", target: 1600, screened: 1392, risk: 55 },
  { name: "รพ.สต.บ้านผือ", target: 2400, screened: 2064, risk: 82 },
  { name: "รพ.สต.พระลับ", target: 1700, screened: 1343, risk: 49 },
  { name: "รพ.สต.สาวะถี", target: 2000, screened: 1720, risk: 76 },
  { name: "รพ.สต.บ้านโนนรัง", target: 2300, screened: 1955, risk: 89 },
  { name: "รพ.สต.บ้านหว้า", target: 2500, screened: 2180, risk: 87 },
  { name: "รพ.สต.บ้านค้อ", target: 1800, screened: 1584, risk: 63 },
  { name: "รพ.สต.บ้านซำจาน", target: 2200, screened: 1870, risk: 74 },
  { name: "รพ.สต.โนนสะอาด", target: 1500, screened: 1365, risk: 51 },
  { name: "รพ.สต.ดงเมืองแอม", target: 3000, screened: 2520, risk: 101 },
  { name: "รพ.สต.บ้านไผ่", target: 1900, screened: 1501, risk: 67 },
  { name: "รพ.สต.บ้านท่าขาม", target: 2100, screened: 1701, risk: 71 },
  { name: "รพ.สต.ไชยสอ", target: 1600, screened: 1392, risk: 55 },
  { name: "รพ.สต.บ้านเหล่านาดี", target: 2400, screened: 2064, risk: 82 },
  { name: "รพ.สต.บ้านโคก", target: 1700, screened: 1343, risk: 49 },
  { name: "รพ.สต.บ้านโนนสวรรค์", target: 2000, screened: 1720, risk: 76 },
  { name: "รพ.สต.บ้านเป็ด", target: 2300, screened: 1955, risk: 89 },
];

function getStatusClass(percentage) {
  if (percentage >= 90) return "excellent";
  if (percentage >= 85) return "good";
  if (percentage >= 80) return "good";
  return "warning";
}
function getStatusIndicator(percentage) {
  if (percentage >= 90) return "status-excellent";
  if (percentage >= 80) return "status-good";
  return "status-warning";
}

function useAnimatedValue(target, duration = 600) {
  const [value, setValue] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    let start = ref.current;
    let diff = target - start;
    if (diff === 0) {
      setValue(target);
      return;
    }
    let startTime = null;
    function animate(ts) {
      if (!startTime) startTime = ts;
      let progress = Math.min((ts - startTime) / duration, 1);
      let next = Math.round(start + diff * progress);
      setValue(next);
      if (progress < 1) requestAnimationFrame(animate);
      else ref.current = target;
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [target, duration]);
  return value;
}

export default function DashboardKPI2() {
    const [hospitals, setHospitals] = useState(HOSPITALS);

  // Stats calculation
  const totalTarget = hospitals.reduce((s, h) => s + h.target, 0);
  const totalScreened = hospitals.reduce((s, h) => s + h.screened, 0);
  const totalRisk = hospitals.reduce((s, h) => s + h.risk, 0);
  const overallPercentage = Math.round((totalScreened / totalTarget) * 100);
  const hospitalsPassed = hospitals.filter(
    (h) => (h.screened / h.target) * 100 >= 80
  ).length;

  // Animated numbers (use hook)
  const animatedScreened = useAnimatedValue(totalScreened);
  const animatedPercentage = useAnimatedValue(overallPercentage);
  const animatedHospitalsPassed = useAnimatedValue(hospitalsPassed);
  const animatedRisk = useAnimatedValue(totalRisk);

  // For Donut chart animation
  const circumference = 2 * Math.PI * 35;
  const donutProgress = (animatedPercentage / 100) * circumference;

  // For Progress bars animation
  const [progress, setProgress] = useState({ target: 0, stretch: 0, excellent: 0 });
  useEffect(() => {
    setTimeout(() => {
      setProgress({
        target: Math.min((overallPercentage / 80) * 100, 100),
        stretch: Math.min((overallPercentage / 85) * 100, 100),
        excellent: Math.min((overallPercentage / 90) * 100, 100),
      });
    }, 400);
  }, [overallPercentage]);

  // Real-time simulation every 30s (เหมือน JS setInterval)
  useEffect(() => {
    const interval = setInterval(() => {
      setHospitals((prev) =>
        prev.map((h) => {
          if (Math.random() < 0.3) {
            const change = Math.floor(Math.random() * 10) - 5;
            let screened = Math.max(0, Math.min(h.target, h.screened + change));
            return { ...h, screened };
          }
          return h;
        })
      );
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
*{margin:0;padding:0;box-sizing:border-box;}
body {
  font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
  background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
  min-height:100vh;
  padding:20px;
}
.container{max-width:1400px;margin:0 auto;}
.header{text-align:center;color:white;margin-bottom:30px;padding:20px;
  background:rgba(255,255,255,0.1);border-radius:15px;backdrop-filter:blur(10px);
  box-shadow:0 8px 32px rgba(31,38,135,0.37);}
.header h1{font-size:2.5em;margin-bottom:10px;text-shadow:2px 2px 4px rgba(0,0,0,0.3);}
.header p{font-size:1.2em;opacity:0.9;}
.stats-overview{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;margin-bottom:30px;}
.stat-card{
  background:rgba(255,255,255,0.95);border-radius:15px;padding:25px;text-align:center;
  box-shadow:0 10px 30px rgba(0,0,0,0.2);transition:transform 0.3s,box-shadow 0.3s;position:relative;overflow:hidden;}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#4CAF50,#81C784);}
.stat-card:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(0,0,0,0.3);}
.stat-value{font-size:2.5em;font-weight:bold;color:#2E7D32;margin-bottom:10px;}
.stat-label{font-size:1.1em;color:#666;margin-bottom:5px;}
.stat-description{font-size:0.9em;color:#888;}
.main-content{display:grid;grid-template-columns:2fr 1fr;gap:30px;margin-bottom:30px;}
.chart-section{background:rgba(255,255,255,0.95);border-radius:15px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
.chart-title{font-size:1.5em;color:#333;margin-bottom:20px;text-align:center;}
.progress-section{background:rgba(255,255,255,0.95);border-radius:15px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
.progress-title{font-size:1.3em;color:#333;margin-bottom:20px;text-align:center;}
.progress-item{margin-bottom:25px;}
.progress-label{display:flex;justify-content:space-between;margin-bottom:8px;font-weight:500;}
.progress-bar{height:12px;background:#E0E0E0;border-radius:6px;overflow:hidden;position:relative;}
.progress-fill{height:100%;border-radius:6px;transition:width 1.5s ease-in-out;position:relative;}
.progress-fill.excellent{background:linear-gradient(90deg,#4CAF50,#81C784);}
.progress-fill.good{background:linear-gradient(90deg,#FF9800,#FFB74D);}
.progress-fill.warning{background:linear-gradient(90deg,#F44336,#EF5350);}
.hospitals-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;}
.hospital-card{background:rgba(255,255,255,0.95);border-radius:15px;padding:25px;box-shadow:0 8px 25px rgba(0,0,0,0.15);transition:transform 0.3s;}
.hospital-card:hover{transform:translateY(-3px);}
.hospital-name{font-size:1.2em;font-weight:bold;color:#333;margin-bottom:15px;}
.hospital-stats{display:flex;justify-content:space-between;margin-bottom:10px;}
.chart-container{position:relative;height:400px;display:flex;align-items:center;justify-content:center;}
.donut-chart{position:relative;width:300px;height:300px;}
.donut-chart svg{width:100%;height:100%;transform:rotate(-90deg);}
.donut-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}
.donut-percentage{font-size:2.5em;font-weight:bold;color:#2E7D32;}
.donut-label{font-size:1em;color:#666;margin-top:5px;}
.legend{display:flex;justify-content:center;gap:30px;margin-top:20px;}
.legend-item{display:flex;align-items:center;gap:8px;}
.legend-color{width:16px;height:16px;border-radius:3px;}
.status-indicator{display:inline-block;width:12px;height:12px;border-radius:50%;margin-left:10px;}
.status-excellent{background:#4CAF50;}
.status-good{background:#FF9800;}
.status-warning{background:#F44336;}
@keyframes fadeInUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
.animate-fade-in{animation:fadeInUp 0.8s;}
@media (max-width:768px){
  .main-content{grid-template-columns:1fr;}
  .header h1{font-size:2em;}
  .stat-value{font-size:2em;}
}
          `,
        }}
      />

      <Container>
        <Header>
          <h1>📊 Dashboard ตัวชี้วัดการคัดกรองเบาหวานรพ.สต.ขอนแก่น</h1>
          <h2>เป้าหมาย ≥ 80%</h2>
        </Header>
        <div className="stats-overview">
          <div className="stat-card animate-fade-in">
            <div className="stat-value">{animatedScreened.toLocaleString()}</div>
            <div className="stat-label">ผู้ได้รับการคัดกรองทั้งหมด</div>
            <div className="stat-description">จากกลุ่มเป้าหมาย</div>
          </div>
          <div className="stat-card animate-fade-in">
            <div className="stat-value">{animatedPercentage}%</div>
            <div className="stat-label">ร้อยละความครอบคลุม</div>
            <div className="stat-description">เฉลี่ยทั้งอำเภอ</div>
          </div>
          <div className="stat-card animate-fade-in">
            <div className="stat-value">{animatedHospitalsPassed}</div>
            <div className="stat-label">รพ.สต. ผ่านเกณฑ์</div>
            <div className="stat-description">
              จากทั้งหมด {248} แห่ง
            </div>
          </div>
          <div className="stat-card animate-fade-in">
            <div className="stat-value">{animatedRisk.toLocaleString()}</div>
            <div className="stat-label">พบความเสี่ยง</div>
            <div className="stat-description">ส่งต่อรักษา</div>
          </div>
        </div>

        <div className="main-content">
          <div className="chart-section animate-fade-in">
            <h2 className="chart-title">ภาพรวมการคัดกรองทั้งอำเภอ</h2>
            <div className="chart-container">
              <div className="donut-chart">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#E0E0E0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    strokeDasharray={`${donutProgress} ${circumference}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dasharray 1s" }}
                  />
                </svg>
                <div className="donut-center">
                  <div className="donut-percentage">{animatedPercentage}%</div>
                  <div className="donut-label">ความครอบคลุม</div>
                </div>
              </div>
            </div>
            {/* <div className="legend">
              <div className="legend-item">
                <div className="legend-color" style={{ background: "#4CAF50" }}></div>
                <span>ได้รับการคัดกรอง</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: "#E0E0E0" }}></div>
                <span>ยังไม่ได้รับการคัดกรอง</span>
              </div>
            </div> */}
          </div>
          <div className="progress-section animate-fade-in">
            <h2 className="progress-title">สถานะตามเป้าหมาย</h2>
            <div className="progress-item">
              <div className="progress-label">
                <span>เป้าหมาย 80%</span>
                <span>
                  {overallPercentage >= 80 ? "✅ ผ่าน" : "❌ ไม่ผ่าน"}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill excellent"
                  style={{ width: `${progress.target}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>เป้าหมาย 85%</span>
                <span>
                  {overallPercentage >= 85 ? "✅ ผ่าน" : "❌ ไม่ผ่าน"}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill good"
                  style={{ width: `${progress.stretch}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>เป้าหมาย 90%</span>
                <span>
                  {overallPercentage >= 90 ? "✅ ผ่าน" : "❌ ไม่ผ่าน"}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill warning"
                  style={{ width: `${progress.excellent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-section animate-fade-in">
          <h2 className="chart-title">รายละเอียดตาม รพ.สต.</h2>
          <div className="hospitals-grid">
            {hospitals.map((h, i) => {
              const percentage = Math.round((h.screened / h.target) * 100);
              const statusClass = getStatusClass(percentage);
              const statusIndicator = getStatusIndicator(percentage);
              return (
                <div
                  className="hospital-card"
                  key={h.name}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationName: "fadeInUp",
                    animationDuration: "0.8s",
                  }}
                >
                  <div className="hospital-name">
                    {h.name}
                    <span className={`status-indicator ${statusIndicator}`}></span>
                  </div>
                  <div className="hospital-stats">
                    <span>เป้าหมาย: {h.target.toLocaleString()}</span>
                    <span>คัดกรอง: {h.screened.toLocaleString()}</span>
                  </div>
                  <div className="hospital-stats">
                    <span>
                      ความครอบคลุม: <strong>{percentage}%</strong>
                    </span>
                    <span>พบความเสี่ยง: {h.risk}</span>
                  </div>
                  <div className="progress-bar" style={{ marginTop: 10 }}>
                    <div
                      className={`progress-fill ${statusClass}`}
                      style={{
                        width: `${percentage}%`,
                        transitionDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
