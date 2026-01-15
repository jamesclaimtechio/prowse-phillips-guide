# Troubleshooting

This guide provides solutions to common issues you may encounter while using the system. Use this as a quick reference when something isn't working as expected.

---

## How to Use This Guide

Each issue follows this format:
- **Problem:** What you're experiencing
- **Possible Causes:** Why it might be happening
- **Solution:** Steps to fix it

If an issue persists after trying the solutions, escalate to your team lead or IT support.

---

## Login and Access Issues

### I can't log in

**Problem:** Login fails with "Invalid credentials" or similar error.

**Possible Causes:**
- Incorrect password
- Caps Lock is on
- Account is locked or disabled
- Wrong email address

**Solution:**
1. Check that Caps Lock is off
2. Verify you're using your work email
3. Try "Forgot Password" to reset
4. If still failing, contact IT - your account may need to be unlocked

---

### I'm logged out unexpectedly

**Problem:** You were working and suddenly find yourself at the login screen.

**Possible Causes:**
- Session timeout (inactivity)
- Multiple browser tabs with different sessions
- System maintenance

**Solution:**
1. Log back in
2. Sessions expire after inactivity - this is normal
3. If happening frequently, check with IT

---

### I forgot my password

**Problem:** Can't remember login password.

**Solution:**
1. Click "Forgot Password" on login page
2. Enter your email address
3. Check your inbox for reset link
4. Follow link to create new password
5. Log in with new password

If you don't receive the email, check spam folder or contact IT.

---

### I don't have access to certain features

**Problem:** Menu items are missing or you get "Access Denied" errors.

**Possible Causes:**
- Your role doesn't include that permission
- Feature is disabled for your account
- System configuration issue

