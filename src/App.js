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
import "../src/css/color.css";
import "../src/css/global.css";
import "../src/css/map.css";
import "../src/css/legend.css";
import "../src/css/dialog.css";
import "../src/css/dashboard.css";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterMain from './pages/RouterMain';
import CustomDrawer from "./layout/CustomDrawer";
import Theme from "./Theme";
import { CssBaseline } from "@mui/material";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function App() {
 
  return (
    <BrowserRouter>
      <Theme>
        <CssBaseline />
        <CustomDrawer />
        <RouterMain />
      </Theme>
    </BrowserRouter>
  );
}
