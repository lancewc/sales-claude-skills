// THE SALES MBA - SELF-STUDY CLASSROOM & STUDENT PORTAL ENGINE

const classroomLessons = [
  // SEMESTER 1
  {
    id: "1.1",
    semNum: 1,
    semTitle: "Commercial Literacy & SaaS Unit Economics",
    title: "OpEx vs. CapEx, EBITDA & Corporate Cash Flow",
    duration: "10 min study",
    framework: "Corporate Finance & Capital Allocation",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Boardroom Phase Shift: Why Features Don't Sell to CFOs</p>
        <p>When you are a BDR, you pitch convenience: <em>"Our software makes desk booking easy."</em> But when you become an Enterprise Account Executive, convenience is a non-starter. CFOs and VPs of Finance do not authorize \$30k–\$100k contracts for convenience. They authorize capital based on financial mechanics: <strong>OpEx efficiency, CapEx avoidance, EBITDA impact, and Free Cash Flow (FCF).</strong></p>
        
        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 my-4">
          <h5 class="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider mb-2">1. Operating Expenses (OpEx) vs. Capital Expenditures (CapEx)</h5>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><strong class="text-slate-200">CapEx (Capital Expenditures):</strong> Major long-term physical assets (buying office buildings, heavy hardware, massive proprietary server infrastructure). Paid upfront, depreciated over 5–10 years on the balance sheet.</li>
            <li><strong class="text-slate-200">OpEx (Operating Expenses):</strong> Ongoing operational costs (cloud software subscriptions, monthly lease payments, utilities). Fully tax-deductible in the year they are spent.</li>
            <li><strong class="text-slate-200">The AE Advantage:</strong> Maptician is an <strong>OpEx investment that directly cannibalizes a bloated OpEx liability (Real Estate Leases)</strong>. You are not asking for 'new money'; you are reallocating a fraction of a 2-million-dollar lease bleed into high-efficiency software.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 my-4">
          <h5 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">2. The EBITDA Metric Every VP of Sales Forgets</h5>
          <p class="text-xs text-slate-400"><strong>EBITDA</strong> = Earnings Before Interest, Taxes, Depreciation, and Amortization. In PE-backed and public firms, enterprise valuation is typically a multiple of EBITDA (e.g., 10x–20x EBITDA). If Maptician helps a 500-person enterprise downsize 15,000 sq ft, saving <strong>\$600,000/year</strong> in lease liability:</p>
          <div class="p-3 bg-surface-900 rounded-lg font-mono text-emerald-300 text-xs my-2">
            $600k Lease Savings - $30k Software ACV = +$570,000 Net EBITDA Expansion.<br>
            At a 15x Valuation Multiple, you just added $8,550,000 in Enterprise Value to their company.
          </div>
          <p class="text-xs text-slate-400">When you show this math to a CFO, the conversation changes from <em>"Can we afford this software?"</em> to <em>"How fast can we roll this out?"</em></p>
        </div>

        <div class="p-4 rounded-xl bg-brand-950/20 border border-brand-500/30">
          <h5 class="text-xs font-mono font-bold text-brand-300 uppercase mb-1">Elite AE Talk-Track vs. Rookie BDR Pitch</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
            <div class="p-2.5 rounded bg-surface-950 border border-rose-900/40 text-slate-400">
              <span class="text-rose-400 font-bold block mb-1">Rookie Pitch:</span>
              "We have an intuitive interactive floor plan that lets employees book desks and find conference rooms."
            </div>
            <div class="p-2.5 rounded bg-surface-950 border border-emerald-900/40 text-slate-300">
              <span class="text-emerald-400 font-bold block mb-1">Elite AE Position:</span>
              "We provide the spatial occupancy telemetry that enables your CRE team to cut 20% of unutilized lease liability before your Q4 contract renewal."
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "Why does an enterprise CFO prefer SaaS space optimization (OpEx) over maintaining excess office lease footprint?",
      options: [
        "Because SaaS software can be capitalized as an asset on the balance sheet.",
        "Because eliminating unused lease commitments directly reduces ongoing OpEx, immediately boosting EBITDA and Free Cash Flow.",
        "Because CFOs prefer receiving quarterly software updates over static floor plans.",
        "Because software is exempt from corporate procurement policies."
      ],
      correctIdx: 1,
      explanation: "SaaS costs are OpEx that directly reduce bloated commercial lease OpEx, yielding immediate EBITDA expansion without requiring multi-year capital depreciation."
    },
    reflectionPrompt: "Look up a target account in your territory on LinkedIn or Google News. Estimate their physical footprint (headcount x 150 sq ft) and calculate the financial impact of a 20% space reduction at $45/sqft."
  },
  {
    id: "1.2",
    semNum: 1,
    semTitle: "Commercial Literacy & SaaS Unit Economics",
    title: "The SaaS Financial Engine: CAC, LTV & Net Retention",
    duration: "10 min study",
    framework: "SaaS Metrics & Buyer Psychology",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">How Tech Executives Measure Value: The SaaS Triple Crown</p>
        <p>If you sell to tech companies, law firms, or modern enterprises, you must understand how their leadership is evaluated. Understanding SaaS unit economics allows you to speak the same shorthand as their executive team.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono text-brand-400 font-bold block mb-1">CAC & Payback</span>
            <p class="text-xs text-slate-400">Customer Acquisition Cost. How many months of gross margin does it take to recoup the sales and marketing dollars spent acquiring a customer?</p>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono text-emerald-400 font-bold block mb-1">Net Retention (NRR)</span>
            <p class="text-xs text-slate-400">Net Revenue Retention. Percentage of recurring revenue retained from existing customers after upgrades, downgrades, and churn. Above 110% is gold standard.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono text-amber-400 font-bold block mb-1">LTV / CAC Ratio</span>
            <p class="text-xs text-slate-400">Lifetime Value to CAC. Healthy software companies target a 3:1 to 5:1 ratio. Below 3:1 means unsustainable burn; above 5:1 means under-investing in GTM.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-slate-200 uppercase mb-2">Connecting SaaS Economics to Your Prospect's World</h5>
          <p class="text-xs text-slate-400 mb-2">When a company is struggling with poor unit economics or high burn, their Board of Directors forces them to do two things:</p>
          <ol class="list-decimal pl-5 text-xs text-slate-400 space-y-1">
            <li><strong>Freeze or slow down headcount additions</strong> (meaning employees must do more per hour).</li>
            <li><strong>Slash SG&A (Selling, General, and Administrative) expenses</strong>—where Corporate Real Estate is often the 2nd largest line item behind payroll.</li>
          </ol>
          <p class="text-xs text-slate-300 mt-3 font-semibold">Your positioning: Maptician isn't an arbitrary software purchase; it is the SG&A reduction weapon that lets them cut millions in fixed overhead without firing talent.</p>
        </div>
      </div>
    `,
    quiz: {
      question: "When an enterprise CFO is under pressure to improve operating margins and cash runway, which expense bucket do they target first after payroll?",
      options: [
        "Employee health insurance benefits",
        "Commercial real estate leases and office facility overhead (SG&A)",
        "Core customer support ticketing systems",
        "Company branding and trademark registrations"
      ],
      correctIdx: 1,
      explanation: "Real estate and facilities overhead is universally the second largest non-payroll operating expense in corporate budgets, making it the prime target for consolidation."
    },
    reflectionPrompt: "Draft an email hook to a VP of Finance at a mid-market tech firm that references their SG&A overhead reduction without sounding like a generic sales pitch."
  },
  {
    id: "1.3",
    semNum: 1,
    semTitle: "Commercial Literacy & SaaS Unit Economics",
    title: "Calculating Cost of Inaction (COI) & The 1-Page CFO Brief",
    duration: "12 min study",
    framework: "Financial Modeling & Business Case Architecture",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Cost of Inaction (COI): The True Enemy of Closing Deals</p>
        <p>In sales, your biggest competitor is never the other vendor. It is the status quo. Prospects decide to do nothing because they believe doing nothing costs \$0. Your job as an enterprise AE is to prove mathematically that <strong>doing nothing is bleeding hundreds of thousands of dollars every quarter.</strong></p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">The COI Equation for Workplace & Real Estate</h5>
          <div class="p-3 bg-surface-900 rounded font-mono text-xs text-slate-200 space-y-1">
            <div>COI = [Unutilized Leased RSF × Cost/RSF] + [Admin Manual Move Hours × Fully Burdened Rate] + [Friction Attrition Risk]</div>
          </div>
          <div class="mt-3 text-xs text-slate-400 space-y-1">
            <p>• <strong>Unutilized Leased RSF:</strong> If they lease 50,000 sq ft, but peak hybrid attendance only uses 32,000 sq ft, 18,000 sq ft is pure financial waste.</p>
            <p>• At \$50/sq ft/yr: 18,000 × \$50 = <strong>\$900,000 annual lease hemorrhage</strong>.</p>
            <p>• That is <strong>\$75,000 wasted every 30 days</strong> they delay signing a contract.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <h5 class="text-xs font-mono font-bold text-emerald-300 uppercase mb-1">The 1-Page CFO Executive Brief Formula</h5>
          <p class="text-xs text-slate-400 mb-3">Never send a CFO a 40-page slide deck. Send a 1-page financial memo with three sections:</p>
          <div class="space-y-2 text-xs">
            <div class="p-2 rounded bg-surface-950 border border-slate-800"><strong class="text-white">1. Current Economic Bleed:</strong> Current lease commitment vs. audited utilization gap ($900k unutilized capacity).</div>
            <div class="p-2 rounded bg-surface-950 border border-slate-800"><strong class="text-white">2. Proposed Intervention & Capital Outlay:</strong> Maptician deployment ($36,000 annual ACV).</div>
            <div class="p-2 rounded bg-surface-950 border border-slate-800"><strong class="text-white">3. Net Economic Yield & Payback:</strong> $450k net annualized savings, 12.5x ROI multiple, capital payback within 29 days of lease restructuring.</div>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "If a company leases 40,000 RSF at $45/sqft and maintains 35% unutilized space on peak hybrid days, what is their annual Cost of Inaction (COI) in wasted lease spend?",
      options: [
        "$126,000 / year",
        "$630,000 / year",
        "$1,800,000 / year",
        "$45,000 / year"
      ],
      correctIdx: 1,
      explanation: "40,000 sq ft × $45/sq ft = $1,800,000 annual lease. 35% unutilized = $1,800,000 × 0.35 = $630,000 in wasted annual lease spend."
    },
    reflectionPrompt: "Draft the 3 bullet points you would include in a 1-page memo to an executive sponsor explaining why delaying a software decision past Q3 costs them $52,000/month."
  },

  // SEMESTER 2
  {
    id: "2.1",
    semNum: 2,
    semTitle: "Precision Discovery & Root-Cause Gap Mapping",
    title: "The 5 Dimensions of the Current State (Beyond Surface Pains)",
    duration: "11 min study",
    framework: "Keenan's GAP Selling",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Why Surface Discovery Kills Deals</p>
        <p>In <em>GAP Selling</em>, Keenan explains that deals die because salespeople mistake a <strong>symptom</strong> for a <strong>problem</strong>. When a prospect says: <em>"We need a better floorplan tool,"</em> amateur reps say: <em>"Great! We do that, let me show you!"</em></p>
        <p>Top enterprise AEs understand that a tool is never the goal. The goal is closing the GAP between their messy Current State and their desired Future State.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 my-3">
          <h5 class="text-xs font-mono font-bold text-brand-400 uppercase mb-2">The 5 Dimensions of Current State</h5>
          <div class="space-y-3 text-xs">
            <div class="border-l-2 border-brand-500 pl-3">
              <strong class="text-white block">1. The Physical / Literal Environment:</strong>
              <span class="text-slate-400">What tools, headcounts, square footage, badge systems, and floor plans do they literally have today? (e.g., 3 floors in Chicago, 450 desks, Excel spreadsheets, Outlook calendars).</span>
            </div>
            <div class="border-l-2 border-indigo-500 pl-3">
              <strong class="text-white block">2. The Technical Problems:</strong>
              <span class="text-slate-400">What is failing in that environment? (e.g., Employees fight over desks on Wednesdays, two teams book the same conference room, floor plans are 6 months out of date).</span>
            </div>
            <div class="border-l-2 border-amber-500 pl-3">
              <strong class="text-white block">3. The Business Impact:</strong>
              <span class="text-slate-400">What does that problem cost the business? (e.g., Facilities team spends 15 hours a week manually resolving seating drama; VP of HR receives executive complaints; company pays for an extra unneeded floor).</span>
            </div>
            <div class="border-l-2 border-rose-500 pl-3">
              <strong class="text-white block">4. The Root Cause:</strong>
              <span class="text-slate-400">Why does this problem exist? (e.g., Legacy IWMS system requires an expensive CAD specialist to update a single desk move; disconnected systems between HR payroll and Outlook).</span>
            </div>
            <div class="border-l-2 border-emerald-500 pl-3">
              <strong class="text-white block">5. The Emotional Toll:</strong>
              <span class="text-slate-400">How does this affect the buyer personally? (e.g., Facilities Manager is burned out, looks incompetent to the COO, dreads coming to work on Monday mornings).</span>
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "According to Keenan's GAP Selling, which dimension of the Current State creates the actual urgency for an executive to spend money?",
      options: [
        "The Physical environment (tools and square footage)",
        "The Business Impact (the quantifiable dollar cost and risk resulting from the problem)",
        "The Software Feature list provided by the vendor",
        "The color scheme of the user interface"
      ],
      correctIdx: 1,
      explanation: "Without quantifying the Business Impact (dollars, wasted time, lost revenue, executive risk), a problem remains a minor nuisance that can be ignored."
    },
    reflectionPrompt: "Take a common objection you hear at Maptician ('We already manage seating in Excel'). Map out the 5 dimensions of their Current State to find the hidden business impact."
  },
  {
    id: "2.2",
    semNum: 2,
    semTitle: "Precision Discovery & Root-Cause Gap Mapping",
    title: "The Rule of 3 Whys: Exposing the Root Cause of Operational Bleed",
    duration: "10 min study",
    framework: "Diagnostic Questioning & Root-Cause Analysis",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">How to Peel the Operational Onion</p>
        <p>Prospects rarely share the root cause on the first question because they have adapted to their own dysfunction. To reveal the underlying business bleed, top AEs use the <strong>Rule of 3 Whys</strong> (or diagnostic laddering).</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-emerald-400 uppercase mb-3">Live Transcript Demonstration: The 3 Whys in Action</h5>
          
          <div class="space-y-3 font-mono text-xs">
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-brand-400 font-bold">Rep (Why 1):</span> "Sarah, you mentioned hybrid attendance is messy. When your teams scramble for desks on Wednesdays, what happens operationally?"<br>
              <span class="text-slate-300">Prospect:</span> "Well, people get frustrated because engineering sits in marketing's desks, and my inbox gets flooded with complaints."
            </div>

            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-brand-400 font-bold">Rep (Why 2):</span> "Understood. When those complaints come in, how are you and your facilities team having to resolve that today?"<br>
              <span class="text-slate-300">Prospect:</span> "I have to stop whatever I'm doing, open our old Visio floor plan, cross-reference it with our BambooHR active roster, and email department managers to figure out who is supposed to be in office."
            </div>

            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-brand-400 font-bold">Rep (Why 3):</span> "And what is the downstream impact of spending 8 hours a week playing referee on seating charts on your actual strategic real estate projects?"<br>
              <span class="text-slate-300">Prospect:</span> "It's a disaster. Our lease renewal is coming up in October, and the COO asked me for attendance analytics to see if we can terminate our 4th floor lease—and I have zero accurate data to give him."
            </div>
          </div>
        </div>

        <p class="text-xs text-slate-400">Notice what happened: You went from a trivial complaint (<em>"people are sitting at each other's desks"</em>) to a multi-million-dollar executive crisis (<em>"I have no data to support our upcoming lease termination"</em>).</p>
      </div>
    `,
    quiz: {
      question: "What is the primary objective of the 'Rule of 3 Whys' in enterprise discovery?",
      options: [
        "To annoy the prospect until they agree to a software demonstration.",
        "To ladder down from surface symptoms to the root cause and executive financial impact.",
        "To memorize company headcount figures.",
        "To verify their credit rating and payment history."
      ],
      correctIdx: 1,
      explanation: "The Rule of 3 Whys penetrates defensive, surface-level answers to uncover the underlying executive crisis that carries real budget authority."
    },
    reflectionPrompt: "Write out 3 sequential laddering questions you will ask on your next call when a prospect says 'we use Outlook calendars for our desks'."
  },
  {
    id: "2.3",
    semNum: 2,
    semTitle: "Precision Discovery & Root-Cause Gap Mapping",
    title: "Reframing Feature Requests into Quantified Business Bleed",
    duration: "10 min study",
    framework: "Commercial Reframing & Value Creation",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Feature-Trap: How Amateur Reps Lose Control</p>
        <p>Prospects are conditioned to treat software reps like drive-thru order takers: <em>"Do you have QR code desk check-in? Do you integrate with Slack? Can I color-code my desks?"</em></p>
        <p>If you simply answer <em>"Yes, yes, and yes,"</em> you have commoditized yourself. You are now competing on a feature checklist where a cheaper competitor can claim they do the exact same thing.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-brand-400 uppercase mb-2">The 'Acknowledge & Pivot' Reframing Formula</h5>
          <p class="text-xs text-slate-400 mb-3">When asked for a feature, use this 3-step pivot:</p>
          <ol class="list-decimal pl-5 text-xs text-slate-300 space-y-2">
            <li><strong>Validate & Confirm:</strong> <em>"Yes, we support native QR check-in and automated desk release..."</em></li>
            <li><strong>Probe the Context:</strong> <em>"...but usually when teams ask for that, it's because people are 'ghost booking' desks and not showing up. Is that what's happening on your floors?"</em></li>
            <li><strong>Quantify the Business Bleed:</strong> <em>"When ghost booking happens, what percentage of your desks sit empty while other employees think the office is full?"</em></li>
          </ol>
        </div>

        <div class="p-3 bg-surface-900 rounded-lg text-xs text-slate-300 border border-slate-800">
          <span class="text-emerald-400 font-bold block mb-1">The AE Law:</span>
          Never demonstrate a feature until the prospect has explained the economic cost of not having that feature.
        </div>
      </div>
    `,
    quiz: {
      question: "When a prospect asks 'Does Maptician have an integration with Microsoft Teams?', what is the elite AE response?",
      options: [
        "'Yes we do! Let me send you a screenshot of the integration right now.'",
        "'Yes, absolutely. Just curious, how are your teams currently using Teams for hybrid scheduling, and what breaks when they try to coordinate in-office days today?'",
        "'No, nobody really uses Teams anymore, you should switch to Slack.'",
        "'Only if you buy our Enterprise Tier package.'"
      ],
      correctIdx: 1,
      explanation: "Confirming the capability while immediately probing their current operational friction keeps you in diagnostic control and exposes the underlying problem."
    },
    reflectionPrompt: "Identify 2 features prospects constantly ask about at Maptician. Script an 'Acknowledge & Pivot' question for each."
  },

  // SEMESTER 3
  {
    id: "3.1",
    semNum: 3,
    semTitle: "Enterprise Deal Qualification & Opportunity Control",
    title: "The Champion Protocol: Coach vs. Champion & The 3 Acid Tests",
    duration: "12 min study",
    framework: "John McMahon's MEDDPICC",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Deadly Confusion: Coach vs. Champion</p>
        <p>In <em>The Qualified Sales Leader</em>, John McMahon notes that the single most common cause of forecast failure is reps mistaking a <strong>Coach</strong> for a <strong>Champion</strong>.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 rounded-xl bg-surface-950 border border-rose-900/40">
            <span class="text-xs font-mono font-bold text-rose-400 block mb-1">THE COACH (Information Only)</span>
            <ul class="text-xs text-slate-400 space-y-1">
              <li>• Likes you and is always friendly on calls.</li>
              <li>• Gives you internal gossip and company news.</li>
              <li>• Has <strong>NO</strong> organizational power or executive influence.</li>
              <li>• Will not risk their reputation for you.</li>
              <li>• Hides the Economic Buyer from you.</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-surface-950 border border-emerald-900/40">
            <span class="text-xs font-mono font-bold text-emerald-400 block mb-1">THE CHAMPION (Power & Skin in the Game)</span>
            <ul class="text-xs text-slate-400 space-y-1">
              <li>• Has direct access and credibility with the Economic Buyer.</li>
              <li>• Has personal skin in the game (their success is tied to solving this).</li>
              <li>• <strong>Sells for you when you are not in the room.</strong></li>
              <li>• Actively guides you through the Paper Process.</li>
              <li>• Passes the 3 Acid Tests.</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-brand-950/20 border border-brand-500/30">
          <h5 class="text-xs font-mono font-bold text-brand-300 uppercase mb-2">The 3 Acid Tests of a Champion</h5>
          <ol class="list-decimal pl-5 text-xs text-slate-300 space-y-2">
            <li><strong>Test 1: The Intel Test.</strong> Can they tell you who the exact decision makers are, what the budget threshold is, and what competitors are being looked at?</li>
            <li><strong>Test 2: The Access Test.</strong> Will they introduce you directly to the Economic Buyer (CFO / VP CRE)? <em>If they refuse, they are a Coach, not a Champion.</em></li>
            <li><strong>Test 3: The Action Test.</strong> Will they do homework between calls (e.g., pulling floorplan square footage or getting InfoSec requirements)?</li>
          </ol>
        </div>
      </div>
    `,
    quiz: {
      question: "You have an internal advocate who loves your product demo and wants you to win, but refuses to introduce you to their CFO. What are they under MEDDPICC?",
      options: [
        "A verified Champion who is protecting your time.",
        "A Coach. Without executive access or power, they cannot close the deal on your behalf.",
        "The Economic Buyer in disguise.",
        "A Technical Gatekeeper."
      ],
      correctIdx: 1,
      explanation: "A contact who will not or cannot grant access to the Economic Buyer lacks power and is merely a Coach. Single-threading with a Coach is a primary cause of deal death."
    },
    reflectionPrompt: "Think about your best active prospect. Are they a Coach or a Champion? What specific test will you run this week to verify them?"
  },
  {
    id: "3.2",
    semNum: 3,
    semTitle: "Enterprise Deal Qualification & Opportunity Control",
    title: "Finding & Aligning with the Economic Buyer (EB)",
    duration: "11 min study",
    framework: "John McMahon's MEDDPICC",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Who Is the True Economic Buyer?</p>
        <p>John McMahon defines the Economic Buyer (EB) with mathematical precision: <strong>The person with discretionary access to funds who has the power to say YES when everyone else says NO, and NO when everyone else says YES.</strong></p>
        <p>A Director of Workplace may have a \$10,000 credit card limit, but for a \$35,000 enterprise deployment across 4 regional offices, the true EB is almost always the <strong>VP of Real Estate, Chief Operating Officer (COO), or Chief Financial Officer (CFO).</strong></p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">How to Secure the EB Meeting Without Offending Your Champion</h5>
          <p class="text-xs text-slate-400 mb-3">Rookies bypass their champion and get blocked. Elite AEs partner with the champion to elevate both of them:</p>
          <div class="p-3 bg-surface-900 rounded font-mono text-xs text-slate-300 leading-relaxed">
            "Sarah, you and I both know Maptician will solve your seating chaos, but Dave (CFO) is going to evaluate this purely through capital allocation and real estate liability. In our experience, CFOs kill projects at the 11th hour if they haven't seen the financial model early. If we build a 1-page business case showing $300k lease savings, would you want to co-present that with me to Dave so you look like a rockstar to executive leadership?"
          </div>
        </div>

        <div class="p-3 bg-surface-900 rounded-lg text-xs text-slate-400 border border-slate-800">
          <strong>The Golden Rule:</strong> If you have not met the Economic Buyer face-to-face and verified their personal metrics, your deal probability is mathematically under 20%.
        </div>
      </div>
    `,
    quiz: {
      question: "Which of the following attributes uniquely defines an Economic Buyer under MEDDPICC?",
      options: [
        "They are the most vocal user of the software during the demo.",
        "They have discretionary spend authority and the power to reallocate budget from other departments.",
        "They are the primary contact listed on LinkedIn Sales Navigator.",
        "They manage the InfoSec questionnaire process."
      ],
      correctIdx: 1,
      explanation: "The Economic Buyer controls discretionary funds and can authorize or veto expenditures regardless of what departmental managers recommend."
    },
    reflectionPrompt: "Script a 30-second talk-track to convince an operational Facilities Manager to bring their CFO or VP of Real Estate onto your next commercial alignment call."
  },
  {
    id: "3.3",
    semNum: 3,
    semTitle: "Enterprise Deal Qualification & Opportunity Control",
    title: "Trap-Setting Decision Criteria & Controlling the Paper Process",
    duration: "12 min study",
    framework: "John McMahon's MEDDPICC",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Decision Criteria vs. Paper Process</p>
        <p>Winning enterprise deals requires mastering two operational pillars: setting the evaluation rules (Decision Criteria) and navigating the bureaucratic labyrinth of corporate purchasing (Paper Process).</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 my-3">
          <h5 class="text-xs font-mono font-bold text-brand-400 uppercase mb-2">1. Trap-Setting Decision Criteria</h5>
          <p class="text-xs text-slate-400 mb-2">If you didn't help write the customer's evaluation criteria, your competitor did. You must plant "landmines" based on your architectural advantages:</p>
          <ul class="text-xs text-slate-300 space-y-1.5">
            <li>• <strong>Example Trap:</strong> If Maptician updates complex CAD/SVG floor plans in minutes without requiring external professional services, ask: <em>"When you need to reconfigure 50 desks next quarter, does your criteria require your own team to edit floor plans in-house, or are you comfortable paying vendor professional service fees every time?"</em></li>
            <li>• Now, any competitor that charges for floorplan updates fails their written criteria.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 my-3">
          <h5 class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">2. The Paper Process: Why Deals Slip Past Quarter-End</h5>
          <p class="text-xs text-slate-400 mb-2">Reps often say: <em>"They told me they picked us! Contract will sign Friday."</em> Then Friday arrives, and InfoSec demands a 120-question SOC2 audit, legal takes 3 weeks to review indemnity clauses, and procurement demands vendor onboarding.</p>
          <p class="text-xs text-slate-300 font-semibold">The AE Rule: Map the Paper Process on Day 15, not Day 85. Ask:</p>
          <div class="p-3 bg-surface-900 rounded font-mono text-xs text-slate-300">
            "Walk me through what happens after you choose us: Who reviews the InfoSec questionnaire? Is there a separate privacy review? Who on your legal team handles SaaS redlines? What is the signature threshold for the CFO?"
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "What is the primary difference between the Decision Process and the Paper Process in enterprise software sales?",
      options: [
        "Decision Process is how they choose the vendor; Paper Process is the legal, InfoSec, and procurement steps required to get a contract signed.",
        "Decision Process is done by procurement; Paper Process is done by the sales rep.",
        "They are identical terms for how contracts are signed.",
        "Paper Process refers exclusively to physical paper signatures via FedEx."
      ],
      correctIdx: 0,
      explanation: "Decision Process is selecting the winning vendor; Paper Process is the administrative, legal, and InfoSec gauntlet required to legally execute the order."
    },
    reflectionPrompt: "List the 4 key gatekeepers involved in the Paper Process at enterprise accounts (e.g., Legal, InfoSec, Procurement, Finance) and identify what documentation each requires."
  },

  // SEMESTER 4
  {
    id: "4.1",
    semNum: 4,
    semTitle: "Demonstrating to Value & Narrative Choreography",
    title: "The Inverted Pyramid: 'Do the Last Thing First'",
    duration: "10 min study",
    framework: "Peter Cohan's Great Demo!",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Death of the 'Harbor Tour' Demo</p>
        <p>In <em>Great Demo!</em>, Peter Cohan describes the fatal mistake made by 90% of SaaS sales reps: <strong>The Harbor Tour.</strong> Reps start by logging into the software, touring the navigation bar, clicking through setup menus, and explaining features chronologically.</p>
        <p>Executives lose attention within 4 minutes. They don't care how the sausage is made; they want to see the meal.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">The Inverted Pyramid Method: Do the Last Thing First</h5>
          <p class="text-xs text-slate-400 mb-3">Structure your software demonstration like a breaking news story—the most critical outcome is delivered in the first 3 minutes:</p>
          <div class="space-y-2 text-xs">
            <div class="p-3 rounded bg-surface-900 border border-emerald-500/30">
              <strong class="text-emerald-400 block mb-1">Minute 1–3: The Payoff Screen (The Last Thing First)</strong>
              Open directly to the Executive Real Estate Utilization Dashboard. <em>"Dave, Sarah—this is what your COO sees every Monday morning: an automated breakdown proving that Floor 4 is running at 19% capacity on peak days, giving you the exact data needed to terminate that $400k lease."</em>
            </div>
            <div class="p-3 rounded bg-surface-900 border border-slate-800">
              <strong class="text-slate-300 block mb-1">Minute 4–15: The Critical Few Workflows</strong>
              Show ONLY the 2 or 3 workflows that generate that executive data (e.g., how employees reserve a neighborhood desk, and how facilities reconfigures space).
            </div>
            <div class="p-3 rounded bg-surface-900 border border-slate-800">
              <strong class="text-slate-300 block mb-1">Minute 16–30: Questions & Commercial Alignment</strong>
              Let the buyer drive the remaining conversation based on what they care about.
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "According to Peter Cohan's Great Demo!, what should a software AE display on screen in the first 3 minutes of a demonstration?",
      options: [
        "The corporate logo and venture capital investors.",
        "The login page, system settings, and administrative user management screen.",
        "The highest-value payoff screen or executive dashboard that directly solves the economic pain uncovered in discovery.",
        "A live coding terminal showing the API endpoints."
      ],
      correctIdx: 2,
      explanation: "Doing the Last Thing First commands executive attention by proving the business payoff immediately before walking through the operational mechanics."
    },
    reflectionPrompt: "What is the single highest-value screen in Maptician for a VP of Real Estate? Script your first 60 seconds showing that screen."
  },
  {
    id: "4.2",
    semNum: 4,
    semTitle: "Demonstrating to Value & Narrative Choreography",
    title: "The Fewest Clicks to Value & Eliminating Harbor Tours",
    duration: "9 min study",
    framework: "Peter Cohan's Great Demo!",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Every Click Is a Liability</p>
        <p>In product demonstrations, every button you click and every dropdown you open is a surface area for customer confusion and feature critique. If you spend 45 seconds configuring a setting, the customer subconsciously thinks: <em>"This tool looks complicated and my team won't adopt it."</em></p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-brand-400 uppercase mb-2">The 'Fewest Clicks to Value' Protocol</h5>
          <ul class="text-xs text-slate-400 space-y-2">
            <li>• <strong class="text-white">Pre-populate all demo data:</strong> Never type in sample names, passwords, or company details live during a sales demo. Have the workspace fully baked.</li>
            <li>• <strong class="text-white">Banish setup and admin screens:</strong> Never show settings, SSO configuration, or user permission toggles unless InfoSec specifically asks: <em>"How do we configure role-based permissions?"</em></li>
            <li>• <strong class="text-white">Illustrations vs. Demos:</strong> An <em>Illustration</em> is a 30-second answer to a specific question; a <em>Demo</em> is a guided value workflow. Don't turn a quick question into a 15-minute tangent.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: "What is the primary danger of clicking through settings menus and user configuration options during an initial demo?",
      options: [
        "The software might crash.",
        "It signals to the buyer that the software is complex, cumbersome, and carries high adoption risk.",
        "It violates software copyright laws.",
        "It prevents the rep from sending an email follow-up."
      ],
      correctIdx: 1,
      explanation: "Showing administrative plumbing creates perceived complexity, triggering buyer fear of failure and user adoption resistance (FOMU)."
    },
    reflectionPrompt: "Audit your current software demo. Identify 3 setup screens or administrative clicks you can completely eliminate from your walkthrough."
  },
  {
    id: "4.3",
    semNum: 4,
    semTitle: "Demonstrating to Value & Narrative Choreography",
    title: "Delta Storytelling: Pain → Architecture → Quantified Delta",
    duration: "10 min study",
    framework: "Narrative Choreography & Value Anchoring",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Anatomy of Delta Storytelling</p>
        <p>Elite demos are not technical walkthroughs; they are contrast stories. You anchor the software feature directly to the prospect's messy Current State and demonstrate the <strong>Delta (the quantified difference).</strong></p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">The 3-Step Delta Narrative Arc</h5>
          <div class="space-y-3 font-mono text-xs">
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-rose-400 font-bold">1. Re-anchor Discovery Pain:</span><br>
              "Sarah, on Tuesday you told me that when your finance team needed to move 30 people to Floor 2, your facilities manager spent 6 hours manually updating Visio and emailing floorplans back and forth."
            </div>
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-brand-400 font-bold">2. Show the Architectural Fix:</span><br>
              "Watch this. With Maptician's dynamic scenario planner, you simply highlight those 30 desks, drag them to the west wing, and the system automatically updates the roster and sends desk notifications to the team."
            </div>
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800">
              <span class="text-emerald-400 font-bold">3. Land the Quantified Business Delta:</span><br>
              "That 6-hour manual headache just became a 45-second workflow, saving your facilities team 20 hours a month."
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "What is the purpose of re-anchoring discovery pain immediately before demonstrating a software capability?",
      options: [
        "To remind the buyer that they have a problem and contextualize the value of what they are about to see.",
        "To make the demo last longer.",
        "To satisfy internal CRM logging requirements.",
        "To give the AE time to load the demo environment."
      ],
      correctIdx: 0,
      explanation: "Without anchoring to specific previously admitted pain, a feature demonstration is just button-clicking without economic context."
    },
    reflectionPrompt: "Script a 60-second Delta Story for Maptician: 1. Discovery Pain → 2. Architectural Demonstration → 3. Quantified Business Delta."
  },

  // SEMESTER 5
  {
    id: "5.1",
    semNum: 5,
    semTitle: "Multi-Threading, Buying Committees & Mutual Action Plans",
    title: "Mapping the 4 Enterprise Personas (EB, Champion, User, Gatekeeper)",
    duration: "11 min study",
    framework: "Consensus Selling & Stakeholder Alignment",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Modern Buying Committee</p>
        <p>Gartner research shows that the average enterprise B2B purchase involves <strong>6 to 10 decision makers</strong>, each equipped with diverse, often competing priorities. If you only talk to one person, your deal is a statistical coin flip.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono font-bold text-brand-400 block mb-1">1. The Economic Buyer (CFO / COO)</span>
            <p class="text-xs text-slate-400"><strong>Priority:</strong> ROI, CapEx/OpEx impact, risk mitigation, lease liability reduction.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono font-bold text-emerald-400 block mb-1">2. The Champion (VP of Real Estate / Workplace)</span>
            <p class="text-xs text-slate-400"><strong>Priority:</strong> Solving strategic chaos, delivering boardroom metrics, executing RTO policy.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono font-bold text-amber-400 block mb-1">3. The User Buyer (Facilities / Office Ops)</span>
            <p class="text-xs text-slate-400"><strong>Priority:</strong> Daily ease of use, eliminating manual move spreadsheets, quick floorplan changes.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-slate-800">
            <span class="text-xs font-mono font-bold text-rose-400 block mb-1">4. The Technical Gatekeeper (IT & InfoSec)</span>
            <p class="text-xs text-slate-400"><strong>Priority:</strong> SSO integration, SCIM provisioning, SOC2 compliance, zero maintenance burden.</p>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "Why do single-threaded deals (selling only to a single point of contact) routinely stall or ghost in enterprise sales?",
      options: [
        "Because single contacts lack the organizational consensus and legal/procurement authority to authorize multi-department purchases.",
        "Because CRM software cannot support single contacts.",
        "Because single contacts change their phone numbers often.",
        "Because corporate policy requires at least 15 attendees on every call."
      ],
      correctIdx: 0,
      explanation: "A single contact cannot overcome internal vetoes from IT, Legal, or Finance. Consensus selling requires multi-threading across all 4 key personas."
    },
    reflectionPrompt: "List the 4 personas for a 1,000-person target account in your territory and identify their distinct motivations."
  },
  {
    id: "5.2",
    semNum: 5,
    semTitle: "Multi-Threading, Buying Committees & Mutual Action Plans",
    title: "Triangulating Value: Pitching Facilities vs. HR vs. IT vs. Finance",
    duration: "10 min study",
    framework: "Persona Triangulation & Tailored Messaging",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Speaking in Four Dialects</p>
        <p>A rookie AE pitches the exact same narrative to every stakeholder. An enterprise AE changes dialects depending on who is sitting across the table.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 space-y-3 text-xs">
          <div class="p-3 rounded bg-surface-900 border-l-2 border-brand-500">
            <strong class="text-brand-400 block mb-0.5">When Talking to Facilities & Workplace:</strong>
            <span class="text-slate-300">Focus on eliminating manual Visio edits, dynamic moves, self-service seating, and automated desk sanitation.</span>
          </div>
          <div class="p-3 rounded bg-surface-900 border-l-2 border-emerald-500">
            <strong class="text-emerald-400 block mb-0.5">When Talking to Corporate Real Estate & CFO:</strong>
            <span class="text-slate-300">Focus on square foot utilization analytics, lease restructuring, CapEx avoidance, and 10x ROI models.</span>
          </div>
          <div class="p-3 rounded bg-surface-900 border-l-2 border-amber-500">
            <strong class="text-amber-400 block mb-0.5">When Talking to HR & People Leadership:</strong>
            <span class="text-slate-300">Focus on employee retention, seamless collaborative neighborhood seating, and eliminating RTO return-to-office friction.</span>
          </div>
          <div class="p-3 rounded bg-surface-900 border-l-2 border-indigo-500">
            <strong class="text-indigo-400 block mb-0.5">When Talking to IT & Security:</strong>
            <span class="text-slate-300">Focus on Okta/Azure AD SSO, automated SCIM provisioning, SOC2 Type II compliance, and zero on-prem server footprint.</span>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "When presenting to a Chief Information Officer (CIO) or VP of IT, which topic should you prioritize?",
      options: [
        "The decorative aesthetic of interactive floor plan icons.",
        "Single Sign-On (SSO), automated employee SCIM provisioning, and SOC2 InfoSec compliance.",
        "Discounts on physical conference room chairs.",
        "The history of your marketing department."
      ],
      correctIdx: 1,
      explanation: "IT leaders care primarily about security, identity management, compliance, and minimizing ongoing IT support overhead."
    },
    reflectionPrompt: "Draft a 3-sentence outreach email to a Chief Information Security Officer (CISO) asking for their InfoSec review timeline on an ongoing Maptician evaluation."
  },
  {
    id: "5.3",
    semNum: 5,
    semTitle: "Multi-Threading, Buying Committees & Mutual Action Plans",
    title: "The Mutual Action Plan (MAP): Enforcing the Reverse Timeline",
    duration: "12 min study",
    framework: "Commercial Governance & Close Date Integrity",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">Why 'Hoping' to Close Is Not a Strategy</p>
        <p>Rookie AEs send proposals and pray the customer signs by the end of the month. Professional enterprise AEs co-author a <strong>Mutual Action Plan (MAP)</strong> that establishes a shared timeline working backward from a critical business catalyst.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-amber-400 uppercase mb-2">The Reverse Timeline Engineering Protocol</h5>
          <ol class="list-decimal pl-5 text-xs text-slate-300 space-y-2">
            <li><strong>Anchor to the Business Catalyst:</strong> <em>"Dave, your Chicago office lease expires Dec 15th, meaning you must finalize space reconfiguration by Nov 15th to avoid lease renewal penalties."</em></li>
            <li><strong>Work Backward:</strong>
              <div class="p-2.5 bg-surface-900 rounded font-mono text-[11px] text-slate-400 my-1">
                • Target Go-Live: Nov 15<br>
                • Employee Training & Space Setup: Nov 01 (takes 2 weeks)<br>
                • Contract Execution: Oct 15 (gives IT 2 weeks to provision SSO)<br>
                • Legal Redlines & Procurement Review: Oct 01 (takes 2 weeks)<br>
                • CFO Business Case Presentation: Sep 20
              </div>
            </li>
            <li><strong>Hold the Champion Accountable:</strong> When a prospect asks to reschedule a call, you point to the MAP: <em>"We can move this to next week, but if we miss the Oct 1st legal redline milestone, we risk missing your Nov 15th lease deadline."</em></li>
          </ol>
        </div>
      </div>
    `,
    quiz: {
      question: "What is the primary anchor that gives a Mutual Action Plan (MAP) actual enforcement power?",
      options: [
        "The sales rep's quarterly quota deadline.",
        "A compelling customer business catalyst or deadline (e.g., lease renewal, RTO policy date, fiscal year-end).",
        "A 10% discount expiring at midnight.",
        "A threat to cancel the customer's account."
      ],
      correctIdx: 1,
      explanation: "A MAP only has power when tied to the prospect's critical business deadline, making deal slippage an existential risk to their company."
    },
    reflectionPrompt: "Take an active deal and create a 6-milestone reverse timeline anchored to an executive event in Q4."
  },

  // SEMESTER 6
  {
    id: "6.1",
    semNum: 6,
    semTitle: "Overcoming Indecision, Negotiation & The Endgame",
    title: "FOMU vs. FOMO: The Behavioral Economics of Customer Indecision",
    duration: "11 min study",
    framework: "Matt Dixon & Ted McKenna's The JOLT Effect",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Shocking Truth About Stalled Deals</p>
        <p>In <em>The JOLT Effect</em>, Matt Dixon analyzed over <strong>2.5 million recorded enterprise sales calls</strong>. The data proved that <strong>40% to 60% of all qualified pipeline ends in 'No Decision.'</strong></p>
        <p>Traditional sales methodology teaches reps that when deals stall, you must create <strong>FOMO (Fear Of Missing Out)</strong>—turn up the pressure, emphasize cost of inaction, and offer expiring discounts.</p>
        
        <div class="p-4 rounded-xl bg-surface-950 border border-rose-900/40 my-3">
          <h5 class="text-xs font-mono font-bold text-rose-400 uppercase mb-1">The Data-Backed Counter-Intuition</h5>
          <p class="text-xs text-slate-300 leading-relaxed">
            The research proved that <strong>increasing FOMO on an indecisive customer increases the probability of 'No Decision' by 84%.</strong><br>
            Buyers aren't afraid of missing out; they suffer from <strong>FOMU (Fear Of Messing Up).</strong>
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800 text-xs text-slate-400 space-y-2">
          <p>• <strong>Omission Bias:</strong> In corporate America, failing to buy a software tool is an error of omission (nobody gets fired for doing nothing).</p>
          <p>• <strong>Commission Bias:</strong> Sponsoring a \$40k software purchase that fails or causes employee revolt is an error of commission (you can get fired or demoted).</p>
          <p class="text-emerald-400 font-semibold">• Therefore, closing deals isn't about selling value; it's about <strong>de-risking the buyer's career.</strong></p>
        </div>
      </div>
    `,
    quiz: {
      question: "According to The JOLT Effect, why does pressuring an indecisive enterprise buyer with FOMO (Fear of Missing Out) usually backfire?",
      options: [
        "Because enterprise buyers prefer email over phone calls.",
        "Because indecision stems from FOMU (Fear of Messing Up) and career risk; increasing pressure amplifies their anxiety, causing them to freeze.",
        "Because buyers don't understand software pricing.",
        "Because procurement departments prohibit FOMO tactics."
      ],
      correctIdx: 1,
      explanation: "Buyers freeze because they fear looking foolish or damaging their career if the project flops. Pumping up pressure increases their anxiety."
    },
    reflectionPrompt: "Recall a deal that ghosted or stalled into 'no decision.' What were the underlying career risks or FOMU anxieties your champion had that went unaddressed?"
  },
  {
    id: "6.2",
    semNum: 6,
    semTitle: "Overcoming Indecision, Negotiation & The Endgame",
    title: "The JOLT Protocol: Diagnosing & Neutralizing Analysis Paralysis",
    duration: "12 min study",
    framework: "Matt Dixon & Ted McKenna's The JOLT Effect",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The 4 Behaviors of the JOLT Playbook</p>
        <p>Top 1% AEs execute the <strong>JOLT</strong> behaviors to guide indecisive buyers across the finish line:</p>

        <div class="space-y-3 my-3 text-xs">
          <div class="p-3.5 rounded-xl bg-surface-950 border border-brand-500/40">
            <strong class="text-brand-300 block mb-1">J – Judge the Indecision:</strong>
            <span class="text-slate-400">Diagnose the root: Is it <em>Information Overload</em> (asking for more demos), <em>Valuation Doubt</em> (uncertainty about ROI), or <em>Execution Risk</em> (fear of user adoption)?</span>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-indigo-500/40">
            <strong class="text-indigo-300 block mb-1">O – Offer a Recommendation:</strong>
            <span class="text-slate-400">Stop offering open menus. Act like a trusted physician: <em>"Based on 50 hybrid rollouts identical to your firm, here is the exact tier and rollout schedule you should take."</em></span>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-amber-500/40">
            <strong class="text-amber-300 block mb-1">L – Limit the Exploration:</strong>
            <span class="text-slate-400">Shut down endless rabbit holes: <em>"We've verified 95% of your requirements; let's test that obscure edge case in onboarding rather than delaying your lease go-live."</em></span>
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-emerald-500/40">
            <strong class="text-emerald-300 block mb-1">T – Take Risk Off the Table:</strong>
            <span class="text-slate-400">Provide psychological safety nets: phased rollouts, dedicated customer success architects, and milestone sign-offs.</span>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "What is the recommended JOLT behavior when a prospect suffers from choice overload and requests 5 pricing tier permutations?",
      options: [
        "Send all 5 proposals immediately and tell them to pick one.",
        "Offer a Recommendation: Stop presenting open-ended menus and prescribe the exact tier optimal for their specific situation based on proven peer benchmarks.",
        "Refuse to send any pricing.",
        "Double the price to create artificial prestige."
      ],
      correctIdx: 1,
      explanation: "Indecisive buyers crave proactive guidance. Offering a definitive recommendation eliminates choice paralysis and builds trusted-advisor status."
    },
    reflectionPrompt: "Draft your go-to 'Limit the Exploration' script for a champion who keeps requesting additional edge-case demos."
  },
  {
    id: "6.3",
    semNum: 6,
    semTitle: "Overcoming Indecision, Negotiation & The Endgame",
    title: "Concession Trading & Closing Without Discounting",
    duration: "11 min study",
    framework: "Commercial Negotiation & Pricing Power",
    contentHtml: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="text-base font-semibold text-white">The Golden Rule of Commercial Negotiation</p>
        <p>In enterprise sales, you will inevitably face professional procurement agents whose sole job is to extract discounts. The cardinal sin of junior AEs is giving immediate concessions: <em>"Okay, I can give you 10% off if you sign by Friday."</em></p>
        <p>When you concede without a trade, you validate that your initial price was an arbitrary markup, and procurement will immediately demand more.</p>

        <div class="p-4 rounded-xl bg-surface-950 border border-slate-800">
          <h5 class="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">The 'If / Then' Concession Trading Matrix</h5>
          <p class="text-xs text-slate-400 mb-3">Never give a concession without getting an equivalent trade in return:</p>
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800 flex items-center justify-between">
              <span class="text-slate-300">If they ask for an <strong>8% Price Reduction</strong></span>
              <span class="text-emerald-400 font-mono">→ Then trade for <strong>Annual Upfront Payment (vs. Quarterly)</strong></span>
            </div>
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800 flex items-center justify-between">
              <span class="text-slate-300">If they ask for a <strong>15% Discount</strong></span>
              <span class="text-emerald-400 font-mono">→ Then trade for a <strong>2-Year or 3-Year Binding Commitment</strong></span>
            </div>
            <div class="p-2.5 rounded bg-surface-900 border border-slate-800 flex items-center justify-between">
              <span class="text-slate-300">If they ask for <strong>Free Professional Setup</strong></span>
              <span class="text-emerald-400 font-mono">→ Then trade for a <strong>Named Case Study & Press Release</strong></span>
            </div>
          </div>
        </div>

        <div class="p-3 bg-surface-900 rounded-lg text-xs text-slate-300 border border-slate-800 font-mono">
          "Dave, our pricing is anchored to the 12x lease savings model we proved with your team. We can discuss adjusting commercial terms, but in exchange we would need to shift from quarterly to annual upfront billing, or evaluate a multi-year term. Which of those levers would you prefer to explore?"
        </div>
      </div>
    `,
    quiz: {
      question: "Why should an enterprise AE never grant a price discount without demanding a commercial concession in return?",
      options: [
        "Because it signals to procurement that your initial pricing was arbitrary, destroying your negotiation leverage and inviting further demands.",
        "Because CRM systems automatically block discounts.",
        "Because procurement agents are legally required to accept all trades.",
        "Because it causes customer success onboarding delays."
      ],
      correctIdx: 0,
      explanation: "Unreciprocated discounts destroy price integrity and signal weakness. Always trade price for payment terms, contract duration, or scope."
    },
    reflectionPrompt: "Script your response to a procurement agent who says 'We have approved Maptician, but our policy requires a mandatory 15% discount across all new software vendors.'"
  }
];

