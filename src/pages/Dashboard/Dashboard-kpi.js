import { Slider } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import styled, { createGlobalStyle } from "styled-components";
import { mockData, mockData2, HOSPITALS } from '../../mock/mockupKPI1';
import logo_kk_อบจ from "../../untils/image/logo_kk_อบจ.jpg";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

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

export default function DashboardKPI() {
  // State for filters
  const [district, setDistrict] = useState("");
  const [timeRange, setTimeRange] = useState("current");
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [dateStart, setDateStart] = useState(dayjs('2025-05-01'));
  const [dateEnd, setDateEnd] = useState(dayjs('2025-05-31'));
  const [cleared, setCleared] = useState(false);

  // State for stats (simulate "updating" values)
  const [population, setPopulation] = useState(125847);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedHospital, setSelectedHospital] = useState('');

const getFilteredData = (district, timeRange, age) => {
  let data = mockData;
  let data2 = mockData2;
  const pop = { ...data.population };
 pop.ageGroups = pop.ageGroups.filter((group) => {
    let minAge, maxAge;
    if (group.age.includes("+")) {
      minAge = parseInt(group.age);
      maxAge = 200; // กำหนด max ไปเลย ให้เกินช่วง slider
    } else {
      [minAge, maxAge] = group.age.split("-").map(Number);
    }
    // ถ้าช่วงอายุของกลุ่มมันซ้อนกับที่เราเลือก ให้เอา
    return !(maxAge < ageRange[0] || minAge > ageRange[1]);
  });
  let adjust = 1;
  if (timeRange === "month") adjust = 0.96;
  if (timeRange === "quarter") adjust = 0.93;

  pop.male = Math.round(pop.male * adjust);
  pop.female = Math.round(pop.female * adjust);
  pop.avgAge = pop.avgAge;

  // <<<< MOCK DISEASES BY AGE >>>>
  let diseases;
  if (age < 16) {
    diseases = [
      { name: "ความดันโลหิตสูง", count: Math.round(1900 * adjust) },
      { name: "เบาหวาน", count: Math.round(1200 * adjust) },
      { name: "หวัด", count: Math.round(700 * adjust) },
      { name: "โรคมือเท้าปาก", count: Math.round(650 * adjust) },
      { name: "ไข้เลือดออก", count: Math.round(400 * adjust) },
      { name: "โรคเชื้อรา", count: Math.round(360 * adjust) },
      { name: "ไข้หวัดใหญ่", count: Math.round(320 * adjust) },
      { name: "ไข้เลือดออก", count: Math.round(200 * adjust) },
      { name: "อุบัติเหตุเล็กน้อย", count: Math.round(170 * adjust) },
      { name: "ผิวหนังอักเสบ", count: Math.round(100 * adjust) }
    ];
  } else if (age < 40) {
    diseases = [
      { name: "ไข้หวัดใหญ่", count: Math.round(1600 * adjust) },
      { name: "ไมเกรน", count: Math.round(1400 * adjust) },
      { name: "เบาหวาน", count: Math.round(1100 * adjust) },
      { name: "ซึมเศร้า", count: Math.round(1000 * adjust) },
      { name: "ปวดท้องประจำเดือน", count: Math.round(950 * adjust) },
      { name: "โรคกระเพาะ", count: Math.round(900 * adjust) },
      { name: "ไขมันในเลือดสูง", count: Math.round(830 * adjust) },
      { name: "ภูมิแพ้", count: Math.round(740 * adjust) },
      { name: "กรดไหลย้อน", count: Math.round(530 * adjust) },
      { name: "โรคตาแดง", count: Math.round(250 * adjust) }
    ];
  } else {
    diseases = data.diseases.map(d => ({
      ...d,
      count: Math.round(d.count * adjust)
    }));
  }

  const chronicDiseases = data.chronicDiseases.map(d => ({
    ...d, value: +(d.value * adjust).toFixed(1)
  }));
  const herbalMedicine = data.herbalMedicine.map(h => ({
    ...h, usage: Math.round(h.usage * adjust)
  }));

  pop.total = pop.male + pop.female;

  return { population: pop, diseases, chronicDiseases, herbalMedicine };
};


  const filteredData = getFilteredData(district, timeRange, ageRange);
  const reversedAgeGroups = filteredData.population.ageGroups.slice().reverse();

const populationPyramidData = {
  labels: reversedAgeGroups.map((group) => group.age),
  datasets: [
    {
      label: "ชาย",
      data: reversedAgeGroups.map((group) => -group.male),
      backgroundColor: "rgba(54, 162, 235, 0.8)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1
    },
    {
      label: "หญิง",
      data: reversedAgeGroups.map((group) => group.female),
      backgroundColor: "rgba(255, 99, 132, 0.8)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1
    }
  ]
};


  const populationPyramidOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        position: "top"
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            context.dataset.label +
            ": " +
            Math.abs(context.raw).toLocaleString()
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return Math.abs(value).toLocaleString();
          }
        }
      }
    }
  };

  const chronicDiseaseData = {
    labels: mockData.chronicDiseases.map((d) => d.name),
    datasets: [
      {
        data: mockData.chronicDiseases.map((d) => d.value),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#ffc83dff",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40"
        ],
        borderWidth: 2,
        borderColor: "#fff"
      }
    ]
  };

const chronicDiseaseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 16
        }
      }
    },
    tooltip: {
      bodyFont: {
        size: 16
      },
      titleFont: {
        size: 18
      },
      callbacks: {
        label: function (context) {
          return context.label + ": " + context.parsed + "%";
        }
      }
    },
    datalabels: {
      color: '#fff',
      font: {
        size: 16,
        weight: 'bold'
      },
      formatter: (value) => value + "%"
    }
  }
};

  const herbalBarData = {
    labels: mockData.herbalMedicine.map((h) => h.name),
    datasets: [
      {
        label: "จำนวนผู้ใช้",
        data: mockData.herbalMedicine.map((h) => h.usage),
        backgroundColor: "rgba(76, 175, 80, 0.8)",
        borderColor: "rgba(76, 175, 80, 1)",
        borderWidth: 1
      }
    ]
  };

  const herbalBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
      x: { ticks: { maxRotation: 45 } }
    }
  };

  // Time update
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Simulate dashboard update (as in original script)
  const handleUpdate = () => {
    // Random +/- 10% fluctuation for effect
    const variance = (Math.random() - 0.5) * 0.2;
    setPopulation(Math.floor(125847 * (1 + variance)));
    setLastUpdate(new Date());
  };

  // Handle slider change for age
  const handleAgeChange = (e) => {
    setAgeRange(Number(e.target.value));
    handleUpdate();
  };

  // Handle filter change
const handleDistrictChange = (e) => {
  setDistrict(e.target.value);
  handleUpdate(); // อันนี้ตามที่โค้ดคุณมีอยู่
};

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
    handleUpdate();
  };

  // Format Thai datetime
  const formatThaiDate = (date) =>
    date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Bangkok"
    });

const rightsData = [
  { label: "สิทธิหลักประกันสุขภาพถ้วนหน้า (UCS)", count: 97482 },
  { label: "สิทธิประกันสังคม (SSO)", count: 48279 },
  { label: "สิทธิสวัสดิการพนักงานส่วนท้องถิ่น (LGO)", count: 19867 },
  { label: "สิทธิหลักประกันสุขภาพแห่งชาติ (WEL)", count: 9486 },
  { label: "สิทธิข้าราชการ (OFC)", count: 4879 },
  { label: "อื่นๆ", count: 14096 },
];

const pastelColors = [
  "#FF9F40",
  "#FF4B71",
  "#059BFF",
  "#ffc83dff",
  "#4BC0C0",
  "#9966FF",
];

const rightsDoughnutData = {
  labels: ["UCS", "SSO", "LGO", "WEL", "OFC", "อื่นๆ"],
  datasets: [
    {
      data: [97482, 28409, 14397, 9486, 4879, 14096], // mockup จำนวน
      backgroundColor: pastelColors,
      borderWidth: 3,
      borderColor: "#fff"
    }
  ]
};

const rightsDoughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 16
        }
      }
    },
    tooltip: {
      bodyFont: {
        size: 16
      },
      titleFont: {
        size: 18
      },
      callbacks: {
        label: function(context) {
          const value = context.parsed;
          return `${context.label}: ${value.toLocaleString()} ครั้ง`;
        }
      }
    },
    datalabels: {
      color: '#fff',
      font: {
        size: 16,
        weight: 'bold'
      },
      formatter: (value) => value.toLocaleString()
    }
  }
};

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>
            <img src={logo_kk_อบจ} width={50} height="auto" sx={{marginTop:30}}></img>
            &nbsp;&nbsp;รายงานบริการสาธารณสุขปฐมภูมิ จังหวัดขอนแก่น</h1>
        </Header>
          <FilterSection>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <FormControl sx={{ minWidth: 180 }}>
                  <InputLabel id="district-select-label">เลือก อำเภอ</InputLabel>
                  <Select
                    labelId="district-select-label"
                    value={district}
                    label="เลือกอำเภอ"
                    onChange={handleDistrictChange}
                  >
                    <MenuItem value="">
                      <em>อำเภอทั้งหมด</em>
                    </MenuItem>
                    {mockData2.map((amphur) => (
                      <MenuItem key={amphur.id} value={amphur.name}>
                        {amphur.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{ minWidth: 180 }}>
                  <InputLabel id="hospital-select-label">เลือก รพ.สต.</InputLabel>
                  <Select
                    labelId="hospital-select-label"
                    value={selectedHospital}
                    label="เลือกรพ.สต."
                    onChange={e => setSelectedHospital(e.target.value)}
                  >
                    <MenuItem value=""><em>รพ.สต.ทุกแห่ง</em></MenuItem>
                    {HOSPITALS.map((el, i) => (
                      <MenuItem key={i} value={el.value ?? el}>{el.label ?? el}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{ minWidth: 155 }} size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dateStart}
                      slotProps={{
                        field: {
                          clearable: true,
                          onClear: () => setCleared(true),
                        },
                      }}
                      label="วันที่เริ่มต้น"
                      format="DD/MM/YYYY"
                      onChange={(e) => setDateStart(e)}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{ minWidth: 155 }} size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dateEnd}
                      slotProps={{
                        field: {
                          clearable: true,
                          onClear: () => setCleared(true),
                        },
                      }}
                      label="วันที่สิ้นสุด"
                      format="DD/MM/YYYY"
                      onChange={(e) => setDateEnd(e)}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
            </Grid>
          </FilterSection>
        <DashboardGrid>
          <Card>
            <CardTitle>📊 ข้อมูลประชากร</CardTitle>
              <StatsGrid>
                <StatItem>
                  <div className="stat-number">
                    {filteredData.population.male + filteredData.population.female
                      ? (filteredData.population.male + filteredData.population.female).toLocaleString()
                      : 0}
                  </div>
                  <div className="stat-label">ประชากรทั้งหมด</div>
                </StatItem>
                <StatItem>
                  <div className="stat-number">
                    {filteredData.population.male.toLocaleString()}
                  </div>
                  <div className="stat-label">ชาย</div>
                </StatItem>
                <StatItem>
                  <div className="stat-number">
                    {filteredData.population.female.toLocaleString()}
                  </div>
                  <div className="stat-label">หญิง</div>
                </StatItem>
                <StatItem>
                  <div className="stat-number">
                    {filteredData.population.avgAge}
                  </div>
                  <div className="stat-label">อายุเฉลี่ย (ปี)</div>
                </StatItem>
              </StatsGrid>
            <ChartContainer>
              <Bar data={populationPyramidData} options={populationPyramidOptions} />
            </ChartContainer>
            <Grid item sx={{ minWidth: 210 }}>
              <AgeSliderWrap>
                <label style={{ marginBottom: 8, fontWeight: 500 }}>ช่วงอายุ</label>
                <Slider
                  value={ageRange}
                  min={0}
                  max={120}
                  onChange={(e, newValue) => setAgeRange(newValue)}
                  valueLabelDisplay="auto"
                  disableSwap
                  sx={{
                    width: "100%",
                    color: "#764ba2",
                  }}
                />
                <AgeValue>
                  {ageRange[0]} - {ageRange[1]} ปี
                </AgeValue>
              </AgeSliderWrap>
            </Grid>
          </Card>

        <Card>
          <CardTitle>สิทธิการรักษาพยาบาลของผู้มารับบริการ</CardTitle>
          <ChartContainer>
            <Doughnut data={rightsDoughnutData} options={rightsDoughnutOptions} />
          </ChartContainer>
          <StatsGrid>
            {rightsData.map((d, i) => (
              <StatItem key={d.label} style={{ background: rightsDoughnutData.datasets[0].backgroundColor[i], color: "#fff" }}>
                <div className="stat-number">{d.count.toLocaleString()} <span style={{fontSize:13, fontWeight:"normal"}}>ครั้ง</span></div>
                <div className="stat-label">{d.label}</div>
              </StatItem>
            ))}
          </StatsGrid>
        </Card>
          <Card>
            <CardTitle>⚕️ โรคเรื้อรัง</CardTitle>
            <ChartContainer>
              <Doughnut data={chronicDiseaseData} options={chronicDiseaseOptions} />
            </ChartContainer>
          </Card>

          <Card>
            <CardTitle>🔍 สาเหตุการรับบริการในรพ.สต. 10 ลำดับแรก</CardTitle>
            <DiseaseList>
              {filteredData.diseases.length === 0 ? (
                <DiseaseItem>
                  <div className="disease-name" style={{ width: "100%", textAlign: "center" }}>
                    ไม่พบข้อมูล
                  </div>
                </DiseaseItem>
              ) : (
                filteredData.diseases
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 10)
                  .map((disease, idx) => (
                    <DiseaseItem key={idx}>
                      <div className="disease-rank">{idx + 1}</div>
                      <div className="disease-name">{disease.name}</div>
                      <div className="disease-count">{disease.count.toLocaleString()}</div>
                    </DiseaseItem>
                  ))
              )}
            </DiseaseList>
          </Card>

        </DashboardGrid>

        <UpdateTime>
          อัปเดตล่าสุด: <span>{formatThaiDate(lastUpdate)}</span>
        </UpdateTime>
      </Container>
    </>
  );
}