**Solution:**
1. Verify what your role should allow (see [Getting Started](./01-getting-started.md#staff-roles))
2. If you should have access, contact your team lead
3. They can request permission changes from IT

---

## Client and Case Issues

### I can't find a client

**Problem:** Searching doesn't return the client you're looking for.

**Possible Causes:**
- Typo in search term
- Client registered under different name
- Client was deleted
- You don't have access to see them

**Solution:**
1. Try different search terms (email, phone, partial name)
2. Check spelling carefully
3. Try the full clients list without filters
4. Ask a colleague to search (they may have different access)

---

### Case is stuck in wrong status

**Problem:** A case shows a status that doesn't match reality.

**Possible Causes:**
- Status wasn't updated when it should have been
- Previous user forgot to update
- Automatic update didn't trigger

**Solution:**
1. Verify what the correct status should be
2. Change the status to the correct value
3. Add a note explaining the correction
4. If you can't change it (permission issue), escalate

---

### I can't change case status

**Problem:** Status change button doesn't work or shows error.

**Possible Causes:**
- Invalid transition (not allowed)
- Pending approval required first
- Your role doesn't have permission
- System error

**Solution:**
1. Check if the transition is valid (see [Understanding the Workflow](./02-understanding-the-workflow.md))
2. Check for pending approvals on the case
3. If transition should be valid, try refreshing the page
4. If still failing, screenshot the error and contact IT

---

### Case shows wrong handler

**Problem:** You're listed as handler but shouldn't be, or someone else is listed incorrectly.

**Solution:**
1. Reassign the case to the correct handler
2. Add a note explaining the change
3. If you can't reassign, ask your team lead

---

### Client has duplicate records

**Problem:** You've found two records for the same client.

**Solution:**
1. Don't attempt to merge records yourself
2. Note both record IDs
3. Report to your team lead or IT
4. They will handle the merge properly

---

## Payment and Billing Issues

### Client shows wrong payment status

**Problem:** Payment tab shows incorrect information.

**Possible Causes:**
- Payment not yet processed
- Payment recorded incorrectly
- Sync delay with payment provider

**Solution:**
1. Check payment history for recent transactions
2. Allow up to 24 hours for new payments to appear
3. If payment should be there but isn't, check with finance
4. Manual payments may need to be recorded

---

### Payment failed but client says they paid

**Problem:** System shows failed payment, client insists they paid.

**Solution:**
1. Ask client for payment reference/confirmation
2. Check with finance for off-system payments
3. If confirmed paid, record manual payment
4. Add note explaining the situation

---

### I need to record a manual payment

**Problem:** Client paid outside normal Direct Debit.

**Solution:**
1. Open client's Payments tab
2. Click "Record Payment"
3. Enter amount, date, method, reference
4. Confirm
5. Balance updates automatically

---

### Direct Debit was cancelled

**Problem:** Client's Direct Debit mandate shows as cancelled.

**Possible Causes:**
- Client cancelled with their bank
- Bank cancelled due to account issues
- Technical failure

**Solution:**
1. Contact client to understand why
2. If unintentional, collect new payment details
3. Set up new mandate
4. Consider alternative payment method if DD problematic

---

## Document and Email Issues

### Document won't upload

**Problem:** File upload fails or shows error.

**Possible Causes:**
- File too large (limit: 25MB)
- Unsupported file type
- Connection issues

**Solution:**
1. Check file size (must be under 25MB)
2. Check file type (PDF, JPG, PNG, DOC supported)
3. Try a different browser
4. Reduce file size if too large (compress PDF, reduce image quality)

---

### Email failed to send

**Problem:** Email shows "Failed" status.

**Possible Causes:**
- Invalid email address
- Attachment too large
- Recipient server rejected
- Technical issue

**Solution:**
1. Check the failure reason in communication details
2. Verify email address is correct
3. If attachment issue, remove large attachments or send separately
4. Compose and send again with corrections

---

### Template variables not working

**Problem:** Email contains {{VARIABLE_NAME}} instead of actual values.

**Possible Causes:**
- Template not applied correctly
- Required variable not filled in
- Technical glitch

**Solution:**
1. Make sure you clicked "Apply Template" after filling variables
2. Check all required variables have values
3. Close and reopen Email Creditor
4. Try again step by step

---

### Can't attach documents to email

**Problem:** Attachment selector shows no documents or attachments fail.

**Possible Causes:**
- No documents uploaded to case yet
- Total attachment size exceeds limit
- Document file is corrupted

**Solution:**
1. Upload required documents to case first
2. Check total size is under 25MB
3. Remove large attachments if needed
4. If specific file fails, try downloading and re-uploading it

---

## Task and Queue Issues

### Tasks not appearing

**Problem:** Expected tasks aren't in your queue.

**Possible Causes:**
- Tasks assigned to someone else
- Filters hiding the tasks
- Tasks not yet created (timing)

**Solution:**
1. Clear all filters to see full list
2. Check "All Tasks" view (if available)
3. Verify the case status triggers task creation
4. Check with colleague if task was reassigned

---

### Automated tasks not being created

**Problem:** Chase tasks or other automated tasks aren't appearing when expected.

**Possible Causes:**
- Case not in correct status
- Days in stage not reached threshold yet
- No handler assigned to case
- System job didn't run

**Solution:**
1. Verify case is in the correct status
2. Check days in stage against chase schedule
3. Ensure case has assigned handler
4. If automation seems broken, report to IT

---

### Task can't be completed

**Problem:** "Complete Task" button doesn't work.

**Possible Causes:**
- Task requires specific action first
- Permission issue
- System error

**Solution:**
1. Ensure you've done the required work
2. Try refreshing the page
3. If still failing, add a note and ask team lead to complete

---

## Approval Issues

### Approval taking too long

**Problem:** Submitted approval has been pending for days.

**Solution:**
1. Check with available solicitors
2. Verify the approval appears in the queue
3. Add a note about urgency if needed
4. Escalate to team lead if critical

---

### Approval was rejected but I disagree

**Problem:** You believe rejection was incorrect.

**Solution:**
1. Read rejection feedback carefully
2. Discuss with the solicitor who rejected
3. Provide additional evidence if available
4. If still disagreeing, escalate to management

---

### I can't submit for approval

**Problem:** Approval submission button doesn't work.

**Possible Causes:**
- Missing required information
- Case not in correct status
- Permission issue

**Solution:**
1. Ensure case has all required documents
2. Verify case status is appropriate for approval type
3. Check you have submission permissions
4. If still failing, ask colleague to try or contact IT

---

## Technical Issues

### Page won't load

**Problem:** Page shows error or never finishes loading.

**Solution:**
1. Try refreshing the page (F5 or Ctrl+R)
2. Clear browser cache and cookies
3. Try a different browser
4. Check your internet connection
5. If persists, report to IT

---

### Data looks wrong or outdated

**Problem:** Information shown doesn't match what you expect.

**Solution:**
1. Refresh the page (F5)
2. Check if a colleague recently made changes
3. Wait a minute and refresh again (propagation delay)
4. If still wrong, it may be a data issue - report to team lead

---

### System is very slow

**Problem:** Everything takes a long time to load.

**Possible Causes:**
- Internet connection issues
- System under heavy load
- Local computer issues

**Solution:**
1. Check your internet connection
2. Try a different browser
3. Close other applications/tabs
4. If all staff affected, IT may be working on it

---

### Export/download not working

**Problem:** Trying to download documents or export data fails.

**Solution:**
1. Check browser popup blocker settings
2. Try right-click and "Save As"
3. Try a different browser
4. Check available disk space
5. Report to IT if persists

---

## Communication with Clients

### Client can't access their portal

**Problem:** Client reports they can't log in to their portal.

**Possible Causes:**
- Using wrong login link
- Magic link expired
- Account issues

**Solution:**
1. Verify they're using the correct portal URL
2. Send them a new magic link from the system
3. Check if their account is active
4. Escalate to IT if technical issue

---

### Client says they didn't receive an email

**Problem:** System shows email sent, but client didn't receive.

**Solution:**
1. Ask client to check spam/junk folder
2. Verify email address on file is correct
3. Check delivery status in system
4. If delivered but not received, may be their email settings
5. Try alternative contact method (phone, SMS)

---

### Client has wrong information

**Problem:** Client details (name, address, etc.) are incorrect.

**Solution:**
1. Verify correct information with client
2. Update the client profile
3. Add note documenting the change
4. If email changes, warn client their portal access may be affected

---

## Escalation Paths

### When to Escalate

Escalate issues when:
- You've tried solutions and nothing works
- The issue affects multiple clients/cases
- There's a security concern
- You're unsure how to proceed

### How to Escalate

**Technical issues → IT Support**
- System errors
- Access problems
- Performance issues

**Process questions → Team Lead**
- Workflow uncertainties
- Permission requests
- Client complaints

**Legal/Compliance → Solicitor or Manager**
- Route determination disputes
- Client complaints about service
- Regulatory concerns

**Financial → Finance Team**
- Payment discrepancies
- Refund requests
- Commission queries

---

## Reporting Bugs

If you find a bug (something that's definitely wrong with the system):

1. **Document it:**
   - What you were doing
   - What you expected to happen
   - What actually happened
   - Screenshot if possible

2. **Report it:**
   - Email IT Support
   - Include all documentation
   - Note urgency level

3. **Work around it:**
   - Find alternative way to complete task
   - Document workaround for others

---

## Getting Help

### Resources

- **This Knowledge Base** - Check documentation first
- **Team Lead** - For process questions
- **IT Support** - For technical issues
- **Colleagues** - They may have encountered the same issue

### Contact Information

Your IT Support contact: [Check your company directory]
Help Desk: [Your internal help desk info]

---

## FAQ

### The system updated and things look different

Major system updates may change the interface. Check with your team lead for any new training or documentation.

### Something worked yesterday but doesn't work today

Try these in order:
1. Refresh the page
2. Clear browser cache
3. Try different browser
4. Check if IT has posted any notices
5. Report to IT if persists

### I made a mistake - can it be undone?

Most actions are logged and reversible:
- Status changes can be changed back
- Notes can be edited/deleted
- Documents can be deleted

For serious errors (wrong client, major data changes), contact your team lead immediately.

---

## Related Documentation

- [Getting Started](./01-getting-started.md) - Basic navigation
- [Case Management](./04-case-management.md) - Case workflows
- [Client Payments](./09-payments.md) - Payment issues
- [Communications](./10-communications.md) - Email/SMS issues
