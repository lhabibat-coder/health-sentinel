import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { dashboardData } from "../data/dashboardData";
import { alertData } from "../data/alertData";
import { stateRiskData } from "../data/stateRiskData";

type IntelligenceContextType = {simulateNewIntelligence: () => void;showToast: boolean;
setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  threatLevel: string;
  claimsToday: number;
  activeAlerts: number;
  narratives: number;
  alerts: typeof alertData;
  stateRisks: typeof stateRiskData;

  setThreatLevel: React.Dispatch<React.SetStateAction<string>>;
  setClaimsToday: React.Dispatch<React.SetStateAction<number>>;
  setActiveAlerts: React.Dispatch<React.SetStateAction<number>>;
  setNarratives: React.Dispatch<React.SetStateAction<number>>;
  setAlerts: React.Dispatch<React.SetStateAction<typeof alertData>>;
  setStateRisks: React.Dispatch<
    React.SetStateAction<typeof stateRiskData>
  >;
};

const IntelligenceContext =
  createContext<IntelligenceContextType | null>(null);

export function IntelligenceProvider({
  children,
}: {
  children: ReactNode;
}) {
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

  const [stateRisks, setStateRisks] =
    useState(stateRiskData);
    const [showToast, setShowToast] = useState(false);
function simulateNewIntelligence() {
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);

  const levels = ["LOW", "MEDIUM", "HIGH"];
  const risks = ["LOW", "MEDIUM", "HIGH"];

  setThreatLevel(
    levels[Math.floor(Math.random() * levels.length)]
  );

  setClaimsToday(Math.floor(Math.random() * 80) + 180);

  setActiveAlerts(Math.floor(Math.random() * 8) + 15);

  setNarratives(Math.floor(Math.random() * 6) + 8);

  setAlerts([
    {
      severity: "CRITICAL",
      message:
        "Counterfeit skin-lightening cream spreading in Kano markets",
      time: "Just now",
    },
    {
      severity: "HIGH",
      message: "Lead detected in imported cosmetics",
      time: "1 min ago",
    },
    {
      severity: "HIGH",
      message:
        "Unsafe turmeric products identified in informal markets",
      time: "2 mins ago",
    },
    {
      severity: "MEDIUM",
      message:
        "Misinformation linking aluminium pots to lead poisoning is trending",
      time: "5 mins ago",
    },
  ]);

  setStateRisks(
    stateRisks.map((state) => ({
      ...state,
      risk: risks[Math.floor(Math.random() * risks.length)],
      claims: Math.floor(Math.random() * 50) + 10,
      alerts: Math.floor(Math.random() * 6) + 1,
      narratives: Math.floor(Math.random() * 5) + 1,
      updated: "Just now",
    }))
  );
}
  return (
    <IntelligenceContext.Provider
      value={{simulateNewIntelligence,showToast,
setShowToast,
        threatLevel,
        claimsToday,
        activeAlerts,
        narratives,
        alerts,
        stateRisks,

        setThreatLevel,
        setClaimsToday,
        setActiveAlerts,
        setNarratives,
        setAlerts,
        setStateRisks,
      }}
    >
      {children}
    </IntelligenceContext.Provider>
  );
}

export function useIntelligence() {
  const context = useContext(IntelligenceContext);

  if (!context) {
    throw new Error(
      "useIntelligence must be used inside IntelligenceProvider"
    );
  }

  return context;
}