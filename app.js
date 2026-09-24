// THE SALES MBA - APP LOGIC & INTERACTIVE ENGINES

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Render dynamic components
  initCurriculum();
  initMeddpicc();
  initRoiCalculator();
  initMapTable();
  initQuiz();
});

/* ========================================================
   1. CURRICULUM ACCORDION ENGINE
======================================================== */
const semestersData = [
  {
    num: "Semester 01",
    title: "Commercial Literacy & SaaS Unit Economics",
    framework: "Financial Intelligence / Corporate P&L",
    duration: "2 Weeks",
    summary: "Transform from a product peddler into an economic advisor. Learn to navigate 10-Ks, calculate Cost of Inaction (COI), and speak the financial language of CFOs.",
    modules: [
      "OpEx vs. CapEx: How software purchases are accounted for and taxed",
      "SaaS Unit Economics: CAC, LTV, Magic Number, and Net Revenue Retention (NRR)",
      "Building the 1-Page Boardroom Financial Business Case",
      "Direct Cost Savings vs. Productivity Yield vs. Risk Avoidance models"
    ],
    drill: "Construct a 1-page financial justification for a 500-person firm spending $45/sqft showing a 10x ROI for space consolidation."
  },
  {
    num: "Semester 02",
    title: "Precision Discovery & Root-Cause Gap Mapping",
    framework: "Keenan's GAP Selling",
    duration: "2 Weeks",
    summary: "Stop asking shallow checklist questions. Dissect the 5 dimensions of the Current State to expose financial bleed the prospect didn't know existed.",
    modules: [
      "The 5 Dimensions: Physical Environment, Latent Problems, Dollar Impact, Root Causes, and Emotional Cost",
      "The Rule of 3 Whys: Pushing through surface-level technical desires",
      "Distinguishing 'Feature Wants' from 'Business Bleed'",
      "Exposing unknown problems through provocative industry benchmarking"
    ],
    drill: "Analyze a live Gong discovery call transcript; locate 4 points where the rep accepted a surface answer and rewrite the diagnostic follow-ups."
  },
  {
    num: "Semester 03",
    title: "Enterprise Deal Qualification & Opportunity Control",
    framework: "John McMahon's MEDDPICC",
    duration: "3 Weeks",
    summary: "Master the qualification operating system of Snowflake and Datadog. Eliminate happy ears, test Champions with rigorous requests, and map the Paper Process early.",
    modules: [
      "The Champion Verification Protocol: Coach vs. Champion and the 3 Acid Tests",
      "The Economic Buyer: Direct verification of discretionary funds and veto power",
      "Decision Criteria Control: Setting trap-door requirements that box out competitors",
      "The Paper Process: Legal MSA, InfoSec SOC2, procurement, and signature hierarchies"
    ],
    drill: "Run the 24-point MEDDPICC audit on your top active deal. Identify the single biggest failure point causing close-date slip."
  },
  {
    num: "Semester 04",
    title: "Demonstrating to Value & Narrative Choreography",
    framework: "Peter Cohan's Great Demo!",
    duration: "2 Weeks",
    summary: "Eliminate the boring 'harbor tour' click-through demo. Show the payoff dashboard in minute 3 and adhere strictly to the fewest clicks to value.",
    modules: [
      "Doing the Last Thing First: The Inverted Pyramid demo architecture",
      "The Fewest Clicks to Value: Banning settings screens and admin menus",
      "Delta Storytelling: Current State Pain → Architectural Fix → Quantified Business Delta",
      "Handling mid-demo feature rabbit-holes without surrendering conversational control"
    ],
    drill: "Record a 5-minute software demo presenting the executive space analytics dashboard first, connecting only 2 workflows back to discovery pain."
  },
  {
    num: "Semester 05",
    title: "Multi-Threading, Buying Units & Mutual Action Plans",
    framework: "Consensus Selling & Joint MAPs",
    duration: "2 Weeks",
    summary: "One contact = No deal. Learn how to bridge from operational champions to IT gatekeepers and finance executives without burning relationships.",
    modules: [
      "Mapping the 4 Personas: Economic Buyer, Champion, User Buyer, and Technical Gatekeeper",
      "Triangulating Persona Messaging: Space consolidation (CRE) vs. Retention (HR) vs. Security (IT)",
      "The Mutual Action Plan (MAP): Co-authoring a reverse timeline tied to a business catalyst",
      "Overcoming the 'Ghosting' trap through executive sponsorship alignment"
    ],
    drill: "Draft a collaborative 7-step Mutual Action Plan for an account evaluating space tools prior to a mandatory 3-day RTO deadline."
  },
  {
    num: "Semester 06",
    title: "Overcoming Indecision, Negotiation & The Endgame",
    framework: "Dixon & McKenna's The JOLT Effect",
    duration: "2 Weeks",
    summary: "Defeat customer indecision (FOMU) and stop losing 60% of pipeline to 'No Decision.' Master tactical empathy, limit exploration, and trade concessions.",
    modules: [
      "FOMU vs. FOMO: Why turning up the heat freezes risk-averse buyers",
      "The JOLT Protocol: Judge indecision, Offer recommendation, Limit exploration, Take risk off table",
      "Trading Concessions: Maintaining pricing power against professional procurement agents",
      "Contract Redlines: Navigating Indemnification, SLA penalties, and Payment Terms"
    ],
    drill: "Respond to a procurement officer demanding a 20% discount on final contract day using concession trading principles."
  }
];

