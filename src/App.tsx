import NotificationToast from "./components/dashboard/NotificationToast";
import { dashboardData } from "./data/dashboardData";
import { stateRiskData } from "./data/stateRiskData";
import { useState } from "react";
import Header from "./components/layout/Header";
import AlertFeed from "./components/dashboard/AlertFeed";
import Sidebar from "./components/layout/Sidebar";
// import Footer from "./components/layout/Footer";
import DashboardGrid from "./components/dashboard/DashboardGrid";
import SummaryPanel from "./components/dashboard/SummaryPanel";
import ThreatBanner from "./components/dashboard/ThreatBanner";
import TrendChart from "./components/charts/TrendChart";
import NigeriaRiskMap from "./components/maps/NigeriaRiskMap";
import { alertData } from "./data/alertData";
function App() {
  const [threatLevel, setThreatLevel] = useState(
  dashboardData.threatLevel
);
const [claimsToday, setClaimsToday] = useState(
  dashboardData.claimsToday
);

const [activeAlerts, setActiveAlerts] = useState(
  dashboardData.activeAlerts
);

const [narratives, setNarratives] = useState(
  dashboardData.narratives
);
const [alerts, setAlerts] = useState(alertData);
const [showToast, setShowToast] = useState(false);
const [stateRisks, setStateRisks] = useState(stateRiskData);
function simulateNewIntelligence() {
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);

  setThreatLevel("HIGH");
  setClaimsToday(214);
  setActiveAlerts(18);
  setNarratives(11);
 setStateRisks([
  {
    name: "Kano",
    position: [12.0022, 8.592],
    risk: "HIGH",
    claims: 42,
    alerts: 5,
    narratives: 3,
    updated: "Just now",
  },
  {
    name: "Lagos",
    position: [6.5244, 3.3792],
    risk: "MEDIUM",
    claims: 24,
    alerts: 3,
    narratives: 2,
    updated: "Just now",
  },
  {
    name: "Abuja",
    position: [9.0765, 7.3986],
    risk: "LOW",
    claims: 12,
    alerts: 1,
    narratives: 1,
    updated: "Just now",
  },
  {
    name: "Kaduna",
    position: [10.5105, 7.4165],
    risk: "HIGH",
    claims: 36,
    alerts: 4,
    narratives: 3,
    updated: "Just now",
  },
]);

  setAlerts([
    {
      severity: "CRITICAL",
      message: "Counterfeit skin-lightening cream spreading in Kano markets",
      time: "Just now",
    },
    {
      severity: "HIGH",
      message: "Lead detected in imported cosmetics",
      time: "1 min ago",
    },
    {
      severity: "HIGH",
      message: "Unsafe turmeric products identified in informal markets",
      time: "2 mins ago",
    },
    {
      severity: "MEDIUM",
      message:
        "Misinformation linking aluminium pots to lead poisoning is trending",
      time: "5 mins ago",
    },
  ]);
}
  return (
    <div
      style={{
        background: "#0F172A",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <NotificationToast visible={showToast} />
      <Header />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <main
  style={{
    flex: 1,
    padding: "30px",
  }}
>
 <h2
  style={{
    color: "white",
    marginBottom: "10px",
  }}
>
  Health Sentinel Dashboard
</h2>

  
  <div
  style={{
    marginBottom: "20px",
  }}
>
  <button
  onClick={simulateNewIntelligence}
  style={{
    background: "#2563EB",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Simulate New Intelligence
</button>
</div>
<ThreatBanner
  threatLevel={threatLevel}
  setThreatLevel={setThreatLevel}
/>
<AlertFeed alerts={alerts} />
  <DashboardGrid
  threatLevel={threatLevel}
  claimsToday={claimsToday}
  activeAlerts={activeAlerts}
  narratives={narratives}
/>
<TrendChart />
<NigeriaRiskMap stateRisks={stateRisks} />
  <SummaryPanel threatLevel={threatLevel} />
</main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;