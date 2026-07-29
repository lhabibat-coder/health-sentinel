export function getRiskColor(risk: string): string {
  switch (risk.toUpperCase()) {
    case "HIGH":
      return "#EF4444"; // Red

    case "MEDIUM":
      return "#F59E0B"; // Orange

    case "LOW":
      return "#22C55E"; // Green

    default:
      return "#64748B"; // Gray
  }
}