function initCurriculum() {
  const container = document.getElementById('curriculum-container');
  if (!container) return;

  container.innerHTML = semestersData.map((sem, idx) => `
    <div class="border border-[rgba(20,20,19,0.1)] rounded-lg bg-[#FAF9F5] overflow-hidden transition-all duration-200 hover:border-[rgba(20,20,19,0.3)]">
      <button onclick="toggleSemester(${idx})" class="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 rounded bg-[#E3DACC] text-[#C6613F] flex items-center justify-center font-mono font-bold text-xs shrink-0">
            0${idx + 1}
          </span>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-mono text-[#C6613F] font-semibold">${sem.framework}</span>
              <span class="text-[11px] text-[#87867F] bg-[#F0EEE6] border border-[rgba(20,20,19,0.1)] px-2 py-0.5 rounded font-mono">${sem.duration}</span>
            </div>
            <h3 class="text-base sm:text-lg font-sans font-bold text-[#141413] mt-0.5">${sem.title}</h3>
          </div>
        </div>
        <div id="sem-icon-${idx}" class="text-[#87867F] transition-transform duration-200">
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </div>
      </button>

      <div id="sem-content-${idx}" class="hidden px-6 pb-6 pt-2 border-t border-[rgba(20,20,19,0.1)] bg-[#F0EEE6]">
        <p class="text-sm font-serif text-[#3D3D3A] leading-relaxed mb-4">${sem.summary}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
          <div class="p-4 rounded bg-[#FAF9F5] border border-[rgba(20,20,19,0.1)]">
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] mb-2 flex items-center gap-1.5">
              <i data-lucide="layers" class="w-3.5 h-3.5 text-[#C6613F]"></i> Core Curriculum Modules
            </h4>
            <ul class="space-y-2 text-xs text-[#3D3D3A]">
              ${sem.modules.map(m => `<li class="flex items-start gap-2"><span class="text-[#C6613F] font-bold">•</span> <span>${m}</span></li>`).join('')}
            </ul>
          </div>

          <div class="p-4 rounded bg-[#FAF9F5] border border-[rgba(20,20,19,0.1)] flex flex-col justify-between">
            <div>
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#15803D] mb-2 flex items-center gap-1.5">
                <i data-lucide="target" class="w-3.5 h-3.5"></i> Frontline Applied Field Drill
              </h4>
              <p class="text-xs font-serif text-[#3D3D3A] leading-relaxed">${sem.drill}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-[rgba(20,20,19,0.1)] text-[10px] text-[#87867F] font-mono">
              Evaluated in Capstone Certification Exam
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function toggleSemester(idx) {
  const content = document.getElementById(`sem-content-${idx}`);
  const icon = document.getElementById(`sem-icon-${idx}`);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  content.classList.toggle('hidden', !isHidden);
  if (icon) {
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

/* ========================================================
   2. TOOL TABS SWITCHER
======================================================== */
function switchToolTab(tabKey) {
  document.querySelectorAll('.tool-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tool-panel').forEach(panel => panel.classList.add('hidden'));

  const btn = document.getElementById(`tab-btn-${tabKey}`);
  const panel = document.getElementById(`tool-panel-${tabKey}`);

  if (btn) btn.classList.add('active');
  if (panel) panel.classList.remove('hidden');

  if (window.lucide) window.lucide.createIcons();
}

/* ========================================================
   3. MEDDPICC AUDITOR LOGIC
======================================================== */
const meddpiccFactors = [
  { key: 'M', name: 'Metrics', desc: 'Economic impact and quantified business metrics verified with EB & Champion.' },
  { key: 'EB', name: 'Economic Buyer', desc: 'Direct face-to-face meeting held with executive check-signer with discretionary spend.' },
  { key: 'DC', name: 'Decision Criteria', desc: 'Technical and commercial evaluation criteria established in writing favoring our solution.' },
  { key: 'DP', name: 'Decision Process', desc: 'Formal stages, board approvals, and evaluation milestones clearly mapped to close date.' },
  { key: 'PP', name: 'Paper Process', desc: 'Legal counsel, InfoSec/SOC2 reviews, procurement sign-offs, and MSA redlines charted.' },
  { key: 'IP', name: 'Identified Pain', desc: 'Cost of Inaction (COI) quantified in dollars; business bleeding if nothing changes.' },
  { key: 'C', name: 'Champion', desc: 'Internal power-broker tested: will sell for us and grant access to the Economic Buyer.' },
  { key: 'COMP', name: 'Competition', desc: 'Strategy identified against direct vendors, internal spreadsheets, and the Status Quo.' }
];

let factorScores = { M: 0, EB: 0, DC: 0, DP: 0, PP: 0, IP: 0, C: 0, COMP: 0 };

function initMeddpicc() {
  const container = document.getElementById('meddpicc-factors-container');
  if (!container) return;

  container.innerHTML = meddpiccFactors.map(f => `
    <div class="p-4 rounded-lg bg-[#F3F1EB] border border-[#E5E3DC] flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-[#141413] flex items-center gap-1.5">
            <span class="font-mono text-[#CC553D] bg-[#FAECE8] px-1.5 py-0.5 rounded border border-[#E8A89B]">${f.key}</span>
            ${f.name}
          </span>
          <span class="text-[10px] font-mono text-[#6B6964]" id="factor-score-label-${f.key}">Unknown (0)</span>
        </div>
        <p class="text-[11px] text-[#6B6964] leading-normal mb-3">${f.desc}</p>
      </div>

      <div class="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#E5E3DC]">
        <button onclick="rateFactor('${f.key}', 0)" id="btn-${f.key}-0" class="rating-btn active-0 py-1 rounded text-[10px] font-mono font-semibold border border-[#E5E3DC] bg-[#FAF8F2] text-[#6B6964] hover:text-[#141413]">
          0: None
        </button>
        <button onclick="rateFactor('${f.key}', 1)" id="btn-${f.key}-1" class="rating-btn py-1 rounded text-[10px] font-mono font-semibold border border-[#E5E3DC] bg-[#FAF8F2] text-[#6B6964] hover:text-[#141413]">
          1: Fragile
        </button>
        <button onclick="rateFactor('${f.key}', 2)" id="btn-${f.key}-2" class="rating-btn py-1 rounded text-[10px] font-mono font-semibold border border-[#E5E3DC] bg-[#FAF8F2] text-[#6B6964] hover:text-[#141413]">
          2: Locked
        </button>
      </div>
    </div>
  `).join('');

  updateMeddpiccScore();
}

function rateFactor(key, score) {
  factorScores[key] = score;

  [0, 1, 2].forEach(s => {
    const btn = document.getElementById(`btn-${key}-${s}`);
    if (btn) {
      btn.className = `rating-btn py-1 rounded text-[10px] font-mono font-semibold border border-[#E5E3DC] bg-[#FAF8F2] text-[#6B6964] hover:text-[#141413] hover:border-[#C8C5BB]`;
      if (s === score) {
        btn.classList.add(`active-${s}`);
      }
    }
  });

  const label = document.getElementById(`factor-score-label-${key}`);
  if (label) {
    const tags = ['Unknown (0)', 'Fragile (1)', 'Locked (2)'];
    label.innerText = tags[score];
  }

  updateMeddpiccScore();
}

