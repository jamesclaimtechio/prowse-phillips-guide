# Documents and Correspondence

This guide covers everything about managing documents and sending correspondence to creditors - essential skills for daily case handling.

---

## Document Management Overview

Documents are central to debt contention work. Every case accumulates documents as it progresses:
- Outbound letters we send
- Responses we receive
- Agreements clients sign
- Evidence we gather

Understanding how to upload, organize, and use documents efficiently will make your work faster and more accurate.

---

## Document Storage Levels

Documents are stored at two levels:

### Client-Level Documents

Documents that apply to the person, not a specific case:
- **Identity documents** (passport, driving licence)
- **Proof of address** (utility bills, bank statements)
- **Signed agreements** (Client Care Letter, Letter of Authority)
- **Affordability forms**

These are accessed from the client's Documents tab and are shared across all their cases.

### Case-Level Documents

Documents specific to one case/debt:
- **DSAR requests and responses**
- **Section 78 requests and responses**
- **Letters of Claim**
- **Settlement correspondence**
- **Maxi Reports**
- **Creditor evidence**

These are accessed from the case's Documents tab.

---

## Uploading Documents

### From the Case Documents Tab

1. Open the case detail page
2. Go to the **Documents** tab
3. Click **Upload Document**
4. The upload modal appears

[SCREENSHOT: Document upload modal]

### Upload Process

**Step 1: Select Files**
- Drag and drop files onto the upload area, OR
- Click "Browse" to select files from your computer

**Supported formats:**
- PDF (preferred for legal documents)
- Images (JPG, PNG) - for ID documents
- Word documents (DOC, DOCX)
- Maximum file size: 25MB per file

**Step 2: Set Document Details**

For each file, specify:

| Field | Description | Example |
|-------|-------------|---------|
| **Document Type** | Category of document | DSAR Response |
| **Document Name** | Descriptive name | Barclays DSAR Response - Nov 2024 |
| **Description** | Optional notes | Received via email, 47 pages |

**Step 3: Confirm Upload**
- Review the document list
- Click **Upload**
- Wait for confirmation

### Document Categories

| Category | Document Types |
|----------|---------------|
| **Outbound Correspondence** | DSAR Request, S78 Request, LOC, Settlement |
| **Inbound Correspondence** | DSAR Response, S78 Response, Creditor Letters |
| **Client Documents** | ID, Proof of Address, Signed Agreements |
| **Evidence** | Credit Agreements, Statements, Default Notices |
| **Reports** | Maxi Reports, Case Assessments |
| **Internal** | Notes, Assessment Worksheets |

---

## Document Organization Best Practices

### Naming Conventions

Use consistent naming for easy searching:

**Format:** `[Creditor] - [Document Type] - [Date]`

**Good examples:**
- `Barclays - DSAR Response - 2024-11-05`
- `Lloyds - Section 78 Request - 2024-10-15`
- `Capital One - LOC - 2024-12-01`

**Avoid:**
- `Document1.pdf`
- `Scan001.pdf`
- `Response`

### When to Upload

Upload documents as soon as you receive them:
- Immediately after receiving an email with attachments
- Same day if received by post
- Before changing case status

This ensures the case record is always current.

---

## Email Creditor: Sending Correspondence

The "Email Creditor" feature is your main tool for sending professional correspondence to creditors.

### Accessing Email Creditor

1. Open the case detail page
2. Go to the **Communications** tab
3. Click the **Email Creditor** button (purple)

[SCREENSHOT: Email Creditor modal with template dropdown]

### The Email Composer

The modal has several sections:

**Recipient:**
- Pre-filled with creditor's email address
- Editable if you need to use a different address

**Template Selection:**
- Dropdown list of available templates
- Select the appropriate template for your purpose

**Variable Form:**
- Shows required variables for the template
- Some auto-fill from case data
- Others require your input

**Email Preview:**
- Subject line (editable)
- Body content (editable after template applied)

