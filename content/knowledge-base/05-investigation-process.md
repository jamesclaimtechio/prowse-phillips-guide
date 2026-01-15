# The Investigation Process

This guide explains the core investigation workflow - how we investigate debts to determine if they're legally enforceable. This is the heart of what we do.

---

## Overview of Investigation

When a client signs up, we don't know if their debts are enforceable or not. The investigation process discovers this through three main steps:

```
Step 1: DSAR          Step 2: Section 78       Step 3: Analysis
   ↓                        ↓                        ↓
Request all data      Request original         Analyze everything
from creditor         credit agreement         for breaches
   ↓                        ↓                        ↓
30 day deadline       12 working days          Maxi Report
   ↓                        ↓                        ↓
Chase if no reply     Chase if no reply        Route Determination
```

The entire investigation typically takes **8-12 weeks**, depending on how quickly creditors respond.

---

## Step 1: DSAR (Data Subject Access Request)

### What is a DSAR?

A DSAR is a legal request under GDPR (General Data Protection Regulation) that requires the creditor to provide ALL personal data they hold about the client.

### Why We Send DSARs

The DSAR reveals valuable information:
- **Original credit agreements** (often missing or incomplete)
- **Payment history** (showing how the account was managed)
- **Default notices** (often sent incorrectly)
- **Internal notes** (revealing creditor behavior)
- **Collection history** (if debt was sold)
- **Correspondence** (letters, emails, calls logged)

### DSAR Legal Framework

| Legislation | Requirement |
|-------------|-------------|
| **GDPR Article 15** | Right of access to personal data |
| **Data Protection Act 2018** | UK implementation of GDPR |
| **Deadline** | 30 calendar days (can extend to 90 for complex requests) |
| **Cost to Client** | Free (first request) |

### Sending a DSAR Request

**Step 1: Prepare the Request**
1. Open the case
2. Click **Email Creditor**
3. Select template: **DSAR Request**
4. Variables are auto-filled:
   - CREDITOR_NAME
   - CLIENT_NAME
   - ACCOUNT_NUMBER
   - CASE_REFERENCE
5. Review and apply template

**Step 2: Attach Letter of Authority**
1. In the attachment selector, check the **Letter of Authority** document
2. This authorizes us to act on the client's behalf

**Step 3: Send and Update Status**
1. Click **Send Email**
2. Status automatically updates to **DSAR Sent**
3. The 30-day clock starts

[SCREENSHOT: Email Creditor modal with DSAR template]

### DSAR Chase Schedule

If the creditor doesn't respond:

| Day | Action | System Behavior |
|-----|--------|-----------------|
| Day 28 | Warning task created | Task appears in queue |
| Day 30 | Chase 1 due | "Send DSAR Chase 1" task created |
| Day 60 | Chase 2 due | "Send DSAR Chase 2" task created |
| Day 90 | Chase 3 due | "Send DSAR Chase 3" task created |
| Day 95+ | Consider ICO complaint | Escalation task created |

### Processing a DSAR Response

When the creditor responds:

**Step 1: Upload the Documents**
1. Go to case Documents tab
2. Click **Upload Document**
3. Select all files from the DSAR response
4. Category: **Inbound Correspondence**
5. Document type: **DSAR Response**

**Step 2: Update Status**
1. Change status from "DSAR Sent" (or chase status) to **DSAR Response Received**
2. Add note summarizing what was received

**Step 3: Review the Response**
1. Review all documents received
2. Check for completeness:
   - Is the credit agreement included?
   - Is the payment history complete?
   - Are all requested documents present?
3. Change status to **DSAR Reviewed**
4. Add notes about key findings

**Step 4: Complete DSAR Phase**
1. Change status to **DSAR Complete**
2. Proceed to Section 78

### What if DSAR is Incomplete?

If the response is missing important documents:

1. **Note what's missing** in the case notes
2. **Consider a follow-up** requesting specific items
3. **Proceed anyway** with Section 78 (incomplete response is itself useful evidence)

