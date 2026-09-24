<div align="center">

# The Sales MBA: Production Claude Skills for Enterprise Sales & RevOps
### *Turn Claude 3.5 into an Elite Enterprise Account Executive, Deal Auditor, and CFO Business Case Architect.*

[![GitHub stars](https://img.shields.io/badge/GitHub-Star%20Repo-orange?logo=github&style=flat-square)](https://github.com/lancewc/sales-claude-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Claude 3.5 Sonnet](https://img.shields.io/badge/Anthropic-Claude%203.5%20Sonnet%20Verified-D97757?style=flat-square&logo=anthropic)](https://anthropic.com)
[![Compatible: Claude Projects](https://img.shields.io/badge/Compatible-Claude%20Projects%20%7C%20Claude%20Code-141413?style=flat-square)](https://claude.ai)

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#the-claude-skills-library">Skills Library</a> •
  <a href="#live-interactive-web-app">Interactive Web App</a> •
  <a href="#why-this-exists">The Thesis</a> •
  <a href="#installation-guide">Install Guide</a>
</p>

---

</div>

## ⚡ The Problem: Why Default AI Sucks at B2B Sales
Most AI models give generic, sycophantic sales advice. When asked to draft an email, they write: *"I hope this email finds you well! Our revolutionary AI platform will streamline your synergies..."* When asked to qualify a deal, they accept surface answers without probing budget authority.

**The Sales MBA** is an open-source collection of production-grade **Claude Agent Skills** (`SKILL.md`) engineered directly on the proven methodologies of enterprise legends:
- **Keenan's GAP Selling** (Root-cause discovery & Problem-Impact-Cause mapping)
- **John McMahon's MEDDPICC** (PTC & Snowflake qualification and champion verification)
- **Peter Cohan's Great Demo!** (Inverted demo pyramid & fewest clicks to value)
- **Matt Dixon & Ted McKenna's The JOLT Effect** (2.5M call study on defeating buyer FOMU)
- **FASB ASC 842 Commercial Real Estate Finance** (CFO capitalized lease liability business cases)

---

## 📦 The Claude Skills Library

Each skill is a self-contained, modular `SKILL.md` file with YAML frontmatter, strict analytical directives, mental models, and few-shot output templates:

| Skill | Directory | Primary Use Case | Core Framework |
| :--- | :--- | :--- | :--- |
| **`gap-selling-discovery`** | [`skills/gap-selling-discovery/`](skills/gap-selling-discovery/SKILL.md) | Dissect prospect Current State, audit Gong transcripts, ladder the 3 Whys, and calculate the Cost of Inaction (COI). | Keenan’s GAP Selling |
| **`meddpicc-deal-control`** | [`skills/meddpicc-deal-control/`](skills/meddpicc-deal-control/SKILL.md) | Score active pipeline (0-16 pts), test Champions vs. Coaches with 3 acid tests, identify Economic Buyers, and map legal Paper Processes. | John McMahon’s MEDDPICC |
| **`great-demo-architecture`** | [`skills/great-demo-architecture/`](skills/great-demo-architecture/SKILL.md) | Kill the linear harbor tour. Script high-converting demos that show the executive payoff screen in Minute 3 with ≤3 clicks to value. | Peter Cohan’s Great Demo! |
| **`jolt-indecision-resolver`** | [`skills/jolt-indecision-resolver/`](skills/jolt-indecision-resolver/SKILL.md) | Overcome buyer Fear Of Messing Up (FOMU). Diagnose Information Overload vs. Career Risk and script procurement concession trades. | Dixon & McKenna’s JOLT |
| **`cre-saas-cfo-memo`** | [`skills/cre-saas-cfo-memo/`](skills/cre-saas-cfo-memo/SKILL.md) | Translate hybrid desk occupancy and space right-sizing into capitalized balance-sheet OpEx reductions and 1-page CFO board memos. | FASB ASC 842 & CRE Accounting |
| **`outbound-provocation`** | [`skills/outbound-pipeline-provocation/`](skills/outbound-pipeline-provocation/SKILL.md) | Generate provocative 4-sentence executive emails, cold call pattern interrupts, and multi-threading scripts for law firms and enterprise accounts. | Provocation Outbound Engine |

---

## 🚀 Quick Start: How to Use These Skills with Claude

### Option A: In Claude Projects (Fastest - 60 Seconds)
1. Go to [Claude.ai](https://claude.ai) and open or create a **Project** (e.g., *"Enterprise AE Copilot"*).
2. Click **Set Project Instructions** and paste any `SKILL.md` content into the instructions box.
3. Upload your account research, Gong call transcripts, or deal notes into **Project Knowledge**.
4. Prompt Claude:
   > *"Run a 16-point MEDDPICC audit on the Acme Logistics opportunity notes in Project Knowledge. Tell me if Sarah is a Coach or a Champion, and identify the single biggest fatal flaw causing slip."*

### Option B: In Claude Code / Agent CLI
Clone this repository directly into your local agent environment:
```bash
git clone https://github.com/lancewc/sales-claude-skills.git
cd sales-claude-skills
```
Reference skills in your terminal session or Claude CLI workflows:
```bash
claude "Read skills/gap-selling-discovery/SKILL.md and analyze transcript.txt"
```

### Option C: In Cursor / Windsurf / LibreChat
Drop the `skills/` folder into your repository root or `.cursor/rules` directory to give your AI assistants deep enterprise sales intelligence across all customer-facing communications.

---

## 🖥️ Live Interactive Web App & Classroom

This repository includes a standalone web app styled to **Anthropic's exact computed design system** (`#F0EEE6` canvas, `Newsreader` serif body, `Hanken Grotesk` bold headings, and terracotta split-button interactions).

### Included Web Instruments:
- 🎓 **18-Module Interactive Classroom** with real-time markdown note-taking.
- 📚 **18 Unabridged Masterclass Textbooks** (.md) + 6 Foundational Framework Reference Manuals.
- ⚖️ **16-Point Interactive MEDDPICC Deal Auditor** with live triage prescriptions.
- 📐 **SaaS & Space Consolidation ROI Engine** computing payback in days and exporting 1-page CFO memos.
- ⚡ **JOLT Customer Indecision Resolver** with verbatim objection scripts.
- 📜 **Capstone Board Examination** awarding an authenticated Oxford/Anthropic-styled Enterprise AE Credential.

---

## 📚 The 18 Unabridged Masterclass Textbooks

Each module in the curriculum includes its own dedicated, multi-chapter textbook in pure Markdown (`textbooks/BOOK_*.md`):

| Vol | Textbook File | Module Focus | Core Methodology |
| :--- | :--- | :--- | :--- |
| **01** | [`BOOK_01_OPEX_VS_CAPEX_AND_EBITDA.md`](textbooks/BOOK_01_OPEX_VS_CAPEX_AND_EBITDA.md) | OpEx vs. CapEx, EBITDA & Corporate Cash Flow | Corporate Finance & FASB Accounting |
| **02** | [`BOOK_02_THE_SAAS_FINANCIAL_ENGINE.md`](textbooks/BOOK_02_THE_SAAS_FINANCIAL_ENGINE.md) | The SaaS Financial Engine: CAC, LTV, NRR & Gross Margin | SaaS Unit Economics & Rule of 40 |
| **03** | [`BOOK_03_CALCULATING_COST_OF_INACTION.md`](textbooks/BOOK_03_CALCULATING_COST_OF_INACTION.md) | Cost of Inaction (COI): The CFO Justification Model | Loss Aversion & Urgency Math |
| **04** | [`BOOK_04_THE_5_DIMENSIONS_OF_CURRENT_STATE.md`](textbooks/BOOK_04_THE_5_DIMENSIONS_OF_CURRENT_STATE.md) | The 5 Dimensions of the Current State | Keenan's GAP Selling Discovery |
| **05** | [`BOOK_05_THE_RULE_OF_3_WHYS_ROOT_CAUSE.md`](textbooks/BOOK_05_THE_RULE_OF_3_WHYS_ROOT_CAUSE.md) | The Rule of 3 Whys: Diagnostic Laddering | Root-Cause Analysis |
| **06** | [`BOOK_06_REFRAMING_FEATURE_REQUESTS.md`](textbooks/BOOK_06_REFRAMING_FEATURE_REQUESTS.md) | Reframing Feature Requests into Quantifiable Outcomes | De-Commoditization & Pricing Defense |
| **07** | [`BOOK_07_CHAMPION_ACID_TESTS_PROTOCOL.md`](textbooks/BOOK_07_CHAMPION_ACID_TESTS_PROTOCOL.md) | The Champion Protocol: Coach vs. Champion & Acid Tests | John McMahon's MEDDPICC |
| **08** | [`BOOK_08_ECONOMIC_BUYER_ALIGNMENT.md`](textbooks/BOOK_08_ECONOMIC_BUYER_ALIGNMENT.md) | Finding & Aligning with the Economic Buyer (EB) | Discretionary Budget Access |
| **09** | [`BOOK_09_DECISION_CRITERIA_PAPER_PROCESS.md`](textbooks/BOOK_09_DECISION_CRITERIA_PAPER_PROCESS.md) | Trap-Setting Decision Criteria & Controlling Paper Process | Snowflake Criteria & Legal Navigation |
| **10** | [`BOOK_10_INVERTED_PYRAMID_DEMO.md`](textbooks/BOOK_10_INVERTED_PYRAMID_DEMO.md) | The Inverted Pyramid: Do the Last Thing First | Peter Cohan's Great Demo! |
| **11** | [`BOOK_11_FEWEST_CLICKS_TO_VALUE.md`](textbooks/BOOK_11_FEWEST_CLICKS_TO_VALUE.md) | The Fewest Clicks to Value: Eliminating Cognitive Friction | Cognitive Load Reduction |
| **12** | [`BOOK_12_DELTA_STORYTELLING_PAIN.md`](textbooks/BOOK_12_DELTA_STORYTELLING_PAIN.md) | Delta Storytelling & Pain Architecture in Live Demos | Contrast Psychology & Narrative Arcs |
| **13** | [`BOOK_13_MAPPING_4_BUYER_PERSONAS.md`](textbooks/BOOK_13_MAPPING_4_BUYER_PERSONAS.md) | Mapping the 4 Enterprise Buyer Personas | Multi-Threading & Account Navigation |
| **14** | [`BOOK_14_TRIANGULATING_ENTERPRISE_VALUE.md`](textbooks/BOOK_14_TRIANGULATING_ENTERPRISE_VALUE.md) | Triangulating Value: Facilities, HR, IT, and Finance | Multi-Department Consensus |
| **15** | [`BOOK_15_MUTUAL_ACTION_PLAN_MAP.md`](textbooks/BOOK_15_MUTUAL_ACTION_PLAN_MAP.md) | The Mutual Action Plan (MAP): Mutual Accountability | Enterprise Closing as Project Mgmt |
| **16** | [`BOOK_16_FOMU_VS_FOMO_BEHAVIORAL_ECONOMICS.md`](textbooks/BOOK_16_FOMU_VS_FOMO_BEHAVIORAL_ECONOMICS.md) | FOMU vs. FOMO: The Behavioral Economics of Deal Stall | Dixon & McKenna's JOLT Effect |
| **17** | [`BOOK_17_JOLT_PROTOCOL_DEALING_WITH_INDECISION.md`](textbooks/BOOK_17_JOLT_PROTOCOL_DEALING_WITH_INDECISION.md) | The JOLT Protocol: Neutralizing Buyer Risk | Indecision De-escalation |
| **18** | [`BOOK_18_CONCESSION_TRADING_CLOSING_DISCIPLINE.md`](textbooks/BOOK_18_CONCESSION_TRADING_CLOSING_DISCIPLINE.md) | Concession Trading & Closing Discipline: Margin Defense | Give-to-Get Commercial Negotiation |

---

## 📚 The 6 Foundational Framework Reference Manuals

Before the per-module series above existed, these 6 broader anthology-style manuals anchored the curriculum — each one bundles a full framework (roughly 3 modules' worth of material) into a single deep-dive read. They're still live and still the most thorough single-document treatment of each framework:

| Manual | File | Covers | Core Methodology |
| :--- | :--- | :--- | :--- |
| **1** | [`01_GAP_SELLING_MASTERCLASS.md`](textbooks/01_GAP_SELLING_MASTERCLASS.md) | Modules 2.1-2.3: Discovery, root-cause laddering, feature reframing | Keenan's GAP Selling |
| **2** | [`02_MEDDPICC_OPERATING_SYSTEM.md`](textbooks/02_MEDDPICC_OPERATING_SYSTEM.md) | Modules 3.1-3.3: Champion testing, Economic Buyer access, Paper Process | John McMahon's MEDDPICC |
| **3** | [`03_GREAT_DEMO_CHOREOGRAPHY.md`](textbooks/03_GREAT_DEMO_CHOREOGRAPHY.md) | Modules 4.1-4.3: Inverted Pyramid, fewest clicks, Delta storytelling | Peter Cohan's Great Demo! |
| **4** | [`04_THE_JOLT_EFFECT_CLOSING_MANUAL.md`](textbooks/04_THE_JOLT_EFFECT_CLOSING_MANUAL.md) | Modules 6.1-6.3: FOMU, the JOLT protocol, concession trading | Dixon & McKenna's JOLT Effect |
| **5** | [`05_COMMERCIAL_REAL_ESTATE_AND_SAAS_FINANCE.md`](textbooks/05_COMMERCIAL_REAL_ESTATE_AND_SAAS_FINANCE.md) | Modules 1.1-1.3: OpEx/CapEx, SaaS unit economics, Cost of Inaction | FASB ASC 842 & CRE Accounting |
| **6** | [`06_ENTERPRISE_MULTITHREADING_AND_MAPS.md`](textbooks/06_ENTERPRISE_MULTITHREADING_AND_MAPS.md) | Modules 5.1-5.3: Buyer personas, value triangulation, Mutual Action Plans | Enterprise Multi-Threading |

### Run Locally in 5 Seconds:
```bash
git clone https://github.com/lancewc/sales-claude-skills.git
cd sales-claude-skills
python -m http.server 8080
```
Open **`http://localhost:8080`** in your browser.

---

## 📖 The Thesis: Why Commercial Engineering Beats Charisma

```
         ┌────────────────────────────────────────────────────────┐
         │                  THE REVENUE GAP                       │
         ├────────────────────────────────────────────────────────┤
         │  Average Rep (Charisma)   VS   Elite AE (Engineering)  │
         │  ──────────────────────        ──────────────────────  │
         │  • Pitches product features    • Quantifies Cost of Inaction
         │  • Gives 60-min harbor tours   • Minute-3 Payoff Screen
         │  • Sells to friendly Coaches   • Tests true Champions  │
         │  • Discounts under pressure    • Trades concessions    │
         │  • Loses 60% to "No Decision"  • De-risks buyer FOMU   │
         └────────────────────────────────────────────────────────┘
```

The difference between a struggling rep and an enterprise top 1% AE is not extroversion. It is **financial literacy, diagnostic rigor, and deal control**. These Claude skills codify that discipline into prompt-native workflows.

---

## 🤝 Contributing & Community
We welcome contributions from enterprise Account Executives, RevOps leaders, and AI researchers!
1. Fork the Project (`https://github.com/lancewc/sales-claude-skills/fork`)
2. Create your Feature Branch (`git checkout -b feature/NewSalesSkill`)
3. Commit your Changes (`git commit -m 'Add new Challenger Sale skill'`)
4. Push to the Branch (`git push origin feature/NewSalesSkill`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <b>Authored by <a href="https://github.com/lancewc">Lance (@lancewc)</a></b><br>
  <i>Designed for elite B2B enterprise sellers and forward-thinking RevOps teams.</i>
</div>
