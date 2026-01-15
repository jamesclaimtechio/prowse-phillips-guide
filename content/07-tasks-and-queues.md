---
title: "Tasks and Work Queues"
slug: "tasks-and-queues"
description: "Using the task system to manage your workload efficiently and prioritize your day."
order: 15
---

# Tasks and Work Queues

This guide explains how to use the task system to manage your workload efficiently. Tasks ensure nothing falls through the cracks and help you prioritize your day.

---

## What Are Tasks?

A **task** is a specific action that needs to be completed on a case. Tasks tell you:
- What needs to be done
- When it's due
- Which case it relates to
- How urgent it is

Tasks are your primary guide for what to work on each day.

---

## How Tasks Are Created

Tasks come from two sources:

### 1. Automatic Tasks (System-Generated)

The system automatically creates tasks based on timing rules:

| Trigger | Task Created | When |
|---------|--------------|------|
| DSAR sent | "Chase DSAR" | Day 28 (warning), Day 30, 60, 90 |
| Section 78 sent | "Chase Section 78" | Day 42 |
| LOC sent | "Chase LOC" | Day 28 (warning), Day 30, 60 |
| Settlement sent | "Chase Settlement" | Day 19 (warning), Day 21, 42 |
| Status change | "Review case" | Based on workflow rules |

**Chase Task Example:**
```
Task: Send DSAR Chase 1
Case: DC-2024-00123
Client: John Smith
Creditor: Barclays
Priority: High
Due: Today
Created: System (automated)
```

### 2. Manual Tasks (Staff-Created)

Staff can create tasks for:
- Follow-up actions
- Reminders
- Team handoffs
- Special requests

---

## The Task Queue

### Accessing Your Tasks

**From Dashboard:**
Your most urgent tasks appear on the dashboard home screen.

**From Sidebar:**
Click **Tasks** in the sidebar for the full task queue.

[SCREENSHOT: Tasks queue showing list of pending tasks]

### Task Queue Views

