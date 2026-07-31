import { useIntelligence } from "./context/IntelligenceContext";

import NotificationToast from "./components/dashboard/NotificationToast";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import DashboardGrid from "./components/dashboard/DashboardGrid";
import SummaryPanel from "./components/dashboard/SummaryPanel";
import ThreatBanner from "./components/dashboard/ThreatBanner";
import AlertFeed from "./components/dashboard/AlertFeed";

import TrendChart from "./components/charts/TrendChart";
import NigeriaRiskMap from "./components/maps/NigeriaRiskMap";

function App() {
  const {
    showToast,
    simulateNewIntelligence,
  } = useIntelligence();

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

          <ThreatBanner />
          <AlertFeed />
          <DashboardGrid />
          <TrendChart />
          <NigeriaRiskMap />
          <SummaryPanel />
        </main>
      </div>
    </div>
  );
}

export default App;