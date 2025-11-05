import type { ItemKey } from "./content";

export type Hotspot = {
  key: ItemKey;
  label: string;
  left: number; top: number; w: number; h: number; // percentages
};

export const hotspots: Hotspot[] = [
  { key: "notes", label: "Notes", left: 30.3, top: 33.2, w: 3, h: 6 },
  { key: "clips", label: "Clips", left: 27.7, top: 39.1, w: 3, h: 6 },
  { key: "workvivo", label: "Workvivo", left: 25.8, top: 48.0, w: 4, h: 7 },
  { key: "tasks", label: "Tasks", left: 36.0, top: 16.5, w: 8, h: 10 },
  { key: "docs", label: "Docs", left: 41.0, top: 16.5, w: 8, h: 10 },
  { key: "whiteboard", label: "Whiteboard", left: 46.3, top: 16.5, w: 10, h: 10 },
  { key: "phone", label: "Phone", left: 53.5, top: 30.0, w: 8, h: 10 },
  { key: "teamchat", label: "Team Chat", left: 53.5, top: 38.5, w: 9, h: 11 },
  { key: "meetings", label: "Meetings", left: 53.5, top: 47.0, w: 9, h: 11 },
  { key: "scheduler", label: "Scheduler", left: 53.5, top: 55.3, w: 9, h: 11 },
  { key: "mailcalendar", label: "Mail & Calendar", left: 44.0, top: 68.0, w: 12, h: 12 },
  { key: "workspacereservation", label: "Workspace Reservation", left: 31.0, top: 68.0, w: 12, h: 12 },
  { key: "visitormanagement", label: "Visitor Management", left: 21.6, top: 77.0, w: 12, h: 12 },
  { key: "digitalsignage", label: "Digital Signage", left: 26.5, top: 88.3, w: 12, h: 12 },
  { key: "rooms", label: "Rooms", left: 41.8, top: 78.2, w: 12, h: 12 },
  { key: "events", label: "Events", left: 74.3, top: 23.0, w: 9, h: 11 },
  { key: "sessions", label: "Sessions", left: 79.8, top: 23.0, w: 9, h: 11 },
  { key: "webinars", label: "Webinars", left: 85.3, top: 23.0, w: 9, h: 11 },
  { key: "revenueaccelerator", label: "Revenue Accelerator", left: 89.5, top: 44.5, w: 12, h: 12 },
  { key: "qualitymanagement", label: "Quality Management", left: 89.5, top: 54.5, w: 12, h: 12 },
  { key: "workforce", label: "Workforce Management", left: 89.5, top: 64.5, w: 12, h: 12 },
  { key: "contactcenter", label: "Contact Center", left: 76.0, top: 77.0, w: 12, h: 12 },
  { key: "virtualagent", label: "Virtual Agent", left: 69.5, top: 77.0, w: 12, h: 12 },
  { key: "aistudio", label: "AI Studio", left: 43.5, top: 90.5, w: 8, h: 7 },
  { key: "workflows", label: "Workflows", left: 49.7, top: 90.5, w: 8, h: 7 },
  { key: "apis", label: "APIs", left: 55.8, top: 90.5, w: 7, h: 7 },
  { key: "sdks", label: "SDKs", left: 61.3, top: 90.5, w: 7, h: 7 },
  { key: "apps", label: "Apps", left: 66.7, top: 90.5, w: 7, h: 7 },
  { key: "marketplace", label: "App Marketplace", left: 73.3, top: 90.5, w: 10, h: 7 },
  { key: "microsoft", label: "Microsoft", left: 44.0, top: 96.5, w: 10, h: 6 },
  { key: "google", label: "Google", left: 52.5, top: 96.5, w: 10, h: 6 },
  { key: "salesforce", label: "Salesforce", left: 61.1, top: 96.5, w: 10, h: 6 },
  { key: "atlassian", label: "Atlassian", left: 69.7, top: 96.5, w: 10, h: 6 },
  { key: "servicenow", label: "ServiceNow", left: 78.3, top: 96.5, w: 10, h: 6 }
] as const;

export type { ItemKey };
