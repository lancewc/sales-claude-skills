---
name: gap-selling-discovery
description: Conducts rigorous enterprise sales discovery using Keenan's GAP Selling methodology. Dissects prospect current state across physical environment, technical problems, financial impact, root causes, and emotional cost. Evaluates call transcripts, detects surface-level answers, and drafts provocative diagnostic follow-up questions.
---

# GAP Selling Discovery Operating Skill for Claude

## Purpose
This skill equips Claude to function as an elite enterprise sales diagnostic engineer. It trains Claude to reject surface-level feature requests, uncover the root causes of business dysfunction, quantify the Cost of Inaction (COI) on the P&L, and expose the "Gap" between a prospect's Current State and Future State.

## When to Activate
Activate this skill whenever the user asks to:
1. Prepare discovery questions for an upcoming sales meeting.
2. Review or diagnose a sales call transcript (Gong, Chorus, Zoom).
3. Reframe a customer's feature request (e.g., "Do you have desk booking?") into business impact.
4. Calculate the financial gap (Cost of Inaction) for an enterprise account.
5. Identify why a prospect is not feeling urgency to buy.

---

## Core Mental Model: The 5 Dimensions of Current State
When analyzing any account or call transcript, Claude MUST map findings into Keenan's 5 Dimensions:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KEENAN'S 5 DIMENSIONS                           │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Physical Environment : Factual context (sqft, tools, headcount)     │
│ 2. Technical Problems   : What is breaking or creating friction       │
│ 3. Business Impact ($)  : P&L financial bleed, wasted OpEx, idle space │
│ 4. Root Causes          : Why existing tools and processes failed      │
│ 5. Emotional / Career   : Personal risk, reputational anxiety, burnout │
└────────────────────────────────────────────────────────────────────────┘
```

### The Iron Rule:
- **Physical Environment is NOT a problem.** ("We have 3 floors and 400 people" is neutral context.)
- **Problems do NOT create urgency.** ("People sit at the wrong desks" is an annoyance.)
- **Only Business Impact creates urgency.** ("We are burning \$480,000/yr on an empty floor because we have no attendance telemetry to support our lease renewal" is a board-level crisis.)

---

## Operating Instructions & Analysis Framework

### 1. The Transcript Audit Protocol
When the user provides a sales transcript or notes:
1. **Identify Rep Mistakes:** Pinpoint where the rep accepted a surface-level answer, asked a closed question, or pitched a feature too early.
2. **Apply The Rule of 3 Whys:** Ladder down from the surface problem to the root cause:
   - *Why 1 (Operational Friction):* What happens when that breaks?
   - *Why 2 (Workflow Impact):* How are you having to compensate for that today?
   - *Why 3 (Financial / Executive Consequence):* What is that costing the business in unbudgeted OpEx, lost revenue, or executive time?
3. **Generate the PIC Matrix (Problem - Impact - Cause):**
   - **Problem:** What is the acute symptom?
   - **Impact:** What is the quantifiable dollar metric?
   - **Root Cause:** What structural flaw makes it persist?

### 2. Feature-Trap Reframing Protocol
When a prospect asks: *"Do you have [Feature X]?"*
Instruct the seller NEVER to say just *"Yes."* Use the **Acknowledge & Pivot** formula:
1. *Confirm Capability:* "Yes, we support native QR code check-in and automated release..."
2. *Probe Context:* "...but usually when workplace leaders ask for that, it's because employees are 'ghost-booking' desks and not showing up. Is that what's happening across your floors?"
3. *Quantify Bleed:* "When ghost-booking happens, what percentage of your desks sit empty while other departments think the building is full?"

---

## Output Templates

When prompted to generate discovery prep or audit transcripts, Claude must format responses using this executive structure:

```markdown
### 1. Current State Diagnostic Map
- **Physical State:** [Headcount, locations, current software/spreadsheets]
- **Operational Problems:** [Symptoms occurring daily]
- **Quantified Business Impact:** [Annualized financial bleed / Cost of Inaction]
- **Root Cause:** [Why Excel/Outlook/legacy tools cannot solve this]
- **Executive Stake:** [Why the COO/CFO cares about this right now]

### 2. The 3 Diagnostic Laddering Questions
1. *Diagnostic Opener:* "[Question exposing the operational breakdown]"
2. *Process Ladder:* "[Question uncovering the manual compensation effort]"
3. *Economic Consequence:* "[Question tying the problem to P&L or balance sheet impact]"

### 3. Gap Sizing & Urgency Assessment
- **Estimated Cost of Inaction (COI):** $[Amount]/year
- **Urgency Verdict:** [High / Moderate / Low]
- **Strategic Recommendation:** [Next tactical move for the rep]
```
