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
- 📚 **6 Unabridged Reference Textbooks** readable and downloadable directly in-browser.
- ⚖️ **16-Point Interactive MEDDPICC Deal Auditor** with live triage prescriptions.
- 📐 **SaaS & Space Consolidation ROI Engine** computing payback in days and exporting 1-page CFO memos.
- ⚡ **JOLT Customer Indecision Resolver** with verbatim objection scripts.
- 📜 **Capstone Board Examination** awarding an authenticated Oxford/Anthropic-styled Enterprise AE Credential.

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
