---
title: "Approval Workflows"
slug: "approvals"
description: "The approval process for legal documents - solicitor review and authorization before sending to creditors."
order: 16
---

# Approval Workflows

This guide explains the approval process for legal documents. Certain documents require solicitor review and authorization before being sent to creditors - this ensures legal accuracy and protects both the firm and our clients.

---

## Why Approvals Exist

Some documents carry significant legal weight:
- **Letters of Claim (LOC)** - Assert that a debt is unenforceable
- **Settlement Proposals** - Commit to specific terms with creditors
- **Route Determinations** - Classify whether a debt is enforceable

Getting these wrong could expose the firm to liability or harm the client's case. The approval process ensures:

1. **Legal accuracy** - A qualified solicitor verifies the assertions
2. **Quality control** - A second pair of eyes catches errors
3. **Compliance** - Regulatory requirements are met
4. **Protection** - Both firm and client interests are safeguarded

---

## Who Can Approve?

Only staff with the **Solicitor** role can approve legal documents.

| Role | Can Submit | Can Approve | Can Reject |
|------|------------|-------------|------------|
| Sales | ❌ | ❌ | ❌ |
| Admin | ✅ | ❌ | ❌ |
| Solicitor | ✅ | ✅ | ✅ |

---

## Types of Approvals

### 1. Route Determination Approval

**What it is:** Confirming whether a case should follow Route U (Unenforceable) or Route E (Enforceable).

**When it's needed:** After investigation is complete and before proceeding to LOC or settlement.

**What's reviewed:**
- DSAR findings
- Section 78 findings
- Maxi Report analysis
- Proposed route and justification

### 2. Letter of Claim (LOC) Approval

**What it is:** Approving a Letter of Claim before it's sent to the creditor.

**When it's needed:** Before sending any LOC asserting unenforceability.

**What's reviewed:**
- Legal grounds cited
- Evidence supporting the claim
- Accuracy of statements
- Appropriate tone and language

### 3. Settlement Proposal Approval

**What it is:** Approving a settlement offer before it's sent to the creditor.

**When it's needed:** Before sending any settlement proposal.

**What's reviewed:**
- Proposed settlement terms
- Client affordability data
- Whether terms are reasonable
- Compliance with regulations

---

## The Approval Queue

### Accessing Approvals

**From Sidebar:** Click **Approvals** to see the approval queue.

[SCREENSHOT: Approvals work queue showing pending items]

### Queue Views

**Pending Approvals:** Items waiting for review
**My Submissions:** Items you've submitted (for tracking)
**Approved:** Recently approved items
**Rejected:** Recently rejected items

### Queue Columns

| Column | Description |
|--------|-------------|
| **Type** | Route / LOC / Settlement |
| **Case** | Related case reference |
| **Client** | Client name |
| **Submitted By** | Who submitted for approval |
| **Submitted Date** | When it was submitted |
| **Status** | Pending / Approved / Rejected |
| **Priority** | Based on case urgency |

---

## Submitting for Approval (Admin Workflow)

### Submitting a Route Determination

**When:** After completing investigation (DSAR + S78 + Maxi Report reviewed)

**Step 1: Prepare Your Analysis**
Ensure you have documented:
- Key findings from DSAR
- Key findings from Section 78
- Maxi Report breach summary
- Your recommended route (U or E)
- Justification for the recommendation

**Step 2: Submit for Approval**
1. Open the case
2. Go to **Approvals** section (or use "Submit for Approval" button)
3. Select **Route Determination**
4. Fill in the form:

```
Approval Request: Route Determination
──────────────────────────────────────
Case: DC-2024-00123
Client: John Smith
Creditor: Barclays

Proposed Route: [U - Unenforceable / E - Enforceable]

Justification:
[Explain your reasoning - reference specific evidence]

Key Evidence:
☑ DSAR Response - No signed agreement found
☑ S78 Response - Only reconstituted copy provided
☑ Maxi Report - 3 critical breaches identified

Supporting Notes:
[Additional context for the solicitor]

[Submit for Review]
──────────────────────────────────────
```

**Step 3: Update Case Status**
The case status changes to **Route Determination Needed** (pending approval).