function updateMeddpiccScore() {
  const total = Object.values(factorScores).reduce((a, b) => a + b, 0);
  const display = document.getElementById('meddpicc-score-display');
  const badge = document.getElementById('meddpicc-status-badge');
  const prescTitle = document.getElementById('meddpicc-prescription-title');
  const prescText = document.getElementById('meddpicc-prescription-text');

  if (display) display.innerText = total;

  if (badge && prescTitle && prescText) {
    if (total >= 13) {
      badge.className = "px-3 py-1.5 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D]";
      badge.innerText = "High Probability Close";
      prescTitle.innerText = "Closing Execution Focus";
      prescText.innerText = "Strong deal control. Ensure Paper Process milestones are tracked daily with procurement to prevent quarter-end redline bottlenecks.";
    } else if (total >= 8) {
      badge.className = "px-3 py-1.5 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-[#FEF3C7] border border-[#FCD34D] text-[#B45309]";
      badge.innerText = "At Risk / Deal Slippage Fluff";
      prescTitle.innerText = "Critical Qualification Gaps";
      
      let warnings = [];
      if (factorScores.EB < 2) warnings.push("You do not have confirmed executive alignment with the Economic Buyer.");
      if (factorScores.C < 2) warnings.push("Your Champion has not been tested with a hard request.");
      if (factorScores.PP < 1) warnings.push("The Paper Process has not been initiated with legal/security.");
      prescText.innerText = warnings.join(" ") || "Multiple qualification criteria remain unverified. Schedule a strategic alignment session with your Champion.";
    } else {
      badge.className = "px-3 py-1.5 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-[#FEE2E2] border border-[#FCA5A5] text-[#B91C1C]";
      badge.innerText = "Unqualified (High Risk of Death)";
      prescTitle.innerText = "Immediate Triage Required";
      prescText.innerText = "This opportunity lacks fundamental enterprise criteria. You are likely single-threaded with an operational coach who has no budget authority.";
    }
  }
}

/* ========================================================
   4. SAAS & SPACE ROI CALCULATOR LOGIC
======================================================== */
function initRoiCalculator() {
  const employees = document.getElementById('roi-employees');
  const sqft = document.getElementById('roi-sqft');
  const costSqft = document.getElementById('roi-cost-sqft');
  const reduction = document.getElementById('roi-reduction');

  const inputs = [employees, sqft, costSqft, reduction];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', calculateRoi);
    }
  });

  calculateRoi();
}

