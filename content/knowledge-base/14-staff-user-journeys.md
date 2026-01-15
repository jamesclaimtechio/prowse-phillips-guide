# Staff User Journeys

This guide provides visual walkthroughs of the key workflows you'll perform in the system. Use these diagrams to understand how different tasks connect and what happens at each stage.

---

## How to Use This Guide

Each journey shows:
- The **flow** of tasks from start to finish
- **Decision points** where different paths may be taken
- **Your role** at each step
- **What triggers** the next step

These are reference diagrams - for detailed step-by-step instructions, see the linked documentation.

---

## Journey 1: New Client Onboarding

This journey shows what happens when a new client signs up, from their first visit through to case work beginning.

```mermaid
flowchart TB
    subgraph onboarding [Client Onboarding - Portal Side]
        A[Client visits website] --> B[Enters personal details]
        B --> C[Adds debt information]
        C --> D[Views fee calculation]
        D --> E[Completes affordability]
        E --> F[Selects payment plan]
        F --> G[Sets up Direct Debit]
        G --> H[Uploads ID documents]
        H --> I[Signs agreements]
    end
    
    subgraph staff_action [Staff Action Required]
        I --> J{First payment received?}
        J -->|No| K[Client Status: PAYMENT_DETAILS_ADDED]
        K --> L[Wait for payment]
        L --> J
        J -->|Yes| M[Client Status: ACTIVE]
        M --> N[All cases move to Ready to Assess]
    end
    
    subgraph case_work [Case Work Begins]
        N --> O[Cases appear in your queue]
        O --> P[Begin investigation]
    end
```

### Key Points

| Stage | Client Status | Case Status | Your Action |
|-------|---------------|-------------|-------------|
| After signup | PAYMENT_DETAILS_ADDED | Awaiting Payment | Wait for first payment |
| After first payment | ACTIVE | Ready to Assess | Begin DSAR process |

### What You Do

1. **Before first payment:** Nothing - client is completing onboarding
2. **After first payment:** Cases appear in "Ready to Assess" queue
3. **Start investigation:** Send DSAR request

**Related:** [Understanding the Workflow](./02-understanding-the-workflow.md), [Client Management](./03-client-management.md)

---

## Journey 2: Investigation Process

This is the core workflow - investigating whether a debt is enforceable.

```mermaid
flowchart TB
    subgraph dsar [DSAR Phase]
        A[Case: Ready to Assess] --> B[Send DSAR to creditor]
        B --> C[Case: DSAR Sent]
        C --> D{Response within 30 days?}
        D -->|No| E[Send Chase 1]
        E --> F{Response?}
        F -->|No| G[Send Chase 2]
        G --> H{Response?}
        H -->|No| I[Send Chase 3]
        I --> J{Response?}
        J -->|No| K[Consider ICO complaint]
        D -->|Yes| L[Upload response]
        F -->|Yes| L
        H -->|Yes| L
        J -->|Yes| L
        L --> M[Review DSAR]
        M --> N[Case: DSAR Complete]
    end
    
    subgraph s78 [Section 78 Phase]
        N --> O[Send Section 78 request]
        O --> P[Case: Section 78 Sent]
        P --> Q{Response within 12 working days?}
        Q -->|No| R[Send Chase]
        R --> S{Response?}
        S -->|No| T[Document non-compliance]
        Q -->|Yes| U[Upload response]
        S -->|Yes| U
        T --> V[Strong evidence for Route U]
        U --> W[Review Section 78]
        W --> X[Case: Section 78 Complete]
    end
    
    subgraph analysis [Analysis Phase]
        X --> Y[Request Maxi Report]
        V --> Y
        Y --> Z[Review Maxi Report]
        Z --> AA{Route determination}
        AA -->|Unenforceable| AB[Route U]
        AA -->|Enforceable| AC[Route E]
    end
```

### Timeline Overview

| Phase | Duration | Chase Schedule |
|-------|----------|----------------|
| DSAR | 30+ days | Day 30, 60, 90 |
| Section 78 | 12+ working days | Day 42 |
| Maxi Report | 3-7 days | N/A |
| Route Determination | 1-2 days | N/A |