### Submitting an LOC for Approval

**When:** After route is determined as U and LOC is drafted

**Step 1: Draft the LOC**
1. Open the case
2. Go to Documents or Email Creditor
3. Select the LOC template
4. Fill in all variables including **grounds for unenforceability**
5. Review thoroughly

**Step 2: Submit for Approval**
1. From the Email Creditor modal or case, select **Submit for Approval**
2. Select **Letter of Claim**
3. Attach the draft LOC document
4. Add submission notes

```
Approval Request: Letter of Claim
──────────────────────────────────────
Case: DC-2024-00123
Client: John Smith
Creditor: Barclays

LOC Document: [Barclays_LOC_Draft.pdf]

Grounds Cited:
1. No signed credit agreement (S78 failure)
2. Missing prescribed terms (APR not stated)
3. Improper default notice (wrong amount)

Request to Creditor:
- Write off debt in full
- Remove adverse credit file entries
- Cease all collection activity

Notes for Reviewer:
[Any specific points to consider]

[Submit for Review]
──────────────────────────────────────
```

**Step 3: Update Case Status**
Status changes to **LOC Pending Approval**.

### Submitting a Settlement for Approval

**When:** After route is determined as E and settlement terms are drafted

**Step 1: Review Affordability**
Confirm the client's current affordability is on file and up to date.

**Step 2: Draft Settlement Terms**
Determine:
- Settlement amount (e.g., 40% of debt)
- Payment structure (lump sum or instalments)
- Any conditions

**Step 3: Submit for Approval**
1. Select **Settlement Proposal**
2. Enter settlement details

```
Approval Request: Settlement Proposal
──────────────────────────────────────
Case: DC-2024-00123
Client: John Smith
Creditor: Barclays
Debt Amount: £5,234.67

Proposed Settlement:
Amount: £2,094.00 (40% of debt)
Payment: Lump sum within 30 days

OR

Amount: £2,617.00 (50% of debt)
Payment: £218.08/month for 12 months

Affordability Summary:
Disposable income: £350/month
Existing commitments: £150/month
Available for settlement: £200/month

Justification:
[Why these terms are appropriate]

[Submit for Review]
──────────────────────────────────────
```

---

## Reviewing Approvals (Solicitor Workflow)

### Accessing Pending Approvals

Solicitors see pending approvals:
- On their dashboard
- In the Approvals queue
- Via notification

### Review Process

**Step 1: Open the Approval Request**
Click to view full details including:
- Submission information
- Attached documents
- Case context
- Previous approvals (if any)

**Step 2: Review the Evidence**
- Open the case to review documents
- Check DSAR and S78 responses
- Review Maxi Report findings
- Verify the analysis is sound

**Step 3: Make a Decision**

**Option A: Approve**
1. Click **Approve**
2. Add any notes or conditions
3. Confirm

```
Approval Decision
──────────────────────────────────────
Status: ✅ APPROVED

Notes: 
Evidence supports Route U determination. 
LOC grounds are well-founded.
Proceed with sending to creditor.

Approved by: Sarah Jones (Solicitor)
Date: 15 Nov 2024

[Confirm Approval]
──────────────────────────────────────
```

**Option B: Reject**
1. Click **Reject**
2. Provide detailed feedback
3. Specify what needs to change

```
Approval Decision
──────────────────────────────────────
Status: ❌ REJECTED

Reason:
The LOC cites improper default notice, but I don't 
see evidence of this in the DSAR. Please:
1. Upload the default notice from DSAR
2. Clarify what makes it "improper"
3. Resubmit with supporting evidence

Rejected by: Sarah Jones (Solicitor)
Date: 15 Nov 2024

[Confirm Rejection]
──────────────────────────────────────
```

### What Happens After Decision

**If Approved:**
- Submitter is notified
- Case status updates (e.g., LOC Pending Approval → LOC Approved)
- Document/email is released for sending
- Activity logged

**If Rejected:**
- Submitter is notified with feedback
- Case status reverts (e.g., LOC Pending Approval → LOC Drafting)
- Submitter must address issues and resubmit
- Activity logged

---

## Handling Rejections