function calculateRoi() {
  const empVal = parseFloat(document.getElementById('roi-employees')?.value || 350);
  const sqftVal = parseFloat(document.getElementById('roi-sqft')?.value || 45000);
  const costSqftVal = parseFloat(document.getElementById('roi-cost-sqft')?.value || 48);
  const redPct = parseFloat(document.getElementById('roi-reduction')?.value || 20);

  const redValDisplay = document.getElementById('roi-reduction-val');
  if (redValDisplay) redValDisplay.innerText = `${redPct}%`;

  // Financial calculations
  const annualLeaseSpend = sqftVal * costSqftVal;
  const annualSavings = annualLeaseSpend * (redPct / 100);
  
  // Software ACV estimate (benchmark: ~$6/user/month or space tier, approx $72/user/yr with base platform fee)
  const softwareAcv = Math.max(12000, empVal * 72);
  const netBenefit = annualSavings - softwareAcv;
  const roiMultiple = (annualSavings / softwareAcv).toFixed(1);
  const paybackMonths = ((softwareAcv / annualSavings) * 12).toFixed(1);
  const paybackDays = Math.round((softwareAcv / annualSavings) * 365);

  // Update DOM
  document.getElementById('res-current-lease').innerText = formatCurrency(annualLeaseSpend);
  document.getElementById('res-annual-savings').innerText = formatCurrency(annualSavings);
  document.getElementById('res-software-acv').innerText = formatCurrency(softwareAcv);
  document.getElementById('res-net-benefit').innerText = formatCurrency(netBenefit);
  document.getElementById('res-roi-multiple').innerText = `${roiMultiple}x ROI`;
  document.getElementById('res-payback').innerText = `${paybackDays} Days (${paybackMonths} mo)`;
}

function formatCurrency(val) {
  return '$' + Math.round(val).toLocaleString();
}

function copyBusinessCase() {
  const currentLease = document.getElementById('res-current-lease')?.innerText;
  const savings = document.getElementById('res-annual-savings')?.innerText;
  const acv = document.getElementById('res-software-acv')?.innerText;
  const net = document.getElementById('res-net-benefit')?.innerText;
  const roi = document.getElementById('res-roi-multiple')?.innerText;
  const payback = document.getElementById('res-payback')?.innerText;

  const text = `EXECUTIVE FINANCIAL BUSINESS CASE (CFO BRIEF)
--------------------------------------------------
Annual Real Estate Lease Commitment: ${currentLease}
Projected Annual Lease Savings (Hybrid Consolidation): ${savings}
Estimated Software ACV & Deployment: ${acv}
--------------------------------------------------
Net 1st-Year Bottom-Line Benefit: ${net}
Projected Return Multiple: ${roi}
Capital Payback Period: ${payback}
--------------------------------------------------
Conclusion: The cost of inaction far exceeds the software investment.`;

  navigator.clipboard.writeText(text);
  showToast("CFO Business Case copied to clipboard!");
}

/* ========================================================
   5. JOLT INDECISION LOGIC
======================================================== */
const joltData = {
  overload: {
    category: "INFORMATION OVERLOAD",
    diagnosis: "The prospect is terrified of buying the wrong tool and looking foolish to their executive team. They request more demos and edge-case POCs not because they need features, but to delay making a binding decision.",
    script: `"Sarah, we’ve already validated that the platform solves 95% of your core desk-sharing and real estate reporting requirements. If we keep doing demos for minor edge-cases, we will miss your December lease renewal window. Let's reserve that specific edge-case test for week 2 of your guided onboarding."`,
    move: "Limit the Exploration"
  },
  valuation: {
    category: "VALUATION UNCERTAINTY",
    diagnosis: "The buyer suffers from choice overload and pricing paralysis. When presented with 5 tiers and add-ons, they fear leaving money on the table or buying shelfware. They need a prescription, not a catalog.",
    script: `"Dave, let’s simplify this. Based on 40 organizations identical to your size undergoing hybrid RTO, Tier 2 with the automated space analytics is exactly what you need. Tiers 1 is too basic for your reporting, and Tier 3 has advanced sensor integrations you won’t use until year 2. Let's lock in Tier 2."`,
    move: "Offer a Recommendation"
  },
  fomu: {
    category: "EXECUTION & CAREER RISK (FOMU)",
    diagnosis: "Fear Of Messing Up (FOMU). The Champion is worried employees will refuse to use the tool, creating executive backlash for sponsoring a failed project. They are protecting their internal reputation.",
    script: `"Sarah, I completely understand the anxiety around employee adoption. To take all the risk off your shoulders, we include a 30-day phased rollout with our dedicated customer success architect and a guaranteed 60-day executive checkpoint to review adoption before company-wide launch."`,
    move: "Take Risk Off the Table"
  }
};

