import "leaflet/dist/leaflet.css";

import {
  Box,
  Typography,
} from "@mui/material";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import SectionCard from "../common/SectionCard";
import { useIntelligence } from "../../context/IntelligenceContext";
import type { StateRisk } from "../../data/stateRiskData";

export default function NigeriaRiskMap() {
  const { stateRisks } = useIntelligence();

  return (
    <SectionCard sx={{ mt: 3 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          🗺️ Nigeria Risk Map
        </Typography>

        <Box sx={{ height: 500, width: "100%", borderRadius: 2, overflow: "hidden" }}>
          <MapContainer
            center={[9.082, 8.6753]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="© OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stateRisks.map((state: StateRisk) => (
              <CircleMarker
                key={state.name}
                center={state.position as [number, number]}
                radius={12}
                pathOptions={{
                  color:
                    state.risk === "HIGH"
                      ? "#EF4444"
                      : state.risk === "MEDIUM"
                      ? "#F59E0B"
                      : "#22C55E",
                  fillColor:
                    state.risk === "HIGH"
                      ? "#EF4444"
                      : state.risk === "MEDIUM"
                      ? "#F59E0B"
                      : "#22C55E",
                  fillOpacity: 0.8,
                }}
              >
                <Popup>
                  <strong>{state.name}</strong>
                  <br />
                  Risk: {state.risk}
                  <br />
                  <br />
                  Claims: {state.claims}
                  <br />
                  Alerts: {state.alerts}
                  <br />
                  Narratives: {state.narratives}
                  <br />
                  Updated: {state.updated}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </Box>
      </Box>
    </SectionCard>
  );
}