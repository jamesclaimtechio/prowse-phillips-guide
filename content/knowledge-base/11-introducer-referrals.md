# Introducer Referrals

This guide explains the introducer system - how referral partners submit clients to us and how you can track these referrals.

---

## What Are Introducers?

**Introducers** are external referral partners who send us potential clients. They might be:
- Debt advisors
- Financial consultants
- Accountants
- Insolvency practitioners
- Other legal firms (for specialist debt work)
- Affiliate partners

When an introducer refers a client, they earn a commission based on our fee structure.

---

## How Clients Are Referred

Introducers can submit clients in three ways:

### 1. Referral Link

Each introducer has a unique referral link:
```
https://portal.prowsephillips.com/ref/ABC123
```

When a potential client clicks this link:
1. They're directed to our onboarding flow
2. The introducer code is saved
3. Client completes normal onboarding
4. Attribution is recorded automatically

### 2. Introducer Portal

Introducers can log into their own portal and:
1. Enter client details directly
2. Submit the referral
3. Track their referred clients

### 3. API Integration

Some introducers integrate their systems directly via our API. Client data flows automatically from their system to ours.

---

## Recognizing Introducer Referrals

### On the Client Profile

When a client came via an introducer, you'll see:

**Lead Source:** `INTRODUCER_REFERRAL` or `INTRODUCER_PORTAL` or `INTRODUCER_API`

**Introducer Information:**
```
Referred by: ABC Partners (Code: ABC123)
Commission Rate: 15%
Submission Date: 15 Oct 2024
```

### In the Client List

You can filter clients by:
- Has Introducer: Yes/No
- Specific Introducer: [dropdown]

---

## Managing Introducers

### Accessing the Introducer List

From sidebar: **Introducers**

This shows all registered introducer partners.

[SCREENSHOT: Introducer list page]

### Introducer List Columns

| Column | Description |
|--------|-------------|
| **Name** | Introducer name/company |
| **Code** | Unique 6-character reference code |
| **Email** | Contact email |
| **Commission Rate** | Their commission percentage |
| **Status** | Active or Inactive |
| **Total Clients** | Number of referred clients |
| **Active Clients** | Clients with active cases |

### Viewing an Introducer

Click on an introducer to see their full profile:

```
Introducer Details
════════════════════════════════════════

ABC Partners
Contact: John Smith
Email: john@abcpartners.com
Phone: 07700 900123

Referral Code: ABC123
Commission Rate: 15%
Status: Active ✓

Statistics:
Total Clients Referred: 47
Active Clients: 12
Total Cases: 68

Referral Link:
https://portal.prowsephillips.com/ref/ABC123

[View Clients] [Edit] [Deactivate]

════════════════════════════════════════
```

### Viewing Referred Clients

From the introducer profile:
1. Click **View Clients**
2. See all clients referred by this introducer
3. Filter by status if needed

---

## Creating an Introducer

### When to Create

New introducers are created when:
- A new referral partnership is established
- After vetting and agreement signing
- By Admin or Manager roles only

### How to Create

1. Go to **Introducers**
2. Click **Add Introducer**
3. Fill in the form:

```
Create Introducer
────────────────────────────────────────

Personal/Company Details:
First Name: John
Last Name: Smith
Company: ABC Partners
Email: john@abcpartners.com
Phone: 07700 900123

Commission:
Rate: 15% [dropdown 0-25%]

Notes:
[Any relevant notes about the partnership]

[Create Introducer]
────────────────────────────────────────
```

4. Click **Create Introducer**

### What Happens on Creation

1. Unique code generated (e.g., ABC123)
2. Password auto-generated
3. API key auto-generated (if API access needed)
4. Welcome email sent with credentials
5. Introducer can log in to their portal

---

## Introducer Credentials

### Portal Access

Introducers have their own portal login:
- URL: `https://portal.prowsephillips.com/introducer/login`
- Email + password authentication
- Can view their referred clients
- Can submit new clients

### API Access (If Enabled)