function selectJoltSymptom(key) {
  document.querySelectorAll('.jolt-option-card').forEach(c => c.classList.remove('active'));
  const selected = document.getElementById(`jolt-opt-${key}`);
  if (selected) selected.classList.add('active');

  const data = joltData[key];
  if (!data) return;

  document.getElementById('jolt-category-badge').innerText = data.category;
  document.getElementById('jolt-diagnosis-text').innerText = data.diagnosis;
  document.getElementById('jolt-script-text').innerText = data.script;
  document.getElementById('jolt-move-label').innerText = data.move;
}

function copyJoltScript() {
  const text = document.getElementById('jolt-script-text')?.innerText;
  if (text) {
    navigator.clipboard.writeText(text);
    showToast("JOLT talk-track copied!");
  }
}

/* ========================================================
   6. MUTUAL ACTION PLAN TABLE LOGIC
======================================================== */
const defaultMapMilestones = [
  { phase: "Discovery", item: "Operational Diagnostic & Floorplan Audit", owner: "Joint Team", date: "Day 1-7", status: "Completed" },
  { phase: "Solution Alignment", item: "Executive Architecture & Impact Demo", owner: "Maptician AE", date: "Day 10", status: "Completed" },
  { phase: "Technical Validation", item: "SSO, Security & SOC2 Review Questionnaire", owner: "Prospect InfoSec", date: "Day 18", status: "In Progress" },
  { phase: "Commercial Alignment", item: "CFO Business Case & ROI Model Review", owner: "Champion + AE", date: "Day 24", status: "Scheduled" },
  { phase: "Contract Execution", item: "Order Form & MSA Redline Sign-Off", owner: "Legal / Procurement", date: "Day 32", status: "Pending" },
  { phase: "Implementation", item: "Data Onboarding & Space Reconfiguration", owner: "Customer Success", date: "Day 40", status: "Pending" },
  { phase: "Value Realization", item: "Company-Wide Go-Live & Adoption Review", owner: "Executive Sponsors", date: "Day 50", status: "Pending" }
];

function initMapTable() {
  const tbody = document.getElementById('map-table-body');
  if (!tbody) return;

  tbody.innerHTML = defaultMapMilestones.map((m, idx) => `
    <tr class="border-b border-[#E5E3DC] hover:bg-[#F3F1EB] transition-colors">
      <td class="py-3.5 px-4 font-mono text-xs font-semibold text-[#141413]">${m.phase}</td>
      <td class="py-3.5 px-4 text-xs text-[#3D3D3A] font-medium">${m.item}</td>
      <td class="py-3.5 px-4 font-mono text-xs text-[#CC553D]">${m.owner}</td>
      <td class="py-3.5 px-4 font-mono text-xs text-[#6B6964]">${m.date}</td>
      <td class="py-3.5 px-4">
        <span class="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-semibold ${
          m.status === 'Completed' ? 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]' :
          m.status === 'In Progress' ? 'bg-[#FAECE8] text-[#CC553D] border border-[#E8A89B]' :
          m.status === 'Scheduled' ? 'bg-[#FEF3C7] text-[#B45309] border border-[#FCD34D]' :
          'bg-[#F3F1EB] text-[#6B6964] border border-[#E5E3DC]'
        }">${m.status}</span>
      </td>
    </tr>
  `).join('');
}

function copyMapPlan() {
  let md = "# JOINT VALUE CREATION & MUTUAL ACTION PLAN (MAP)\n\n";
  md += "| Phase | Milestone | Owner | Target Timeline | Status |\n";
  md += "|---|---|---|---|---|\n";
  defaultMapMilestones.forEach(m => {
    md += `| ${m.phase} | ${m.item} | ${m.owner} | ${m.date} | ${m.status} |\n`;
  });
  navigator.clipboard.writeText(md);
  showToast("Mutual Action Plan exported to Markdown!");
}

