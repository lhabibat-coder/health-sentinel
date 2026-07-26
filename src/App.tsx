import Header from "./components/layout/Header";
import AlertFeed from "./components/dashboard/AlertFeed";
import Sidebar from "./components/layout/Sidebar";
// import Footer from "./components/layout/Footer";
import DashboardGrid from "./components/dashboard/DashboardGrid";
import SummaryPanel from "./components/dashboard/SummaryPanel";
import ThreatBanner from "./components/dashboard/ThreatBanner";
function App() {
  return (
    <div
      style={{
        background: "#0F172A",
        minHeight: "100vh",
        color: "white",
      }}
    >
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
  <h2>Health Sentinel Dashboard</h2>

  <p>
    Nigeria's Public Health Misinformation Intelligence Platform
  </p>
<ThreatBanner />
<AlertFeed />
  <DashboardGrid />
  <SummaryPanel />
</main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;