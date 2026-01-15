# Client Payments

This guide explains how client payments work - from fee calculation through payment tracking and handling issues. Understanding the payment system is essential because payment status directly affects case progress.

---

## Key Concept: Payment Plans Are Client-Level

The most important thing to understand about payments:

> **One payment plan covers ALL of a client's cases.**

A client doesn't pay per case. They pay ONE total fee that covers all their debts. If they have 5 cases, they have one payment plan covering all 5.

### Why This Matters

1. **Single monthly payment** - Clients make one payment, not multiple
2. **Single Direct Debit** - One mandate covers everything
3. **Shared progress** - Payment issues affect all cases equally
4. **Simpler administration** - One plan to track

---

## Fee Calculation

### Fee Structure

The firm's fee is calculated based on the total debt load:

```
Base Fee:       £500 (applies to all clients)
Per-Case Fee:   £200 per case (debt)
Minimum Fee:    £800
Maximum Fee:    £5,000
```

### Calculation Examples

**Example 1: One debt (£3,000)**
- Base fee: £500
- Per-case: 1 × £200 = £200
- Total: £700 → Minimum applies → **£800**

**Example 2: Three debts (£15,000)**
- Base fee: £500
- Per-case: 3 × £200 = £600
- Total: **£1,100**

**Example 3: Eight debts (£45,000)**
- Base fee: £500
- Per-case: 8 × £200 = £1,600
- Total: £2,100 → **£2,100**

### Fee Breakdown by Case

When viewing a client's payment info, you see how the fee breaks down:

```
Total Fee: £1,100
├─ Case DC-2024-00123: £433.33 (39%)
├─ Case DC-2024-00124: £333.33 (30%)
└─ Case DC-2024-00125: £333.34 (31%)
```

This is informational only - there's still just one payment plan.

---

## Payment Plan Types

### 12-in-12 (Standard Plan)

**What it is:** Pay the fee over 12 monthly instalments with no interest.

**Who qualifies:** Clients who can afford the monthly amount (fee ÷ 12).

**Why "12-in-12":** 
- 12 instalments or fewer
- Over 12 months or less
- No interest charged

This is FCA exempt - not regulated credit because it meets all three criteria.

**Example:**
```
Total Fee: £1,200
Monthly Payment: £100
Instalments: 12
Duration: 12 months
Interest: 0%
```

### Regulated Credit

