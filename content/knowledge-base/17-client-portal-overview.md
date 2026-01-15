# Client Portal Overview

This guide explains what clients see and can do in their portal. Understanding the client experience helps you support them better and answer their questions.

---

## What is the Client Portal?

The **Client Portal** is a separate website where clients can:
- Complete onboarding and payment setup
- View their case status and progress
- Upload documents
- Manage their account
- Request callbacks

It's designed to be simple and reassuring - remember, clients are often stressed about their debts.

---

## Portal Access

### How Clients Log In

Clients use **magic link authentication**:
1. They enter their email address
2. They receive an email with a login link
3. They click the link to access their portal
4. The link expires after use (for security)

There's no password to remember.

### Why Magic Links?

- **Simpler for clients** - No password to forget
- **More secure** - No credentials to steal
- **Verified email** - Proves they have access to their email

### Common Access Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| "I didn't get the email" | Spam filter | Check spam/junk folder |
| "Link doesn't work" | Link expired | Request new link |
| "Link says invalid" | Already used | Request new link |
| "Wrong email" | Using different email | Check which email they registered with |

---

## Portal Structure

### Main Sections

The client portal has these main areas:

```
Client Portal
├── Onboarding (if not complete)
│   └── Multi-step signup flow
├── Payment Flow (if onboarding complete)
│   └── Plan selection, DD setup, agreements
├── My Cases (after becoming active)
│   └── Case list and status
├── Account
│   └── Personal details, preferences
└── Callbacks
    └── Request a callback
```

### Navigation

Clients see a simple navigation:
- **My Cases** - Their case dashboard
- **Account** - Their profile
- **Help/Support** - Contact options

---

## The Onboarding Flow

When new clients sign up, they go through these steps:

### Step 1: Personal Details
- Name, email, phone
- Date of birth
- Address

### Step 2: Add Debts
- Creditor name
- Debt amount
- Account reference
- Debt type (credit card, loan, etc.)
- Can add multiple debts

### Step 3: View Fee Summary
- Calculated fee based on their debts
- Explanation of what's included
- Payment plan options preview

### Step 4: Affordability Assessment
- Monthly income
- Monthly expenses
- Household details
- Calculates disposable income

### Step 5: Plan Selection
- 12-in-12 (if affordable)
- Regulated Credit (if needed)
- Pay in Full (if able)

### Step 6: Sign Agreements
- Terms of Business
- Letter of Authority
- Fee Agreement
- Digital signature

### Step 7: Identity Verification
- Upload ID (passport, driving licence)
- Upload proof of address
- Verification check

### Step 8: Payment Setup
- Bank details for Direct Debit
- GoCardless mandate setup
- Confirmation of payment date

### Completion
- First payment collected
- Status becomes ACTIVE
- Cases become "Ready to Assess"

---

## What Clients Can See

### Case Information

Clients can see:
- Case reference number
- Creditor name
- Debt amount
- Current status (simplified version)
- Timeline of key milestones

### What They CAN'T See

Clients don't see:
- Internal notes
- Detailed investigation findings
- Staff names and assignments
- Backend status codes
- Route determination details
- Legal strategy

### Status Translation

We show clients simplified statuses:

| Internal Status | Client Sees |
|-----------------|-------------|
| DSAR Sent | Investigation in Progress |
| DSAR Chase 1 Sent | Following Up |
| Section 78 Sent | Investigation in Progress |
| Route Determined - U | Resolution in Progress |
| LOC Sent | Working with Creditor |
| Case Closed - Successful | Complete - Successful |

---

## What Clients Can Do

### View Their Cases

From **My Cases**, clients can:
- See all their cases listed
- View current status
- See the debt amount
- Access case timeline

### Upload Documents

Clients can upload:
- Additional ID documents
- Correspondence they've received
- Evidence they want to share

These appear in the case Documents tab for staff.

### Manage Account

From **Account**, clients can:
- View their personal details
- Update contact preferences
- See their payment plan summary

### Request Callbacks

Clients can:
- Request a callback at a convenient time
- Select available slots
- Provide a reason for the call

These appear in your Callbacks queue.

### Manage Payment Plan

From **Manage Plan**, clients can:
- View payment schedule
- See upcoming payments
- View payment history
- Request changes (triggers review)

---

## Common Client Questions

When clients call or email, they often ask about portal issues. Here are common questions:

### "How do I log in?"