### What to Do When Your Submission is Rejected

**Step 1: Read the Feedback Carefully**
Understand exactly what the solicitor needs.

**Step 2: Address Each Point**
Work through each issue raised:
- Gather missing evidence
- Clarify reasoning
- Revise the document

**Step 3: Resubmit**
1. Make the necessary changes
2. Submit again for approval
3. Reference that you've addressed previous feedback

**Example resubmission note:**
```
RESUBMISSION - Addressing previous rejection:

1. Default notice uploaded (see document: Barclays_Default_Notice.pdf)
2. Default notice states £5,500 owed but account showed £5,234 - 
   difference of £266 constitutes material error
3. Supporting case law: XYZ v ABC [2019] - similar discrepancy 
   held to invalidate default

Previous rejection reference: REJ-2024-00456
```

### Common Rejection Reasons

| Reason | How to Fix |
|--------|------------|
| Missing evidence | Upload the referenced document |
| Unclear grounds | Provide more specific legal basis |
| Factual error | Correct the inaccuracy |
| Tone issues | Revise language to be more professional |
| Wrong template | Use the correct template |
| Incomplete form | Fill in all required fields |

---

## Approval Timelines

### Expected Turnaround

| Approval Type | Target Time | Maximum |
|---------------|-------------|---------|
| Route Determination | 24 hours | 48 hours |
| LOC | 24 hours | 48 hours |
| Settlement | 24 hours | 48 hours |

If approval is taking longer than expected, check with the approving solicitor or escalate to your team lead.

### Urgent Approvals

If an approval is time-sensitive:
1. Mark priority as **Urgent** when submitting
2. Add note explaining the urgency
3. Consider notifying the solicitor directly

---

## Tracking Your Submissions

### Viewing Submission Status

1. Go to **Approvals**
2. Select **My Submissions** view
3. See status of each submission

### Submission Statuses

| Status | Meaning |
|--------|---------|
| **Pending** | Awaiting solicitor review |
| **Under Review** | Solicitor is currently reviewing |
| **Approved** | Approved and ready to proceed |
| **Rejected** | Rejected with feedback |

### Notifications

You'll receive notifications when:
- Your submission is approved
- Your submission is rejected
- A solicitor requests more information

---

## Best Practices

### For Submitters (Admins)

**Be thorough:**
Include all relevant information upfront. The more complete your submission, the faster the approval.

**Reference evidence:**
Don't just say "there are breaches" - specify which documents, which pages, which issues.

**Write clearly:**
Solicitors review many approvals. Clear, well-organized submissions get processed faster.

**Don't submit prematurely:**
Ensure your analysis is complete before submitting. Multiple rejections waste everyone's time.

### For Approvers (Solicitors)

**Be specific in rejections:**
Vague feedback leads to confusion. Specify exactly what's needed.

**Check the evidence:**
Don't just read the submission - verify claims against the actual documents.

**Be timely:**
Cases can stall while waiting for approval. Prioritize the queue.

**Document your reasoning:**
Approval notes create an audit trail and help others learn.

---

## FAQ

### Can I withdraw a submission?

Yes, if you realize an error after submitting:
1. Go to your submission in the queue
2. Click **Withdraw**
3. Make corrections
4. Resubmit when ready

### What if I disagree with a rejection?

1. Review the feedback objectively
2. If you still believe your submission is correct, discuss with the solicitor
3. Provide additional evidence or reasoning
4. If necessary, escalate to your team lead

### Can a non-solicitor approve in an emergency?

No. Legal document approval must always be by a qualified solicitor. There are no exceptions.

### How long are approvals valid?

Approvals are valid for 30 days. If you don't send the approved document within 30 days, you may need to resubmit (as circumstances may have changed).

### What if the solicitor is on leave?

Approvals can be handled by any solicitor. The queue is shared, so another solicitor will pick it up.

---

## Related Documentation

- [Understanding the Workflow](/understanding-the-workflow) - Route U vs Route E
- [Investigation Process](/investigation-process) - Route determination process
- [Documents and Correspondence](/documents-and-correspondence) - Sending approved documents
- [Tasks and Work Queues](/tasks-and-queues) - Approval-related tasks