The creditor's failure to provide complete data can be used in our Letter of Claim.

---

## Step 2: Section 78 Request

### What is Section 78?

Section 78 of the Consumer Credit Act 1974 requires creditors to provide a copy of the executed credit agreement upon request.

### Why Section 78 is Crucial

This is often where enforceability issues are found:
- **No signed agreement** - If they can't produce it, debt may be unenforceable
- **Missing prescribed terms** - Required terms were not included
- **Defective agreement** - Agreement doesn't comply with regulations
- **Improper execution** - Not signed correctly or by right parties

### Section 78 Legal Framework

| Legislation | Requirement |
|-------------|-------------|
| **Consumer Credit Act 1974, s.78** | Must provide copy of agreement |
| **Consumer Credit (Agreements) Regs** | Format requirements for agreements |
| **Deadline** | 12 working days |
| **Consequence** | Debt becomes unenforceable during non-compliance |
| **Cost** | £1 statutory fee (usually waived) |

### Sending a Section 78 Request

**Step 1: Prepare the Request**
1. Open the case
2. Click **Email Creditor**
3. Select template: **Section 78 Request**
4. Variables auto-fill from case data
5. Review and apply template

**Step 2: Attach Documents**
1. Attach **Letter of Authority** (if not already on file with creditor)

**Step 3: Send and Update Status**
1. Click **Send Email**
2. Status updates to **Section 78 Sent**
3. The 12 working day clock starts

### Section 78 Chase Schedule

| Day | Action |
|-----|--------|
| Day 12 | Acknowledgement deadline (working days) |
| Day 40 | Extended deadline (some creditors claim) |
| Day 42 | "Send Section 78 Chase" task created |
| Day 70+ | Consider escalation |

### Processing a Section 78 Response

**Step 1: Upload Documents**
1. Upload all response documents
2. Category: **Inbound Correspondence**
3. Document type: **Section 78 Response**

**Step 2: Update Status**
1. Change to **Section 78 Response Received**

**Step 3: Critical Review**

Look specifically for:

**The Original Agreement:**
- Is it a true copy of the signed agreement?
- Does it contain client's signature?
- Does it contain creditor's signature?
- Is it legible and complete?

**Prescribed Terms (must be present):**
- Amount of credit
- APR
- Repayment terms
- Total charge for credit
- Right of cancellation (if applicable)

**Execution Issues:**
- Date of agreement
- Correct parties named
- Proper format used

**Step 4: Document Findings**
1. Add detailed notes about what you found
2. Highlight any enforceability concerns
3. Change status to **Section 78 Reviewed**

**Step 5: Complete Section 78 Phase**
1. Change to **Section 78 Complete**
2. Proceed to Maxi Report

### Non-Compliance with Section 78

If creditor fails to respond within 12 working days:

1. **The debt becomes unenforceable** - They cannot take court action
2. **Send a chase** highlighting their non-compliance
3. **Document the non-compliance** carefully
4. **This is strong evidence for Route U**

---

## Step 3: Analysis and Maxi Report

### What is a Maxi Report?

A Maxi Report is a professional analysis of the credit agreement and related documents that identifies potential legal breaches and enforceability issues.

### What the Maxi Report Analyzes

| Area | What It Checks |
|------|----------------|
| **Agreement Execution** | Proper signing, dating, and format |
| **Prescribed Terms** | All required terms present and correct |
| **Default Process** | Default notices sent correctly |
| **Statutory Compliance** | Compliance with all CCA requirements |
| **Regulatory Breaches** | FCA rule violations |
| **Documentation** | Completeness of evidence |

### Requesting a Maxi Report

**Step 1: Prepare for Request**
1. Ensure DSAR and S78 phases are complete
2. All relevant documents are uploaded to the case
3. Status should be **Section 78 Complete**

**Step 2: Request the Report**
1. Change status to **Ready for Maxi Report**
2. Then to **Maxi Report Requested**
3. The request is sent to the external analysis provider