### Decision Points

**Route U (Unenforceable) if:**
- No signed credit agreement
- Missing prescribed terms
- Improper default process
- S78 non-compliance

**Route E (Enforceable) if:**
- Valid agreement exists
- No significant breaches
- Client may benefit from settlement

**Related:** [Investigation Process](./05-investigation-process.md), [Approval Workflows](./08-approvals.md)

---

## Journey 3: Route U - Unenforceable Debt

When investigation reveals the debt is unenforceable, follow this path.

```mermaid
flowchart TB
    subgraph determination [Route Determination]
        A[Route Determined: U] --> B[Document grounds]
        B --> C[Submit for solicitor approval]
        C --> D{Approved?}
        D -->|No| E[Address feedback]
        E --> C
        D -->|Yes| F[Route U Confirmed]
    end
    
    subgraph loc [Letter of Claim]
        F --> G[Draft LOC]
        G --> H[Select grounds and evidence]
        H --> I[Submit LOC for approval]
        I --> J{Solicitor approves?}
        J -->|No| K[Revise LOC]
        K --> I
        J -->|Yes| L[LOC Approved]
        L --> M[Send LOC to creditor]
        M --> N[Case: LOC Sent]
    end
    
    subgraph negotiation [Negotiation]
        N --> O{Response within 30 days?}
        O -->|No| P[Send LOC Chase 1]
        P --> Q{Response?}
        Q -->|No| R[Send LOC Chase 2]
        R --> S{Response?}
        S -->|No| T[Consider legal proceedings]
        O -->|Yes| U[Review response]
        Q -->|Yes| U
        S -->|Yes| U
        U --> V{Creditor accepts?}
        V -->|Yes| W[Debt written off]
        V -->|Partial| X[Negotiate terms]
        V -->|No| Y[Escalate or litigate]
        X --> V
    end
    
    subgraph closure [Case Closure]
        W --> Z[Update credit file]
        Z --> AA[Case Closed: Successful]
        Y --> AB[Case Closed: Unsuccessful]
    end
```

### Approval Checkpoints

| Checkpoint | Who Approves | What They Check |
|------------|--------------|-----------------|
| Route Determination | Solicitor | Evidence supports Route U |
| Letter of Claim | Solicitor | Grounds are valid, wording is correct |

### Typical Outcomes

- **Best case:** Debt written off, credit file corrected
- **Good case:** Partial write-off or settlement
- **Unsuccessful:** Creditor disputes, may need litigation

**Related:** [Approval Workflows](./08-approvals.md), [Documents and Correspondence](./06-documents-and-correspondence.md)

---

## Journey 4: Route E - Enforceable Debt Settlement

When the debt is valid but we can still help through negotiation.

```mermaid
flowchart TB
    subgraph determination [Route Determination]
        A[Route Determined: E] --> B[Document reasoning]
        B --> C[Submit for solicitor approval]
        C --> D{Approved?}
        D -->|No| E[Address feedback]
        E --> C
        D -->|Yes| F[Route E Confirmed]
    end
    
    subgraph affordability [Affordability Review]
        F --> G{Affordability current?}
        G -->|No| H[Update affordability assessment]
        H --> I[Calculate disposable income]
        G -->|Yes| I
        I --> J[Determine settlement capacity]
    end
    
    subgraph settlement [Settlement Proposal]
        J --> K[Draft settlement terms]
        K --> L[Submit for approval]
        L --> M{Solicitor approves?}
        M -->|No| N[Revise terms]
        N --> L
        M -->|Yes| O[Settlement Approved]
        O --> P[Send to creditor]
        P --> Q[Case: Settlement Sent]
    end
    
    subgraph negotiation [Negotiation]
        Q --> R{Creditor response?}
        R -->|Accepts| S[Settlement Agreed]
        R -->|Counter-offer| T[Review counter]
        R -->|Rejects| U[Revise or escalate]
        T --> V{Accept counter?}
        V -->|Yes| S
        V -->|No| W[Make counter-offer]
        W --> R
        U --> X{Options?}
        X -->|DMP referral| Y[Refer to DMP provider]
        X -->|No settlement| Z[Case Closed: Unsuccessful]
    end
    
    subgraph closure [Case Closure]
        S --> AA[Document terms]
        AA --> AB[Monitor payment if applicable]
        AB --> AC[Case Closed: Successful]
        Y --> AD[Case Closed: Referred]
    end
```

