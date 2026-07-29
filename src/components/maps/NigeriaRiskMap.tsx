import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import { getRiskColor } from "../../utils/riskColors";


type NigeriaRiskMapProps = {
  stateRisks: {
    name: string;
    position: number[];
    risk: string;
    color: string;
  }[];
};
export default function NigeriaRiskMap({
  stateRisks,
}: NigeriaRiskMapProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        🗺️ Nigeria Risk Map
      </h2>

      <MapContainer
        center={[9.082, 8.6753]}
        zoom={6}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stateRisks.map((state) => (
          <CircleMarker
            key={state.name}
            center={state.position as [number, number]}
            radius={12}
            pathOptions={{
  color: getRiskColor(state.risk),
  fillColor: getRiskColor(state.risk),
  fillOpacity: 0.8,
}}
          >
           <Popup>
  <div style={{ minWidth: "180px" }}>
    <h3 style={{ margin: "0 0 8px 0" }}>{state.name}</h3>

    <p><strong>Risk:</strong> {state.risk}</p>

    <p><strong>Claims:</strong> {state.claims}</p>

    <p><strong>Alerts:</strong> {state.alerts}</p>

    <p><strong>Narratives:</strong> {state.narratives}</p>

    <p><strong>Updated:</strong> {state.updated}</p>
  </div>
</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}