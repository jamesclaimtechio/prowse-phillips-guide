# Client Management

This guide covers everything you need to know about finding, viewing, and managing client records in the system.

---

## What is a Client?

A **client** is a person who has engaged our services to investigate their debts. Every client in the system has:

- **Personal information** (name, contact details, address)
- **One or more cases** (each case = one debt)
- **A payment plan** (covers all their cases)
- **Documents** (ID verification, signed agreements)
- **A timeline** of all activity

### Client vs Lead

| Type | Definition |
|------|------------|
| **Lead** | Someone who started onboarding but hasn't completed payment setup (status: LEAD, DEBT_ADDED, etc.) |
| **Client** | Someone who has completed onboarding and is actively being served (status: ACTIVE, FULLY_PAID, etc.) |

In the system, both are stored in the same place - the "Clients" section. The distinction is made by their status.

---

## Finding Clients

### The Clients List

Access the clients list from the sidebar: **Clients**

[SCREENSHOT: Clients list page with table and filters]

The list shows all clients with key information:

| Column | Description |
|--------|-------------|
| **Name** | Client's full name (click to open profile) |
| **Email** | Contact email address |
| **Phone** | Contact phone number |
| **Active Cases** | Number of currently active cases |
| **Total Cases** | All cases (including closed) |
| **Total Debt** | Sum of debt across active cases |
| **Status** | Current client status (LEAD, ACTIVE, etc.) |
| **Last Activity** | When something last happened on their account |

### Searching for a Client

**Quick Search:**
1. Click the search bar at the top of the page
2. Type the client's name, email, or phone number
3. Results filter as you type
4. Click the client to open their profile

**Global Search:**
Use `Ctrl+K` (Windows) or `Cmd+K` (Mac) from anywhere to search across clients, cases, and creditors.

### Filtering the List

Click the **Filters** button to narrow down results:

**Common filters:**

| Filter | Options | Use Case |
|--------|---------|----------|
| **Status** | LEAD, ACTIVE, MISSED_PAYMENT, etc. | Find clients at a specific stage |
| **Has Active Cases** | Yes / No | Focus on clients with work to do |
| **Assigned To** | Staff member name | See your assigned clients |
| **Date Range** | Created, Last Active | Find recent or old clients |

**Example filter combinations:**
- "My leads needing follow-up" → Status: LEAD, Assigned To: Me
- "Clients with payment issues" → Status: MISSED_PAYMENT
- "New clients this week" → Created: Last 7 days

---

## The Client Profile

Click on any client to open their full profile.

[SCREENSHOT: Client detail page showing header and tabs]

### Profile Header

The header shows essential information at a glance:

```
John Smith                                   [Send Message] [Add Case]
john.smith@email.com | 07700 900123         Client since: 15/10/2024
DOB: 15/03/1985                              Last login: 2 hours ago
```

**Header elements:**
- **Name** - Client's full name
- **Contact details** - Email and phone (click to copy)
- **Date of birth** - For verification purposes
- **Client since** - When they first registered
- **Last login** - When they last accessed the portal
- **Action buttons** - Quick access to common actions

### Profile Tabs

The client profile is organized into tabs:

| Tab | What You'll Find |
|-----|------------------|
| **Overview** | Summary cards, recent activity, quick stats |
| **Cases & Debts** | All cases grouped with status and progress |
| **Timeline** | Visual chronological history |
| **Communications** | All emails and SMS to/from this client |
| **Payments** | Payment plan details and history |
| **Documents** | All documents (ID, agreements, etc.) |
| **Activity Log** | Detailed audit trail |
| **Notes** | Internal team notes |

---

## Overview Tab

The Overview tab gives you a quick summary of the client's situation.

### Summary Cards

**Active Cases Card:**
- Number of active cases
- Total debt amount
- Status breakdown (how many in each stage)

**Payment Summary Card:**
- Payment plan type (12-in-12, Regulated Credit, Pay in Full)
- Total fee amount
- Amount paid so far
- Outstanding balance
- Next payment date and amount
- Payment status (On Track, Late, Missed)

> **Remember:** The payment plan covers ALL cases. This is client-level, not per-case.

### Recent Activity Feed

Shows the last 10 activities across all the client's cases:
- Status changes
- Documents uploaded
- Communications sent
- Payments received

Click any item to jump to that case or document.

### Client Profile Section