**My Tasks:** Tasks assigned to you
**Team Tasks:** All tasks for your team (if you're a lead)
**All Tasks:** Every task in the system (admin view)

### Task List Columns

| Column | Description |
|--------|-------------|
| **Title** | What needs to be done |
| **Case** | Related case reference (clickable) |
| **Client** | Client name |
| **Priority** | Urgent / High / Medium / Low |
| **Due Date** | When it should be completed |
| **Status** | Pending / In Progress / Completed |
| **Assigned To** | Who is responsible |

---

## Task Priorities

### Priority Levels

| Priority | Color | Meaning | Examples |
|----------|-------|---------|----------|
| **Urgent** | Red | Do immediately | Overdue tasks, client complaints |
| **High** | Orange | Do today | Due today, chase deadlines |
| **Medium** | Yellow | Do this week | Standard follow-ups |
| **Low** | Gray | When time allows | Nice-to-have actions |

### How Priority is Set

**Automatic tasks:**
- Warning tasks (before deadline): Medium
- First chase: High
- Subsequent chases: High
- Overdue tasks: Escalate to Urgent

**Manual tasks:**
- Set by the person creating the task

---

## Working with Tasks

### Opening a Task

Click on any task to see full details:

```
Task Details
──────────────────────────────────
Title: Send DSAR Chase 1
Type: Chase
Priority: High
Due Date: 15 Nov 2024
Status: Pending

Case: DC-2024-00123
Client: John Smith
Creditor: Barclays
Days since DSAR sent: 30

Created: 14 Nov 2024 (System)
Notes: Automated chase - creditor has not responded within 30 days

[Open Case] [Complete Task] [Reassign]
──────────────────────────────────
```

### Completing a Task

**Step 1: Do the Work**
- Click **Open Case** to go to the case
- Perform the required action (e.g., send chase email)
- Status may update automatically

**Step 2: Mark Complete**
1. Return to the task (or complete from case)
2. Click **Complete Task**
3. Add completion notes (optional but recommended)
4. Confirm

**Example completion note:**
```
Chase 1 email sent to Barclays via Email Creditor. 
Status updated to DSAR Chase 1 Sent.
```

### When Tasks Auto-Complete

Some tasks complete automatically:
- **Chase tasks:** When you send a chase email from Email Creditor, the chase task is marked complete
- **Status tasks:** When the relevant status change occurs

---

## Chase Task Automation

### How It Works

Every day at 6:00 AM, the system:
1. Checks all cases in "chase-eligible" statuses
2. Calculates days since status changed
3. Creates chase tasks when thresholds are reached
4. Assigns to the case handler

### DSAR Chase Schedule

| Days Since Sent | Task Created | Priority |
|-----------------|--------------|----------|
| Day 28 | Warning: DSAR response due soon | Medium |
| Day 30 | Send DSAR Chase 1 | High |
| Day 58 | Warning: Second chase due soon | Medium |
| Day 60 | Send DSAR Chase 2 | High |
| Day 88 | Warning: Third chase due soon | Medium |
| Day 90 | Send DSAR Chase 3 | Urgent |
| Day 95+ | Consider ICO complaint | Urgent |

### Section 78 Chase Schedule

| Days Since Sent | Task Created | Priority |
|-----------------|--------------|----------|
| Day 40 | Warning: S78 response overdue | Medium |
| Day 42 | Send Section 78 Chase | High |
| Day 70+ | Consider escalation | Urgent |

### LOC Chase Schedule

| Days Since Sent | Task Created | Priority |
|-----------------|--------------|----------|
| Day 28 | Warning: LOC response due soon | Medium |
| Day 30 | Send LOC Chase 1 | High |
| Day 58 | Warning: Second chase due soon | Medium |
| Day 60 | Send LOC Chase 2 | High |
| Day 88 | Consider legal proceedings | Urgent |

### Task Cancellation

Chase tasks are automatically cancelled when:
- **Response received:** Task no longer needed
- **Status changed:** Case moved to next stage
- **Case closed:** No further action needed

---

## Work Queues

Work queues organize cases by status, making it easy to batch similar work.

### Accessing Queues

Click **Queues** in the sidebar to see queue options.

### Queue Types

**DSAR Queues:**
- DSAR to Send
- DSAR Awaiting Response
- DSAR Response to Review

**Section 78 Queues:**
- S78 to Send
- S78 Awaiting Response
- S78 Response to Review

**Analysis Queues:**
- Ready for Maxi Report
- Maxi Report to Review
- Route Determination Needed

**Route U Queues:**
- LOC to Draft
- LOC Awaiting Approval
- LOC to Send
- LOC Awaiting Response

**Route E Queues:**
- Settlement to Draft
- Settlement Awaiting Approval
- Settlement to Send
- Settlement Under Negotiation

### Using Queues Effectively

**Batch Processing:**
Instead of jumping between case types, work through one queue at a time:
1. Open the "DSAR Response to Review" queue
2. Work through each case
3. Move to the next queue

**Benefits:**
- Faster work (similar tasks back-to-back)
- Fewer mental context switches
- Easier to track progress

---

## Creating Manual Tasks

### When to Create Tasks

Create manual tasks for:
- Actions the system doesn't track automatically
- Follow-ups you want to remember
- Delegating work to colleagues
- Time-sensitive reminders

### How to Create a Task

**From Case Detail:**
1. Open the case
2. Click **Add Task** (or in the Tasks section)
3. Fill in details:
   - Title (what needs to be done)
   - Description (additional context)
   - Priority
   - Due date
   - Assigned to (yourself or colleague)
4. Click **Create**

**From Tasks Page:**
1. Go to Tasks in sidebar
2. Click **New Task**
3. Select the related case
4. Fill in details
5. Click **Create**

### Task Titles Best Practices

**Clear and specific:**
- ✅ "Call client to discuss Section 78 response"
- ❌ "Call client"

**Action-oriented:**
- ✅ "Send follow-up email to Barclays about missing pages"
- ❌ "Barclays issue"

**Include context:**
- ✅ "Review Maxi Report - check breach on page 7"
- ❌ "Review report"

---

## Task Filters and Sorting

### Filtering Tasks

Use filters to focus on what matters:

| Filter | Options |
|--------|---------|
| **Status** | Pending, In Progress, Completed |
| **Priority** | Urgent, High, Medium, Low |
| **Due Date** | Overdue, Today, This Week, All |
| **Assigned To** | Me, Specific Person, Anyone |
| **Task Type** | Chase, Review, Follow-up, etc. |
| **Case** | Specific case |

### Common Filter Combinations

**My urgent work:**
- Assigned To: Me
- Priority: Urgent + High
- Status: Pending

**Overdue tasks:**
- Due Date: Overdue
- Status: Pending

**Today's tasks:**
- Due Date: Today
- Assigned To: Me

### Sorting

Click column headers to sort by:
- Due date (default - earliest first)
- Priority (highest first)
- Case reference
- Client name
- Created date

---

## Reassigning Tasks

### When to Reassign

Reassign tasks when:
- You're going on leave
- Case is transferred to another handler
- Task requires different expertise
- Workload balancing needed

### How to Reassign

1. Open the task
2. Click **Reassign**
3. Select new assignee
4. Add a note explaining why
5. Confirm

The new assignee receives notification of the task.

### Leave Handover

When going on leave:
1. Filter to all your pending tasks
2. Review each task's urgency
3. Reassign urgent tasks to colleagues
4. Leave less urgent tasks (can wait)
5. Brief colleagues on important context

---

## Best Practices

### Daily Routine

**Morning (Start of Day):**
1. Check dashboard for overdue tasks
2. Review today's due tasks
3. Plan which tasks to tackle first
4. Address urgent items immediately

**Throughout Day:**
1. Complete tasks as you finish work
2. Add notes when relevant
3. Create tasks for follow-ups

**End of Day:**
1. Review incomplete tasks
2. Reschedule if needed
3. Check tomorrow's tasks

### Task Hygiene

**Complete tasks promptly:**
Don't leave tasks sitting after the work is done. Mark complete as soon as finished.

**Add useful notes:**
Future you (or a colleague) will appreciate context when reviewing.

**Don't over-create:**
Don't create tasks for things you'll do in the next 5 minutes. Tasks are for tracking, not micromanagement.

**Review weekly:**
Once a week, look at all your tasks. Cancel any that are obsolete. Prioritize any that have been sitting.

---

## FAQ

### Why do chase tasks appear automatically?

The system monitors case status and timing. When a creditor hasn't responded within expected timeframes, it creates chase tasks to ensure follow-up happens. This prevents cases from stalling.

### Can I delay a task?

Yes, you can change the due date on any task. Click the task, edit the due date, and save. Add a note explaining why you're delaying.

### What happens if I don't complete a task by its due date?

The task becomes overdue:
- It appears in red
- Priority may escalate
- It shows in "Overdue" filters
- Your team lead may be alerted

### Can I delete a task?

Yes, if it's no longer needed:
1. Open the task
2. Click **Cancel Task** or **Delete**
3. Confirm

Note: Cancelled tasks remain in history for audit purposes.

### How do I see my completed tasks?

1. Go to Tasks
2. Change Status filter to "Completed"
3. Review your completed work

This is useful for timesheet purposes or reviewing what you've done.

### What if a task was created in error?

Cancel the task with a note explaining it was created in error. Don't just ignore it - cancelled tasks are cleaner than abandoned pending tasks.

---

## Related Documentation

- [Case Management](/case-management) - Case status and workflow
- [Investigation Process](/investigation-process) - Chase timing and deadlines
- [Documents and Correspondence](/documents-and-correspondence) - Sending chase emails
- [Approval Workflows](/approvals) - Approval-related tasks
