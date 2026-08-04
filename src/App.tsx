import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import NotificationToast from "./components/dashboard/NotificationToast";

import AppRoutes from "./routes/AppRoutes";
import { useIntelligence } from "./context/IntelligenceContext";

function App() {
  const { showToast } = useIntelligence();

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
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "32px",
            overflowY: "auto",
          }}
        >
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;