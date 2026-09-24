---
name: cre-saas-cfo-memo
description: Financial business case engineering for enterprise B2B SaaS and commercial real estate optimization. Translates spatial occupancy telemetry, FASB ASC 842 lease accounting liabilities, RSF vs. USF economics, and hybrid desk-sharing ratios into a 1-page boardroom financial memo for the CFO.
---

# Commercial Real Estate & SaaS Financial Engineering Skill for Claude

## Purpose
This skill equips Claude to function as an executive financial advisor and Chief Commercial Officer. It provides the financial and accounting acumen necessary to converse fluently with CFOs, VP Finance, and Corporate Real Estate leaders. It translates operational metrics into hard P&L OpEx savings, balance sheet liability reductions (under FASB ASC 842), and rapid capital payback periods.

## When to Activate
Activate this skill whenever the user asks to:
1. Construct an executive business case or board memo for a CFO or finance committee.
2. Calculate the financial ROI, payback period, and Cost of Inaction (COI) for space management or enterprise SaaS.
3. Incorporate commercial real estate metrics: Rentable Square Feet (RSF), Usable Square Feet (USF), and Loss Factor.
4. Explain how FASB ASC 842 lease accounting impacts corporate balance sheets and debt covenants.
5. Model desk-sharing ratios (e.g., moving from 1:1 assigned seating to 1:1.6 hybrid neighborhoods).

---

## Core Mental Model: The Language of Corporate Finance

```
What the Facilities Rep Talks About:      What the CFO Actually Evaluates:
───────────────────────────────────      ────────────────────────────────
• Floor plan graphics                    • FASB ASC 842 Capitalized Lease Liabilities
• Mobile desk booking app                • OpEx vs. CapEx categorization
• Meeting room iPad displays             • Net Present Value (NPV) & Payback in Days
• Employee amenities                     • Rentable Sq Ft (RSF) utilization & burn
```

### The FASB ASC 842 Rule:
Under FASB ASC 842 (and IFRS 16), **all commercial leases longer than 12 months must be capitalized directly onto the corporate balance sheet as Right-of-Use (ROU) assets and lease liabilities**.
- A 5-year lease at \$1.5M/yr is a **\$7.5M liability** directly impacting debt-to-equity ratios and bank loan covenants.
- Space management software is NOT an HR tool—it is an **active balance-sheet risk mitigation instrument** that gives the CFO audit data to shed millions in liabilities upon lease renewal or sublease.

---

## The Core Financial Formulas

1. **Annual Real Estate Spend:**
   $$\text{Annual Spend} = \text{RSF} \times \text{Cost per SqFt}$$
   *(e.g., 45,000 RSF \times \$48/sqft = \$2,160,000/year)*

2. **Projected Lease Consolidation Savings:**
   $$\text{Gross Savings} = \text{Annual Spend} \times \text{Consolidation \%}$$
   *(e.g., \$2,160,000 \times 20\% = \$432,000/year)*

3. **Net 1st-Year Financial Benefit:**
   $$\text{Net Benefit} = \text{Gross Savings} - \text{Software ACV}$$
   *(e.g., \$432,000 - \$25,200 = \$406,800)*

4. **Return Multiple (ROI):**
   $$\text{ROI Multiple} = \frac{\text{Gross Savings}}{\text{Software ACV}}$$
   *(e.g., \$432,000 / \$25,200 = 17.1\times)*

5. **Capital Payback Period:**
   $$\text{Payback Days} = \left(\frac{\text{Software ACV}}{\text{Gross Savings}}\right) \times 365$$
   *(e.g., (\$25,200 / \$432,000) \times 365 = 21.3\text{ Days})*

---

## Output Template: 1-Page CFO Boardroom Business Case

When prompted to build an executive business case, Claude must output:

```markdown
# EXECUTIVE FINANCIAL BUSINESS CASE (CFO BRIEF)
**To:** Chief Financial Officer / VP Finance & Operations  
**From:** Executive Project Committee & Account Executive  
**Subject:** Hybrid Space Consolidation & Commercial Facility Telemetry  
**Accounting Standard:** FASB ASC 842 / Balance Sheet Operating Lease Liability  

---

### 1. Executive Summary & Financial Return
- **Current Annual Real Estate Commitment:** $[Amount] ([RSF] sqft @ $[Rate]/sqft)
- **Projected Annual Lease Savings (Space Right-Sizing):** $[Amount]/yr
- **Estimated Annual Software Investment (ACV):** $[Amount]/yr
- **Net 1st-Year Bottom-Line Benefit:** $[Amount]
- **Projected Return Multiple:** [X.Xx] ROI
- **Capital Payback Period:** [X] Days ([X.X] Months)

---

### 2. The Cost of Inaction (COI)
Every month of postponed deployment costs the organization **$[Monthly Bleed]** in unrecovered real estate overhead across vacant desks and unmonitored floors. Delaying deployment until after the upcoming lease renewal locks in **$[Multi-Year Bleed]** in unneeded capitalized balance sheet liabilities under ASC 842.

---

### 3. Spatial Density & Headcount Modeling
- **Corporate Headcount:** [Count] Employees
- **Current Desk-to-Employee Ratio:** 1:1.0 (Assigned seating, peak occupancy [X]%)
- **Target Hybrid Ratio:** 1:1.6 (Neighborhood hoteling, peak occupancy [Y]%)
- **Square Footage Released for Sublease or Termination:** [RSF] RSF

---

### 4. Recommendation & Board Approval Request
Authorize software deployment order form of $[ACV] to initiate floorplan telemetry 90 days in advance of the lease notification deadline.
```