For system integrations:
- API key provided for authentication
- Allows programmatic client submission
- Used by larger partners with their own CRM

### Resetting Credentials

If an introducer loses access:

1. Open their introducer profile
2. Click **Reset Password** or **Regenerate API Key**
3. New credentials are generated
4. Email sent to introducer

> **Note:** Regenerating credentials invalidates the old ones immediately.

---

## Commission Tracking

### How Commissions Work

Introducers earn a percentage of the fee from clients they refer:

```
Example:
- Client referred by ABC Partners
- Total fee: £1,200
- Commission rate: 15%
- Commission owed: £180
```

### Commission Rates

Rates vary by partnership agreement:
- Typically 10-20%
- Set when introducer is created
- Can be adjusted with management approval

### Viewing Commission Information

Commission calculations are visible on:
- Introducer profile (aggregate)
- Individual client records

> **Note:** Actual commission payouts are handled separately by finance. The system tracks the amounts but doesn't process payments.

---

## Deactivating Introducers

### When to Deactivate

- Partnership ends
- Compliance concerns
- Introducer request
- Inactivity

### How to Deactivate

1. Open introducer profile
2. Click **Deactivate**
3. Confirm

### What Happens

- Introducer can no longer log in
- Referral links stop working (new clients won't be attributed)
- Existing clients remain attributed
- Historical data is preserved

### Reactivating

To reactivate a deactivated introducer:
1. Open their profile
2. Click **Reactivate**
3. They can log in again with existing credentials

---

## Referral Attribution Rules

### New Clients

When a new client signs up:
- If they used a referral link → Attributed to that introducer
- If submitted via portal → Attributed to the submitting introducer
- If submitted via API → Attributed based on API key

### Existing Clients

If someone who is already a client clicks a referral link:
- They are NOT re-attributed
- The original attribution (or lack thereof) is preserved
- They're directed to log in instead

### Multiple Referral Clicks

If someone clicks multiple referral links before signing up:
- The LAST click wins (last-touch attribution)
- Most recent introducer code is used

---

## Tracking Introducer Performance

### Statistics Available

For each introducer:
- Total clients referred
- Active clients (with active cases)
- Conversion rate (leads → active clients)
- Total revenue generated
- Commission earned

### Performance Views

Managers may have access to:
- Introducer performance dashboard
- Comparison reports
- Trend analysis

---

## Best Practices

### When Working with Introduced Clients

1. **Acknowledge the relationship** - Know the client came via referral
2. **Maintain quality** - Introducer reputation depends on our service
3. **Note any issues** - If the referral has problems, document them
4. **Communicate appropriately** - The introducer may be in touch with the client too

### For Introducer Management

1. **Regular review** - Periodically check introducer activity
2. **Quality monitoring** - Are referrals good quality?
3. **Compliance checks** - Ensure referral practices are appropriate
4. **Relationship maintenance** - Keep partners engaged

---

## FAQ

### How do I know if a client came from an introducer?

Check the client profile:
- Look for "Lead Source" containing "INTRODUCER"
- Check for "Referred By" information
- Filter the client list by "Has Introducer"

### Can I change which introducer a client is attributed to?

This requires management approval and is rarely done. If there's an attribution error, escalate to your team lead.

### What if an introducer is sending bad referrals?

Document specific issues and report to your team lead. Patterns of problematic referrals may lead to partnership review or termination.

### How do introducers know how their clients are doing?

Through their introducer portal:
- They see client names and statuses
- They see case counts
- They don't see detailed case information (privacy)

### Can staff be introducers?

Generally no - this would be a conflict of interest. Referral arrangements are for external partners only.

### What happens to referred clients if an introducer is deactivated?

The clients remain in the system and their attribution is preserved. Only new referrals are affected.

---

## Related Documentation

- [Client Management](./03-client-management.md) - Viewing client details
- [Case Management](./04-case-management.md) - Working with referred clients' cases
- [Client Payments](./09-payments.md) - Payment tracking (for commission calculation)