1. Go to [portal URL]
2. Enter your email address
3. Click "Send Magic Link"
4. Check your email (including spam)
5. Click the link in the email

### "I can't see my case status"

- Log into the portal
- Click "My Cases"
- Your cases are listed with current status

If they don't see cases, check:
- Are they fully onboarded?
- Have they made first payment?
- Are they using the correct email?

### "Why hasn't my case moved?"

Explain the investigation timeline:
- DSAR can take 30+ days for response
- Section 78 is 12+ working days
- Overall process is 8-12 weeks
- We chase creditors who don't respond

### "How do I upload a document?"

1. Log into the portal
2. Go to My Cases
3. Select the case
4. Click "Upload Document"
5. Select file and submit

### "How do I change my payment date?"

1. Log into the portal
2. Go to "Manage Plan"
3. Request a change
4. Staff will review and confirm

Or call us to discuss options.

---

## Portal vs Admin: What's Different

### What Staff See (Admin Portal)

- All clients and cases
- Full internal statuses
- Investigation details
- Notes and activity logs
- Approval workflows
- Staff management

### What Clients See (Client Portal)

- Only their own cases
- Simplified statuses
- High-level progress
- Their documents only
- Their payment info
- Ability to request help

---

## Troubleshooting Portal Issues

### Client Can't Access Portal

**Check:**
1. Are they using the correct email?
2. Is the magic link in spam?
3. Has the link expired?
4. Is their account active?

**Solutions:**
1. Verify their email address in CRM
2. Ask them to check spam folder
3. Resend a new magic link
4. Check their client status

### Client Sees Wrong Information

**Check:**
1. Has the system synced recently?
2. Is the data correct in CRM?
3. Are they looking at the right case?

**Solutions:**
1. Verify data in CRM is correct
2. If CRM is correct, may be display delay
3. If CRM is wrong, correct it

### Client Can't Upload Documents

**Check:**
1. File type (PDF, JPG, PNG supported)
2. File size (under 25MB)
3. Browser compatibility

**Solutions:**
1. Ask them to use supported format
2. Compress large files
3. Try different browser

---

## Sending Clients to the Portal

### When to Direct Them

Good times to point clients to the portal:
- To check case status (instead of calling)
- To upload a document
- To view payment schedule
- To request a callback

### How to Explain It

> "You can log into your portal at any time to see your case progress. Just go to [URL] and enter your email - we'll send you a link to access your account."

### When NOT to Use Portal

For these, they should contact you:
- Complex questions about their case
- Concerns about the investigation
- Complaints or escalations
- Changes to personal circumstances

---

## Portal Security

### How We Protect Clients

- **Magic link authentication** - No passwords to steal
- **Links expire** - Single use, time-limited
- **HTTPS encryption** - All data encrypted in transit
- **Session timeout** - Auto-logout after inactivity

### What to Tell Clients

> "Your portal is secure. We use email verification instead of passwords - this is actually more secure because there's no password that can be guessed or stolen. Always access the portal from our official website or emails."

### Security Red Flags

If a client reports:
- Unusual activity in their account
- Emails they didn't request
- Access from unknown device

Escalate to IT/management immediately.

---

## Mobile Experience

### Portal on Mobile

The client portal works on mobile devices:
- Responsive design
- Touch-friendly
- All features accessible

### Common Mobile Issues

| Issue | Solution |
|-------|----------|
| Page doesn't load | Clear browser cache |
| Can't click buttons | Zoom in or use landscape |
| Upload fails | Use smaller file or try different browser |

---

## FAQ

### Can staff access the client portal?

No, the client portal is only for clients. Staff use the Admin portal which has full access to all data.

### What if a client shares their magic link?

The link is single-use, so it can't be reused. If they share it before clicking, someone else could access their account briefly. Advise clients not to share login emails.

### Can clients see other clients' data?

No, absolutely not. Each client only sees their own cases and information.

### Do clients get notifications?

Yes, clients receive emails for:
- Key status changes
- Payment confirmations
- Requested callbacks
- Important updates

### Can clients respond to portal notifications?

They can request callbacks or contact us through the portal, but they can't directly reply to notification emails.

### What happens if a client's email changes?

They need to contact us to update their email. This affects their portal access (magic links go to the registered email).

---

## Related Documentation

- [Client Management](./03-client-management.md) - Managing client records
- [Communications](./10-communications.md) - Client communication tracking
- [Client Payments](./09-payments.md) - Payment management
- [Troubleshooting](./12-troubleshooting.md) - Common issues