### Settlement Considerations

| Factor | Impact |
|--------|--------|
| Client's disposable income | Determines affordable payment |
| Debt age | Older debts often settle for less |
| Creditor policy | Some accept 30-40%, others need 70%+ |
| Lump sum vs instalments | Lump sum usually gets better discount |

### Typical Settlement Ranges

- **Credit cards:** 30-50% of balance
- **Personal loans:** 40-60% of balance
- **Store cards:** 30-50% of balance
- **Older debts (5+ years):** Often 20-40%

**Related:** [Approval Workflows](./08-approvals.md), [Client Payments](./09-payments.md)

---

## Journey 5: Daily Workflow

A typical day for an Admin staff member handling cases.

```mermaid
flowchart TB
    subgraph morning [Morning Routine]
        A[Log in] --> B[Check dashboard]
        B --> C[Review overdue tasks]
        C --> D[Check urgent items]
        D --> E[Plan priorities]
    end
    
    subgraph tasks [Task Processing]
        E --> F[Open task queue]
        F --> G[Select highest priority task]
        G --> H{Task type?}
        H -->|Chase| I[Send chase email]
        H -->|Review| J[Review document]
        H -->|Status update| K[Update case status]
        H -->|Follow-up| L[Contact client/creditor]
        I --> M[Mark task complete]
        J --> M
        K --> M
        L --> M
        M --> N{More tasks?}
        N -->|Yes| G
        N -->|No| O[Queue cleared]
    end
    
    subgraph queues [Queue Processing]
        O --> P[Check work queues]
        P --> Q[Select queue to work]
        Q --> R{Queue type?}
        R -->|DSAR to send| S[Process DSAR sends]
        R -->|Reviews pending| T[Process reviews]
        R -->|Approvals needed| U[Prepare submissions]
        S --> V[Next queue]
        T --> V
        U --> V
        V --> W{More queues?}
        W -->|Yes| Q
        W -->|No| X[Queues done]
    end
    
    subgraph end_of_day [End of Day]
        X --> Y[Check tomorrow's tasks]
        Y --> Z[Note any handovers needed]
        Z --> AA[Log out]
    end
```

### Priority Order

1. **Urgent/Overdue** - Do these first
2. **Due today** - Complete before end of day
3. **Queued work** - Process by queue type
4. **Proactive** - Get ahead when time allows

### Time Allocation Guide

| Activity | Suggested Time |
|----------|----------------|
| Morning review | 15-30 minutes |
| Task processing | 2-3 hours |
| Queue processing | 2-3 hours |
| Admin/meetings | 1-2 hours |
| End of day review | 15 minutes |

**Related:** [Tasks and Work Queues](./07-tasks-and-queues.md), [Case Management](./04-case-management.md)

---

## Journey 6: Document Request to Creditor

The complete flow for sending any formal request to a creditor.

```mermaid
flowchart TB
    subgraph prepare [Preparation]
        A[Open case] --> B[Go to Communications]
        B --> C[Click Email Creditor]
        C --> D[Select template]
        D --> E[Fill required variables]
    end
    
    subgraph compose [Composition]
        E --> F[Apply template]
        F --> G[Review email content]
        G --> H{Content correct?}
        H -->|No| I[Edit content]
        I --> H
        H -->|Yes| J[Select attachments]
        J --> K[Add Letter of Authority]
        K --> L[Add other documents if needed]
    end
    
    subgraph send [Sending]
        L --> M[Preview final email]
        M --> N{Ready to send?}
        N -->|No| O[Make corrections]
        O --> M
        N -->|Yes| P[Click Send]
        P --> Q[Email dispatched]
        Q --> R[Status auto-updates]
        R --> S[Communication logged]
    end
    
    subgraph tracking [Tracking]
        S --> T[Monitor delivery status]
        T --> U{Delivered?}
        U -->|Yes| V[Wait for response]
        U -->|Failed| W[Check error and resend]
        V --> X{Response received?}
        X -->|Yes| Y[Upload and process]
        X -->|No, deadline passed| Z[Chase task created]
    end
```