**Attachments:**
- Select documents from the case to attach

---

## Available Email Templates

### Initial Request Templates

| Template | Purpose | Key Variables |
|----------|---------|---------------|
| **DSAR Request** | Request all client data under GDPR | Creditor, Client, Account, Case Ref |
| **Section 78 Request** | Request credit agreement under CCA | Creditor, Client, Account, Case Ref |
| **Section 77 Request** | Request account statement | Creditor, Client, Account, Case Ref |
| **Account Freeze Request** | Request to freeze interest/enforcement | Creditor, Client, Account |
| **General Inquiry** | Custom correspondence | Custom Message |

### Route U Templates

| Template | Purpose | Key Variables |
|----------|---------|---------------|
| **Letter of Claim (LOC)** | Assert debt is unenforceable | Creditor, Client, Grounds |
| **LOC Follow-up** | Chase response to LOC | Original Send Date |

### Route E Templates

| Template | Purpose | Key Variables |
|----------|---------|---------------|
| **Settlement Proposal** | Offer to settle for less | Settlement Terms, Debt Amount |
| **Settlement Follow-up** | Chase settlement response | Original Send Date |

### Chase Templates

| Template | Purpose | Key Variables |
|----------|---------|---------------|
| **DSAR Chase** | Chase non-response to DSAR | Original Send Date |
| **Section 78 Chase** | Chase non-response to S78 | Original Send Date |
| **LOC Chase** | Chase non-response to LOC | Original Send Date, Grounds |
| **Settlement Chase** | Chase settlement response | Original Send Date, Terms |

---

## Using Templates: Step by Step

### Step 1: Select Template

1. Open the template dropdown
2. Choose the appropriate template
3. The variable form appears

### Step 2: Fill Variables

**Auto-filled variables** (from case data):
- CREDITOR_NAME
- CLIENT_NAME
- ACCOUNT_NUMBER
- CASE_REFERENCE
- DEBT_AMOUNT

**You must fill:**
- ORIGINAL_SEND_DATE (for chase templates)
- SETTLEMENT_TERMS (for settlement templates)
- UNENFORCEABILITY_GROUNDS (for LOC templates)

Variables that aren't filled are highlighted in red.

### Step 3: Apply Template

1. Click **Apply Template**
2. The subject and body populate with your values
3. Variables are replaced with actual values
4. The email becomes editable

### Step 4: Review and Edit

Before sending:
- Read through the entire email
- Check all variables were replaced correctly
- Verify creditor name spelling
- Confirm amounts are correct
- Edit if needed (the content is fully editable)

### Step 5: Add Attachments

1. Click **Select Attachments**
2. The document selector shows case documents
3. Check the documents you want to attach
4. Common attachments:
   - Letter of Authority (almost always)
   - Supporting evidence
   - Previous correspondence

**Attachment size limit:** 25MB total

### Step 6: Preview and Send

1. Click **Preview** to see the final email
2. Verify everything looks correct
3. Click **Send Email**
4. Wait for confirmation

---

## Attachment Selection

### Document Attachment Selector

[SCREENSHOT: Document attachment selector with checkboxes]

When you click "Select Attachments":
- All case documents are listed
- Each shows filename, type, and size
- Checkboxes allow multiple selection
- Total size shown at bottom

### What to Attach

**DSAR Request:**
- Letter of Authority

**Section 78 Request:**
- Letter of Authority

**Letter of Claim:**
- Letter of Authority
- Supporting evidence (S78 response, breach findings)

**Settlement Proposal:**
- Letter of Authority
- Affordability evidence (if supporting the offer)

### Attachment Warnings

If total attachments exceed 25MB:
- Red warning banner appears
- You must remove some attachments
- Consider sending large files separately

---

## After Sending

### What Happens Automatically

1. **Email is sent** via our email system
2. **Status updates** (if chase email → case status changes)
3. **Communication logged** in case Communications tab
4. **Activity recorded** in Activity Log

