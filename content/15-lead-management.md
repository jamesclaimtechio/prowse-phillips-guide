---
title: "Lead Management"
slug: "lead-management"
description: "Working with leads - potential clients who have started but not completed onboarding."
order: 34
---

# Lead Management

This guide covers how to work with leads - potential clients who have started but not completed the onboarding process. Lead management is primarily the responsibility of the Sales team.

---

## What is a Lead?

A **lead** is someone who has begun signing up but hasn't yet:
- Completed all onboarding steps, OR
- Made their first payment

Once a person completes onboarding AND makes their first payment, they become an **active client**.

### Lead vs Client

| Characteristic | Lead | Client |
|----------------|------|--------|
| **Status** | LEAD, DEBT_ADDED, FEE_VIEWED, etc. | ACTIVE, FULLY_PAID |
| **Payment** | Not yet made first payment | First payment received |
| **Cases** | Status: Awaiting Payment | Status: Ready to Assess or beyond |
| **Work** | Follow-up to complete signup | Active case investigation |

---

## Lead Statuses

Leads progress through these statuses during onboarding:

| Status | Meaning | What They've Done |
|--------|---------|-------------------|
| `LEAD` | Just started | Entered basic details only |
| `DEBT_ADDED` | Added debts | Entered at least one debt |
| `FEE_VIEWED` | Seen fees | Viewed the fee calculation |
| `AFFORDABILITY_ASSESSED` | Completed affordability | Answered income/expense questions |
| `PAYMENT_PLAN_AGREED` | Chose plan | Selected 12-in-12 or other option |
| `PAYMENT_DETAILS_ADDED` | Ready to pay | Provided bank details, awaiting first DD |

### The Conversion Point

A lead becomes a client when:
1. Status is `PAYMENT_DETAILS_ADDED`
2. First Direct Debit payment is collected successfully
3. Status changes to `ACTIVE`
4. All cases move to "Ready to Assess"

---

## Finding Leads

### From the Clients List

Leads are in the same Clients list as active clients. Use filters to find them:

1. Go to **Clients** in the sidebar
2. Click **Filters**
3. Set **Status** to one of the lead statuses
4. Apply filter

[SCREENSHOT: Client list filtered to show leads]

### Quick Filters

Common filter combinations for Sales:

| What You Want | Filter Settings |
|---------------|-----------------|
| All leads | Status: LEAD, DEBT_ADDED, FEE_VIEWED, AFFORDABILITY_ASSESSED, PAYMENT_PLAN_AGREED, PAYMENT_DETAILS_ADDED |
| Early dropoffs | Status: LEAD, DEBT_ADDED |
| Almost complete | Status: PAYMENT_DETAILS_ADDED |
| My assigned leads | Status: [lead statuses] + Assigned To: Me |

### Lead Indicators

In the client list, leads are identifiable by:
- Status column showing lead status
- No active cases (or cases in "Awaiting Payment")
- Recent created date but no payment activity

---

## Understanding Where Leads Drop Off

### Common Drop-Off Points

| Drop-Off Point | Status | Common Reasons |
|----------------|--------|----------------|
| After basic info | LEAD | Just browsing, not ready |
| After adding debts | DEBT_ADDED | Shocked by fee, needs time |
| After seeing fees | FEE_VIEWED | Cost concerns, comparing options |
| After affordability | AFFORDABILITY_ASSESSED | Complicated finances |
| After choosing plan | PAYMENT_PLAN_AGREED | Bank details concern |
| Before first payment | PAYMENT_DETAILS_ADDED | DD failed, changed mind |

### Why This Matters

Understanding where someone stopped helps you:
- Tailor your follow-up approach
- Address specific concerns
- Know how warm the lead is

A `PAYMENT_DETAILS_ADDED` lead is much warmer than a `LEAD` status.

---

## Lead Follow-Up Workflow

### Step 1: Identify Priority Leads

Focus on leads most likely to convert:

**High Priority:**
- Status: PAYMENT_DETAILS_ADDED (just need payment to go through)
- Status: PAYMENT_PLAN_AGREED (one step away)
- Created recently (last 7 days)

**Medium Priority:**
- Status: AFFORDABILITY_ASSESSED or FEE_VIEWED
- Created 7-14 days ago

**Lower Priority:**
- Status: LEAD or DEBT_ADDED
- Created over 14 days ago

### Step 2: Review Lead History

Before contacting, check:

1. **When they signed up** - How long ago?
2. **What stage they reached** - What was the last step?
3. **Any previous contact** - Notes from other staff?
4. **How they found us** - Introducer? Website? Referral?

### Step 3: Make Contact

**First Contact:**
- Call is usually best for warm leads
- Email for initial outreach on cold leads
- Be helpful, not pushy

**Conversation Goals:**
- Understand why they paused
- Address any concerns
- Help them complete next step
- Schedule callback if needed

### Step 4: Document the Outcome

After contact, record in notes:
- What was discussed
- Their concerns or questions
- Next steps agreed
- Follow-up date if applicable

---

## Common Lead Concerns and Responses

### "The fee seems high"