- Full address (current and previous)
- Contact preferences
- Any vulnerability flags
- Tags or labels applied to this client

---

## Cases & Debts Tab

This tab shows all cases belonging to this client.

[SCREENSHOT: Cases & Debts tab showing expandable case cards]

### Case Layout

Each case appears as an expandable card:

```
▼ Case #DC-2024-00123 (Active - Section 78 Sent)
  
  Creditor: Barclays Credit Card
  Amount: £5,234.67
  Account: ****1234
  Assigned to: Jane Doe
  Days in stage: 12 days
  
  [View Full Case] [View Timeline]
```

**Click the arrow** to expand and see debt details.

### Case Grouping

Cases are organized by status:
- **Active Cases** - Currently being worked
- **Completed Cases** - Successfully closed (collapsed by default)
- **Cancelled Cases** - Withdrawn or abandoned (collapsed by default)

### Quick Actions

From this tab, you can:
- **View Full Case** - Open the case detail page
- **View Timeline** - Jump to the case timeline
- **Add Case** - Create a new case for this client (if they have additional debts)

---

## Timeline Tab

The Timeline tab shows a visual chronological history of everything that's happened across all the client's cases.

[SCREENSHOT: Visual timeline with events]

### Timeline Visualization

```
Today ────────────────────────────────○
                                      │
23 Oct 2024                           │
● Payment Received                    │
  Case #DC-2024-00123                 │
  £516.67 via Direct Debit            │
                                      │
20 Oct 2024                           │
● Document Uploaded                   │
  Case #DC-2024-00123                 │
  Section 78 Response - Barclays      │
                                      │
15 Oct 2024                           │
● Case Status Changed                 │
  Case #DC-2024-00456                 │
  Investigation → Route E             │
                                      │
01 Oct 2024                           │
◉ Payment Plan Started                │
  12-in-12 Plan: £6,200               │
                                      │
15 Sep 2024                           │
◉ Client Onboarded                    │
  john.smith@email.com                │
```

### Event Types

**Milestones (Large icons):**
- Client onboarded
- Case created
- Case completed
- Payment plan started

**Case Events:**
- Status changes
- Route determination
- Handler assignments

**Documents:**
- Important documents uploaded
- Documents sent to creditors

**Communications:**
- Key emails sent or received

**Payments:**
- Payments received
- Failed payments

### Filtering the Timeline

Use the filters at the top to focus on specific events:
- **Date range** - Last 7 days, 30 days, 90 days, all time
- **Event type** - Milestones, Case events, Documents, Communications, Payments
- **Case** - Show events for a specific case only

### Timeline vs Activity Log

| Timeline | Activity Log |
|----------|--------------|
| Visual, user-friendly | Detailed audit trail |
| Major events only | Every single action |
| For quick overview | For compliance/debugging |
| Designed for humans | Complete technical record |

---

## Communications Tab

This tab shows all communications with this client (and creditors on their cases).

### Communication List

Communications are displayed in reverse chronological order (newest first):

| Column | Description |
|--------|-------------|
| **Date** | When the communication was sent/received |
| **Type** | Email or SMS |
| **Direction** | Sent (outbound) or Received (inbound) |
| **Recipient** | Client or Creditor name |
| **Subject** | Email subject line |
| **Case** | Which case it relates to (if any) |
| **Status** | Sent, Delivered, Opened, Failed |

### Filtering Communications

**By recipient type:**
- **All** - Show everything
- **Client** - Only communications with the client
- **Creditor** - Only communications with creditors

**By case:**
- **All Cases** - Communications across all cases
- **Client-Level Only** - General communications not tied to a specific case
- **Specific Case** - Select a case to see only its communications

**By direction:**
- **All** - Both sent and received
- **Sent** - Outbound communications only
- **Received** - Inbound communications only

### Viewing Communication Details

Click on any communication to expand and see:
- Full email content
- Any attachments
- Delivery timeline (sent → delivered → opened)
- Who sent it

---

## Payments Tab

This tab shows the client's payment plan and history.

### Payment Plan Summary

```
Payment Plan: 12-in-12 Instalment Agreement
Total Fee (all cases): £6,200
├─ Case #DC-2024-00123: £2,400 (3 debts)
├─ Case #DC-2024-00456: £3,800 (2 debts)

Payment Schedule:
├─ Monthly Amount: £516.67
├─ Instalments: 12 monthly payments
├─ Start Date: 01 Nov 2024
├─ End Date: 01 Oct 2025
├─ Next Payment: £516.67 on 01 Dec 2024
└─ Status: On Track ✓

Progress: 2 of 12 instalments paid (£1,033.34 / £6,200 - 17%)
```

