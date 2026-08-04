import {
  ShieldAlert,
  Syringe,
  Baby,
  HeartPulse,
  Bug,
  Brain,
  Leaf,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface HealthProgramme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  icon: LucideIcon;
  active: boolean;
}

export const healthProgrammes: HealthProgramme[] = [
  {
    id: "all",
    name: "All Programmes",
    shortName: "All",
    description: "National public health intelligence overview",
    color: "#2563EB",
    icon: Activity,
    active: true,
  },
  {
    id: "lead",
    name: "Lead Poisoning",
    shortName: "Lead",
    description:
      "Monitoring lead exposure, contaminated products and environmental risks.",
    color: "#EF4444",
    icon: ShieldAlert,
    active: true,
  },
  {
    id: "immunization",
    name: "Immunization",
    shortName: "Vaccines",
    description:
      "Monitoring vaccine confidence, misinformation and uptake.",
    color: "#2563EB",
    icon: Syringe,
    active: true,
  },
  {
    id: "maternal",
    name: "Maternal Health",
    shortName: "Maternal",
    description:
      "Maternal and newborn health surveillance.",
    color: "#EC4899",
    icon: Baby,
    active: true,
  },
  {
    id: "menopause",
    name: "Menopause",
    shortName: "Menopause",
    description:
      "Monitoring menopause awareness, support and misinformation.",
    color: "#8B5CF6",
    icon: HeartPulse,
    active: true,
  },
  {
    id: "malaria",
    name: "Malaria",
    shortName: "Malaria",
    description:
      "Tracking malaria intelligence and prevention campaigns.",
    color: "#16A34A",
    icon: Bug,
    active: true,
  },
  {
    id: "mental-health",
    name: "Mental Health",
    shortName: "Mental",
    description:
      "Monitoring mental health narratives and support.",
    color: "#06B6D4",
    icon: Brain,
    active: true,
  },
  {
    id: "nutrition",
    name: "Nutrition",
    shortName: "Nutrition",
    description:
      "Monitoring nutrition, food safety and dietary risks.",
    color: "#EAB308",
    icon: Leaf,
    active: true,
  },
];