/* ========================================================
   7. BOARD EXAM & CERTIFICATION ENGINE
======================================================== */
const examQuestions = [
  {
    scenario: "Case 1: The Single-Threaded Champion Trap",
    context: "You have completed 2 demos with Sarah, Workplace Experience Manager at Apex Logistics (800 employees). Sarah is ecstatic: 'This saves me 10 hours a week on manual floor plans. Send me the proposal for 800 seats and I will get our CFO, Dave, to sign off.'",
    question: "Using John McMahon's MEDDPICC methodology, what is the critical flaw in this deal?",
    options: [
      { text: "Sarah has not agreed to an upfront discount before sending the proposal.", correct: false },
      { text: "Sarah is a Coach, not a verified Champion, and you have zero direct access or metrics validated by the Economic Buyer (Dave).", correct: true },
      { text: "The deal size is too small to justify an executive presentation.", correct: false },
      { text: "Apex Logistics has not completed an RFP process.", correct: false }
    ],
    explanation: "Under MEDDPICC, a Coach provides intel and likes you, but a true Champion has organizational influence and sells for you. Handing a proposal to an untested contact hoping they forward it to an absent Economic Buyer leads directly to a stalled or ghosted deal."
  },
  {
    scenario: "Case 2: Keenan's GAP Selling Discovery",
    context: "During initial discovery, a Facilities Director tells you: 'Our hybrid attendance is unpredictable, so we want desk booking software so employees can reserve desks when they come in.'",
    question: "How does a top-performing AE respond to bridge the Gap?",
    options: [
      { text: "'Awesome, let me share my screen and show you our mobile desk reservation app!'", correct: false },
      { text: "'How many desks do you have, and when are you looking to implement?'", correct: false },
      { text: "'When attendance is unpredictable like that, what is that friction currently costing you in wasted lease spend or team conflict, and why haven't current tools solved it?'", correct: true },
      { text: "'Do you have a budget allocated for space management software this fiscal year?'", correct: false }
    ],
    explanation: "GAP Selling teaches you to reject surface-level feature requests. The seller must ladder down into the business problem, quantifying the financial impact (wasted lease spend) and root cause before discussing software features."
  },
  {
    scenario: "Case 3: Peter Cohan's Great Demo! Architecture",
    context: "You are kicking off a 30-minute demonstration with the VP of Corporate Real Estate, whose mandate is consolidating office footprint to save $400k in lease costs.",
    question: "According to 'Great Demo!', what should you show in the first 3 minutes of the presentation?",
    options: [
      { text: "The login screen, SSO configuration, and admin security settings.", correct: false },
      { text: "The Executive Real Estate Utilization Dashboard highlighting floor-by-floor occupancy drops and annual lease savings (Doing the Last Thing First).", correct: true },
      { text: "A 10-slide PowerPoint history of your founding team and venture investors.", correct: false },
      { text: "A comprehensive walk-through of how a user creates an account and checks into a desk via QR code.", correct: false }
    ],
    explanation: "Cohan's 'Do the Last Thing First' inverted pyramid rule mandates showing the final business payoff immediately. Starting with admin setups or user mechanics bores executives and invites nitpicky technical objections."
  },
  {
    scenario: "Case 4: The JOLT Effect & Buyer Indecision",
    context: "Your champion has had 2 demos, validated pricing, and received legal approval. However, they suddenly request a 3rd demo and 3 additional customer reference calls to review how the software handles an obscure edge-case desk release rule.",
    question: "According to Dixon & McKenna's research on customer indecision, what is the winning tactical move?",
    options: [
      { text: "Schedule 3 more demos immediately and send 10 case studies.", correct: false },
      { text: "Limit the exploration: Reiterate that 95% of core requirements are validated, and offer to test that specific edge case during week 2 of guided onboarding to protect their launch deadline.", correct: true },
      { text: "Threaten to revoke the current pricing discount if they do not sign by Friday.", correct: false },
      { text: "Offer an additional 15% discount to incentivize signing today.", correct: false }
    ],
    explanation: "Data from 2.5 million sales calls proves that feeding buyer information overload increases the likelihood of 'No Decision' by 80%. Top AEs limit exploration and take risk off the table by establishing confidence boundaries."
  },
  {
    scenario: "Case 5: High-Stakes Procurement Negotiation",
    context: "On the final day of the quarter, enterprise procurement contacts you: 'We will execute this contract today, but only if you grant an additional 15% discount off the total ACV.'",
    question: "What is the proper commercial response to maintain pricing integrity?",
    options: [
      { text: "Agree immediately and send the discounted order form.", correct: false },
      { text: "Flatly refuse and terminate the conversation.", correct: false },
      { text: "Trade concessions: 'We can evaluate adjusting the commercial terms, but in exchange we would need to move from quarterly to annual upfront payment terms or adjust deployment scope.'", correct: true },
      { text: "Offer a free pilot instead of a contract.", correct: false }
    ],
    explanation: "Never give a concession without getting one in return. If you discount with zero trade, procurement learns your price was arbitrary and will ask for more. Always trade price for payment terms, multi-year commitments, or scope."
  }
];

let currentQuestionIdx = 0;
let userAnswers = {};

function initQuiz() {
  renderQuestion(currentQuestionIdx);
}

