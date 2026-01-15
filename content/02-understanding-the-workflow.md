---
title: "Understanding the Workflow"
slug: "understanding-the-workflow"
description: "How debt contention cases work from start to finish - the foundation of everything you'll do in the system."
order: 2
---

# Understanding the Workflow

This document explains how debt contention cases work from start to finish. Understanding this workflow is essential - it's the foundation of everything you'll do in the system.

---

## The Big Picture

When a client comes to Prowse Phillips, they have debts they're struggling with. Our job is to investigate whether those debts are legally enforceable. Here's the high-level journey:

```
Client Signs Up → Investigation → Route Determination → Resolution → Case Closed
     ↓                 ↓                  ↓                ↓
  Onboarding    DSAR + Section 78    Route U or E    Write-off or
  + Payment      + Maxi Report                       Settlement
```

The entire process typically takes **8-12 weeks** for the investigation phase, plus additional time for resolution depending on the outcome.

---

## The 1 Case = 1 Debt Architecture

This is one of the most important concepts to understand:

**Each case represents exactly ONE debt with ONE creditor.**

If a client owes money to three different creditors, they will have three separate cases in the system.

### Why This Matters

1. **Each debt progresses independently** - A Barclays case might reach resolution while a Lloyds case is still in investigation
2. **Each debt has its own timeline** - DSAR sent dates, response dates, and chase schedules are case-specific
3. **Each debt may have a different outcome** - One might be unenforceable while another requires settlement

### Example

> Sarah has debts with Barclays (credit card), Lloyds (personal loan), and Capital One (store card).
> 
> In the system, Sarah is **one client** with **three cases**:
> - Case DC-2024-00101: Barclays Credit Card - £5,234
> - Case DC-2024-00102: Lloyds Personal Loan - £8,000
> - Case DC-2024-00103: Capital One Store Card - £2,000

When you view Sarah's client profile, you see all three cases. When you open each case, you see that specific debt's investigation progress.

---

## Two Status Systems

The system tracks progress with two separate status systems:

| Status Type | Applies To | What It Tracks |
|-------------|------------|----------------|
| **Client Status** | The person | Payment journey (Lead → Active → Fully Paid) |
| **Case Status** | Each case | Investigation progress (DSAR → S78 → Resolution) |

### Client Status (Payment Progression)

This tracks where the client is in their payment journey with us:

```
LEAD → DEBT_ADDED → FEE_VIEWED → AFFORDABILITY_ASSESSED → 
PAYMENT_PLAN_AGREED → PAYMENT_DETAILS_ADDED → ACTIVE → 
MISSED_PAYMENT → FULLY_PAID
```

| Status | What It Means |
|--------|---------------|
| `LEAD` | Started onboarding but hasn't completed |
| `DEBT_ADDED` | Has entered their debt information |
| `FEE_VIEWED` | Has seen our fee calculation |
| `AFFORDABILITY_ASSESSED` | Completed affordability assessment |
| `PAYMENT_PLAN_AGREED` | Agreed to a payment plan |
| `PAYMENT_DETAILS_ADDED` | Provided payment method (bank details) |
| `ACTIVE` | Making payments, cases being worked |
| `MISSED_PAYMENT` | Has a payment overdue |
| `FULLY_PAID` | Has paid all fees |

**Key Point:** Client status is about their relationship with us (payments), not about their case progress.

### Case Status (Investigation Progression)

This tracks where each individual case is in the investigation:

**Pre-Investigation:**
- `Awaiting Payment` - Waiting for client's first payment
- `Ready to Assess` - First payment received, ready to start

**Investigation Phase - DSAR:**
- `DSAR Requested` → `DSAR Sent` → `DSAR Chase 1 Sent` → `DSAR Chase 2 Sent` → `DSAR Chase 3 Sent`
- `DSAR Response Received` → `DSAR Reviewed` → `DSAR Complete`

**Investigation Phase - Section 78:**
- `Section 78 Requested` → `Section 78 Sent` → `Section 78 Chase Sent`
- `Section 78 Response Received` → `Section 78 Reviewed` → `Section 78 Complete`

