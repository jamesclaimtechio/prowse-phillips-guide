# Case Management

This guide covers the day-to-day work of managing cases - from viewing and understanding case status to progressing cases through the investigation workflow.

---

## What is a Case?

A **case** represents an investigation into ONE specific debt. Remember the fundamental rule:

> **1 Case = 1 Debt**

Each case tracks:
- The **creditor** (who the money is owed to)
- The **debt amount**
- The **investigation status** (where we are in the process)
- The **assigned handler** (who is responsible)
- All **documents, communications, and activity** related to that debt

---

## Finding Cases

### The Cases List

Access the cases list from the sidebar: **Cases**

[SCREENSHOT: Cases list page with table and filters]

### Case List Columns

| Column | Description |
|--------|-------------|
| **Case Reference** | Unique ID like DC-2024-00123 (click to open) |
| **Client** | Client name (click to go to client profile) |
| **Creditor** | Who the debt is owed to |
| **Amount** | Debt amount |
| **Status** | Current investigation status |
| **Stage** | Which stage (1-4) the case is in |
| **Assigned To** | Handler responsible for this case |
| **Days in Stage** | How long at current status (red if overdue) |
| **Last Updated** | Most recent activity |

### Filtering Cases

Click **Filters** to narrow your view:

| Filter | Use Case |
|--------|----------|
| **Status** | Find cases at specific investigation stage |
| **Stage** | Focus on pre-lit (1-2) or post-lit (3-4) cases |
| **Assigned To** | See your cases or a colleague's |
| **Creditor** | All cases with a specific creditor |
| **Client** | All cases for a specific client |
| **Days in Stage** | Find overdue or stuck cases |
| **Route** | Filter by Route U or Route E |

**Common filter combinations:**

- "My active cases" → Assigned To: Me, Status: not closed
- "DSAR responses to review" → Status: DSAR Response Received
- "Overdue chases" → Days in Stage: > 30, Status: DSAR Sent
- "Cases needing route decision" → Status: Route Determination Needed

---

## The Case Detail Page

Click on any case to open its full detail page.

[SCREENSHOT: Case detail page showing header, status, and tabs]

### Case Header

```
Case #DC-2024-00123                    [Change Status ▼] [Add Note]
John Smith (View Client Profile)       Assigned to: Jane Doe
john.smith@email.com | 07700 900123    Status: DSAR Sent
Case opened: 15/10/2024                Days in stage: 28 days
```

**Header elements:**
- **Case reference** - Unique identifier
- **Client info** - Name, contact (click to go to client profile)
- **Assigned handler** - Who is responsible
- **Current status** - Where in the workflow
- **Days in stage** - How long at this status
- **Action buttons** - Change status, add note

### Case Tabs

| Tab | What You'll Find |
|-----|------------------|
| **Overview** | Summary, quick stats, recent activity |
| **Debts** | Debt details and investigation progress |
| **Documents** | All documents for this case |
| **Communications** | Emails to client and creditor |
| **Activity Log** | Complete audit trail |
| **Notes** | Internal team notes |
| **Payment** | Client's payment plan (shared across cases) |

---

## Understanding Case Status

### Status Categories

Case statuses are grouped into categories that represent the workflow:

**Pre-Investigation:**
- `Awaiting Payment` - Waiting for first client payment
- `Ready to Assess` - Ready to begin investigation

**DSAR Phase:**
- `DSAR Requested` → `DSAR Sent` → Chase statuses
- `DSAR Response Received` → `DSAR Reviewed` → `DSAR Complete`

**Section 78 Phase:**
- `Section 78 Requested` → `Section 78 Sent` → Chase statuses
- `Section 78 Response Received` → `Section 78 Reviewed` → `Section 78 Complete`

**Analysis Phase:**
- `Ready for Maxi Report` → `Maxi Report Requested` → `Maxi Report Received`
- `Maxi Report Under Review` → `Route Determination Needed`

**Route U (Unenforceable):**
- `LOC Drafting` → `LOC Pending Approval` → `LOC Approved` → `LOC Sent`
- `LOC Under Negotiation` → `Route U - Completed`

**Route E (Enforceable):**
- `Settlement Drafting` → `Settlement Pending Approval` → `Settlement Approved`
- `Settlement Sent` → `Settlement Under Negotiation` → `Route E - Completed`

**Closure:**
- `Case Closed - Successful` / `Case Closed - Unsuccessful` / `Case Cancelled`

### Status Color Coding

Statuses are color-coded for quick recognition:

| Color | Meaning |
|-------|---------|
| 🔵 Blue | Investigation phase (DSAR, S78) |
| 🟡 Yellow | Analysis phase (Maxi Report, Route Determination) |
| 🟠 Orange | Route U activities (LOC) |
| 🟣 Purple | Route E activities (Settlement) |
| 🔴 Red | Overdue or needs attention |
| ⚫ Gray | Closed |

---

## Changing Case Status

### When to Change Status