**Step 3: Wait for Delivery**
- Typical turnaround: 3-7 working days
- Status remains **Maxi Report Requested**

### Processing Maxi Report Results

**When Report Arrives:**

1. **Upload the Report**
   - Category: **Reports**
   - Document type: **Maxi Report**

2. **Update Status**
   - Change to **Maxi Report Received**

3. **Review the Report**
   - Change to **Maxi Report Under Review**
   - Analyze findings thoroughly

### Understanding Maxi Report Findings

The report will indicate:

**Breach Severity:**
| Level | Meaning |
|-------|---------|
| **Critical** | Fundamental issue making agreement unenforceable |
| **Major** | Significant breach affecting enforceability |
| **Minor** | Technical issue, less impact on enforceability |
| **No Breach** | Compliant in this area |

**Route Recommendation:**
The report often suggests:
- **Route U** - Strong grounds for unenforceability
- **Route E** - Agreement appears enforceable
- **Further Investigation** - More information needed

---

## Route Determination

### The Decision Point

After reviewing all evidence (DSAR, S78, Maxi Report), you determine which route to take:

**Route U (Unenforceable):** Strong evidence that the debt cannot be legally enforced
**Route E (Enforceable):** The debt is valid, but we can still help through settlement

### Criteria for Route U (Unenforceable)

Route U is appropriate when:

1. **No signed credit agreement exists**
   - Creditor cannot produce original signed document
   - Only reconstituted or unsigned copies available

2. **Missing prescribed terms**
   - APR not stated or incorrect
   - Repayment terms missing
   - Credit limit not specified

3. **Improper default process**
   - No default notice sent
   - Default notice had wrong amounts
   - Required notice period not given

4. **Statute barred**
   - No payment or acknowledgment in 6+ years
   - Limitation period expired

5. **Significant regulatory breaches**
   - Multiple Maxi Report critical/major findings
   - Pattern of non-compliance

### Criteria for Route E (Enforceable)

Route E is appropriate when:

1. **Agreement is valid and enforceable**
   - Properly executed agreement exists
   - No significant breaches found

2. **Client may benefit from settlement**
   - Debt is genuine and enforceable
   - But client cannot pay full amount
   - Creditor may accept reduced settlement

3. **Better outcome than doing nothing**
   - Negotiated settlement better than default
   - Possible credit file improvement

### Submitting Route Determination

**Step 1: Prepare Your Assessment**
1. Change status to **Route Determination Needed**
2. Document your reasoning in case notes
3. Reference specific evidence

**Step 2: Submit for Approval**
The route determination requires **solicitor approval**:

1. Go to **Approvals** section
2. Click **New Approval**
3. Select type: **Route Determination**
4. Choose proposed route: **U** or **E**
5. Provide detailed justification referencing:
   - DSAR findings
   - S78 findings
   - Maxi Report findings
   - Specific breaches identified
6. Submit for review

**Step 3: Await Solicitor Decision**
- Status remains **Route Determination Needed**
- Solicitor reviews your submission
- You'll be notified of the decision

**Step 4: Update Based on Decision**
- If approved: Status changes to **Route Determined - U** or **Route Determined - E**
- If rejected: Address solicitor's feedback and resubmit

---

## After Route Determination

### Route U: Next Steps

When Route U is confirmed:

1. **Status:** Route Determined - U
2. **Next phase:** LOC Drafting
3. **Handler:** May transfer to Post-Lit team
4. **Goal:** Send Letter of Claim demanding debt write-off

See [Approval Workflows](./08-approvals.md) for LOC process.

### Route E: Next Steps

When Route E is confirmed:

1. **Status:** Route Determined - E
2. **Next phase:** Affordability Assessment Needed
3. **Handler:** May transfer to Post-Lit team
4. **Goal:** Negotiate settlement with creditor

The process involves:
1. Review/update client's affordability
2. Draft settlement proposal
3. Get solicitor approval
4. Send to creditor
5. Negotiate terms