**What it is:** Extended payment plan with interest (for clients who can't afford 12-in-12).

**Who qualifies:** Clients who need more than 12 months to pay.

**Why it's regulated:**
- More than 12 instalments, OR
- Duration exceeds 12 months
- FCA rules apply

**Example:**
```
Total Fee: £1,200
Monthly Payment: £60
Instalments: 24
Duration: 24 months
APR: 9.9%
Total Payable: £1,440
```

### Pay in Full

**What it is:** Single lump-sum payment.

**Who qualifies:** Clients who can pay everything at once.

**Benefit:** 5% discount on the total fee.

**Example:**
```
Total Fee: £1,200
Discount: 5% (£60)
Payment Due: £1,140
Payment Date: Within 7 days
```

---

## Payment Methods

### Direct Debit (Recommended)

**How it works:**
1. Client provides bank details during onboarding
2. GoCardless sets up a mandate
3. Payments are collected automatically each month

**Benefits:**
- Automatic collection (no chasing)
- Reliable payment timing
- Easy for client
- Lower failure rate than cards

**Statuses:**
| Status | Meaning |
|--------|---------|
| **Pending** | Mandate being set up |
| **Active** | Ready to collect payments |
| **Cancelled** | Client cancelled the mandate |
| **Failed** | Setup failed |

### Card Payment

**How it works:**
Payments are taken from client's debit/credit card.

**Note:** Currently limited functionality - Direct Debit is preferred.

### Bank Transfer

**How it works:**
Client manually transfers payment each month.

**Considerations:**
- More admin (manual reconciliation)
- Higher risk of missed payments
- Used when Direct Debit not possible

---

## Viewing Payment Information

### From Client Profile

The most complete view of payment information is on the client profile:

1. Open the client
2. Go to **Payments** tab

[SCREENSHOT: Client payments tab showing plan and schedule]

### Payment Summary

```
Payment Plan Summary
════════════════════════════════════════

Plan Type: 12-in-12 Instalment Agreement
Status: Active ✓

Total Fee: £1,200
Amount Paid: £400 (33%)
Outstanding: £800

Monthly Amount: £100
Payment Day: 1st of each month
Payment Method: Direct Debit (****1234)

Progress: ████████░░░░░░░░ 4/12 instalments

Next Payment: £100 on 01 Dec 2024

════════════════════════════════════════
```

### Payment Schedule

A table showing all scheduled payments:

| # | Due Date | Amount | Status | Paid Date |
|---|----------|--------|--------|-----------|
| 1 | 01 Aug 2024 | £100 | ✓ Paid | 01 Aug 2024 |
| 2 | 01 Sep 2024 | £100 | ✓ Paid | 01 Sep 2024 |
| 3 | 01 Oct 2024 | £100 | ✓ Paid | 01 Oct 2024 |
| 4 | 01 Nov 2024 | £100 | ✓ Paid | 01 Nov 2024 |
| 5 | 01 Dec 2024 | £100 | ◯ Scheduled | - |
| 6 | 01 Jan 2025 | £100 | ◯ Scheduled | - |
| ... | ... | ... | ... | ... |

### Payment History

Recent transactions:

| Date | Type | Amount | Status | Reference |
|------|------|--------|--------|-----------|
| 01 Nov 2024 | Direct Debit | £100 | Completed | GC-12345 |
| 01 Oct 2024 | Direct Debit | £100 | Completed | GC-12344 |
| 01 Sep 2024 | Direct Debit | £100 | Completed | GC-12343 |

### From Case Detail

You can also see payment summary on any case:

1. Open the case
2. Go to **Payment** tab

This shows the same client-level payment plan, with context about this case's fee contribution.

---

## Client Status and Payments

The client's status reflects their payment situation:

| Client Status | Payment Meaning |
|---------------|-----------------|
| `PAYMENT_PLAN_AGREED` | Plan selected, not yet started |
| `PAYMENT_DETAILS_ADDED` | Bank details provided, awaiting first payment |
| `ACTIVE` | Payments on track |
| `MISSED_PAYMENT` | Payment overdue |
| `FULLY_PAID` | All fees paid |

### Impact on Cases

**Before first payment:**
- All cases are in "Awaiting Payment" status
- No investigation work starts

**After first payment:**
- ALL cases move to "Ready to Assess"
- Investigation can begin on all cases

**If payment is missed:**
- Client status becomes `MISSED_PAYMENT`
- Cases continue (don't pause for payment issues)
- Follow-up actions triggered

---

## Handling Payment Issues

### Missed Payments

**What happens:**
1. Direct Debit collection fails or is late
2. Client status changes to `MISSED_PAYMENT`
3. Task is created for follow-up
4. Reminder sent to client

**What to do:**
1. Check the payment history for failure reason
2. Contact the client (or check if automated reminder was sent)
3. Arrange for payment
4. Once paid, status returns to `ACTIVE`

### Failed Direct Debits

Common failure reasons:

| Reason | What It Means | Action |
|--------|---------------|--------|
| **Insufficient funds** | Not enough money in account | Wait and retry, or arrange alternative |
| **Mandate cancelled** | Client cancelled DD with bank | Contact client to reinstate or use alternative |
| **Account closed** | Bank account no longer active | Collect new payment details |
| **Technical failure** | Bank system issue | Usually retried automatically |

### Recording Manual Payments

If a client pays outside the normal Direct Debit:

1. Open client Payments tab
2. Click **Record Payment**
3. Enter:
   - Amount received
   - Payment date
   - Payment method (transfer, cash, card)
   - Reference (if any)
4. Confirm

This updates the payment schedule and outstanding balance.

---

## Payment Plan Changes

### When Changes Are Needed

- Client's circumstances change
- Additional cases added
- Client requests different terms
- Affordability reassessment required

### Adjusting a Plan

**For additional cases:**
When a client adds more debts, the fee increases:

1. Old fee: £1,100 (3 cases)
2. New case added: +£200
3. New total: £1,300

The remaining monthly payments are recalculated.

**For hardship:**
If client can't afford payments:

1. Review affordability
2. Consider switching to Regulated Credit (longer term)
3. Consider payment holiday (with appropriate documentation)
4. Escalate to team lead

### Pausing Payments

In certain circumstances, payments can be paused:

1. Client requests pause (via portal or phone)
2. Request goes to approval queue
3. If approved, payments pause for specified period
4. Plan extends accordingly

> **Note:** Case work typically continues during payment pauses, depending on circumstances.

---

## Understanding the Dashboard

### Payment Widgets

Your dashboard may show payment-related information:

**Clients with Payment Issues:**
Number of clients with missed payments or issues requiring attention.

**Payments Expected Today:**
Direct Debits scheduled for collection today.

**Failed Payments:**
Payments that failed and need follow-up.

### Failed Payments Queue

There may be a queue specifically for payment issues:

1. Go to **Queues** > **Failed Payments**
2. See all clients with payment problems
3. Work through each to resolve

---

## Fee Calculation Details

### How Fees Are Determined

During onboarding, the fee is calculated automatically:

1. Client enters their debts
2. System counts number of cases (1 per debt)
3. Formula applied: Base + (Cases × Per-Case)
4. Minimums and maximums applied
5. Fee presented to client

### Fee Acknowledgment

Clients must acknowledge the fee before proceeding:

1. Fee Summary document shown
2. Calculation explained
3. Payment plan scope disclosed (covers all cases)
4. Client acknowledges understanding

This creates a record of informed consent.

---

## Affordability

### What is Affordability Assessment?

Before agreeing a payment plan, we assess whether the client can actually afford it.

**Collected during onboarding:**
- Monthly income (salary, benefits, other)
- Monthly expenses (rent, bills, food, etc.)
- Existing debt commitments
- Disposable income calculation

### Affordability Determines Payment Pathway

| Disposable Income | Pathway |
|-------------------|---------|
| ≥ Fee ÷ 12 | 12-in-12 (interest-free) |
| ≥ Fee ÷ 24 | Regulated Credit (extended) |
| < Fee ÷ 24 | Unaffordable (fee relief options) |

### Viewing Affordability Data

From client profile:
1. Find the affordability assessment
2. View income, expenses, disposable income
3. See when it was last updated

### Updating Affordability

If circumstances change (especially for Route E settlements):
1. Review current affordability data
2. Ask if financial situation has changed
3. If yes, collect updated information
4. Update the record

---

## FAQ

### How do I know if a client has paid?

Check the client's Payments tab:
- Overall status (Active, Missed Payment, etc.)
- Payment schedule showing which instalments are paid
- Progress bar showing percentage paid

### Why does payment affect all cases?

Because the payment plan is at the CLIENT level. The client agreed to one total fee covering all their debts. Payment (or non-payment) therefore affects their entire relationship with us.

### What happens if a client adds a new debt?

1. New case created
2. Fee recalculated (base + all cases)
3. Payment plan adjusted
4. New monthly amount or extended term
5. Client notified

### Can a client change payment method?

Yes:
1. They can request via portal
2. Or staff can update with verified details
3. Old mandate cancelled
4. New mandate set up
5. Payments continue from next scheduled date

### What if a client pays extra?

Extra payments reduce the outstanding balance:
1. Record the manual payment
2. Balance updates
3. Fewer future instalments needed
4. Or plan completes early

### What happens when fully paid?

1. Client status changes to `FULLY_PAID`
2. No more payment collection
3. Cases continue to completion (payment complete doesn't mean cases complete)
4. Standard case workflow continues

### Can we refund payments?

Refund requests should be escalated to management. Refunds are possible but require proper authorization and documentation.

---

## Related Documentation

- [Understanding the Workflow](./02-understanding-the-workflow.md) - Client status progression
- [Client Management](./03-client-management.md) - Viewing client payment info
- [Case Management](./04-case-management.md) - How payment affects cases
- [Troubleshooting](./12-troubleshooting.md) - Payment issue resolution