// Active State
let activeLessonId = "1.1";
let masteredLessons = [];

function initClassroom() {
  // Load saved progress
  try {
    const saved = localStorage.getItem('salesMba_mastered_lessons');
    if (saved) {
      masteredLessons = JSON.parse(saved);
    }
  } catch (e) {
    masteredLessons = [];
  }

  renderClassroomSyllabus();
  loadLesson(activeLessonId);
  updateMasteryProgress();
}

function updateMasteryProgress() {
  const total = classroomLessons.length;
  const count = masteredLessons.length;
  const pct = Math.round((count / total) * 100);

  const pctDisplay = document.getElementById('classroom-progress-pct');
  const fill = document.getElementById('classroom-progress-fill');
  const countDisplay = document.getElementById('classroom-completed-count');

  if (pctDisplay) pctDisplay.innerText = `${pct}%`;
  if (fill) fill.style.width = `${pct}%`;
  if (countDisplay) countDisplay.innerText = `${count} of ${total} Lessons Mastered`;
}

function renderClassroomSyllabus() {
  const container = document.getElementById('classroom-syllabus-tree');
  if (!container) return;

  // Group by semester
  let semesters = {};
  classroomLessons.forEach(l => {
    if (!semesters[l.semNum]) {
      semesters[l.semNum] = { title: l.semTitle, lessons: [] };
    }
    semesters[l.semNum].lessons.push(l);
  });

  let html = `
    <!-- UNABRIDGED MASTERCLASS TEXTBOOK DRAWER -->
    <div class="mb-5 p-3 rounded-lg bg-[#FAF9F5] border border-[rgba(20,20,19,0.1)]">
      <div class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C6613F] mb-2 flex items-center justify-between">
        <span class="flex items-center gap-1.5"><i data-lucide="book" class="w-3.5 h-3.5"></i> Masterclass Textbooks</span>
        <span class="text-[9px] bg-[#E3DACC] px-1.5 py-0.5 rounded text-[#141413] font-mono font-bold">5 VOLUMES</span>
      </div>
      <div class="space-y-1">
        <button onclick="loadTextbook('01_GAP_SELLING_MASTERCLASS.md', 'Volume 1: Keenan\\'s GAP Selling Masterclass')" class="w-full text-left p-2 rounded bg-[#F0EEE6] hover:bg-[#E3DACC] border border-[rgba(20,20,19,0.1)] text-xs text-[#141413] transition-all flex items-center justify-between font-sans">
          <span class="truncate font-medium">Vol 1: GAP Discovery</span>
          <span class="text-[10px] font-mono text-[#87867F]">Full Book</span>
        </button>
        <button onclick="loadTextbook('02_MEDDPICC_OPERATING_SYSTEM.md', 'Volume 2: John McMahon\\'s MEDDPICC Operating System')" class="w-full text-left p-2 rounded bg-[#F0EEE6] hover:bg-[#E3DACC] border border-[rgba(20,20,19,0.1)] text-xs text-[#141413] transition-all flex items-center justify-between font-sans">
          <span class="truncate font-medium">Vol 2: MEDDPICC Mastery</span>
          <span class="text-[10px] font-mono text-[#87867F]">Full Book</span>
        </button>
        <button onclick="loadTextbook('03_GREAT_DEMO_CHOREOGRAPHY.md', 'Volume 3: Peter Cohan\\'s Great Demo! Choreography')" class="w-full text-left p-2 rounded bg-[#F0EEE6] hover:bg-[#E3DACC] border border-[rgba(20,20,19,0.1)] text-xs text-[#141413] transition-all flex items-center justify-between font-sans">
          <span class="truncate font-medium">Vol 3: Great Demo! Architecture</span>
          <span class="text-[10px] font-mono text-[#87867F]">Full Book</span>
        </button>
        <button onclick="loadTextbook('04_THE_JOLT_EFFECT_CLOSING_MANUAL.md', 'Volume 4: The JOLT Effect Closing Manual')" class="w-full text-left p-2 rounded bg-[#F0EEE6] hover:bg-[#E3DACC] border border-[rgba(20,20,19,0.1)] text-xs text-[#141413] transition-all flex items-center justify-between font-sans">
          <span class="truncate font-medium">Vol 4: The JOLT Effect</span>
          <span class="text-[10px] font-mono text-[#87867F]">Full Book</span>
        </button>
        <button onclick="loadTextbook('05_COMMERCIAL_REAL_ESTATE_AND_SAAS_FINANCE.md', 'Volume 5: CRE Economics & SaaS Finance')" class="w-full text-left p-2 rounded bg-[#F0EEE6] hover:bg-[#E3DACC] border border-[rgba(20,20,19,0.1)] text-xs text-[#141413] transition-all flex items-center justify-between font-sans">
          <span class="truncate font-medium">Vol 5: CRE & SaaS Finance</span>
          <span class="text-[10px] font-mono text-[#87867F]">Full Book</span>
        </button>
      </div>
    </div>
    
    <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#87867F] mb-2 px-1">
      Modular Lessons (18 Modules)
    </div>
  `;

  Object.keys(semesters).forEach(semNum => {
    const sem = semesters[semNum];
    html += `
      <div class="mb-4">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#87867F] mb-1 px-2 flex items-center justify-between">
          <span>Sem 0${semNum}: ${sem.title.split('&')[0]}</span>
        </div>
        <div class="space-y-1">
          ${sem.lessons.map(l => {
            const isCompleted = masteredLessons.includes(l.id);
            const isActive = l.id === activeLessonId;
            return `
              <div onclick="loadLesson('${l.id}')" class="classroom-lesson-item p-2.5 rounded border border-[rgba(20,20,19,0.1)] bg-[#FAF9F5] flex items-center justify-between cursor-pointer transition-all ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                <div class="flex items-center gap-2.5 overflow-hidden">
                  <span class="lesson-check w-4 h-4 rounded-full border border-[rgba(20,20,19,0.2)] flex items-center justify-center shrink-0 text-[10px] ${isCompleted ? 'bg-[#15803D] border-[#15803D] text-white' : 'text-transparent'}">
                    ✓
                  </span>
                  <div class="truncate">
                    <span class="text-[10px] font-mono text-[#C6613F] mr-1 font-semibold">${l.id}</span>
                    <span class="lesson-title text-xs font-sans text-[#141413] truncate">${l.title}</span>
                  </div>
                </div>
                <span class="text-[9px] font-mono text-[#87867F] shrink-0 ml-2">${l.duration.split(' ')[0]}m</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

async function loadTextbook(filename, title) {
  const container = document.getElementById('active-lesson-container');
  if (!container) return;

  container.innerHTML = `<div class="p-12 text-center text-[#87867F] font-mono">Loading full unabridged volume...</div>`;

  try {
    const res = await fetch(`textbooks/${filename}`);
    if (!res.ok) throw new Error("Could not load textbook file.");
    const md = await res.text();
    const html = window.marked ? window.marked.parse(md) : `<pre class="text-xs text-[#3D3D3A] whitespace-pre-wrap">${md}</pre>`;
    const skillInfo = claudeSkillsMap[filename] || { path: "skills/gap-selling-discovery/SKILL.md", name: "sales-skill" };

    container.innerHTML = `
      <div class="border-b border-[rgba(20,20,19,0.1)] pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="meta-label text-xs text-[#C6613F] bg-[#E3DACC] px-2.5 py-1 rounded font-semibold uppercase">
            Unabridged Masterclass Volume
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight font-sans mt-3">${title}</h2>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <button onclick="downloadSkillFile('${skillInfo.path}', '${skillInfo.name}_SKILL.md')" class="btn btn-clay text-xs flex items-center gap-1.5 shadow-sm">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Export to Claude Skill
          </button>
          <button onclick="copySkillContent('${skillInfo.path}')" class="btn btn-secondary text-xs flex items-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5 text-[#C6613F]"></i> Copy Prompt
          </button>
          <a href="textbooks/${filename}" download class="btn btn-secondary text-xs flex items-center gap-1.5">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> Book (.md)
          </a>
        </div>
      </div>
      <div class="lesson-content lesson-prose text-[#3D3D3A] max-w-4xl space-y-4">
        ${html}
      </div>
    `;

    window.scrollTo({
      top: document.getElementById('classroom').offsetTop - 60,
      behavior: 'smooth'
    });

    if (window.lucide) window.lucide.createIcons();
  } catch (err) {
    container.innerHTML = `<div class="p-8 text-[#B91C1C] font-mono">Error loading textbook: ${err.message}</div>`;
  }
}

function loadLesson(lessonId) {
  activeLessonId = lessonId;
  renderClassroomSyllabus();

  const lesson = classroomLessons.find(l => l.id === lessonId);
  const container = document.getElementById('active-lesson-container');
  if (!lesson || !container) return;

  const isMastered = masteredLessons.includes(lesson.id);
  const savedNotes = localStorage.getItem(`salesMba_notes_${lesson.id}`) || "";

  container.innerHTML = `
    <!-- LESSON HEADER -->
    <div class="border-b border-[rgba(20,20,19,0.1)] pb-5 mb-6">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-2">
          <span class="meta-label text-xs text-[#C6613F] bg-[#E3DACC] px-2 py-0.5 rounded font-semibold">
            Semester 0${lesson.semNum} • Module ${lesson.id}
          </span>
          <span class="meta-label text-xs text-[#87867F] bg-[#F0EEE6] border border-[rgba(20,20,19,0.1)] px-2 py-0.5 rounded">
            ${lesson.duration}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="exportCurrentLessonAsSkill('${lesson.id}')" class="btn btn-secondary text-xs flex items-center gap-1.5" title="Export this module formatted for Claude Project instructions">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#C6613F]"></i> Export to Claude Skill
          </button>
          <button onclick="toggleMasterLesson('${lesson.id}')" class="px-3 py-1.5 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
            isMastered ? 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]' : 'bg-[#FAF9F5] text-[#3D3D3A] border border-[rgba(20,20,19,0.1)] hover:bg-[#F0EEE6]'
          }">
            <span>${isMastered ? '✓ Mastered' : 'Mark as Mastered'}</span>
          </button>
        </div>
      </div>

      <h3 class="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight font-sans mt-3">${lesson.title}</h3>
      <p class="text-xs font-mono text-[#87867F] mt-1">Framework Core: <strong class="text-[#141413]">${lesson.framework}</strong></p>
    </div>

    <!-- LESSON MASTERCLASS CONTENT -->
    <div class="lesson-content mb-8 lesson-prose text-[#3D3D3A]">
      ${lesson.contentHtml}
    </div>

    <!-- INTERACTIVE KNOWLEDGE CHECK -->
    <div class="p-6 rounded-lg bg-[#F0EEE6] border border-[rgba(20,20,19,0.1)] my-6">
      <div class="flex items-center justify-between mb-3">
        <span class="meta-label text-xs font-bold uppercase text-[#C6613F] flex items-center gap-1.5">
          <i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Module Comprehension Check
        </span>
        <span class="meta-label text-xs text-[#87867F]">Self-Grading</span>
      </div>
      <h4 class="text-base font-bold text-[#141413] font-sans mb-3">${lesson.quiz.question}</h4>
      
      <div class="space-y-2.5" id="lesson-quiz-options">
        ${lesson.quiz.options.map((opt, optIdx) => `
          <button onclick="evaluateLessonQuiz(${optIdx})" class="quiz-opt-btn w-full p-4 rounded border text-left text-xs text-[#141413] font-medium transition-all flex items-center justify-between">
            <span class="leading-relaxed font-sans">${opt}</span>
            <span class="w-4 h-4 rounded-full border border-[rgba(20,20,19,0.2)] shrink-0 ml-3"></span>
          </button>
        `).join('')}
      </div>

      <div id="lesson-quiz-feedback" class="mt-4 hidden p-4 rounded text-xs leading-relaxed font-sans"></div>
    </div>

    <!-- APPLIED EXECUTIVE REFLECTION & LANCE'S NOTES -->
    <div class="p-6 rounded-lg bg-[#F0EEE6] border border-[rgba(20,20,19,0.1)] my-6">
      <div class="flex items-center justify-between mb-2">
        <span class="meta-label text-xs font-bold uppercase text-[#15803D] flex items-center gap-1.5">
          <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Applied Field Reflection
        </span>
        <span class="meta-label text-xs text-[#87867F]" id="notes-save-status">Saved Locally</span>
      </div>
      <div class="small text-xs text-[#3D3D3A] mb-4 bg-[#FAF9F5] p-4 rounded border border-[rgba(20,20,19,0.1)] leading-relaxed font-serif">
        <strong class="text-[#C6613F] font-mono block mb-1">PROMPT:</strong>
        <span>${lesson.reflectionPrompt}</span>
      </div>

      <textarea id="student-lesson-notes" oninput="handleNotesInput('${lesson.id}')" placeholder="Type your personal reflection, custom Maptician call tracks, or key takeaways here... (auto-saves in real-time)" class="w-full h-36 bg-[#FAF9F5] border border-[rgba(20,20,19,0.1)] rounded p-4 text-xs font-serif text-[#141413] placeholder-[#87867F] focus:outline-none focus:border-[#C6613F] leading-relaxed">${savedNotes}</textarea>
    </div>

    <!-- LESSON NAVIGATION FOOTER -->
    <div class="flex items-center justify-between pt-6 border-t border-[rgba(20,20,19,0.1)] mt-8">
      <button onclick="navigateLesson(-1)" class="btn btn-secondary text-xs flex items-center gap-1.5">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Previous
      </button>
      <button onclick="advanceNextLesson('${lesson.id}')" class="btn btn-clay text-xs flex items-center gap-2">
        <span>Master & Next Lesson</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function evaluateLessonQuiz(selectedIdx) {
  const lesson = classroomLessons.find(l => l.id === activeLessonId);
  const feedback = document.getElementById('lesson-quiz-feedback');
  if (!lesson || !feedback) return;

  const isCorrect = selectedIdx === lesson.quiz.correctIdx;
  feedback.classList.remove('hidden');
  
  if (isCorrect) {
    feedback.className = "mt-4 p-4 rounded bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D] text-xs leading-relaxed block font-sans";
    feedback.innerHTML = `<strong>✓ Correct Diagnosis!</strong> ${lesson.quiz.explanation}`;
  } else {
    feedback.className = "mt-4 p-4 rounded bg-[#FEE2E2] border border-[#FCA5A5] text-[#B91C1C] text-xs leading-relaxed block font-sans";
    feedback.innerHTML = `<strong>✕ Strategic Gap:</strong> ${lesson.quiz.explanation}`;
  }
}

let notesTimeout = null;
function handleNotesInput(lessonId) {
  const status = document.getElementById('notes-save-status');
  if (status) status.innerText = "Saving...";

  clearTimeout(notesTimeout);
  notesTimeout = setTimeout(() => {
    const val = document.getElementById('student-lesson-notes')?.value || "";
    localStorage.setItem(`salesMba_notes_${lessonId}`, val);
    if (status) status.innerText = "Saved Locally";
  }, 500);
}

function toggleMasterLesson(lessonId) {
  if (masteredLessons.includes(lessonId)) {
    masteredLessons = masteredLessons.filter(id => id !== lessonId);
  } else {
    masteredLessons.push(lessonId);
  }
  localStorage.setItem('salesMba_mastered_lessons', JSON.stringify(masteredLessons));
  updateMasteryProgress();
  loadLesson(lessonId);
}

function advanceNextLesson(currentId) {
  if (!masteredLessons.includes(currentId)) {
    masteredLessons.push(currentId);
    localStorage.setItem('salesMba_mastered_lessons', JSON.stringify(masteredLessons));
    updateMasteryProgress();
  }

  const currentIdx = classroomLessons.findIndex(l => l.id === currentId);
  if (currentIdx < classroomLessons.length - 1) {
    const nextLesson = classroomLessons[currentIdx + 1];
    loadLesson(nextLesson.id);
    showToast(`Mastered ${currentId}! Advanced to ${nextLesson.id}`);
  } else {
    showToast("🎉 Incredible! You have completed all 18 Masterclass Lessons!");
  }
}

function navigateLesson(direction) {
  const currentIdx = classroomLessons.findIndex(l => l.id === activeLessonId);
  const targetIdx = currentIdx + direction;
  if (targetIdx >= 0 && targetIdx < classroomLessons.length) {
    loadLesson(classroomLessons[targetIdx].id);
  }
}

function resetLessonProgress() {
  if (confirm("Reset all lesson completion progress? (Your personal written notes will be preserved)")) {
    masteredLessons = [];
    localStorage.removeItem('salesMba_mastered_lessons');
    updateMasteryProgress();
    renderClassroomSyllabus();
    loadLesson(activeLessonId);
    showToast("Course progress reset.");
  }
}

function exportAllStudentNotes() {
  let exportDoc = "# THE SALES MBA - PERSONAL MASTERCLASS STUDY NOTES\n";
  exportDoc += "Candidate: Lance (Enterprise BDR)\n";
  exportDoc += `Date: ${new Date().toLocaleDateString()}\n\n`;

  let hasNotes = false;
  classroomLessons.forEach(l => {
    const note = localStorage.getItem(`salesMba_notes_${l.id}`);
    if (note && note.trim().length > 0) {
      hasNotes = true;
      exportDoc += `## Module ${l.id}: ${l.title} (${l.framework})\n`;
      exportDoc += `**Prompt:** ${l.reflectionPrompt}\n\n`;
      exportDoc += `**My Notes & Strategy:**\n${note.trim()}\n\n---\n\n`;
    }
  });

  if (!hasNotes) {
    showToast("No notes written yet! Type notes in any module to export.");
    return;
  }

  const blob = new Blob([exportDoc], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Sales_MBA_Personal_Notes.md";
  a.click();
  URL.revokeObjectURL(url);
  showToast("Downloaded all notes to Markdown!");
}

/* ========================================================
   11. CLAUDE SKILLS EXPORT ENGINE
======================================================== */
const claudeSkillsMap = {
  "01_GAP_SELLING_MASTERCLASS.md": {
    path: "skills/gap-selling-discovery/SKILL.md",
    name: "gap-selling-discovery",
    label: "GAP Selling Discovery Skill"
  },
  "02_MEDDPICC_OPERATING_SYSTEM.md": {
    path: "skills/meddpicc-deal-control/SKILL.md",
    name: "meddpicc-deal-control",
    label: "MEDDPICC Deal Control Skill"
  },
  "03_GREAT_DEMO_CHOREOGRAPHY.md": {
    path: "skills/great-demo-architecture/SKILL.md",
    name: "great-demo-architecture",
    label: "Great Demo! Architecture Skill"
  },
  "04_THE_JOLT_EFFECT_CLOSING_MANUAL.md": {
    path: "skills/jolt-indecision-resolver/SKILL.md",
    name: "jolt-indecision-resolver",
    label: "The JOLT Effect Skill"
  },
  "05_COMMERCIAL_REAL_ESTATE_AND_SAAS_FINANCE.md": {
    path: "skills/cre-saas-cfo-memo/SKILL.md",
    name: "cre-saas-cfo-memo",
    label: "CRE SaaS & CFO Memo Skill"
  }
};

async function downloadSkillFile(skillPath, filename) {
  try {
    const res = await fetch(skillPath);
    if (!res.ok) throw new Error("Could not fetch skill file");
    const text = await res.text();
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || "SKILL.md";
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${filename || "SKILL.md"} for Claude!`);
  } catch (err) {
    showToast("Error downloading skill: " + err.message);
  }
}

async function copySkillContent(skillPath) {
  try {
    const res = await fetch(skillPath);
    if (!res.ok) throw new Error("Could not fetch skill file");
    const text = await res.text();
    await navigator.clipboard.writeText(text);
    showToast("Claude Skill copied to clipboard! Paste into Claude Projects.");
  } catch (err) {
    showToast("Error copying skill: " + err.message);
  }
}

function exportCurrentLessonAsSkill(lessonId) {
  const lesson = classroomLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const skillYaml = `---
name: sales-mba-${lesson.id.replace('.', '-')}-${lesson.framework.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 20)}
description: Enterprise sales execution skill for ${lesson.title}. Framework: ${lesson.framework}.
---

# ${lesson.title}
**Framework:** ${lesson.framework}
**Duration:** ${lesson.duration}

## Core Operating Directive
${lesson.contentHtml.replace(/<[^>]*>/g, ' ').replace(/\\s+/g, ' ').trim()}

## Applied Field Reflection & Drill
**Prompt:** ${lesson.reflectionPrompt}

## Evaluation Standard
${lesson.quiz.question}
Answer Key: ${lesson.quiz.options[lesson.quiz.correctIdx]} (${lesson.quiz.explanation})
`;

  const blob = new Blob([skillYaml], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SKILL_${lesson.id}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Exported Module ${lesson.id} as Claude Skill!`);
}

// Hook into DOM ready
window.addEventListener('DOMContentLoaded', () => {
  initClassroom();
});