**Analysis:**
- `Ready for Maxi Report` → `Maxi Report Requested` → `Maxi Report Received` → `Maxi Report Under Review`
- `Route Determination Needed`

**Route Determination:**
- `Route Determined - U` (Unenforceable)
- `Route Determined - E` (Enforceable)

**Route U (Unenforceable) Path:**
- `LOC Drafting` → `LOC Pending Approval` → `LOC Approved` → `LOC Sent`
- `LOC Chase 1 Sent` → `LOC Chase 2 Sent`
- `LOC Under Negotiation` → `LOC Settlement Agreed`
- `Route U - Completed`

**Route E (Enforceable) Path:**
- `Affordability Assessment Needed` → `Affordability Complete`
- `Settlement Drafting` → `Settlement Pending Approval` → `Settlement Approved` → `Settlement Sent`
- `Settlement Under Negotiation` → `Settlement Agreed`
- `DMP Referral` (if needed)
- `Route E - Completed`

**Closure:**
- `Case Closed - Successful`
- `Case Closed - Unsuccessful`
- `Case Cancelled`

---

## The Complete Case Lifecycle

Let's walk through a typical case from start to finish:

### Phase 1: Client Onboarding (Days 1-7)

**What happens:**
1. Client visits our website and enters their debt information
2. They see our fee calculation and agree to terms
3. They complete an affordability assessment
4. They choose a payment plan (e.g., 12 monthly payments)
5. They set up Direct Debit payment
6. They verify their identity (upload ID + proof of address)

**Status at end of phase:**
- Client Status: `PAYMENT_DETAILS_ADDED` → `ACTIVE` (after first payment)
- Case Status: `Awaiting Payment` → `Ready to Assess`

> **Important:** All of a client's cases move to "Ready to Assess" together when the first payment is received. Payment is at the client level, not case level.

### Phase 2: DSAR Investigation (Days 7-37+)

**What happens:**
1. We send a Data Subject Access Request (DSAR) to the creditor
2. The creditor has 30 days to respond
3. If no response, we send chase emails at Day 30, 60, 90
4. When the response arrives, we review the documents

**Why DSAR?**
Under GDPR, creditors must provide all data they hold about the client. This reveals:
- The original credit agreement
- Payment history
- Internal notes and communications
- Default notices sent
- Any errors or irregularities

**Status progression:**
`DSAR Requested` → `DSAR Sent` → `DSAR Response Received` → `DSAR Reviewed` → `DSAR Complete`

### Phase 3: Section 78 Investigation (Days 30-72+)

**What happens:**
1. We send a Section 78 request (Consumer Credit Act)
2. The creditor has 12 working days to respond
3. If no response, we send chase emails
4. When the response arrives, we review for enforceability

**Why Section 78?**
Under the Consumer Credit Act, creditors must provide:
- A true copy of the executed agreement
- A signed agreement with all required terms
- Statement of account

If they can't provide a properly executed agreement, the debt may be **unenforceable**.

**Status progression:**
`Section 78 Requested` → `Section 78 Sent` → `Section 78 Response Received` → `Section 78 Reviewed` → `Section 78 Complete`

### Phase 4: Analysis (Days 50-70)

**What happens:**
1. We request a Maxi Report (credit breach analysis)
2. The Maxi Report identifies potential legal breaches
3. We review all evidence: DSAR response, S78 response, Maxi Report
4. We determine the route: U (Unenforceable) or E (Enforceable)

**Status progression:**
`Ready for Maxi Report` → `Maxi Report Requested` → `Maxi Report Received` → `Maxi Report Under Review` → `Route Determination Needed`

### Phase 5: Route Determination

This is the critical decision point. Based on our analysis:

**Route U (Unenforceable)** - We found issues that make the debt legally unenforceable:
- No signed credit agreement
- Missing required terms
- Incorrect default notices
- Statute of limitations expired
- Significant regulatory breaches