### Template Selection Guide

| Purpose | Template | Key Variables |
|---------|----------|---------------|
| Request all data | DSAR Request | Client, Account, Case Ref |
| Request agreement | Section 78 Request | Client, Account |
| Assert unenforceability | Letter of Claim | Grounds, Evidence |
| Offer settlement | Settlement Proposal | Amount, Terms |
| Follow up | Chase templates | Original Date |

**Related:** [Documents and Correspondence](./06-documents-and-correspondence.md), [Communications](./10-communications.md)

---

## Journey 7: Approval Submission

The flow for submitting any document requiring solicitor approval.

```mermaid
flowchart TB
    subgraph prepare [Preparation]
        A[Complete investigation/analysis] --> B[Document findings in case notes]
        B --> C[Gather supporting evidence]
        C --> D[Draft document if needed]
    end
    
    subgraph submit [Submission]
        D --> E[Go to Approvals section]
        E --> F[Click New Approval]
        F --> G[Select approval type]
        G --> H[Fill justification]
        H --> I[Attach evidence]
        I --> J[Submit for review]
    end
    
    subgraph wait [Waiting Period]
        J --> K[Case status: Pending Approval]
        K --> L[Solicitor reviews]
        L --> M{Decision?}
    end
    
    subgraph outcome [Outcome Handling]
        M -->|Approved| N[Notification received]
        N --> O[Status updates automatically]
        O --> P[Proceed to next step]
        M -->|Rejected| Q[Rejection notification]
        Q --> R[Review feedback]
        R --> S[Address issues]
        S --> T[Resubmit]
        T --> L
    end
```

### Approval Types

| Type | When Needed | Typical Turnaround |
|------|-------------|-------------------|
| Route Determination | After investigation complete | 24 hours |
| Letter of Claim | Before sending LOC | 24 hours |
| Settlement Proposal | Before sending settlement | 24 hours |

### Tips for Faster Approval

1. **Be thorough first time** - Complete submissions get faster approval
2. **Reference evidence** - Point to specific documents and findings
3. **Clear justification** - Explain your reasoning clearly
4. **Check before submitting** - Avoid obvious errors

**Related:** [Approval Workflows](./08-approvals.md), [Investigation Process](./05-investigation-process.md)

---

## Journey Maps Summary

| Journey | Primary Role | Duration | Key Checkpoints |
|---------|--------------|----------|-----------------|
| New Client | System/Client | 1-7 days | First payment |
| Investigation | Admin | 8-12 weeks | DSAR, S78, Maxi, Route |
| Route U | Admin + Solicitor | 4-8 weeks | LOC Approval, Creditor Response |
| Route E | Admin + Solicitor | 4-8 weeks | Settlement Approval, Agreement |
| Daily Workflow | All Staff | Daily | Tasks, Queues, Review |
| Document Request | Admin | Minutes | Template, Send, Track |
| Approval | Admin → Solicitor | 24-48 hours | Submit, Review, Decision |

---

## Using These Journeys

### For New Staff

1. Start with **Daily Workflow** to understand your routine
2. Study **Investigation Process** - this is the core work
3. Learn **Document Request** flow for creditor communication
4. Understand **Approval Submission** when you need sign-off

### For Training

Use these diagrams to:
- Explain the overall process
- Show where different stages connect
- Identify handoff points
- Understand what triggers next steps

### For Reference

Keep these journeys bookmarked for:
- Remembering what comes next
- Explaining to clients where their case is
- Onboarding new team members
- Troubleshooting stuck cases

---

## Related Documentation

- [Understanding the Workflow](./02-understanding-the-workflow.md) - Detailed status explanations
- [Case Management](./04-case-management.md) - Working with cases
- [Investigation Process](./05-investigation-process.md) - DSAR, S78, Maxi details
- [Approval Workflows](./08-approvals.md) - Approval process details
- [Tasks and Work Queues](./07-tasks-and-queues.md) - Daily task management