function renderQuestion(idx) {
  const container = document.getElementById('quiz-question-box');
  const progressText = document.getElementById('quiz-progress-text');
  const scoreTracker = document.getElementById('quiz-score-tracker');
  const prevBtn = document.getElementById('prev-question-btn');
  const nextBtn = document.getElementById('next-question-btn');

  if (!container) return;

  const q = examQuestions[idx];
  progressText.innerText = `Scenario 0${idx + 1} of 0${examQuestions.length}`;
  prevBtn.disabled = idx === 0;

  // Calculate current score
  let currentScore = 0;
  Object.keys(userAnswers).forEach(qIdx => {
    if (userAnswers[qIdx] !== undefined && examQuestions[qIdx].options[userAnswers[qIdx]].correct) {
      currentScore++;
    }
  });
  scoreTracker.innerText = `Score: ${currentScore} / ${examQuestions.length}`;

  const selectedOpt = userAnswers[idx];

  container.innerHTML = `
    <div class="mb-5">
      <span class="text-xs font-mono font-semibold text-[#CC553D] uppercase tracking-wider block mb-1">${q.scenario}</span>
      <h3 class="text-lg sm:text-xl font-serif font-medium text-[#141413] mb-3 leading-snug">${q.question}</h3>
      <div class="text-xs text-[#3D3D3A] bg-[#F3F1EB] border border-[#E5E3DC] p-4 rounded leading-relaxed">
        <span class="font-mono text-[10px] uppercase font-bold text-[#6B6964] block mb-1 tracking-wider">Field Context & Intelligence</span>
        ${q.context}
      </div>
    </div>

    <div class="space-y-2.5 mt-5">
      ${q.options.map((opt, optIdx) => `
        <button onclick="selectQuizAnswer(${idx}, ${optIdx})" class="quiz-opt-btn w-full p-4 rounded border text-left text-xs font-medium flex items-center justify-between gap-3 ${
          selectedOpt === optIdx ? 'selected' : 'border-[#E5E3DC] bg-[#FAF8F2] text-[#3D3D3A]'
        }">
          <span class="leading-relaxed">${opt.text}</span>
          <span class="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
            selectedOpt === optIdx ? 'bg-[#CC553D] border-[#CC553D] text-white' : 'border-[#C8C5BB]'
          }">
            ${selectedOpt === optIdx ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}
          </span>
        </button>
      `).join('')}
    </div>

    ${selectedOpt !== undefined ? `
      <div class="mt-5 p-4 rounded border ${
        q.options[selectedOpt].correct ? 'bg-[#DCFCE7]/60 border-[#86EFAC] text-[#15803D]' : 'bg-[#FEE2E2]/60 border-[#FCA5A5] text-[#B91C1C]'
      } text-xs">
        <div class="font-mono font-bold uppercase mb-1 flex items-center gap-1.5 tracking-wider text-[11px]">
          <i data-lucide="${q.options[selectedOpt].correct ? 'check-circle-2' : 'alert-circle'}" class="w-4 h-4"></i>
          ${q.options[selectedOpt].correct ? 'Correct Strategic Diagnosis' : 'Flawed Strategic Approach'}
        </div>
        <p class="text-[#3D3D3A] leading-relaxed mt-1 font-sans text-xs">${q.explanation}</p>
      </div>
    ` : ''}
  `;

  if (idx === examQuestions.length - 1) {
    nextBtn.innerHTML = `<span>Complete Examination</span> <i data-lucide="award" class="w-3.5 h-3.5"></i>`;
  } else {
    nextBtn.innerHTML = `<span>Next Scenario</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>`;
  }

  if (window.lucide) window.lucide.createIcons();
}

function selectQuizAnswer(qIdx, optIdx) {
  userAnswers[qIdx] = optIdx;
  renderQuestion(qIdx);
}

function handleNextQuestion() {
  if (userAnswers[currentQuestionIdx] === undefined) {
    showToast("Please select an answer before continuing.");
    return;
  }

  if (currentQuestionIdx < examQuestions.length - 1) {
    currentQuestionIdx++;
    renderQuestion(currentQuestionIdx);
  } else {
    showExamResults();
  }
}

function handlePreviousQuestion() {
  if (currentQuestionIdx > 0) {
    currentQuestionIdx--;
    renderQuestion(currentQuestionIdx);
  }
}