**Route E (Enforceable)** - The debt is valid but we can still help:
- Negotiate a settlement for less than owed
- Set up a manageable payment plan
- Refer to Debt Management Plan (DMP) if appropriate

**Status at decision:**
- `Route Determined - U` or `Route Determined - E`

> **Important:** Route determination requires solicitor review and approval. This ensures legal accuracy.

### Phase 6a: Route U - Unenforceable Resolution (Days 70-100+)

**What happens:**
1. We draft a Letter of Claim (LOC) asserting unenforceability
2. Solicitor reviews and approves the LOC
3. We send LOC to creditor
4. We negotiate with the creditor
5. Successful outcome: Debt written off, credit file corrected

**Status progression:**
`LOC Drafting` → `LOC Pending Approval` → `LOC Approved` → `LOC Sent` → `LOC Under Negotiation` → `LOC Settlement Agreed` → `Route U - Completed`

### Phase 6b: Route E - Enforceable Resolution (Days 70-100+)

**What happens:**
1. We review/update the client's affordability
2. We draft a settlement proposal
3. Solicitor reviews and approves the proposal
4. We send offer to creditor
5. We negotiate terms
6. Successful outcome: Reduced settlement or payment plan

**Status progression:**
`Affordability Assessment Needed` → `Settlement Drafting` → `Settlement Pending Approval` → `Settlement Approved` → `Settlement Sent` → `Settlement Under Negotiation` → `Settlement Agreed` → `Route E - Completed`

### Phase 7: Case Closure

**Final statuses:**
- `Case Closed - Successful` - We achieved a positive outcome (write-off or favorable settlement)
- `Case Closed - Unsuccessful` - We couldn't achieve a positive outcome
- `Case Cancelled` - Client withdrew or case was abandoned

---

## Route Determination Deep Dive

### What Makes a Debt Unenforceable (Route U)?

A debt may be unenforceable if:

1. **No signed credit agreement exists**
   - The creditor cannot produce the original signed contract
   - The agreement was never properly executed

2. **Missing prescribed terms**
   - Required terms under the Consumer Credit Act are absent
   - Interest rates, repayment terms, or APR not properly disclosed

3. **Improper default notice**
   - Default notice was never sent
   - Default notice contained errors
   - Required notice period wasn't given

4. **Statute barred**
   - Over 6 years since last payment or acknowledgment
   - Creditor has lost right to pursue in court

5. **Regulatory breaches**
   - Significant breaches identified in Maxi Report
   - FCA rule violations that affect enforceability

### What Leads to Route E (Enforceable)?

Route E means the debt is legally valid, but we can still help by:

1. **Negotiating settlements**
   - Creditors often accept less than the full amount
   - Especially for older debts or accounts already in collections

2. **Setting up affordable payment plans**
   - Based on client's actual ability to pay
   - Freezing interest and charges

3. **DMP referrals**
   - For clients who need ongoing debt management
   - We refer to appropriate debt charities or DMP providers

---

## Understanding Chase Automation

The system automatically creates tasks when creditors don't respond within expected timeframes:

### DSAR Chase Schedule

| Day | What Happens |
|-----|--------------|
| Day 28 | Warning task created (response due soon) |
| Day 30 | "Send DSAR Chase 1" task created |
| Day 60 | "Send DSAR Chase 2" task created |
| Day 90 | "Send DSAR Chase 3" task created |
| Day 95+ | Consider ICO complaint |

### Section 78 Chase Schedule

| Day | What Happens |
|-----|--------------|
| Day 12 | Acknowledgement deadline |
| Day 40 | Extended deadline check |
| Day 42 | "Send Section 78 Chase" task created |
| Day 70+ | Escalation consideration |

### LOC Chase Schedule

| Day | What Happens |
|-----|--------------|
| Day 28 | Warning task created |
| Day 30 | "Send LOC Chase 1" task created |
| Day 60 | "Send LOC Chase 2" task created |
| Day 90+ | Consider legal proceedings |

