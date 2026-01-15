---
title: "Communications"
slug: "communications"
description: "The communications system - viewing, filtering, and understanding emails and SMS messages."
order: 18
---

# Communications

This guide covers the communications system - how to view, filter, and understand all emails and SMS messages sent to and from clients and creditors.

---

## Overview

The communications system tracks all correspondence:
- **Outbound:** Emails and SMS we send to clients and creditors
- **Inbound:** Emails we receive (when configured)

Every communication is logged with:
- Timestamp
- Recipients
- Content
- Delivery status
- Related case (if applicable)

---

## Accessing Communications

### Client Communications

From a client profile:
1. Open the client
2. Go to **Communications** tab

This shows all communications for this client across all their cases.

### Case Communications

From a case:
1. Open the case
2. Go to **Communications** tab

This shows communications specific to this case only.

### All Communications (if available)

Some staff may have access to a global communications view via the sidebar.

---

## Communication List

Communications are displayed in reverse chronological order (newest first).

[SCREENSHOT: Communications list with filters]

### List Columns

| Column | Description |
|--------|-------------|
| **Date/Time** | When sent or received |
| **Type** | Email or SMS |
| **Direction** | Outbound (Sent) or Inbound (Received) |
| **To/From** | Recipient or sender |
| **Subject** | Email subject line (or SMS preview) |
| **Case** | Related case reference |
| **Status** | Delivery status |

### Communication Types

| Type | Icon | Description |
|------|------|-------------|
| **Client Email** | ✉️ | Email to/from the client |
| **Client SMS** | 💬 | SMS to the client |
| **Creditor Email** | ✉️ | Email to/from a creditor |

---

## Filtering Communications

### Filter Options

Use filters to find specific communications:

**By Recipient Type:**
- **All** - Show everything
- **Client** - Only client communications
- **Creditor** - Only creditor communications

**By Case:**
- **All Cases** - Communications across all cases
- **Client-Level Only** - Not tied to a specific case
- **[Specific Case]** - Select from dropdown

**By Direction:**
- **All** - Both sent and received
- **Sent** - Outbound only
- **Received** - Inbound only

**By Date Range:**
- Quick options: Today, Last 7 days, Last 30 days, All time
- Custom date range picker

### Filter Examples

**"All emails I sent to Barclays about this case":**
- Case: [Select the case]
- Recipient: Creditor
- Direction: Sent

**"Recent client communications":**
- Recipient: Client
- Direction: All
- Date: Last 7 days

**"Failed sends":**
- Status: Failed
- Direction: Sent

---

## Communication Details

### Viewing Full Content

Click on any communication to expand and see full details:

```
Email Details
════════════════════════════════════════

From: legal@prowse-phillips.co.uk
To: legal@barclays.co.uk
Date: 15 Nov 2024 10:32 AM
Subject: Section 78 Request - Account ****1234

Status: ✅ Delivered (15 Nov 2024 10:33 AM)
Opened: ✅ Yes (15 Nov 2024 11:15 AM)

Case: DC-2024-00123
Sent By: Jane Doe (Admin)

────────────────────────────────────────

[Email content displayed here]

Dear Sir/Madam,

Re: Section 78 Consumer Credit Act 1974 Request
Client: John Smith
Account Reference: ****1234

We are writing on behalf of our client in accordance with 
Section 78 of the Consumer Credit Act 1974...

────────────────────────────────────────

Attachments:
📎 Letter_of_Authority.pdf (245 KB)

════════════════════════════════════════
```

### Email Content Display

- HTML emails render as formatted content
- Plain text emails display as-is
- Attachments are listed (downloadable where available)

### SMS Content Display

For SMS messages:
- Phone number shown
- Full message text displayed
- Character count shown

---

## Delivery Status

### Status Indicators

| Status | Icon | Meaning |
|--------|------|---------|
| **Draft** | 📝 | Not yet sent |
| **Queued** | ⏳ | Waiting to be sent |
| **Sent** | 📤 | Dispatched to recipient |
| **Delivered** | ✅ | Confirmed receipt by server |
| **Opened** | 👁️ | Recipient opened (when trackable) |
| **Failed** | ❌ | Delivery failed |

### Understanding Status

**Sent vs Delivered:**
- **Sent** = We dispatched the email
- **Delivered** = Recipient's email server accepted it

A communication can be "Sent" but not "Delivered" if:
- Invalid email address
- Recipient's server rejected it
- Technical issues