### Tracking Delivery

In the Communications tab, each email shows:
- **Sent** - Email dispatched
- **Delivered** - Reached recipient's server
- **Opened** - Recipient opened the email (not always tracked)
- **Failed** - Delivery failed (see reason)

---

## Generating Documents

Some documents can be generated from templates (rather than composed as emails).

### Generated Document Types

- Client Care Letters
- Payment Plan Agreements
- Letters of Authority
- Fee Summaries

### How to Generate

1. Open case or client Documents tab
2. Click **Generate Document**
3. Select document type
4. Review generated content
5. Save to case documents

Generated documents are automatically saved and can be downloaded or attached to emails.

---

## Document Viewer

### Opening Documents

Click any document to open it in the document viewer.

### Viewer Features

- **Page navigation** - Move through multi-page documents
- **Zoom** - Zoom in/out for detail
- **Download** - Save to your computer
- **Full screen** - View without distractions

### Supported Formats

- PDF - Full support with navigation
- Images - Display with zoom
- Word documents - Converted to viewable format

---

## Managing Correspondence Records

### Viewing Past Correspondence

All sent and received correspondence appears in:
- Case Communications tab (case-specific)
- Client Communications tab (all cases)

### Correspondence Details

Click any communication to see:
- Full email content (HTML formatted)
- Attachments that were included
- Delivery timeline
- Who sent it
- Related case

### Filtering Correspondence

Filter by:
- **Direction** - Sent or Received
- **Type** - Client or Creditor
- **Case** - Specific case or all cases
- **Date range** - Time period

---

## Best Practices

### Before Sending Any Email

1. **Verify recipient email** - Is it the correct address for this creditor?
2. **Check all variables** - No {{VARIABLE_NAME}} remaining?
3. **Review amounts** - Are debt amounts correct?
4. **Attach Letter of Authority** - Almost always required
5. **Read through completely** - Would you be comfortable if a solicitor saw this?

### Email Quality Standards

**Professional tone:**
- Formal but not aggressive
- Clear and direct
- Reference relevant legislation

**Accuracy:**
- Correct client name
- Correct creditor name
- Accurate account references
- Correct dates

**Completeness:**
- All necessary attachments
- All required information
- Clear requested action

### Common Mistakes to Avoid

| Mistake | Prevention |
|---------|------------|
| Wrong creditor email | Double-check before sending |
| Missing Letter of Authority | Always attach LOA |
| Variables not replaced | Check for {{ }} in email |
| Wrong dates | Verify original send dates for chases |
| Typos in names | Proofread before sending |

---

## FAQ

### How do I know which email address to use for a creditor?

The creditor's preferred email is stored in the Creditors database. The Email Creditor modal auto-fills from this data. If you need a different address (e.g., complaints vs. general), you can edit it.

### Can I save an email as a draft?

Not currently. Prepare all information before opening the Email Creditor modal. If you need to close it, you'll need to start again.

### What if an email fails to send?

1. Check the Communications tab for the error reason
2. Common issues: Invalid email address, attachment too large
3. Fix the issue and resend (you'll need to compose again)

### Can I attach documents from other cases?

No, you can only attach documents from the current case. If you need a document from another case, download it first and upload it to this case.

### How do I know if the creditor received my email?

Check the Communication status:
- **Delivered** = Reached their email server
- **Opened** = They opened it (if tracking works)
- No response after deadline = Send a chase

### What if I sent an email with errors?

1. Document the error in case notes
2. Send a corrected email if needed
3. Inform your team lead if it's significant
4. Learn from it and move on

---

## Related Documentation

- [Case Management](./04-case-management.md) - Status changes after sending
- [Investigation Process](./05-investigation-process.md) - When to send each request
- [Tasks and Work Queues](./07-tasks-and-queues.md) - Chase task automation
- [Communications](./10-communications.md) - Detailed communication tracking
