import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AISituationRoom from "../pages/AISituationRoom";
import SituationRoom from "../pages/SituationRoom";
import Intelligence from "../pages/Intelligence";
import Reports from "../pages/Reports";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<AISituationRoom />}
      />

      {/* AI Situation Room */}
      <Route
        path="/ai-situation-room"
        element={<AISituationRoom />}
      />

      {/* Classic Situation Room */}
      <Route
        path="/situation-room"
        element={<SituationRoom />}
      />

      {/* Executive Dashboard */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* Intelligence */}
      <Route
        path="/intelligence"
        element={<Intelligence />}
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={<Reports />}
      />

      {/* Analytics */}
      <Route
        path="/analytics"
        element={<Analytics />}
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={<Settings />}
      />

      {/* 404 */}
      <Route
        path="/404"
        element={<NotFound />}
      />

      {/* Catch All */}
      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
    </Routes>
  );
}