**Opened Tracking:**
- Not always reliable (depends on recipient's email client)
- Many email clients block tracking
- Absence of "Opened" doesn't mean it wasn't read

### Failed Communications

When a communication fails:

1. Status shows **Failed**
2. Failure reason is recorded
3. May require action (correct address, resend)

Common failure reasons:
- Invalid email address
- Mailbox full
- Server rejected
- Attachment too large

---

## Communication Timeline

### On Client Profile

The Timeline tab shows major communications as events in the visual timeline:
- Key emails sent to creditors
- Important client communications
- Chase emails

This provides context alongside other case events.

### On Case Detail

The Activity Log shows all communications for that case in detailed audit format.

---

## Sending Communications

### Sending to Clients

(If available from your interface)

1. Click **Send Message** on client profile
2. Choose type (Email or SMS)
3. Select or compose message
4. Review and send

### Sending to Creditors

Use the **Email Creditor** feature from case communications:

1. Open case Communications tab
2. Click **Email Creditor**
3. Follow the template workflow
4. Send

See [Documents and Correspondence](/documents-and-correspondence) for full details.

---

## Template Library

### Accessing Templates

Templates are available when composing emails:

1. Open Email Creditor modal
2. Click template dropdown
3. Browse available templates

### Template Categories

| Category | Templates |
|----------|-----------|
| **DSAR** | Initial request, Chase 1/2/3 |
| **Section 78** | Initial request, Chase |
| **LOC** | Letter of Claim, Follow-ups |
| **Settlement** | Proposal, Follow-ups |
| **General** | Custom creditor inquiry |

### Template Management

Templates are managed centrally. If you need a new template or changes to an existing one, contact your team lead or system administrator.

---

## Best Practices

### Before Sending

**Verify recipient:**
- Is the email address correct?
- Is it the right contact for this purpose?

**Check content:**
- All variables replaced?
- No typos or errors?
- Appropriate tone?

**Attachments:**
- Required documents attached?
- Under size limits?

### After Sending

**Monitor status:**
- Check for delivery confirmation
- Watch for failures

**Document actions:**
- Communications are automatically logged
- Add notes if there's important context

### For Failed Sends

1. Check the failure reason
2. Correct the issue (usually email address)
3. Resend (compose new email)
4. Document the issue if significant

---

## Search and Export

### Searching Communications

Use the search bar on the communications list to find specific items:
- Search by subject line
- Search by recipient
- Search by content (if full-text search available)

### Exporting (if available)

Some views may offer export options:
- Export as CSV for records
- Export as PDF for compliance

Check with your administrator for export capabilities.

---

## Inbound Communications

### Email Replies

When creditors or clients reply to emails:
- Replies may appear in the system
- Depends on email system configuration
- Check your email client if replies don't appear

### Manual Logging

If you receive a communication outside the system:

1. Add a note to the case
2. Upload any documents
3. Reference the communication date and content

This ensures the case record is complete.

---

## SMS Communications

### When SMS is Used

SMS is typically used for:
- Appointment reminders
- Payment reminders
- Urgent notifications
- Portal access links

### SMS Content

SMS messages are limited:
- 160 characters per segment
- Plain text only (no formatting)
- Links may be included

### Viewing SMS History

SMS communications appear in the same list as emails:
- Type column shows "SMS"
- Click to see phone number and message

---

## Privacy and Compliance

### Data Protection

All communications are stored in compliance with:
- GDPR (data retention, security)
- FCA requirements (record keeping)
- Legal professional privilege (where applicable)

### Access Control

- Staff can only see communications for clients/cases they're authorized to access
- Sensitive communications may be restricted

### Retention

Communications are retained according to firm policy:
- Minimum 6 years (regulatory requirement)
- May be longer for ongoing matters

---

## FAQ

### How do I know if my email was received?

Check the status:
- **Delivered** = Reached recipient's server
- **Opened** = They opened it (when trackable)

If status shows "Sent" but not "Delivered" after a few hours, there may be an issue.

### Why didn't I get a notification when the creditor replied?

Inbound email handling depends on system configuration. If you're expecting a reply:
1. Check your regular email
2. Check the Communications tab
3. Add to case notes if received outside system

### Can I recall a sent email?

No, once sent, emails cannot be recalled. If you sent something in error:
1. Document the error
2. Send a correction if needed
3. Inform your team lead

### How do I resend a failed email?

You cannot retry a failed email directly. Instead:
1. Note the failure reason
2. Open Email Creditor
3. Compose the email again
4. Correct any issues
5. Send

### Why is there no "Opened" status?

"Opened" tracking:
- Requires a tracking pixel
- Can be blocked by recipient
- Isn't always reliable

Absence of "Opened" doesn't mean the email wasn't read.

### Can I see attachments that were sent?

Attachments sent with emails should be listed in the communication details. If the documents were case attachments, they're also in the Documents tab.

---

## Related Documentation

- [Documents and Correspondence](/documents-and-correspondence) - Sending creditor emails
- [Client Management](/client-management) - Client communications tab
- [Case Management](/case-management) - Case communications tab
- [Investigation Process](/investigation-process) - DSAR and S78 correspondence