**Approach:**
- Explain what the fee covers (full investigation, legal expertise)
- Compare to doing nothing (continued harassment, growing debt)
- Mention payment plan options
- Emphasize potential outcomes (debt written off, reduced settlement)

### "I need to think about it"

**Approach:**
- That's completely understandable
- Offer to answer any questions
- Schedule a callback for specific date/time
- Send helpful information by email

### "I'm not sure if this will work for my debts"

**Approach:**
- We investigate every debt thoroughly
- Many clients are surprised by what we find
- No guarantees, but high success rate
- We won't charge if we can't help (if applicable)

### "I had trouble with the Direct Debit setup"

**Approach:**
- Technical issues happen - let's try again
- Check bank details are correct
- Offer to guide them through the process
- Confirm the date works for their finances

### "I found another service"

**Approach:**
- Ask what attracted them to the other service
- Explain our differences/advantages
- Be professional, don't badmouth competitors
- Leave door open for future

---

## Converting Leads to Clients

### Helping Complete Onboarding

If someone is stuck at a particular stage:

**Stuck at DEBT_ADDED:**
- They may have questions about the fee
- Help them understand the calculation
- Guide them to the next step

**Stuck at AFFORDABILITY_ASSESSED:**
- Payment plan selection might be confusing
- Explain the options clearly
- Help them choose appropriate plan

**Stuck at PAYMENT_DETAILS_ADDED:**
- DD setup may have failed
- Help them check/update bank details
- Confirm when payment will be attempted

### What Happens After Conversion

When first payment succeeds:
1. Client status → ACTIVE
2. All cases → Ready to Assess
3. Cases assigned to handlers (may be different from Sales)
4. Investigation can begin

### Handoff to Case Handlers

Once converted:
- Add a note summarizing the client's situation
- Note any concerns they expressed
- Flag anything the case handler should know
- The client is now in the workflow

---

## Lead Assignment

### How Leads Are Assigned

Leads may be assigned based on:
- Round-robin distribution
- Source (specific introducer → specific sales person)
- Availability
- Specialization

### Working with Assigned Leads

If a lead is assigned to you:
- You're responsible for follow-up
- Track your progress in notes
- Update status if you learn new information
- Escalate if you can't reach them

### Reassigning Leads

To reassign a lead to another sales person:
1. Open the client profile
2. Click on Assigned To field
3. Select new assignee
4. Add note explaining why

Common reasons to reassign:
- You're going on leave
- They requested specific person
- Lead needs different expertise

---

## Lead Metrics to Track

### Key Performance Indicators

| Metric | What It Measures |
|--------|------------------|
| **Conversion Rate** | Leads → Active Clients |
| **Drop-off by Stage** | Where leads stop |
| **Time to Conversion** | Days from signup to payment |
| **Contact Rate** | Leads successfully contacted |
| **Re-engagement Rate** | Cold leads reactivated |

### Using Metrics

Track these to:
- Identify process bottlenecks
- Improve follow-up timing
- Focus on high-value activities
- Set realistic targets

---

## Lead Nurturing Best Practices

### Timing Matters

| Lead Age | Recommended Action |
|----------|-------------------|
| 0-24 hours | Quick follow-up call if warm |
| 1-3 days | First structured outreach |
| 3-7 days | Second contact attempt |
| 7-14 days | Email nurture content |
| 14+ days | Periodic check-ins |

### Multi-Channel Approach

- **Phone:** Best for warm leads, immediate needs
- **Email:** Good for information, less intrusive
- **SMS:** Quick reminders (if opted in)
- **Callbacks:** Scheduled at their convenience

### Know When to Stop

Not every lead will convert. Signs to move on:
- Multiple contact attempts with no response
- Explicit request not to contact
- Clear statement they've chosen another option
- Circumstances changed (debt already resolved)

Document this and mark lead appropriately.

---

## FAQ

### How do I know if a lead is assigned to me?

Check the Assigned To field on the client profile, or filter the Clients list by "Assigned To: Me" and lead statuses.

### Can I see what step of onboarding they're on?

Yes, the client status tells you exactly where they stopped:
- LEAD = Just started
- DEBT_ADDED = Added debts
- And so on through the flow

### What if a lead completed onboarding but payment failed?

They'll be at status `PAYMENT_DETAILS_ADDED`. Check when the DD will be retried, or help them update their bank details if there was an error.

### Should I contact very old leads?

Leads over 30 days old are less likely to convert, but occasional re-engagement can work. Be respectful of their time and don't over-contact.

### How do I log a phone call with a lead?

Add a note to their client profile documenting:
- Date and time
- Who you spoke with
- What was discussed
- Outcome and next steps

### What happens to leads that never convert?

They remain in the system with their lead status. They can return and complete onboarding at any time. We don't delete lead records.

---

## Related Documentation

- [Understanding the Workflow](/understanding-the-workflow) - Client status progression
- [Client Management](/client-management) - Viewing client profiles
- [Client Payments](/payments) - How first payment triggers conversion
- [Calendar and Scheduling](/calendar-scheduling) - Booking callbacks