function showExamResults() {
  const quizContainer = document.getElementById('quiz-container');
  const certContainer = document.getElementById('certificate-container');
  if (!quizContainer || !certContainer) return;

  quizContainer.classList.add('hidden');
  certContainer.classList.remove('hidden');

  let score = 0;
  examQuestions.forEach((q, idx) => {
    if (userAnswers[idx] !== undefined && q.options[userAnswers[idx]].correct) {
      score++;
    }
  });

  const percentage = Math.round((score / examQuestions.length) * 100);
  const passed = percentage >= 80;

  certContainer.innerHTML = `
    <div class="max-w-2xl mx-auto text-center py-4">
      <div class="w-14 h-14 rounded-full ${passed ? 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]' : 'bg-[#FEF3C7] text-[#B45309] border border-[#FCD34D]'} flex items-center justify-center mx-auto mb-3">
        <i data-lucide="${passed ? 'award' : 'refresh-cw'}" class="w-7 h-7"></i>
      </div>
      
      <span class="text-xs font-mono uppercase tracking-widest ${passed ? 'text-[#15803D]' : 'text-[#B45309]'} font-bold">
        ${passed ? 'Official Certification Conferred' : 'Examination Score Report'}
      </span>
      <h3 class="text-2xl sm:text-3xl font-serif font-medium text-[#141413] mt-1 mb-2">
        ${passed ? 'Certified Enterprise Account Executive (CAE)' : 'Board Review Completed'}
      </h3>
      <p class="text-xs text-[#6B6964] mb-6">
        Candidate Performance: <strong class="text-[#141413] font-mono text-sm">${score} / ${examQuestions.length} (${percentage}%)</strong> — Passing Benchmark: 80%
      </p>

      ${passed ? `
        <!-- ANTHROPIC / OXFORD STYLE CERTIFICATE CARD -->
        <div id="printable-certificate" class="p-8 sm:p-10 rounded border-2 border-[#CC553D] bg-[#FAF8F2] relative text-left my-6 shadow-sm">
          <div class="border border-[#E5E3DC] p-6 sm:p-8">
            <div class="flex items-center justify-between border-b border-[#E5E3DC] pb-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded bg-[#CC553D] text-white flex items-center justify-center font-serif font-bold text-sm">MBA</div>
                <div>
                  <div class="text-xs font-mono font-bold tracking-wider text-[#141413]">THE SALES MBA INSTITUTE</div>
                  <div class="text-[10px] font-mono text-[#6B6964] uppercase">Board of GTM Engineering & Enterprise Deal Control</div>
                </div>
              </div>
              <span class="text-[10px] font-mono text-[#15803D] bg-[#DCFCE7] border border-[#86EFAC] px-2.5 py-1 rounded font-semibold uppercase tracking-wider">
                Authenticated Credential
              </span>
            </div>

            <div class="text-center my-8">
              <p class="text-[11px] font-mono text-[#6B6964] uppercase tracking-widest">This executive credential certifies that</p>
              <h4 class="text-2xl sm:text-3xl font-serif font-medium text-[#141413] my-2">Lance (Maptician Enterprise BDR)</h4>
              <p class="text-xs text-[#3D3D3A] max-w-lg mx-auto leading-relaxed mt-3">
                Has demonstrated rigorous operational mastery in Keenan's GAP Selling root-cause diagnostics, John McMahon's MEDDPICC qualification architecture, Peter Cohan's Great Demo! choreography, and Matt Dixon's JOLT Effect closing mechanics.
              </p>
            </div>

            <div class="flex items-center justify-between border-t border-[#E5E3DC] pt-4 mt-8 text-[11px] font-mono text-[#6B6964]">
              <div>
                <span>Verification ID: </span>
                <strong class="text-[#141413] font-mono">SMBA-2026-9842-MAP</strong>
              </div>
              <div>
                <span>Conferred: </span>
                <strong class="text-[#141413]">September 2026</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4 mt-6">
          <button onclick="window.print()" class="btn-terracotta px-5 py-2.5 rounded text-xs font-medium flex items-center gap-2">
            <i data-lucide="printer" class="w-3.5 h-3.5"></i>
            Print / Archive Credential
          </button>
          <button onclick="resetQuiz()" class="btn-secondary px-4 py-2.5 rounded text-xs font-medium">
            Retake Exam
          </button>
        </div>
      ` : `
        <div class="p-6 rounded bg-[#FAF8F2] border border-[#E5E3DC] text-left mb-6">
          <h4 class="text-sm font-serif font-medium text-[#141413] mb-1">Prescriptive Review Recommendation</h4>
          <p class="text-xs text-[#3D3D3A] leading-relaxed">
            Review Semesters 2 and 3 focusing on John McMahon's Champion verification and Keenan's GAP discovery techniques before attempting the board examination again.
          </p>
        </div>
        <button onclick="resetQuiz()" class="btn-terracotta px-6 py-2.5 rounded text-xs font-medium">
          Retake Board Examination
        </button>
      `}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function resetQuiz() {
  currentQuestionIdx = 0;
  userAnswers = {};
  document.getElementById('certificate-container')?.classList.add('hidden');
  document.getElementById('quiz-container')?.classList.remove('hidden');
  renderQuestion(0);
}

/* ========================================================
   8. SCRIPT COPIER & TOAST
======================================================== */
function copyCardScript(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    navigator.clipboard.writeText(el.innerText);
    showToast("Script copied to clipboard!");
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.innerText = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 2800);
}

/* ========================================================
   9. CHECKOUT SIMULATOR MODAL
======================================================== */
function triggerCheckout(tierName, price) {
  const modal = document.getElementById('checkout-modal');
  const title = document.getElementById('modal-tier-title');
  const priceEl = document.getElementById('modal-tier-price');

  if (title) title.innerText = `Enroll in ${tierName}`;
  if (priceEl) priceEl.innerText = `$${price.toLocaleString()} USD - Instant Access`;
  if (modal) modal.classList.remove('hidden');

  if (window.lucide) window.lucide.createIcons();
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
}

function completeSimulatedCheckout() {
  const name = document.getElementById('checkout-name')?.value || "Enterprise Seller";
  closeCheckoutModal();
  showToast(`Congratulations ${name}! Enrollment confirmed.`);
}

/* ========================================================
   10. SPLIT BUTTON DROPDOWN HANDLER
======================================================== */
function toggleSplitDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('split-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

document.addEventListener('click', (e) => {
  const container = document.querySelector('.btn-split-container');
  const dropdown = document.getElementById('split-dropdown');
  if (container && dropdown && !container.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

