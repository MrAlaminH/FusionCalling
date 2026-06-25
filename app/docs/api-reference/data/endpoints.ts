// Single source of truth for the API Reference.
// Sidebar nav, search index, and the endpoint card all derive from this.

export type ApiSection = "calendar" | "leads";

export interface Param {
  name: string;
  type: string;
  kind?: "string" | "number" | "boolean" | "array" | "object";
  required: boolean;
  description: string;
  example?: string;
  default?: string;
  enum?: string[];
}

export interface StatusCode {
  code: number;
  description: string;
}

export interface ErrorExample {
  code: number;
  condition: string;
  solution: string;
}

export type Method = "GET" | "POST" | "PATCH" | "DELETE";

export interface Endpoint {
  id: string;
  section: ApiSection;
  method: Method;
  path: string;
  summary: string;
  description?: string;
  priority?: "essential" | "frequent" | "advanced";
  useCases?: string[];
  pathParams?: Param[];
  queryParams?: Param[];
  bodyParams?: Param[];
  responseStatus: number;
  responseExample: string;
  statusCodes: StatusCode[];
  commonErrors?: ErrorExample[];
}

export const BASE_URL = "https://app.fusioncalling.com";

export const ENDPOINTS: Endpoint[] = [
  // ─────────────────────────────── Calendar ───────────────────────────────
  {
    id: "cal-list-events",
    section: "calendar",
    method: "GET",
    path: "/api/calendar/external/v1/events",
    summary: "List calendar events",
    description: "Retrieve a list of events, optionally filtered by date range.",
    priority: "essential",
    useCases: ["Sync events to a dashboard", "Fetch upcoming events for a date range"],
    queryParams: [
      {
        name: "from",
        type: "string",
        required: false,
        description: "Filter events from this date (inclusive). Flexible datetime formats.",
        example: "2025-12-01T00:00:00",
        default: "2025-12-01",
      },
      {
        name: "to",
        type: "string",
        required: false,
        description: "Filter events until this date (inclusive). Flexible datetime formats.",
        example: "2025-12-31T23:59:59",
        default: "2025-12-31",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Team Meeting",
      "description": "Weekly team sync",
      "start_time": "2025-12-15T14:30:00.000Z",
      "end_time": "2025-12-15T16:00:00.000Z",
      "all_day": false,
      "google_meet_enabled": true,
      "meet_link": "https://meet.google.com/abc-defg-hij",
      "zoom_enabled": false,
      "zoom_meeting_id": null,
      "zoom_join_url": null,
      "attendees": [
        {
          "email": "john@example.com",
          "display_name": "John Doe",
          "response_status": "accepted"
        }
      ],
      "caller_phone": null,
      "caller_name": null,
      "source": "local",
      "created_at": "2025-12-10T10:00:00.000Z",
      "updated_at": "2025-12-10T10:00:00.000Z"
    }
  ]
}`,
    statusCodes: [
      { code: 200, description: "Success" },
      { code: 400, description: "Invalid date format in query parameters" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 500, description: "Server error" },
    ],
  },
  {
    id: "cal-get-event",
    section: "calendar",
    method: "GET",
    path: "/api/calendar/external/v1/events/{id}",
    summary: "Get a single event",
    description: "Retrieve a single event by its ID.",
    priority: "frequent",
    pathParams: [
      {
        name: "id",
        type: "UUID",
        kind: "string",
        required: true,
        description: "The unique identifier of the event.",
        example: "550e8400-e29b-41d4-a716-446655440000",
        default: "550e8400-e29b-41d4-a716-446655440000",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Team Meeting",
    "description": "Weekly team sync",
    "start_time": "2025-12-15T14:30:00.000Z",
    "end_time": "2025-12-15T16:00:00.000Z",
    "all_day": false,
    "google_meet_enabled": true,
    "meet_link": "https://meet.google.com/abc-defg-hij",
    "zoom_enabled": false,
    "zoom_meeting_id": null,
    "zoom_join_url": null,
    "attendees": [
      {
        "email": "john@example.com",
        "display_name": "John Doe",
        "response_status": "accepted"
      }
    ],
    "caller_phone": null,
    "caller_name": null,
    "source": "local",
    "created_at": "2025-12-10T10:00:00.000Z",
    "updated_at": "2025-12-10T10:00:00.000Z"
  }
}`,
    statusCodes: [
      { code: 200, description: "Success" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "Event not found or doesn't belong to your account" },
      { code: 500, description: "Server error" },
    ],
  },
  {
    id: "cal-create-event",
    section: "calendar",
    method: "POST",
    path: "/api/calendar/external/v1/events",
    summary: "Create an event",
    description: "Create a new calendar event with optional Google Meet / Zoom link generation and attendees.",
    priority: "essential",
    useCases: [
      "Book a meeting from a web form",
      "Create events triggered by automations",
      "Generate a Zoom or Google Meet link for a scheduled call",
    ],
    bodyParams: [
      {
        name: "title",
        type: "string",
        kind: "string",
        required: true,
        description: "Event title (1-255 characters).",
        example: "Meeting with Client",
        default: "Meeting with Client",
      },
      {
        name: "start_time",
        type: "string",
        kind: "string",
        required: true,
        description: "Event start time (flexible datetime format).",
        example: "2025-12-15T14:30:00",
        default: "2025-12-15T14:30:00",
      },
      {
        name: "end_time",
        type: "string",
        kind: "string",
        required: true,
        description: "Event end time (must be after start_time).",
        example: "2025-12-15T16:00:00",
        default: "2025-12-15T16:00:00",
      },
      {
        name: "description",
        type: "string",
        kind: "string",
        required: false,
        description: "Event description (max 500 characters).",
        example: "Discuss project requirements",
      },
      {
        name: "all_day",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Whether the event is all-day. Must be a boolean, not a string. Video conferencing cannot be enabled for all-day events.",
        example: "false",
        default: "false",
      },
      {
        name: "google_meet_enabled",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Enable Google Meet link generation (requires Google Calendar connected). Mutually exclusive with zoom_enabled.",
        example: "false",
        default: "false",
      },
      {
        name: "zoom_enabled",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Enable Zoom meeting link generation (requires Zoom connected in Settings → Integrations). Mutually exclusive with google_meet_enabled.",
        example: "true",
        default: "true",
      },
      {
        name: "attendees",
        type: "array<object>",
        kind: "array",
        required: false,
        description: "List of attendees (max 50). Each has email, optional display_name, and optional response_status. Duplicates are removed automatically.",
        example: '[{"email":"client@example.com","display_name":"Client Rep"}]',
        default: '[{"email":"client@example.com","display_name":"Client Rep"}]',
      },
      {
        name: "caller_phone",
        type: "string",
        kind: "string",
        required: false,
        description: "Caller's phone number in E.164 format (e.g. +15551234567). Used for call-log link and SMS confirmation.",
        example: "+15551234567",
      },
      {
        name: "caller_name",
        type: "string",
        kind: "string",
        required: false,
        description: "Caller's display name (max 200 characters). Used in SMS template and for display.",
        example: "Jane Doe",
      },
    ],
    responseStatus: 201,
    responseExample: `{
  "success": true,
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "title": "Meeting with Client",
    "description": "Discuss project requirements",
    "start_time": "2025-12-15T14:30:00.000Z",
    "end_time": "2025-12-15T16:00:00.000Z",
    "all_day": false,
    "google_meet_enabled": false,
    "meet_link": null,
    "zoom_enabled": true,
    "zoom_meeting_id": 123456789,
    "zoom_join_url": "https://zoom.us/j/123456789",
    "attendees": [
      {
        "email": "client@example.com",
        "display_name": "Client Rep",
        "response_status": "needsAction"
      }
    ],
    "caller_phone": "+15551234567",
    "caller_name": "Jane Doe",
    "source": "local",
    "created_at": "2025-12-11T10:00:00.000Z",
    "updated_at": "2025-12-11T10:00:00.000Z"
  }
}`,
    statusCodes: [
      { code: 201, description: "Event created successfully" },
      { code: 400, description: "Validation error or conference conflict (see error details)" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 500, description: "Server error" },
    ],
    commonErrors: [
      { code: 400, condition: "Expected boolean, received string", solution: "Send true/false without quotes: all_day: true, not \"true\"." },
      { code: 400, condition: "End time must be after start time", solution: "Ensure end_time is later than start_time." },
      { code: 400, condition: "Invalid datetime format", solution: "Use a supported format, e.g. 2025-12-15T14:30:00." },
      { code: 400, condition: "Only one video conference (Google Meet or Zoom) can be enabled per event", solution: "Enable only google_meet_enabled OR zoom_enabled, not both." },
      { code: 400, condition: "Video conferencing cannot be enabled for all-day events", solution: "Set all_day: false when enabling google_meet_enabled or zoom_enabled." },
      { code: 400, condition: "Maximum 50 guests allowed", solution: "Reduce the attendees array to 50 or fewer entries." },
    ],
  },
  {
    id: "cal-update-event",
    section: "calendar",
    method: "PATCH",
    path: "/api/calendar/external/v1/events/{id}",
    summary: "Update an event",
    description: "Update an existing event. Only provided fields are updated. Enable/switch/disable Google Meet or Zoom, or replace the attendees list.",
    priority: "frequent",
    pathParams: [
      {
        name: "id",
        type: "UUID",
        kind: "string",
        required: true,
        description: "The unique identifier of the event.",
        example: "550e8400-e29b-41d4-a716-446655440000",
        default: "550e8400-e29b-41d4-a716-446655440000",
      },
    ],
    bodyParams: [
      {
        name: "title",
        type: "string",
        kind: "string",
        required: false,
        description: "Event title (1-255 characters).",
        example: "Updated Meeting Title",
        default: "Updated Meeting Title",
      },
      {
        name: "description",
        type: "string",
        kind: "string",
        required: false,
        description: "Event description. Use null to clear.",
        example: "Updated description",
      },
      {
        name: "start_time",
        type: "string",
        kind: "string",
        required: false,
        description: "Event start time (flexible datetime format).",
        example: "2025-12-15T15:00:00",
      },
      {
        name: "end_time",
        type: "string",
        kind: "string",
        required: false,
        description: "Event end time (flexible datetime format).",
        example: "2025-12-15T17:00:00",
      },
      {
        name: "all_day",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Whether the event is all-day. Must be a boolean. Video conferencing cannot be enabled for all-day events.",
        example: "false",
      },
      {
        name: "google_meet_enabled",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Enable/disable Google Meet. Disabling deletes the existing Meet. Mutually exclusive with zoom_enabled.",
        example: "false",
      },
      {
        name: "zoom_enabled",
        type: "boolean",
        kind: "boolean",
        required: false,
        description: "Enable/disable Zoom. Disabling deletes the existing Zoom meeting. Mutually exclusive with google_meet_enabled.",
        example: "true",
      },
      {
        name: "attendees",
        type: "array<object>",
        kind: "array",
        required: false,
        description: "Replaces the entire attendees list (max 50). Duplicates are removed automatically.",
        example: '[{"email":"client@example.com","display_name":"Client Rep"}]',
      },
      {
        name: "caller_phone",
        type: "string",
        kind: "string",
        required: false,
        description: "Caller's phone number in E.164 format (e.g. +15551234567). Used for call-log link and SMS confirmation.",
        example: "+15551234567",
      },
      {
        name: "caller_name",
        type: "string",
        kind: "string",
        required: false,
        description: "Caller's display name (max 200 characters). Used in SMS template and for display.",
        example: "Jane Doe",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Updated Meeting Title",
    "description": "Updated description",
    "start_time": "2025-12-15T15:00:00.000Z",
    "end_time": "2025-12-15T17:00:00.000Z",
    "all_day": false,
    "google_meet_enabled": false,
    "meet_link": null,
    "zoom_enabled": true,
    "zoom_meeting_id": 987654321,
    "zoom_join_url": "https://zoom.us/j/987654321",
    "attendees": [
      {
        "email": "client@example.com",
        "display_name": "Client Rep",
        "response_status": "needsAction"
      }
    ],
    "caller_phone": "+15551234567",
    "caller_name": "Jane Doe",
    "source": "local",
    "created_at": "2025-12-10T10:00:00.000Z",
    "updated_at": "2025-12-11T11:30:00.000Z"
  }
}`,
    statusCodes: [
      { code: 200, description: "Event updated successfully" },
      { code: 400, description: "Validation error, conference conflict, or end_time <= start_time" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "Event not found or doesn't belong to your account" },
      { code: 500, description: "Server error" },
    ],
    commonErrors: [
      { code: 400, condition: "Only one video conference (Google Meet or Zoom) can be enabled per event", solution: "Disable one before enabling the other: { google_meet_enabled: false, zoom_enabled: true }." },
      { code: 400, condition: "Video conferencing cannot be enabled for all-day events", solution: "Set all_day: false when enabling google_meet_enabled or zoom_enabled." },
    ],
  },
  {
    id: "cal-delete-event",
    section: "calendar",
    method: "DELETE",
    path: "/api/calendar/external/v1/events/{id}",
    summary: "Delete an event",
    description: "Delete an event by its ID.",
    priority: "frequent",
    pathParams: [
      {
        name: "id",
        type: "UUID",
        kind: "string",
        required: true,
        description: "The unique identifier of the event.",
        example: "550e8400-e29b-41d4-a716-446655440000",
        default: "550e8400-e29b-41d4-a716-446655440000",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "message": "Event deleted successfully"
}`,
    statusCodes: [
      { code: 200, description: "Event deleted successfully" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "Event not found or doesn't belong to your account" },
      { code: 500, description: "Server error" },
    ],
  },

  // ─────────────────────────────── Leads ───────────────────────────────
  {
    id: "leads-create",
    section: "leads",
    method: "POST",
    path: "/api/leads/external/v1/leads",
    summary: "Create a lead",
    description: "Create a single lead. Omit campaign_id to route to the Default Feed.",
    priority: "essential",
    useCases: ["Capture a form submission", "Send a CRM contact to Fusion Calling"],
    bodyParams: [
      {
        name: "name",
        type: "string",
        kind: "string",
        required: true,
        description: "Lead's full name (2-100 characters).",
        example: "John Doe",
        default: "John Doe",
      },
      {
        name: "phone",
        type: "string",
        kind: "string",
        required: true,
        description: "Phone number (auto-normalized to E.164).",
        example: "+1 234 567 8900",
        default: "+1 234 567 8900",
      },
      {
        name: "email",
        type: "string",
        kind: "string",
        required: false,
        description: "Email address.",
        example: "john@example.com",
      },
      {
        name: "company",
        type: "string",
        kind: "string",
        required: false,
        description: "Company name (up to 100 characters).",
        example: "Acme Corp",
      },
      {
        name: "tags",
        type: "array<string>",
        kind: "array",
        required: false,
        description: "Lead tags (max 20).",
        example: '["vip","website-lead"]',
        default: "vip,website-lead",
      },
    ],
    responseStatus: 201,
    responseExample: `{
  "success": true,
  "data": {
    "mode": "atomic",
    "inserted": 1,
    "leads": [
      {
        "id": "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
        "name": "John Doe",
        "phone": "+12345678900",
        "campaign_name": "Default Feed",
        "status": "pending",
        "created_at": "2026-06-17T12:00:00.000Z"
      }
    ]
  }
}`,
    statusCodes: [
      { code: 201, description: "Lead created successfully" },
      { code: 400, description: "Validation error or invalid phone" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 409, description: "Duplicate lead (same phone in campaign)" },
      { code: 429, description: "Rate limit exceeded" },
    ],
    commonErrors: [
      { code: 409, condition: "Duplicate lead", solution: "Use PATCH to update the existing lead instead." },
      { code: 400, condition: "Invalid phone number", solution: "Provide 10-15 digits; US 10-digit numbers are auto-prefixed with +1." },
    ],
  },
  {
    id: "leads-create-batch",
    section: "leads",
    method: "POST",
    path: "/api/leads/external/v1/leads",
    summary: "Create leads in batch",
    description: "Create 1-100 leads in a single atomic request.",
    priority: "advanced",
    bodyParams: [
      {
        name: "leads",
        type: "array<object>",
        kind: "array",
        required: true,
        description: "Array of 1-100 lead objects, each with name & phone.",
        example: '[{"name":"Lead 1","phone":"+1234567890"},{"name":"Lead 2","phone":"+1234567891"}]',
        default: '[{"name":"Lead 1","phone":"+1234567890"},{"name":"Lead 2","phone":"+1234567891"}]',
      },
      {
        name: "kind",
        type: "enum",
        kind: "string",
        required: false,
        description: "Batch-level kind. Must match the target campaign kind.",
        enum: ["call", "sms"],
        example: "call",
      },
    ],
    responseStatus: 201,
    responseExample: `{
  "success": true,
  "data": {
    "mode": "atomic",
    "inserted": 2,
    "leads": [
      { "id": "uuid-1", "name": "Lead 1", "phone": "+1234567890", "status": "pending" },
      { "id": "uuid-2", "name": "Lead 2", "phone": "+1234567891", "status": "pending" }
    ]
  }
}`,
    statusCodes: [
      { code: 201, description: "Leads created successfully" },
      { code: 400, description: "Empty batch or batch over 100 leads" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 429, description: "Rate limit exceeded" },
    ],
  },
  {
    id: "leads-get-by-phone",
    section: "leads",
    method: "GET",
    path: "/api/leads/external/v1/leads",
    summary: "Lookup lead by phone",
    description: "Recommended for automation: identify a lead by phone, not UUID.",
    priority: "essential",
    queryParams: [
      {
        name: "phone",
        type: "string",
        kind: "string",
        required: true,
        description: "Phone number to lookup (US 10-digit works without country code).",
        example: "+1234567890",
        default: "+1234567890",
      },
      {
        name: "campaign_id",
        type: "UUID",
        kind: "string",
        required: false,
        description: "Optional UUID to scope the lookup to a specific campaign.",
        example: "",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "id": "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
    "name": "John Doe",
    "phone": "+12345678900",
    "email": "john@example.com",
    "campaign_name": "Default Feed",
    "status": "pending",
    "created_at": "2026-06-16T12:00:00.000Z"
  }
}`,
    statusCodes: [
      { code: 200, description: "Success" },
      { code: 400, description: "Invalid phone format" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "No lead found for that phone" },
    ],
  },
  {
    id: "leads-list",
    section: "leads",
    method: "GET",
    path: "/api/leads/external/v1/leads",
    summary: "List leads (paginated)",
    description: "List leads from a campaign with filtering and pagination.",
    priority: "frequent",
    queryParams: [
      {
        name: "campaign_id",
        type: "UUID",
        kind: "string",
        required: false,
        description: "Optional UUID. Omit to read from the Default Feed.",
        example: "",
      },
      {
        name: "status",
        type: "enum",
        kind: "string",
        required: false,
        description: "Filter by status.",
        enum: ["pending", "in-progress", "completed", "failed", "retry"],
        example: "pending",
        default: "pending",
      },
      {
        name: "page",
        type: "number",
        kind: "number",
        required: false,
        description: "Page number (default 1).",
        example: "1",
        default: "1",
      },
      {
        name: "pageSize",
        type: "number",
        kind: "number",
        required: false,
        description: "Results per page (default 50, max 100).",
        example: "50",
        default: "50",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "campaign_name": "Default Feed",
    "page": 1,
    "total": 2,
    "leads": [
      { "id": "uuid-1", "name": "John Doe", "phone": "+12345678900", "status": "pending" },
      { "id": "uuid-2", "name": "Jane Roe", "phone": "+12345678901", "status": "pending" }
    ]
  }
}`,
    statusCodes: [
      { code: 200, description: "Success" },
      { code: 400, description: "Invalid parameters" },
      { code: 401, description: "Invalid or missing API key" },
    ],
  },
  {
    id: "leads-get-by-id",
    section: "leads",
    method: "GET",
    path: "/api/leads/external/v1/leads/{lead_id}",
    summary: "Get a lead by ID",
    description: "Retrieve a single lead by the UUID returned from POST.",
    priority: "frequent",
    pathParams: [
      {
        name: "lead_id",
        type: "UUID",
        kind: "string",
        required: true,
        description: "Lead UUID from the POST response.",
        example: "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
        default: "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "id": "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
    "name": "John Doe",
    "phone": "+12345678900",
    "email": "john@example.com",
    "campaign_name": "Default Feed",
    "status": "pending"
  }
}`,
    statusCodes: [
      { code: 200, description: "Success" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "Lead not found" },
    ],
  },
  {
    id: "leads-update",
    section: "leads",
    method: "PATCH",
    path: "/api/leads/external/v1/leads",
    summary: "Update a lead",
    description: "Update an existing lead identified by phone. At least one updatable field is required.",
    priority: "frequent",
    bodyParams: [
      {
        name: "phone",
        type: "string",
        kind: "string",
        required: true,
        description: "Lead's phone number (identifies the lead).",
        example: "+1234567890",
        default: "+1234567890",
      },
      {
        name: "name",
        type: "string",
        kind: "string",
        required: false,
        description: "Updated lead name.",
        example: "John Doe Updated",
      },
      {
        name: "email",
        type: "string",
        kind: "string",
        required: false,
        description: "Updated email address.",
        example: "john.new@example.com",
      },
      {
        name: "company",
        type: "string",
        kind: "string",
        required: false,
        description: "Updated company name.",
        example: "New Corp",
      },
      {
        name: "tags",
        type: "array<string>",
        kind: "array",
        required: false,
        description: "Updated tags.",
        example: "vip,updated",
        default: "vip,updated",
      },
    ],
    responseStatus: 200,
    responseExample: `{
  "success": true,
  "data": {
    "id": "f1c2d3e4-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
    "name": "John Doe Updated",
    "phone": "+12345678900",
    "status": "pending",
    "updated_at": "2026-06-17T12:05:00.000Z"
  }
}`,
    statusCodes: [
      { code: 200, description: "Lead updated successfully" },
      { code: 400, description: "No updatable fields provided" },
      { code: 401, description: "Invalid or missing API key" },
      { code: 404, description: "Lead not found" },
      { code: 429, description: "Rate limit exceeded" },
    ],
  },
];

export const CALENDAR_ENDPOINTS = ENDPOINTS.filter((e) => e.section === "calendar");
export const LEADS_ENDPOINTS = ENDPOINTS.filter((e) => e.section === "leads");

export function getEndpoint(id: string): Endpoint | undefined {
  return ENDPOINTS.find((e) => e.id === id);
}