Change the status when a significant event occurs:
- Document sent to creditor
- Response received from creditor
- Document reviewed and analyzed
- Decision made about next step
- Case resolved

### How to Change Status

1. Open the case detail page
2. Click the **Change Status** button (or click on the current status)
3. Select the new status from the dropdown
4. Add a comment explaining the change (optional but recommended)
5. Click **Confirm**

[SCREENSHOT: Stage transition panel/modal]

### Status Transition Rules

Not all transitions are allowed. The system enforces logical progression:

**Allowed:**
- `DSAR Sent` → `DSAR Response Received` (response arrived)
- `DSAR Sent` → `DSAR Chase 1 Sent` (sent first chase)

**Not Allowed:**
- `DSAR Sent` → `LOC Sent` (can't skip investigation)
- `Ready to Assess` → `Case Closed` (must investigate first)

If you try an invalid transition, the system will show an error explaining what's allowed.

### Automatic Status Updates

Some statuses update automatically:
- **Chase emails:** When you send a chase from the Email Creditor modal, the status updates automatically (e.g., DSAR Sent → DSAR Chase 1 Sent)
- **First payment:** When client makes first payment, ALL their cases move from "Awaiting Payment" to "Ready to Assess"

---

## Stages and Handlers

### Understanding Stages

Cases progress through four stages:

| Stage | Name | Handler Type | What Happens |
|-------|------|--------------|--------------|
| **Stage 1** | Initial Assessment | Pre-Lit Handler | Onboarding complete, awaiting payment |
| **Stage 2** | Investigation | Pre-Lit Handler | DSAR, Section 78, Maxi Report |
| **Stage 3** | Route U | Post-Lit Handler | Letter of Claim, negotiation |
| **Stage 4** | Route E | Post-Lit Handler | Settlement negotiation |

### Handler Assignment

**Pre-Lit Handler:** Handles Stages 1-2 (investigation)
**Post-Lit Handler:** Handles Stages 3-4 (resolution)

When a case is created, it's automatically assigned to a Pre-Lit Handler based on:
1. Round-robin distribution among available handlers
2. Client consistency (same handler for all cases from one client)

When a case reaches Route determination:
- Route U → Transfers to Post-Lit Handler (Stages 3)
- Route E → Transfers to Post-Lit Handler (Stage 4)

### Reassigning a Case

To reassign a case to a different handler:

1. Open the case detail page
2. Click on the assigned handler's name
3. Select the new handler from the dropdown
4. Add a reason for the reassignment
5. Click **Confirm**

The previous handler will be notified, and the change is logged in the activity log.

---

## Working with the Debts Tab

The Debts tab shows detailed information about the debt being investigated.

### Debt Information

```
Creditor: Barclays Bank PLC
Account Type: Credit Card
Account Reference: ****1234
Amount Owed: £5,234.67
Debt Status: In Default
```

### Investigation Timeline

A visual representation of investigation progress:

```
✅ DSAR Sent (01/10/2024)
✅ DSAR Response Received (05/11/2024)
✅ Section 78 Sent (10/11/2024)
⏳ Awaiting Section 78 Response (29 days)
⚪ Maxi Report (not started)
⚪ Route Determination (not started)
```

**Icons:**
- ✅ Completed
- ⏳ In progress (with days in stage)
- ⚪ Not started

### Quick Stats

- **Days in current stage** - How long at this status
- **Last action** - What was done last
- **Next scheduled action** - What needs to happen next

---

## Documents Tab

All documents related to this case.

### Document Categories

**Outbound Correspondence:**
- DSAR request letters
- Section 78 request letters
- Letters of Claim
- Settlement proposals

**Inbound Correspondence:**
- DSAR responses
- Section 78 responses
- Creditor replies

**Evidence:**
- Credit agreements
- Default notices
- Account statements

**Reports:**
- Maxi Reports
- Case assessments

### Document Actions

- **View** - Open document in viewer
- **Download** - Save to your computer
- **Email** - Attach to a creditor email

For uploading documents, see [Documents and Correspondence](./06-documents-and-correspondence.md).

---

## Communications Tab

All correspondence related to this case.

### Viewing Communications

Communications are listed in reverse chronological order:

| Column | Description |
|--------|-------------|
| **Date** | When sent/received |
| **Type** | Email or SMS |
| **Direction** | Sent or Received |
| **To/From** | Client or Creditor name |
| **Subject** | Email subject line |
| **Status** | Sent, Delivered, Opened |

### Email Creditor Button

The prominent "Email Creditor" button opens the email composer to send correspondence to the creditor. This is covered in detail in [Documents and Correspondence](./06-documents-and-correspondence.md).

---

## Activity Log Tab

Complete audit trail of everything that's happened on this case.

### Log Entries

Each entry shows:
- **Timestamp** - Date and time
- **User** - Who performed the action
- **Action** - What was done
- **Details** - Specific information about the change

### Example Entries

```
23/10/2024 14:32 | Jane Doe (Admin)
Status changed: "DSAR Sent" → "DSAR Response Received"

23/10/2024 14:30 | Jane Doe (Admin)
Document uploaded: "Barclays_DSAR_Response.pdf"
Category: Inbound Correspondence

22/10/2024 09:15 | System
Email sent: "Section 78 Chase 1"
To: legal@barclays.co.uk
```

### Filtering the Log

- By user (see only your actions)
- By action type (status changes, documents, communications)
- By date range

---

## Notes Tab

Internal team notes about this case.

### Adding Notes

1. Click **Add Note**
2. Write your note
3. Use @mentions to notify colleagues
4. Add tags for categorization
5. Click **Save**

### Note Best Practices

**Do add notes when:**
- Taking over a case from someone else
- Unusual circumstances occur
- You speak with the client about this case
- Something needs follow-up
- Important observations about the creditor's response

**Note format suggestion:**
```
SPOKE TO CLIENT: Discussed delay in Section 78 response. 
Client understands we're waiting on creditor. 
Will call again if no response by end of week.
@JohnSmith FYI
```

---

## Case Closure

### Closing a Case Successfully

When a case reaches a positive resolution:

1. Ensure all final documents are uploaded
2. Change status to **Case Closed - Successful**
3. Select the closure reason:
   - Debt written off
   - Settlement accepted
   - Credit file corrected
4. Add closing notes summarizing the outcome
5. Confirm closure

### Closing a Case Unsuccessfully

When we can't achieve a positive outcome:

1. Document why the case couldn't succeed
2. Change status to **Case Closed - Unsuccessful**
3. Select the reason:
   - Debt confirmed enforceable
   - Client unable to settle
   - Creditor unresponsive (no resolution possible)
4. Add notes explaining the outcome
5. Confirm closure

### Cancelling a Case

When a case should be abandoned:

1. Document the reason for cancellation
2. Change status to **Case Cancelled**
3. Select the reason:
   - Client request (withdrew from service)
   - Non-payment (client stopped paying fees)
   - Duplicate case
4. Add notes
5. Confirm cancellation

### Can Closed Cases Be Reopened?

Yes, in exceptional circumstances:
- New information emerges
- Creditor changes their position
- Error in original closure decision

To reopen, contact your team lead. Reopening is logged and requires justification.

---

## Common Case Scenarios

### Scenario 1: DSAR Response Received

**What to do:**
1. Download and review the DSAR response documents
2. Upload the documents to the case
3. Change status from "DSAR Sent" to "DSAR Response Received"
4. Review the documents for completeness
5. Change status to "DSAR Reviewed" when analysis complete
6. Proceed to Section 78 or next appropriate step

### Scenario 2: Creditor Not Responding

**What to do:**
1. Check the days in stage (should the chase have been sent?)
2. If chase task exists, complete it by sending the chase email
3. Status will update automatically when you send the chase
4. Document the non-response in notes
5. After Chase 3, consider escalation (ICO complaint)

### Scenario 3: Client Asks About Their Case

**What to do:**
1. Open the case and review current status
2. Check the timeline for recent activity
3. Explain where we are in plain language
4. Note the conversation in case notes
5. If they have concerns, escalate to your team lead

### Scenario 4: Transferring a Case

**What to do:**
1. Ensure all current work is documented
2. Add a comprehensive handover note
3. Reassign to the new handler
4. Notify the new handler directly (message or @mention)
5. Be available for questions during transition

---

## FAQ

### What's the difference between stage and status?

- **Stage** (1-4) = High-level phase of the case (Investigation, Route U, Route E)
- **Status** = Specific step within that stage (DSAR Sent, DSAR Response Received, etc.)

Think of stages as chapters and statuses as pages within those chapters.

### How do I know which cases need my attention?

1. Check your **Task Queue** - tasks tell you what needs action
2. Use the **Days in Stage** filter on Cases - find cases that have been sitting too long
3. Check **Overdue Items** on your dashboard

### Can I see cases I'm not assigned to?

Yes, you can view all cases in the system (based on your role), but you should generally only work on cases assigned to you. If you need to take action on someone else's case, coordinate with them first.

### What if I disagree with a status someone else set?

1. Review the activity log to understand why the change was made
2. Discuss with the colleague who made the change
3. If there's an error, the authorized person can correct it
4. Add a note explaining the correct status if needed

### How many cases should I be handling?

This varies by role and experience:
- New staff: 20-30 active cases while learning
- Experienced handlers: 50-80 active cases
- Your team lead sets specific expectations

---

## Related Documentation

- [Understanding the Workflow](./02-understanding-the-workflow.md) - Case lifecycle overview
- [Investigation Process](./05-investigation-process.md) - DSAR, S78, and Maxi Reports
- [Documents and Correspondence](./06-documents-and-correspondence.md) - Working with documents
- [Tasks and Work Queues](./07-tasks-and-queues.md) - Managing your workload
- [Approval Workflows](./08-approvals.md) - LOC and settlement approvals
