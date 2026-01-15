# Prowse Phillips CRM Knowledge Base

Welcome to the staff knowledge base for Prowse Phillips CRM - the debt contention case management system. This documentation covers everything you need to know to effectively manage clients, cases, and the investigation workflow.

## What This System Does

Prowse Phillips CRM helps clients challenge the enforceability of consumer debts (credit cards, loans, etc.) through a structured legal investigation process. The platform manages the entire journey from initial lead capture through debt investigation, legal correspondence with creditors, payment management, and case resolution.

---

## Documentation

### Core Workflow (01-12)

| # | Section | Description |
|---|---------|-------------|
| 01 | [Getting Started](./01-getting-started.md) | Login, navigation, dashboard overview, and your first day |
| 02 | [Understanding the Workflow](./02-understanding-the-workflow.md) | Case lifecycle, statuses, Route U vs Route E, and how it all fits together |
| 03 | [Client Management](./03-client-management.md) | Finding clients, viewing profiles, payment status, and client timeline |
| 04 | [Case Management](./04-case-management.md) | Working with cases, stage transitions, handler assignment, and closure |
| 05 | [Investigation Process](./05-investigation-process.md) | DSAR, Section 78, Maxi Reports, and route determination |
| 06 | [Documents and Correspondence](./06-documents-and-correspondence.md) | Uploading, generating, and emailing documents to creditors |
| 07 | [Tasks and Work Queues](./07-tasks-and-queues.md) | Your task queue, chase automation, and completing work efficiently |
| 08 | [Approval Workflows](./08-approvals.md) | LOC and settlement approvals, solicitor review process |
| 09 | [Client Payments](./09-payments.md) | Fee structure, payment plans, tracking, and handling issues |
| 10 | [Communications](./10-communications.md) | Email and SMS history, filtering, delivery tracking |
| 11 | [Introducer Referrals](./11-introducer-referrals.md) | Managing referral partners and tracking client attribution |
| 12 | [Troubleshooting](./12-troubleshooting.md) | Common issues and how to resolve them |

### Extended Topics (13-20)

| # | Section | Description |
|---|---------|-------------|
| 13 | [Staff Management](./13-staff-management.md) | Creating, editing, and deactivating staff accounts |
| 14 | [Staff User Journeys](./14-staff-user-journeys.md) | Visual workflow diagrams showing task-based processes |
| 15 | [Lead Management](./15-lead-management.md) | Sales workflow for converting leads to clients |
| 16 | [Calendar and Scheduling](./16-calendar-scheduling.md) | Appointments, callbacks, and availability management |
| 17 | [Client Portal Overview](./17-client-portal-overview.md) | What staff need to know about the client experience |
| 18 | [Compliance Guide](./18-compliance-guide.md) | SRA, FCA, CCA, and GDPR requirements for daily work |
| 19 | [Glossary](./19-glossary.md) | A-Z reference of all terminology and abbreviations |
| 20 | [Quick Reference Cards](./20-quick-reference-cards.md) | One-page cheat sheets for common tasks |

---

## Quick Links

### For New Staff Members

Start here on your first day:

1. [Logging in and navigating the dashboard](./01-getting-started.md#logging-in)
2. [Understanding your role and capabilities](./01-getting-started.md#staff-roles)
3. [How the case workflow works](./02-understanding-the-workflow.md#the-complete-case-lifecycle)
4. [Finding and viewing your assigned cases](./04-case-management.md#viewing-your-cases)
5. [Visual workflow journeys](./14-staff-user-journeys.md) - See how tasks connect

### Common Daily Tasks

- [How to change a case status](./04-case-management.md#changing-case-status)
- [Sending a DSAR to a creditor](./05-investigation-process.md#sending-a-dsar-request)
- [Uploading a document to a case](./06-documents-and-correspondence.md#uploading-documents)
- [Completing a task from your queue](./07-tasks-and-queues.md#completing-a-task)
- [Checking if a client has paid](./09-payments.md#viewing-payment-status)
- [Scheduling a callback](./16-calendar-scheduling.md#booking-a-callback)

### Key Concepts to Understand

- [Why 1 Case = 1 Debt](./02-understanding-the-workflow.md#the-1-case--1-debt-architecture)
- [Client Status vs Case Status](./02-understanding-the-workflow.md#two-status-systems)
- [Route U vs Route E explained](./02-understanding-the-workflow.md#route-determination)
- [How payment plans work at the client level](./09-payments.md#payment-plans-are-client-level)

### Reference Materials

- [Chase timing reference](./20-quick-reference-cards.md#card-3-chase-timing-reference)
- [Email template guide](./20-quick-reference-cards.md#card-4-email-template-reference)
- [Status quick reference](./20-quick-reference-cards.md#card-1-client-status-quick-reference)
- [Escalation paths](./20-quick-reference-cards.md#card-7-escalation-paths)
- [Full glossary](./19-glossary.md)

### By Role

**Sales Team:**
- [Lead Management](./15-lead-management.md) - Your primary workflow
- [Calendar and Scheduling](./16-calendar-scheduling.md) - Booking callbacks
- [Client Portal Overview](./17-client-portal-overview.md) - Understanding client experience

**Admin Team:**
- [Case Management](./04-case-management.md) - Daily case handling
- [Investigation Process](./05-investigation-process.md) - DSAR, S78, route determination
- [Staff User Journeys](./14-staff-user-journeys.md) - Complete workflow diagrams

**Solicitors:**
- [Approval Workflows](./08-approvals.md) - Reviewing and approving documents
- [Compliance Guide](./18-compliance-guide.md) - Regulatory requirements

---

## Key Business Rules

These are critical architectural decisions that affect how you work:

| Rule | What It Means |
|------|---------------|
| **1 Case = 1 Debt** | Each debt is tracked as a separate case. A client with 3 debts has 3 cases. |
| **Payment Plans are Client-Level** | One payment plan covers ALL of a client's cases - not per case. |
| **Route Determination After Investigation** | We don't know if a debt is enforceable until after DSAR + Section 78 analysis. |
| **Chase Tasks are Automated** | The system creates follow-up tasks based on timing rules (e.g., Day 30 DSAR chase). |
| **Solicitors Approve Legal Documents** | LOCs and settlements require solicitor sign-off before sending. |

---

## Staff Roles

| Role | What You Can Do |
|------|-----------------|
| **Sales** | View leads, follow up on incomplete onboarding, initial client contact |
| **Admin** | Full case management, send correspondence, manage tasks, process documents |
| **Solicitor** | Everything Admins can do, plus approve legal documents (LOCs, settlements) |

---

## Getting Help

- **System Issues:** Contact your IT administrator
- **Process Questions:** Ask your team lead or refer to this documentation
- **Client Complaints:** Follow the escalation procedure in [Troubleshooting](./12-troubleshooting.md#escalation-paths)
- **Quick Answers:** Check the [Glossary](./19-glossary.md) or [Quick Reference Cards](./20-quick-reference-cards.md)

---

## About This Documentation

This knowledge base serves as both a staff training manual and context for AI assistants. It covers the complete workflow from client onboarding through case closure.

**Last Updated:** January 2026  
**Version:** 2.0

---

## Documentation Quality

### Audit Summary (Date: 2026-01-14)

| Document | Clarity | Workflow | Visuals | Edge Cases | Cross-Ref | Examples | Overall |
|----------|---------|----------|---------|------------|-----------|----------|---------|
| 01-getting-started | 3 | 3 | 2 | 2 | 3 | 3 | Good |
| 02-understanding-the-workflow | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 03-client-management | 3 | 3 | 2 | 2 | 3 | 3 | Good |
| 04-case-management | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 05-investigation-process | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 06-documents-and-correspondence | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 07-tasks-and-queues | 3 | 3 | 2 | 2 | 3 | 3 | Good |
| 08-approvals | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 09-payments | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 10-communications | 3 | 3 | 2 | 2 | 3 | 2 | Good |
| 11-introducer-referrals | 3 | 3 | 2 | 2 | 3 | 3 | Good |
| 12-troubleshooting | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 13-staff-management | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 14-staff-user-journeys | 3 | 3 | 3 | 2 | 3 | 3 | Excellent |
| 15-lead-management | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 16-calendar-scheduling | 3 | 3 | 2 | 2 | 3 | 3 | Good |
| 17-client-portal-overview | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 18-compliance-guide | 3 | 3 | 2 | 3 | 3 | 3 | Excellent |
| 19-glossary | 3 | N/A | N/A | N/A | 3 | N/A | Reference |
| 20-quick-reference-cards | 3 | 3 | 3 | N/A | 3 | 3 | Reference |

**Scoring Key:** 3 = Excellent | 2 = Good | 1 = Needs Work | 0 = Missing | N/A = Not Applicable

### Screenshot Placeholders

24 screenshots marked for capture across all documents:

| Doc | Screenshot | Description |
|-----|------------|-------------|
| 01 | Login page | Login page with email and password fields |
| 01 | Dashboard | Main dashboard with stats cards and activity feed |
| 01 | Sidebar | Admin sidebar with menu items expanded |
| 03 | Client list | Clients list page with table and filters |
| 03 | Client detail | Client detail page showing header and tabs |
| 04 | Case detail | Case detail page showing header, status, and tabs |
| 04 | Stage transition | Stage transition panel/modal |
| 05 | Email creditor | Email Creditor modal with DSAR template |
| 06 | Document upload | Document upload modal |
| 06 | Email creditor templates | Email Creditor modal with template dropdown |
| 06 | Attachment selector | Document attachment selector with checkboxes |
| 07 | Task queue | Tasks queue showing list of pending tasks |
| 08 | Approval queue | Approvals work queue showing pending items |
| 09 | Client payments | Client payments tab showing plan and schedule |
| 10 | Communications | Communications list with filters |
| 11 | Introducer list | Introducer list page |
| 13 | Staff list | Staff list page showing all team members |
| 15 | Lead filter | Client list filtered to show leads |
| 16 | Calendar grid | Calendar grid view showing appointments |
| 16 | Today's calls | Today's calls view |

### Verified Cross-References

All internal document links have been verified as valid.

### Completed Improvements (v2.0)

1. ✅ Added staff management documentation
2. ✅ Created visual workflow journey diagrams
3. ✅ Added lead management for Sales team
4. ✅ Documented calendar and scheduling features
5. ✅ Created client portal overview for staff
6. ✅ Added comprehensive compliance guide
7. ✅ Created searchable glossary
8. ✅ Added printable quick reference cards

### Future Improvements

1. Add actual screenshots once UI is finalized
2. Add video walkthroughs for complex workflows
3. Create role-specific training paths
4. Add search functionality across documentation
