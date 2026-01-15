---
title: "Quick Reference Cards"
slug: "quick-reference-cards"
description: "One-page cheat sheets for common tasks and information - print or bookmark for quick reference."
order: 54
---

# Quick Reference Cards

One-page cheat sheets for common tasks and information. Print these or keep them bookmarked for quick reference.

---

## Card 1: Client Status Quick Reference

### Status Progression

```
LEAD → DEBT_ADDED → FEE_VIEWED → AFFORDABILITY_ASSESSED →
PAYMENT_PLAN_AGREED → PAYMENT_DETAILS_ADDED → ACTIVE → FULLY_PAID
                                                ↓
                                          MISSED_PAYMENT
```

### Status Meanings

| Status | Type | What It Means |
|--------|------|---------------|
| LEAD | Lead | Just started, basic details only |
| DEBT_ADDED | Lead | Has entered debts |
| FEE_VIEWED | Lead | Seen our fees |
| AFFORDABILITY_ASSESSED | Lead | Completed income/expense |
| PAYMENT_PLAN_AGREED | Lead | Chose payment plan |
| PAYMENT_DETAILS_ADDED | Lead | Bank details added, awaiting DD |
| ACTIVE | Client | Paying, cases being worked |
| MISSED_PAYMENT | Client | Payment overdue |
| FULLY_PAID | Client | All fees paid |

### Key Rule
**Lead → Client conversion happens when first payment is received**

---

## Card 2: Case Status Quick Reference

### Investigation Flow

```
Awaiting Payment → Ready to Assess
        ↓
   DSAR Sent → Chase 1 → Chase 2 → Chase 3
        ↓
   DSAR Response Received → DSAR Complete
        ↓
   Section 78 Sent → Chase
        ↓
   Section 78 Response → S78 Complete
        ↓
   Maxi Report → Route Determination
        ↓              ↓
    Route U         Route E
        ↓              ↓
   LOC Sent      Settlement Sent
        ↓              ↓
   Case Closed   Case Closed
```

### Route Decision Criteria

| Route | Criteria |
|-------|----------|
| **Route U** | No signed agreement, missing terms, improper default, S78 non-compliance |
| **Route E** | Valid agreement, enforceable debt, settlement negotiation possible |

---

## Card 3: Chase Timing Reference

### DSAR Chase Schedule

| Day | Action | Priority |
|-----|--------|----------|
| Day 28 | Warning task | Medium |
| Day 30 | Send Chase 1 | High |
| Day 60 | Send Chase 2 | High |
| Day 90 | Send Chase 3 | Urgent |
| Day 95+ | Consider ICO complaint | Urgent |

### Section 78 Chase Schedule

| Day | Action | Priority |
|-----|--------|----------|
| Day 40 | Response overdue | Medium |
| Day 42 | Send Chase | High |
| Day 70+ | Escalation | Urgent |

### LOC Chase Schedule

| Day | Action | Priority |
|-----|--------|----------|
| Day 28 | Warning task | Medium |
| Day 30 | Send Chase 1 | High |
| Day 60 | Send Chase 2 | High |
| Day 90+ | Consider legal action | Urgent |

### Key Deadlines

| Request Type | Legal Deadline |
|--------------|----------------|
| DSAR | 30 calendar days |
| Section 78 | 12 working days |
| Default Notice | 14 days to remedy |

---

## Card 4: Email Template Reference

### When to Use Each Template

| Situation | Template |
|-----------|----------|
| Starting investigation | DSAR Request |
| DSAR overdue | DSAR Chase 1/2/3 |
| Need credit agreement | Section 78 Request |
| S78 overdue | Section 78 Chase |
| Asserting unenforceability | Letter of Claim |
| LOC not responded | LOC Chase |
| Negotiating settlement | Settlement Proposal |
| Settlement follow-up | Settlement Chase |
| General question | General Inquiry |

### Always Attach

- **Letter of Authority** - On first contact with any creditor
- **Supporting evidence** - When relevant to your claim

### Template Variables

| Variable | Auto-fills From |
|----------|-----------------|
| CLIENT_NAME | Client record |
| CREDITOR_NAME | Creditor record |
| ACCOUNT_NUMBER | Case record |
| CASE_REFERENCE | Case record |
| DEBT_AMOUNT | Case record |
| ORIGINAL_SEND_DATE | You enter manually |

---

## Card 5: Daily Checklist

### Morning Routine (15 min)

- [ ] Check dashboard for overdue items
- [ ] Review urgent tasks
- [ ] Check today's scheduled calls
- [ ] Plan priority order

### Throughout Day

- [ ] Complete tasks from queue
- [ ] Process work queues by type
- [ ] Log all client contact
- [ ] Update case statuses after actions
- [ ] Add notes for context

### End of Day (10 min)

- [ ] Mark completed tasks done
- [ ] Review tomorrow's calendar
- [ ] Check for urgent items to handoff
- [ ] Log out

### Weekly (Once per week)

- [ ] Review all pending tasks
- [ ] Check for stale cases (long time in status)
- [ ] Clear any completed items
- [ ] Plan for next week

---

## Card 6: Approval Checklist

### Route Determination Approval

**Before submitting:**
- [ ] DSAR reviewed and findings documented
- [ ] Section 78 reviewed and findings documented
- [ ] Maxi Report reviewed (if applicable)
- [ ] Evidence clearly referenced
- [ ] Justification written

### LOC Approval

**Before submitting:**
- [ ] Route U is approved
- [ ] LOC drafted from template
- [ ] All grounds are supported by evidence
- [ ] Legal reasoning is sound
- [ ] Attachments selected

### Settlement Approval

**Before submitting:**
- [ ] Route E is approved
- [ ] Affordability is current
- [ ] Settlement terms are realistic
- [ ] Client can afford proposed payments
- [ ] Terms documented clearly

