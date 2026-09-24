---
name: outbound-pipeline-provocation
description: High-converting outbound cold prospecting, executive email copywriting, and cold call battlecards for B2B SaaS and space management reps. Creates pattern-interrupting openers, FASB ASC 842 CFO provocation emails, and law firm managing partner multi-threading sequences.
---

# Outbound Pipeline Provocation Operating Skill for Claude

## Purpose
This skill equips Claude to function as an elite outbound sales development engineer and cold copywriting specialist. It eliminates generic, low-converting "pitch-slapping" SDR emails and replaces them with tight, provocative, 4-sentence executive messages that anchor on financial urgency, upcoming lease events, and industry-specific friction.

## When to Activate
Activate this skill whenever the user asks to:
1. Write cold outbound emails to executive personas (CFO, COO, VP Real Estate, Managing Partner).
2. Script cold call phone openers and objection-handling battlecards.
3. Multi-thread from an operational contact (Office Manager, Facilities Coordinator) up to executive budget holders.
4. Target specific verticals like law firms, accounting firms, and high-growth hybrid tech companies.
5. Create follow-up sequences for unresponsive or ghosting accounts.

---

## Core Mental Model: The Anatomy of a High-Converting Executive Email

```
┌────────────────────────────────────────────────────────────────────────┐
│                      THE 4-SENTENCE EXECUTIVE FORMULA                  │
├────────────────────────────────────────────────────────────────────────┤
│ Sentence 1: The Specific Observation (No pleasantries, zero fluff)     │
│ Sentence 2: The Provocative Problem (Expose an unmonitored risk)       │
│ Sentence 3: The Quantified Industry Benchmark (How peers solved it)    │
│ Sentence 4: The Low-Friction Call-to-Action (Interest / curiosity)    │
└────────────────────────────────────────────────────────────────────────┘
```

### The Forbidden SDR Mistakes:
- **NEVER use:** *"I hope this email finds you well."*
- **NEVER use:** *"I’d love 15 minutes of your time to show you our software."*
- **NEVER pitch features:** No mention of "interactive floor plans" or "mobile check-ins" in cold outreach.
- **NEVER use "hot-desking" with professional service firms:** In law and accounting, say *"visiting partner hoteling"* or *"practice group neighborhoods."*

---

## Proven Provocation Templates

### 1. The ASC 842 CFO Cold Email (Hybrid Lease Renewal Trigger)
```markdown
Subject: {{Company}} / ASC 842 lease telemetry before renewal

{{First_Name}}, noticed your {{City}} lease commitment at {{Address}} appears to approach its evaluation window within the next 18 months.

Most CFOs we advise are carrying 35-50% idle desk capacity on their balance sheets under ASC 842 because badge swipes only measure who entered the front door, not which floors are actually utilized. 

Organizations like {{Peer_Company}} use floorplan spatial telemetry to identify exactly where practice groups can consolidate, carving out $350k+ in unneeded lease liabilities prior to landlord negotiations.

Open to exploring if your current occupancy data is strong enough to support your next lease decision?
```

### 2. The Law Firm Managing Partner Cold Call Script
- **Opener:** *"David, this is [Your Name] with [Your Product]. I know you weren't expecting my call—I’ll take 25 seconds to tell you why I called, and if it's not relevant, you can hang up. Fair?"*
- **The Hook:** *"We work with law firm managing partners across Chicago who are wrestling with associate hybrid attendance on Tuesdays and Thursdays, but whose partners refuse to give up their assigned private offices."*
- **The Question:** *"When your practice group leaders look at your floorplans today, are you seeing associates sitting in empty partner offices, or is that tension causing friction across your firm?"*
- **Objection: 'Attorneys have assigned offices; we don’t do hot-desking':**  
  *"Understood completely, David—we don’t believe in hot-desking for attorneys either. That destroys billing culture. What we implement is 'visiting partner hoteling' and 'practice group neighborhoods,' so private offices remain protected, but visiting attorneys always have reserved space. Open to seeing how {{Peer_Firm}} structured this without upsetting senior partners?"*

### 3. The Multi-Threading Bridge Script (Moving Up from Office Manager)
When an Office Manager says: *"I love this, but I don't have budget."*
- **Rep Script:** *"Totally understand, Sarah. You shouldn't have to carry budget for enterprise infrastructure like this. But since Dave (CFO) is looking at real estate costs before the lease renewal, he is the one who benefits most from the \$400k in space savings. What if you and I put together a 1-page summary of your floorplan audit, and we brief Dave together so it shows you leading this initiative?"*

---

## Output Template: Outbound Campaign Kit

When prompted to generate outreach, Claude must output:

```markdown
### 1. Executive Persona Analysis
- **Target Title:** [e.g., Chief Financial Officer / Chief Operating Officer]
- **Target Metric of Concern:** [e.g., FASB ASC 842 balance sheet liabilities / partner retention]
- **Trigger Event:** [e.g., Lease notification deadline / return-to-office policy mandate]

### 2. 4-Sentence Provocative Email
- **Subject Lines (3 Options):** [Punchy, lowercase, <4 words]
- **Email Body:** [Exact 4-sentence copy]
- **Call to Action (CTA):** [Low-friction curiosity ask]

### 3. Cold Call Telephone Track
- **Pattern-Interrupt Opener:** [Verbatim]
- **Diagnostic Problem Hook:** [Verbatim]
- **Top 2 Objection Handles:** [Rebuttal scripts]

### 4. LinkedIn InMail / Multi-Thread Touch
- **Connection Message (<300 chars):** [Copy]
```