> **Key Point:** This ONE payment plan covers ALL the client's cases. Payment is at the client level.

### Payment Method

Shows the payment method on file:
- Direct Debit (recommended)
- Card
- Bank Transfer

For Direct Debit, shows:
- Bank name (last 4 digits of account)
- Mandate status (Active, Cancelled, Pending)

### Payment Schedule Table

A table showing all scheduled payments:

| Instalment | Due Date | Amount | Status |
|------------|----------|--------|--------|
| 1 | 01 Nov 2024 | £516.67 | ✓ Paid |
| 2 | 01 Dec 2024 | £516.67 | ✓ Paid |
| 3 | 01 Jan 2025 | £516.67 | ◯ Scheduled |
| ... | ... | ... | ... |

### Payment History

Recent payments received:
- Date
- Amount
- Method
- Status

---

## Documents Tab

This tab shows all documents associated with the client.

### Document Categories

**Client Documents:**
- Identity documents (passport, driving licence)
- Proof of address (utility bills, bank statements)
- Signed agreements (Client Care Letter, Letter of Authority)
- Affordability assessments

**Case Documents:**
Grouped by case, then by category:
- DSAR requests and responses
- Section 78 requests and responses
- Letters of Claim
- Settlement correspondence

### Document Actions

For each document, you can:
- **View** - Open in document viewer
- **Download** - Save to your computer

---

## Notes Tab

Internal notes about this client (not case-specific).

### When to Use Client Notes

Use client-level notes for information that applies to the person, not a specific case:
- Communication preferences ("Prefers email, works nights")
- Vulnerability considerations ("Handle with extra care")
- General observations ("Very responsive, always replies same day")

For case-specific notes, use the notes on the case itself.

### Adding a Note

1. Click **Add Note** button
2. Type your note content
3. Use **@mentions** to tag colleagues (type @ then their name)
4. Add **tags** for categorization (#vulnerability, #vip, etc.)
5. Click **Save**

### Note History

All notes are shown chronologically with:
- Author name and avatar
- Timestamp
- Full note content
- Edit/Delete options (for your own notes)

---

## Common Client Actions

### Sending a Message to a Client

1. Open the client profile
2. Click **Send Message** button in the header
3. Choose message type (Email or SMS)
4. Select a template or write custom message
5. Review and send

### Adding a New Case

If a client has additional debts to investigate:

1. Open the client profile
2. Click **Add Case** button
3. Enter the debt details:
   - Creditor
   - Amount owed
   - Account reference
   - Debt type
4. Save the case

> **Note:** The client's existing payment plan may need adjustment to cover the new case fees.

### Updating Client Details

To update contact information:

1. Open the client profile
2. Click **Edit** button near their details
3. Update the information
4. Save changes

Be careful when changing email addresses - this affects their portal login.

---

## FAQ

### How do I see all of a client's cases at once?

Open the client profile and go to the **Cases & Debts** tab. All cases are listed there, grouped by status.

### Where do I check if a client has paid?

1. Open the client profile
2. Look at the **Payments** tab
3. Or check the Payment Summary card on the Overview tab

Remember: Payment status is at the CLIENT level and affects all their cases.

### How do I contact a client?

1. Open their profile
2. Click **Send Message** for formal communication (logged)
3. Or use their phone/email directly for informal contact (remember to log it as a note)

### What if a client has the wrong email address?

1. Verify the correct email with the client
2. Update the email in their profile
3. Add a note explaining the change
4. If they use the portal, they'll need the new magic link

### How do I know if a client is vulnerable?

Look for:
- Vulnerability flags on their profile
- Tags like #vulnerability
- Notes from colleagues mentioning concerns
- Signs in their communication history

If you identify vulnerability, add a note and inform your team lead.

### Can I merge duplicate client records?

No, duplicates cannot be merged through the interface. If you find duplicate records, report to your team lead or IT administrator.

---

## Related Documentation

- [Understanding the Workflow](./02-understanding-the-workflow.md) - How cases progress
- [Case Management](./04-case-management.md) - Working with individual cases
- [Client Payments](./09-payments.md) - Deep dive into payment management
- [Communications](./10-communications.md) - Detailed communication features