See [Approval Workflows](./08-approvals.md) for settlement process.

---

## Chase Email Best Practices

### When to Chase

| Document Type | Normal Response Time | When to Chase |
|---------------|---------------------|---------------|
| DSAR | 30 days | Day 30, 60, 90 |
| Section 78 | 12 working days | Day 42 |
| LOC | 14 days | Day 30, 60 |
| Settlement | 14-21 days | Day 21, 42 |

### Chase Email Tone

**Chase 1:** Professional reminder
```
We note that 30 days have now passed since our DSAR request dated [DATE].
Under GDPR, you are required to respond within one month.
Please provide the requested information within 7 days.
```

**Chase 2:** More urgent
```
This is our second request. Your failure to respond to our DSAR 
is now a breach of GDPR. You risk regulatory action if you continue 
to fail to comply.
```

**Chase 3:** Final warning
```
Despite two previous requests, you have failed to respond. 
We are now considering lodging a complaint with the 
Information Commissioner's Office.
```

### Sending Chase Emails

1. Open case and click **Email Creditor**
2. Select appropriate chase template:
   - DSAR Chase Email
   - Section 78 Chase Email
   - LOC Chase Email
   - Settlement Chase Email
3. Fill in **ORIGINAL_SEND_DATE** (date of first request)
4. Review and send
5. Status updates automatically

---

## Common Investigation Scenarios

### Scenario 1: Creditor Can't Find Agreement

**Signs:**
- S78 response says "We are unable to locate the original agreement"
- Only reconstituted or template agreement provided
- No signed copy available

**Action:**
- Document this in notes
- This is strong evidence for Route U
- Proceed to route determination

### Scenario 2: Debt Has Been Sold

**Signs:**
- Current holder is not original lender
- DSAR reveals debt sale history
- Documentation is incomplete due to sale

**Action:**
- Request data from current holder AND original creditor
- Check if proper assignment occurred
- Missing documentation from sale can support Route U

### Scenario 3: Default Notice Issues

**Signs:**
- No default notice in DSAR
- Default notice has wrong amount
- Notice period was too short

**Action:**
- Document specific issues
- This can invalidate the default
- Strong evidence for Route U

### Scenario 4: Agreement Looks Valid

**Signs:**
- Signed agreement provided
- All prescribed terms present
- Proper default process followed

**Action:**
- Route E is likely appropriate
- Focus on settlement negotiation
- Help client achieve best possible outcome

---

## FAQ

### How long should I wait before chasing?

Follow the chase schedule - the system creates tasks automatically. Don't chase early as it can seem aggressive. Don't wait beyond the scheduled time as delays extend the case.

### What if the creditor sends incomplete information?

Document what's missing and proceed. Incomplete responses can work in our favor - it shows the creditor's poor record-keeping.

### Can a debt be partly enforceable?

Legally no - a credit agreement is either enforceable or it isn't. However, Route E acknowledges enforceability while still helping the client through settlement.

### What if I'm unsure which route is correct?

Always submit for solicitor approval with your best assessment. Include your reasoning and any doubts. The solicitor will guide you.

### How do I know if a Maxi Report finding is significant?

Focus on **Critical** and **Major** findings. Multiple minor findings can also indicate overall poor compliance. When in doubt, discuss with your team lead or solicitor.

### What if the client's situation changes during investigation?

Note any changes in the client record. Their financial situation doesn't affect route determination (that's about the debt, not the client), but it may affect settlement terms if we go Route E.

---

## Related Documentation

- [Understanding the Workflow](./02-understanding-the-workflow.md) - Overall case lifecycle
- [Case Management](./04-case-management.md) - Status changes and case handling
- [Documents and Correspondence](./06-documents-and-correspondence.md) - Sending creditor emails
- [Tasks and Work Queues](./07-tasks-and-queues.md) - Chase task management
- [Approval Workflows](./08-approvals.md) - Route determination and LOC approvals
