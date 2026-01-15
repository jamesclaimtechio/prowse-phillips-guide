# Staff Management

This guide covers how to manage staff accounts in the system. Staff management is only available to users with Admin or Solicitor roles.

---

## Overview

Staff management allows you to:
- View all staff members
- Create new staff accounts
- Edit staff details
- Deactivate accounts when someone leaves
- Reset passwords

---

## Accessing Staff Management

From the sidebar, click **Staff** to access the staff management page.

[SCREENSHOT: Staff list page showing all team members]

> **Note:** The Staff menu item only appears for Admin and Solicitor roles. Sales staff cannot access this section.

---

## The Staff List

The staff list shows all team members with key information:

| Column | Description |
|--------|-------------|
| **Name** | Full name (click to view/edit) |
| **Email** | Login email address |
| **Phone** | Contact phone number |
| **Role** | SALES, ADMIN, or SOLICITOR |
| **Status** | ACTIVE or DELETED |
| **Last Login** | When they last accessed the system |

### Filtering the List

Use filters to narrow down the view:
- **Role** - Show only Sales, Admin, or Solicitor
- **Status** - Active or Deleted accounts

---

## Staff Roles

There are three staff roles, each with different capabilities:

### Sales Role

**Primary purpose:** Lead follow-up and initial client contact

**Capabilities:**
- View leads and incomplete onboarding
- Contact potential clients
- Limited case visibility
- Cannot access staff management
- Cannot approve legal documents

### Admin Role

**Primary purpose:** Full case management and daily operations

**Capabilities:**
- Full client and case access
- Send correspondence to clients and creditors
- Manage tasks and documents
- Submit documents for approval
- Create and manage staff accounts
- Cannot approve legal documents (LOC, settlements)

### Solicitor Role

**Primary purpose:** Legal oversight and document approval

**Capabilities:**
- Everything Admin can do, plus:
- Approve route determinations
- Approve Letters of Claim
- Approve settlement proposals
- Final authority on legal matters

---

## Creating a New Staff Member

### When to Create

Create new staff accounts when:
- A new team member joins
- Someone needs system access
- A temporary/contractor needs access

### How to Create

1. Go to **Staff** in the sidebar
2. Click **Add Staff Member** button
3. Fill in the required details:

```
Create Staff Member
────────────────────────────────────────

First Name: [Required]
Last Name: [Required]
Email: [Required - must be unique]
Phone: [Optional]

Role: [Select one]
○ Sales
○ Admin
○ Solicitor

[Create Staff Member]
────────────────────────────────────────
```

4. Click **Create Staff Member**

### What Happens After Creation

1. **Account is created** with a temporary password
2. **Welcome email is sent** to the new staff member with:
   - Login URL
   - Temporary password
   - Instructions to change password on first login
3. **Account is immediately active**

### Email Must Be Unique

Each staff member must have a unique email address. If you try to create an account with an email that already exists, you'll see an error:

> "A staff member with this email already exists"

---

## Editing Staff Details

### What Can Be Changed

You can update:
- First name
- Last name
- Phone number
- Role (with caution - see below)

### What Cannot Be Changed

- Email address (this is the login identifier)

If someone's email changes, you'll need to deactivate the old account and create a new one.

### How to Edit

1. Click on the staff member's name in the list
2. Click **Edit** (or the edit icon)
3. Make your changes
4. Click **Save**

### Changing Roles

**Be careful when changing roles:**

| Change | Impact |
|--------|--------|
| Sales → Admin | Gains case management, staff access |
| Admin → Sales | Loses case management, staff access |
| Admin → Solicitor | Gains approval authority |
| Solicitor → Admin | Loses approval authority |

Role changes take effect immediately. The staff member may need to log out and back in to see updated permissions.

---

## Deactivating Staff Accounts

### When to Deactivate

Deactivate accounts when:
- Someone leaves the company
- Account is no longer needed
- Security concern requires immediate access removal

### How to Deactivate

1. Find the staff member in the list
2. Click on their name to open their profile
3. Click **Deactivate Account**
4. Confirm the action

### What Happens

- The account status changes to **DELETED**
- They can no longer log in
- Their historical actions remain in the system (audit trail)
- Cases assigned to them may need reassignment

### Reassigning Work

Before deactivating, consider:
1. **Check assigned cases** - Reassign to other handlers
2. **Check pending tasks** - Reassign or complete
3. **Check pending approvals** - Reassign to another solicitor

> **Best Practice:** Reassign all work before deactivating an account to avoid orphaned cases.

### Reactivating an Account

If someone returns or was deactivated in error:
1. Find them in the staff list (filter by Status: Deleted)
2. Click on their profile
3. Click **Reactivate Account**
4. They can log in with their previous credentials

---

## Password Management

### Resetting Someone's Password

If a staff member forgets their password and can't use the self-service reset:

1. Open their staff profile
2. Click **Reset Password**
3. A new temporary password is generated
4. Email is sent to the staff member
5. They must change it on next login

### Password Requirements

Passwords must meet these requirements:
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### First Login Password Change

New staff members must change their temporary password on first login:

1. Log in with temporary password
2. Prompted to create new password
3. Enter new password (meeting requirements)
4. Confirm new password
5. Continue to dashboard

---

## Staff Profile Page

Each staff member has a profile page showing:

### Personal Information
- Name
- Email
- Phone
- Role
- Status

### Activity Summary
- Last login date and time
- Number of assigned cases
- Number of pending tasks

### Actions Available
- Edit details
- Reset password
- Deactivate/Reactivate account

---

## Your Own Profile

### Accessing Your Profile

Click your name/avatar in the top-right corner, then select **Profile**.

### What You Can Change

- Phone number
- Password (via Change Password)

### What You Cannot Change

- Your own role (requires another admin)
- Your email address

### Changing Your Password

1. Go to your profile
2. Click **Change Password**
3. Enter current password
4. Enter new password
5. Confirm new password
6. Click **Save**

---

## Best Practices

### Account Creation

1. **Verify details before creating** - Especially email address
2. **Choose appropriate role** - Start with minimum needed permissions
3. **Inform the person** - Let them know to expect the welcome email

### Security

1. **Deactivate promptly** - When someone leaves, deactivate same day
2. **Review periodically** - Check for inactive accounts quarterly
3. **Minimal permissions** - Give the minimum role needed for the job

### Offboarding

When a staff member leaves:

1. ☐ Reassign all their active cases
2. ☐ Reassign or complete pending tasks
3. ☐ Reassign pending approvals (if solicitor)
4. ☐ Deactivate their account
5. ☐ Note the offboarding in relevant case notes

---

## FAQ

### Can I delete a staff account permanently?

No, accounts are "soft deleted" (deactivated). This preserves the audit trail showing who took actions on cases.

### What happens to cases when someone is deactivated?

Cases remain assigned to the deactivated person but should be reassigned. The system may flag unassigned or orphaned cases.

### Can someone have multiple accounts?

No, each person should have exactly one account. Multiple accounts create confusion and audit issues.

### What if I accidentally deactivate someone?

Reactivate their account immediately. Go to the staff list, filter by deleted status, find them, and click Reactivate.

### Can a Sales person be promoted to Admin?

Yes, just edit their profile and change their role. The change takes effect immediately.

### Who can see the Staff section?

Only Admin and Solicitor roles. Sales staff cannot see or access staff management.

---

## Related Documentation

- [Getting Started](./01-getting-started.md) - Staff roles overview
- [Case Management](./04-case-management.md) - Handler assignment
- [Tasks and Work Queues](./07-tasks-and-queues.md) - Task reassignment
- [Troubleshooting](./12-troubleshooting.md) - Access issues
