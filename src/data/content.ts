export type ItemData = {
  title: string;
  subtitle: string;
  points: string[];
  image?: string;
};

export const items = {
  notes: {
    title: "Notes",
    subtitle: "Lightweight docs inside Zoom to prep, capture, and follow up.",
    points: [
      "Co-edit agendas and action items during or after meetings.",
      "Keep meeting-linked notes attached to recordings and chats.",
      "Share persistent docs that stay in your Zoom Workplace."
    ]
  },
  clips: {
    title: "Clips",
    subtitle: "Async screen + camera recordings for quick updates.",
    points: [
      "Record explainers instead of scheduling meetings.",
      "Chapters, transcripts, and searchable moments for easy review.",
      "Share links that play in the browser with comments."
    ]
  },
  workvivo: {
    title: "Workvivo",
    subtitle: "Employee experience platform to inform and connect teams.",
    image: "/images/workvivo.png",
    points: [
      "Company newsfeed, communities, and recognition in one place.",
      "Intranet pages for HR and leadership communications.",
      "Analytics on engagement and content reach."
    ]
  },
  tasks: {
    title: "Tasks",
    subtitle: "Task lists connected to meetings and channels.",
    points: [
      "Create tasks from meeting summaries and assign owners.",
      "Track due dates and status inside Zoom Workplace.",
      "Convert AI Companion action items directly into tasks."
    ]
  },
  docs: {
    title: "Docs",
    subtitle: "Structured docs for proposals, handoffs, and plans.",
    points: [
      "Templates for PRDs, briefs, and runbooks.",
      "Real-time co-authoring with permissions and comments.",
      "Link docs to meetings and chats for context."
    ]
  },
  whiteboard: {
    title: "Whiteboard",
    subtitle: "Visual collaboration before, during, and after meetings.",
    points: [
      "Persistent canvases for brainstorming and workshops.",
      "Sticky notes, shapes, and smart connectors.",
      "Collaborate live or asynchronously with share links."
    ]
  },
  phone: {
    title: "Phone",
    subtitle: "Enterprise cloud telephony integrated with Zoom.",
    image: "/images/phone.png",
    points: [
      "Global PSTN with number porting and E911.",
      "Auto attendants, queues, and call recording.",
      "Native integration with meetings and team chat."
    ]
  },
  teamchat: {
    title: "Team Chat",
    subtitle: "Channels and DMs connected to meetings and phone.",
    image: "/images/teamchat.png",
    points: [
      "Persistent channels for projects and departments.",
      "Share files, schedule meetings, and escalate to a call.",
      "AI summaries and catch-up for unread threads."
    ]
  },
  meetings: {
    title: "Meetings",
    subtitle: "HD video meetings with AI assistance.",
    image: "/images/meetings.png",
    points: [
      "One-click join, breakout rooms, and smart recordings.",
      "AI Companion summaries, next steps, and draft emails.",
      "Hardware ecosystem for rooms and personal devices."
    ]
  },
  scheduler: {
    title: "Scheduler",
    subtitle: "Booking links for individuals and teams.",
    image: "/images/scheduler.webp",
    points: [
      "Round-robin, collective, and one-to-one scheduling.",
      "Time zone detection and buffer times.",
      "Automatic Zoom meeting creation and reminders."
    ]
  },
  mailcalendar: {
    title: "Mail & Calendar",
    subtitle: "Privacy-focused email and calendar integrated with Zoom.",
    image: "/images/mailandcalendar.png",
    points: [
      "Unified view with meetings and recordings context.",
      "Calendar booking pages and availability sharing.",
      "Encryption and modern auth."
    ]
  },
  workspacereservation: {
    title: "Workspace Reservation",
    subtitle: "Reserve desks and rooms with interactive floor maps.",
    image: "/images/workspacereservation.png",
    points: [
      "Book spaces from web or kiosks with badge check-in.",
      "Analytics on utilization and traffic patterns.",
      "Rules for neighborhoods and visitor seating."
    ]
  },
  visitormanagement: {
    title: "Visitor Management",
    subtitle: "Modern guest sign-in experiences.",
    image: "/images/visitormanagement.webp",
    points: [
      "Pre-registration, NDA collection, and badge printing.",
      "Hosts auto-notified on visitor arrival.",
      "Compliant logs and configurable flows."
    ]
  },
  digitalsignage: {
    title: "Digital Signage",
    subtitle: "Manage content across displays with no extra hardware.",
    image: "/images/digitalsignage.png",
    points: [
      "Show dashboards, playlists, or room availability.",
      "Target content by location and time windows.",
      "Control across sites from one admin portal."
    ]
  },
  rooms: {
    title: "Rooms",
    subtitle: "Conference, huddle, and classroom systems.",
    image: "/images/rooms.png",
    points: [
      "Appliance and PC-based options with certified hardware.",
      "One-touch join, multi-share, and companion whiteboard.",
      "Room analytics, remote management, and alerts."
    ]
  },
  events: {
    title: "Events",
    subtitle: "Multi-session virtual & hybrid event platform.",
    points: [
      "Registration, ticketing, sponsors, and expo areas.",
      "Backstage production tools and green rooms.",
      "Analytics on attendance and engagement."
    ]
  },
  sessions: {
    title: "Sessions",
    subtitle: "Single-session webinars with production controls.",
    points: [
      "Q&A, polls, resources, and branding.",
      "Practice mode and backstage for presenters.",
      "On-demand access with recording and transcripts."
    ]
  },
  webinars: {
    title: "Webinars",
    subtitle: "Scaled broadcast experiences on Zoom Meetings core.",
    points: [
      "Hundreds to thousands of attendees with robust QoS.",
      "Moderated Q&A and panelist workflows.",
      "Integrations for registration and CRM."
    ]
  },
  revenueaccelerator: {
    title: "Revenue Accelerator",
    subtitle: "AI-powered sales coaching and deal insights.",
    points: [
      "Conversation intelligence and deal risk signals.",
      "Coaching playlists and scorecards for reps.",
      "Pipeline health across calls, emails, and meetings."
    ]
  },
  qualitymanagement: {
    title: "Quality Management",
    subtitle: "Contact center QM and compliance workflows.",
    points: [
      "Interaction recording, evaluation forms, and coaching.",
      "Topic detection and sentiment for audits.",
      "Searchable transcripts with role-based access."
    ]
  },
  workforce: {
    title: "Workforce Management",
    subtitle: "Forecasting and scheduling for contact centers.",
    points: [
      "Predict demand and optimize staffing.",
      "Intraday management with adherence tracking.",
      "Agent self-service for swaps and time off."
    ]
  },
  contactcenter: {
    title: "Contact Center",
    subtitle: "Omnichannel customer service on Zoom.",
    points: [
      "Voice, web chat, SMS, social, and video channels.",
      "Agent desktop integrated with Zoom identity.",
      "Low-code flows with bots and IVR."
    ]
  },
  virtualagent: {
    title: "Virtual Agent",
    subtitle: "AI chatbot for self-service deflection.",
    points: [
      "24/7 automated answers across web and messaging.",
      "Handover to agents with full conversation context.",
      "Analytics on intents and containment."
    ]
  },
  aistudio: {
    title: "AI Studio",
    subtitle: "Build and manage AI skills across Zoom.",
    points: [
      "Create prompts and skills for common workflows.",
      "Ground on enterprise data with controls.",
      "Deploy skills to Meetings, Mail, Chat, and more."
    ]
  },
  workflows: {
    title: "Workflows",
    subtitle: "Automations triggered by events across products.",
    points: [
      "No-code routing for approvals and notifications.",
      "Connect Meetings, Phone, Chat, and external tools.",
      "Use webhooks for advanced scenarios."
    ]
  },
  apis: {
    title: "APIs",
    subtitle: "REST APIs for provisioning and telemetry.",
    points: [
      "Users, meetings, recordings, rooms, and phone endpoints.",
      "OAuth apps with granular scopes.",
      "Webhooks for near-real-time events."
    ]
  },
  sdks: {
    title: "SDKs",
    subtitle: "Embed Zoom experiences in your apps.",
    points: [
      "Video, Chat, and Fully Customizable SDKs.",
      "iOS, Android, Web with native controls.",
      "Token-based auth and sample apps."
    ]
  },
  apps: {
    title: "Apps",
    subtitle: "Apps running inside Zoom surfaces.",
    points: [
      "Bring tools into Meetings, Team Chat, and Mail.",
      "Context-aware panels and sidebars.",
      "Distribute via App Marketplace."
    ]
  },
  marketplace: {
    title: "App Marketplace",
    subtitle: "Discover and deploy verified integrations.",
    points: [
      "Admin-approved listings and pre-built workflows.",
      "Category filters and private apps.",
      "Billing and license management integrations."
    ]
  },
  microsoft: {
    title: "Microsoft Integrations",
    subtitle: "Zoom + Microsoft 365, Teams & Azure AD.",
    points: [
      "SSO & provisioning via Entra ID (Azure AD).",
      "Schedule/join Zoom from Outlook and Teams.",
      "Share calendars and presence across suites."
    ]
  },
  google: {
    title: "Google Integrations",
    subtitle: "Zoom + Google Workspace.",
    points: [
      "Add Zoom to Google Calendar and Gmail.",
      "Provisioning and SSO with Google Directory.",
      "Drive, Docs, and Classroom extensions."
    ]
  },
  salesforce: {
    title: "Salesforce Integrations",
    subtitle: "Zoom for Sales Cloud & Service Cloud.",
    points: [
      "Log meetings, transcripts, and recordings to CRM.",
      "Click-to-dial with Zoom Phone inside Salesforce.",
      "Service Console integration with Contact Center."
    ]
  },
  atlassian: {
    title: "Atlassian Integrations",
    subtitle: "Zoom + Jira and Confluence.",
    points: [
      "Create/join Zoom from Jira issues.",
      "Auto-attach recordings and summaries to tickets.",
      "Confluence macros for meeting artifacts."
    ]
  },
  servicenow: {
    title: "ServiceNow Integrations",
    subtitle: "Zoom + digital workflows for ITSM/CSM.",
    points: [
      "Incident bridges with one-click Zoom war rooms.",
      "Automated ticket updates from Zoom events.",
      "Virtual Agent and Contact Center handoffs."
    ]
  }
} as const;

export type ItemKey = keyof typeof items | 'aicompanion';
