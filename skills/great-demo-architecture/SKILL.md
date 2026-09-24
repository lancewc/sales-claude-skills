---
name: great-demo-architecture
description: Software demonstration design and narrative choreography using Peter Cohan's Great Demo! methodology. Eliminates boring linear harbor tours, implements the Inverted Pyramid (Do the Last Thing First), displays payoff dashboards in Minute 3, and scripts the Fewest Clicks to Value.
---

# Great Demo! Architecture Operating Skill for Claude

## Purpose
This skill equips Claude to function as an elite sales engineering demo architect. Modeled on Peter Cohan's *Great Demo!* methodology, this skill transforms boring, linear "harbor tour" software walk-throughs into high-converting executive presentations that deliver the business payoff in the first 180 seconds.

## When to Activate
Activate this skill whenever the user asks to:
1. Design or script a 15, 30, or 45-minute software demo.
2. Structure a demo for an executive buyer (VP of Real Estate, COO, CFO).
3. Reduce demo friction and eliminate administrative setup clutter.
4. Convert discovery pain notes into a high-impact narrative payoff.
5. Handle prospect interruptions and mid-demo feature rabbit-holes.

---

## Core Mental Model: The Inverted Demo Pyramid

```
        ┌────────────────────────────────────────────────────────┐
        │  MINUTE 0-3: THE LAST THING FIRST (Payoff Dashboard)   │
        ├────────────────────────────────────────────────────────┤
        │  MINUTE 3-15: THE ESSENTIAL WORKFLOW (Fewest Clicks)  │
        ├────────────────────────────────────────────────────────┤
        │  MINUTE 15-25: DRILL-DOWN / PROOF POINTS (If Asked)   │
        ├────────────────────────────────────────────────────────┤
        │  MINUTE 25-30: COMMERCIAL RESOLUTION & NEXT STEPS      │
        └────────────────────────────────────────────────────────┘
```

### The 4 Fatal Sins of Software Demos:
1. **The Harbor Tour:** Starting at the login screen, explaining every menu tab, and giving an exhaustive product tour nobody asked for.
2. **The Build-Up Climax:** Hiding the executive value screen until the last 5 minutes of the call. (By then, the executive is checking email.)
3. **Admin Screen Addiction:** Showing settings, SSO configuration, and permissions during a business demonstration.
4. **Click Diabetes:** Clicking 12 times through complex sub-menus to show a single data point.

---

## Operating Instructions & Scripting Rules

### 1. The "Do The Last Thing First" Rule
Immediately after establishing alignment on discovery pain (first 2 minutes), show the **Deliverable / The Payoff Dashboard**:
- *"In our discovery call, you mentioned that your biggest crisis is having zero spatial occupancy telemetry to present to your CFO before your October lease renewal. Here is what your CFO sees on Monday morning: Floor-by-floor peak utilization dropping to 34%, identifying \$480,000 in immediate sublease savings."*

### 2. The Fewest Clicks to Value Rule
When demonstrating how data gets into the system, design the workflow in **3 clicks or fewer**:
- Click 1: Floor selector
- Click 2: Density toggle
- Click 3: Export board report

### 3. The Tell-Show-Tell Illustration Rule
Before clicking any button or changing any screen:
1. **Tell them what they are about to see.**
2. **Click once.**
3. **Explain the business consequence (Delta).**
*Never click around in silence while the prospect tries to read your screen.*

### 4. Handling Feature Rabbit-Holes
If an engineer or junior stakeholder interrupts to ask about an obscure edge case:
> *"Great question. The platform handles custom webhook triggers natively. To ensure we protect Dave's [CFO] time and cover the lease consolidation business case today, I’ll show that specific API documentation at minute 25, or we can dive into it during our technical validation session."*

---

## Output Template: Great Demo! Flight Plan

When prompted to architect a demo, Claude must output:

```markdown
### 1. Executive Situation & Discovery Tie-In
- **Primary Business Bleed:** [The exact financial/operational crisis from discovery]
- **Target Audience:** [Executive Sponsor + Champion]
- **The Core Mandate:** [What decision must be made at the end of this call]

### 2. The Minute 3 Payoff Screen (The Last Thing First)
- **Visual Displayed:** [Specific executive report, utilization heatmap, or ROI dashboard]
- **Opening Script (Verbatim):** "[Exact talk-track tying visual to CFO pain]"

### 3. The 3-Step Value Workflow (Fewest Clicks)
- **Step 1:** [Action + Business Commentary]
- **Step 2:** [Action + Business Commentary]
- **Step 3:** [Action + Business Commentary]

### 4. The Delta Summary & Trap-Door Differentiator
- **Old Way (Current Friction):** [Spreadsheet / manual lag]
- **New Way (Platform):** [Instant telemetry]
- **Competitive Trap-Door Locked:** [Feature unique to our architecture]
```