### After Rejection

- [ ] Read feedback carefully
- [ ] Address each point raised
- [ ] Gather additional evidence if needed
- [ ] Revise and resubmit
- [ ] Reference previous submission

---

## Card 7: Escalation Paths

### Who to Contact

| Issue Type | First Contact | If Unresolved |
|------------|---------------|---------------|
| **Technical (system)** | IT Support | IT Manager |
| **Process question** | Team Lead | Manager |
| **Legal/compliance** | Solicitor | Compliance Officer |
| **Client complaint** | Team Lead | Manager |
| **Data breach** | Manager (immediate) | Compliance Officer |
| **Payment issue** | Finance | Manager |
| **HR/staff issue** | Manager | HR |

### When to Escalate Immediately

- Data breaches or security incidents
- Client threats or aggression
- Regulatory inquiries
- Media contact
- Legal proceedings received
- Serious complaints

### Escalation Tips

1. **Document first** - Note what happened before escalating
2. **Be specific** - Explain the issue clearly
3. **Suggest solutions** - If you have ideas, share them
4. **Follow up** - Check the issue was resolved

---

## Card 8: Keyboard Shortcuts

### Navigation

| Action | Shortcut |
|--------|----------|
| Global search | `Ctrl+K` / `Cmd+K` |
| Go to dashboard | `Ctrl+D` / `Cmd+D` |
| Go to tasks | `Ctrl+T` / `Cmd+T` |

### Common Actions

| Action | Shortcut |
|--------|----------|
| Save | `Ctrl+S` / `Cmd+S` |
| Cancel/Close | `Esc` |
| Refresh | `F5` |

### Text Editing

| Action | Shortcut |
|--------|----------|
| Select all | `Ctrl+A` / `Cmd+A` |
| Copy | `Ctrl+C` / `Cmd+C` |
| Paste | `Ctrl+V` / `Cmd+V` |
| Undo | `Ctrl+Z` / `Cmd+Z` |

---

## Card 9: Compliance Quick Facts

### Key Deadlines

| Deadline | Requirement |
|----------|-------------|
| 30 days | DSAR response |
| 12 working days | Section 78 response |
| 8 weeks | Full complaint response |
| 72 hours | Data breach report to ICO |
| 6 years | Minimum record retention |

### 12-in-12 Rule (FCA Exemption)

Must meet ALL three:
1. ≤ 12 instalments
2. ≤ 12 months duration
3. 0% interest

### Required Documents

| Document | When |
|----------|------|
| Client Care Letter | Before work begins |
| Letter of Authority | First creditor contact |
| Fee Agreement | During onboarding |

### Vulnerable Clients

**Signs:** Difficulty understanding, distress, health mentions, financial desperation

**Actions:** Note on file, adjust communication, extra patience, escalate concerns

---

## Card 10: Case Stage Summary

### Stage 1: Initial
- Client has signed up
- Awaiting first payment
- Cases in "Awaiting Payment"

### Stage 2: Investigation
- First payment received
- DSAR and Section 78 sent
- Maxi Report obtained
- Route determined

### Stage 3: Route U (Post-Lit)
- Route U confirmed
- LOC drafted and sent
- Negotiation with creditor
- Goal: Debt write-off

### Stage 4: Route E (Post-Lit)
- Route E confirmed
- Settlement proposed
- Negotiation with creditor
- Goal: Reduced settlement

### Handler Transition
- Stages 1-2: Pre-Lit Handler
- Stages 3-4: Post-Lit Handler
- Transition at route determination

---

## Card 11: Payment Plan Types

### 12-in-12 (Standard)

| Feature | Value |
|---------|-------|
| Instalments | ≤ 12 |
| Duration | ≤ 12 months |
| Interest | 0% |
| Regulation | FCA Exempt |
| Monthly | Fee ÷ 12 |

### Regulated Credit

| Feature | Value |
|---------|-------|
| Instalments | > 12 |
| Duration | > 12 months |
| Interest | May apply |
| Regulation | FCA Regulated |
| Requires | SECCI, Creditworthiness |

### Pay in Full

| Feature | Value |
|---------|-------|
| Payment | Single lump sum |
| Discount | 5% off total |
| Timeline | Within 7 days |

### Key Rule
**Payment plans are CLIENT-level, not case-level**

---

## Card 12: Common Abbreviations

| Abbr | Meaning |
|------|---------|
| APR | Annual Percentage Rate |
| CCA | Consumer Credit Act |
| DD | Direct Debit |
| DMP | Debt Management Plan |
| DSAR | Data Subject Access Request |
| FCA | Financial Conduct Authority |
| GDPR | General Data Protection Regulation |
| ICO | Information Commissioner's Office |
| LOA | Letter of Authority |
| LOC | Letter of Claim |
| S77 | Section 77 (CCA) |
| S78 | Section 78 (CCA) |
| SECCI | Standard European Consumer Credit Information |
| SRA | Solicitors Regulation Authority |

---

## Using These Cards

### Print Options

Each card is designed to fit on one page. Print the ones most relevant to your role.

### Suggested by Role

| Role | Most Useful Cards |
|------|-------------------|
| Sales | 1, 5, 6, 7 |
| Admin | 2, 3, 4, 5, 6, 7, 9 |
| Solicitor | 2, 6, 7, 9 |
| New Staff | All |

### Keep Handy

Bookmark this page or print the cards you use most. They're designed for quick lookup, not deep reading.

---

## Related Documentation

- [Glossary](/glossary) - Full term definitions
- [Understanding the Workflow](/understanding-the-workflow) - Detailed explanations
- [Compliance Guide](/compliance-guide) - Full regulatory details
- [Troubleshooting](/troubleshooting) - When things go wrong