> **Note:** These tasks are created automatically by the system. When you send a chase email, the case status updates automatically (e.g., "DSAR Sent" → "DSAR Chase 1 Sent").

---

## Payment Plans Are Client-Level

This is another critical concept:

**Payment plans cover ALL of a client's cases, not individual cases.**

### Example

> Sarah has three cases totaling £15,234 in debt.
> 
> Her fee is calculated as:
> - Base fee: £500
> - Per-case fee: 3 × £200 = £600
> - **Total fee: £1,100**
> 
> She chooses a 12-in-12 plan: £91.67/month for 12 months
> 
> This ONE payment plan covers ALL THREE cases.

### Why Client-Level Payments?

1. **Simpler for clients** - One monthly payment, one Direct Debit
2. **Easier administration** - One payment plan to track
3. **Covers future cases** - If client adds more debts later, plan is adjusted

### Implications for You

- When checking if a client has paid, look at the CLIENT level, not case level
- The client's payment status affects ALL their cases
- Cases can't progress beyond "Awaiting Payment" until the client makes their first payment

---

## Putting It All Together

Here's how to think about a client with multiple cases:

```
CLIENT: Sarah Thompson
├── Client Status: ACTIVE (payments on track)
├── Payment Plan: £91.67/month - 4 of 12 paid
│
├── CASE DC-2024-00101: Barclays Credit Card
│   ├── Case Status: Section 78 Sent
│   ├── Amount: £5,234
│   └── Progress: Waiting for S78 response
│
├── CASE DC-2024-00102: Lloyds Personal Loan
│   ├── Case Status: Route Determined - U
│   ├── Amount: £8,000
│   └── Progress: LOC being drafted
│
└── CASE DC-2024-00103: Capital One Store Card
    ├── Case Status: DSAR Chase 2 Sent
    ├── Amount: £2,000
    └── Progress: Awaiting DSAR response
```

Notice how:
- Sarah has ONE client status (ACTIVE) and ONE payment plan
- Each case has its own status and is at a different stage
- All three cases are progressing independently

---

## FAQ

### Why can't we determine the route during onboarding?

Because we don't know yet! Route determination requires:
- DSAR response analysis
- Section 78 response analysis
- Maxi Report findings
- Solicitor review

We can't know if a debt is enforceable until we've investigated it. Telling a client their debt is unenforceable before investigation would be irresponsible and potentially incorrect.

### What happens if a client has debts with the same creditor?

Each debt is still a separate case. For example, if a client has both a Barclays credit card and a Barclays personal loan, they would have two separate cases:
- Case 1: Barclays - Credit Card
- Case 2: Barclays - Personal Loan

### Can a case change routes after determination?

Yes, but rarely. New information might emerge during negotiation that changes the assessment. Any route change requires solicitor approval and documentation.

### What if a creditor never responds to our requests?

Their failure to respond can strengthen our case:
- DSAR: After 30 days, they're in breach of GDPR
- Section 78: After 12 working days, the agreement becomes unenforceable for collection purposes

We continue chasing and documenting their non-response, which becomes evidence for our Letter of Claim.

### How long does the whole process take?

Typical timelines:
- **Onboarding to investigation start:** 1-2 weeks
- **Investigation phase (DSAR + S78):** 8-12 weeks
- **Analysis and route determination:** 1-2 weeks
- **Resolution (LOC or Settlement):** 4-8 weeks

Total: **3-6 months** from onboarding to case closure, depending on creditor responsiveness.

---

## Next Steps

Now that you understand the workflow:

1. **[Client Management](/client-management)** - Learn to navigate client records
2. **[Case Management](/case-management)** - Daily case handling operations
3. **[Investigation Process](/investigation-process)** - Deep dive into DSAR, S78, and analysis

---

## Related Documentation

- [Case Management](/case-management) - Working with cases day-to-day
- [Investigation Process](/investigation-process) - Detailed investigation procedures
- [Approval Workflows](/approvals) - How solicitor approvals work
- [Client Payments](/payments) - Payment plan management
