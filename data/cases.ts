export interface CaseSlide {
  label: string;
  body: string;
}

export interface CaseMeta {
  l: string;
  v: string;
}

export interface Case {
  tag: string;
  title: string;
  subtitle: string;
  meta: CaseMeta[];
  slides: CaseSlide[];
}

const imgIcon = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="2" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 19l7-7 5 5 4-4 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>`;

function imgPlaceholder(label: string, sub: string) {
  return `<div class="img-placeholder"><div class="img-ph-inner"><div class="img-ph-icon">${imgIcon}</div><div class="img-ph-label">${label}</div><div class="img-ph-sub">${sub}</div></div></div>`;
}

export const CASES: Case[] = [
  // ── CASE 1: HANA UI TRANSFORMATION ──
  {
    tag: "Platform Transformation · Mural",
    title: "The Hana UI Transformation",
    subtitle:
      "Leading the strategy, design, and rollout of a multi-year transformation of Mural's core canvas experience — without breaking the product customers already trusted.",
    meta: [
      { l: "Company", v: "Mural" },
      { l: "Timeline", v: "2022–2025" },
      { l: "My Role", v: "Director → Sr. Director of Product Design" },
      { l: "Scope", v: "Canvas · Design System · Cross-Platform" },
    ],
    slides: [
      {
        label: "The Situation",
        body: `<div class="slide-eyebrow">The Situation</div>
        <h2>The vision existed, but there was no delivery strategy.</h2>
        <p>By early 2022, a new UI language ("Hana") had been defined to support Mural's rebrand, but the core product had not yet been updated to reflect it.</p>
        <ul>
          <li>Marketing had committed to a launch timeline, creating delivery pressure</li>
          <li>Core product surfaces did not yet use the new UI language</li>
          <li>No structured plan existed to translate the design vision into shipped product</li>
          <li>Legacy UX and engineering constraints limited modernization paths</li>
          <li>No clear owner for cross-product UI consistency</li>
        </ul>
        <p class="slide-callout">There was strong aesthetic ambition. But no execution plan — and I had just joined the team.</p>
        ${imgPlaceholder("Pre-Hana canvas UI state", "Replace with: screenshot of the legacy Mural canvas showing UI inconsistency across surfaces")}`,
      },
      {
        label: "The Risk",
        body: `<div class="slide-eyebrow">The Risk</div>
        <h2>A credible risk of delay, fragmentation, or partial rollout.</h2>
        <p>A new UI system had been defined, but delivery expectations were already set, and the product organization had no shared plan for how to execute the transition.</p>
        <ul>
          <li>Timeline commitments were already in place</li>
          <li>Legacy architecture limited modernization paths</li>
          <li>Multiple teams were changing shared surfaces</li>
          <li>No sequencing plan for migration</li>
          <li>Limited validation strategy before launch</li>
        </ul>
        <p class="slide-callout">This was not a cosmetic update. It required coordinated, architectural change under deadline pressure.</p>`,
      },
      {
        label: "The Move",
        body: `<div class="slide-eyebrow">The Move</div>
        <h2>Complexity required structure before execution.</h2>
        <p>The redesign itself was not the challenge. The challenge was coordinating multiple teams, shared surfaces, and legacy constraints without breaking the product.</p>
        <ul>
          <li>Organized Canvas teams around a shared Hana adoption plan</li>
          <li>Established the Canvas UI group as cross-product system owner</li>
          <li>Defined boundaries between surfaces and shared components</li>
          <li>Introduced a phased transformation model ("Look / Feel / Be")</li>
          <li>Aligned Design, Product, and Engineering on scope and sequencing</li>
          <li>Brought the Design System team into the delivery plan</li>
          <li>Created regular cross-team checkpoints to maintain alignment</li>
        </ul>
        <p class="slide-callout">We built the structure for delivery first — then we modernized the UI.</p>
        ${imgPlaceholder("Impact vs. development effort prioritization matrix", "Replace with: the \"Imagine you are renovating a hotel\" impact/effort matrix from the original deck")}`,
      },
      {
        label: "The Framework",
        body: `<div class="slide-eyebrow">The Framework</div>
        <h2>From vision to shipment.</h2>
        <p>To avoid a risky full rebuild, I introduced a phased model for modernizing the canvas experience.</p>
        <div class="lfb-grid">
          <div class="lfb-card lfb-1"><div class="lfb-label">Look</div><div class="lfb-ver">v1</div><div class="lfb-desc">Visual alignment to the new design system</div></div>
          <div class="lfb-card lfb-2"><div class="lfb-label">Feel</div><div class="lfb-ver">v2</div><div class="lfb-desc">Interaction and usability improvements</div></div>
          <div class="lfb-card lfb-3"><div class="lfb-label">Be</div><div class="lfb-ver">v3</div><div class="lfb-desc">Deeper architectural and component modernization</div></div>
        </div>
        <p style="margin-top:1.25rem">This allowed teams to ship incrementally instead of waiting for a full rewrite.</p>
        <ul>
          <li>Enabled iterative delivery across multiple teams</li>
          <li>Reduced rebuild risk while maintaining velocity</li>
          <li>Created a shared model for sequencing work</li>
          <li>Later expanded to include <strong>Exist</strong> for components carried forward unchanged</li>
        </ul>
        <p class="slide-callout">Modernization became intentional, not reactive.</p>
        ${imgPlaceholder("Look / Feel / Be diagram — v1, v2, v3 cycle graphic", "Replace with: the three-ring cycle diagram from the original deck")}`,
      },
      {
        label: "The Team Model",
        body: `<div class="slide-eyebrow">The Team Model</div>
        <h2>Structure to support platform change.</h2>
        <p>To keep the Hana rollout coherent across multiple teams, I created a dedicated Canvas UI group to own shared UI and component strategy.</p>
        <ul>
          <li>Combined Canvas engineers and Design System engineers under a single model</li>
          <li>Defined clear ownership for cross-app UI</li>
          <li>Introduced proactive component planning</li>
          <li>Eliminated duplicate patterns and drift</li>
          <li>Implemented intake, review, and governance processes</li>
          <li>Enabled shared design reviews across teams</li>
        </ul>
        <p class="slide-callout">Consistency became a system, not an aspiration.</p>`,
      },
      {
        label: "Delivery Strategy",
        body: `<div class="slide-eyebrow">Delivery Strategy</div>
        <h2>Modernize without breaking the product.</h2>
        <p>A full rebuild was too risky, so I defined the rollout strategy for Hana, working closely with Design Research and Foundations.</p>
        <ul>
          <li>Friendly Private Beta with early customer partners</li>
          <li>Closed Private Beta with enterprise customers</li>
          <li>Public Beta in early Q1 2023</li>
          <li>Full rollout before Q2</li>
        </ul>
        <p>This allowed us to learn and the experience to evolve while the platform remained stable.</p>
        <p class="slide-callout">We modernized the product without destabilizing it.</p>`,
      },
      {
        label: "Validation Strategy",
        body: `<div class="slide-eyebrow">Validation Strategy</div>
        <h2>Real users validated the direction.</h2>
        <p>During the Private Beta, we gathered structured feedback from organizations using the new interface in real workflows.</p>
        <ul>
          <li>This allowed the team to modernize the experience while the product continued to evolve.</li>
          <li>Started with a Friendly Private Beta with early customer partners</li>
          <li>Followed by a Closed Private Beta with selected enterprise customers</li>
          <li>Q1 2023 — Public Beta release</li>
          <li>Full product rollout followed by Q2</li>
        </ul>
        <p class="slide-callout">We modernized the product without destabilizing it.</p>`,
      },
      {
        label: "Friendly Beta",
        body: `<div class="slide-eyebrow">Friendly Private Beta</div>
        <h2>Learning with trusted customers first.</h2>
        <p>We released Hana to a small group of partner customers to test the new experience in real workflows.</p>
        <ul>
          <li>Direct research sessions with customers</li>
          <li>Observed collaboration, navigation, and editing patterns</li>
          <li>Collected qualitative feedback and usability issues</li>
          <li>Monitored performance and stability</li>
        </ul>
        <p class="slide-callout">This phase exposed gaps we could fix before scaling.</p>
        ${imgPlaceholder("Friendly Private Beta — research session or customer artifact", "Replace with: photos, notes, or synthesis from early partner research sessions")}`,
      },
      {
        label: "Closed Beta",
        body: `<div class="slide-eyebrow">Closed Private Beta</div>
        <h2>Validating at enterprise scale.</h2>
        <p>We expanded the beta to larger customers to confirm Hana worked in production environments.</p>
        <ul>
          <li>Larger murals and heavier usage</li>
          <li>More collaborators per session</li>
          <li>Complex permissions and integrations</li>
          <li>Higher performance expectations</li>
        </ul>
        <p class="slide-callout">This phase confirmed the system could support real customer workloads.</p>`,
      },
      {
        label: "Beta Signals",
        body: `<div class="slide-eyebrow">Beta Signals</div>
        <h2>Usage data showed the new experience was viable.</h2>
        <p>During private beta we tracked adoption and activity across Hana surfaces.</p>
        <ul>
          <li>Growing number of beta users over the test period</li>
          <li>Increasing session activity in Hana-enabled canvases</li>
          <li>Positive usability feedback in research sessions</li>
          <li>No blocking stability issues</li>
        </ul>
        <p class="slide-callout">These signals supported moving to Public Beta.</p>
        ${imgPlaceholder("Beta adoption chart — user growth and session activity over test period", "Replace with: chart or graph showing beta user growth, session activity in Hana canvases")}`,
      },
      {
        label: "Field Feedback",
        body: `<div class="slide-eyebrow">Postcards / Field Feedback</div>
        <h2>Customer feedback shaped rollout decisions.</h2>
        <p>We collected feedback from beta customers through research sessions and field reports.</p>
        <ul>
          <li>Identified workflow gaps early</li>
          <li>Found areas where legacy behavior was still required</li>
          <li>Prioritized fixes based on real usage</li>
          <li>Adjusted rollout pace based on customer readiness</li>
        </ul>
        <p class="slide-callout">Customer signal guided the release strategy.</p>
        ${imgPlaceholder("Field feedback examples — postcards or customer research synthesis", "Replace with: feedback postcards, field report summaries, or customer quotes from beta")}`,
      },
      {
        label: "Opt-In Rollout",
        body: `<div class="slide-eyebrow">Opt-In / Gradual Rollout</div>
        <h2>Customers moved at their own pace.</h2>
        <p>Instead of forcing a switch, we allowed customers to opt into the new experience.</p>
        <ul>
          <li>Beta opt-in flow inside the product</li>
          <li>Allowed teams to test safely</li>
          <li>Reduced resistance to change</li>
          <li>Provided real usage data before full switch</li>
        </ul>
        <p class="slide-callout">This made the transition safer for customers and for the business.</p>
        ${imgPlaceholder("In-product opt-in flow for Hana beta", "Replace with: screenshot of the beta opt-in UI shown to customers inside the product")}`,
      },
      {
        label: "Public Rollout",
        body: `<div class="slide-eyebrow">Public Beta to Full Rollout</div>
        <h2>Modernization without disruption.</h2>
        <p>After private betas validated the experience, Hana was released publicly.</p>
        <ul>
          <li>Public Beta in Q1 2023</li>
          <li>Gradual expansion across accounts</li>
          <li>Continued monitoring of performance and feedback</li>
          <li>Full rollout completed in Q2</li>
        </ul>
        <p class="slide-callout">The platform modernized without a breaking release.</p>
        ${imgPlaceholder("Hana — before &amp; after UI comparison", "Replace with: side-by-side screenshots of pre-Hana and post-Hana canvas experience")}`,
      },
      {
        label: "Impact",
        body: `<div class="slide-eyebrow">Impact</div>
        <h2>Hana became the foundation of the modern product.</h2>
        <p>After private betas validated the experience, Hana was released publicly.</p>
        <ul>
          <li>Unified UI across the canvas experience</li>
          <li>Reduced fragmentation across teams</li>
          <li>Enabled faster feature delivery</li>
          <li>Created a scalable component model</li>
          <li>Supported future collaboration and AI work</li>
        </ul>
        <p class="slide-callout">The redesign succeeded because the system changed, not just the UI.</p>
        <div class="outcome-grid">
          <div class="outcome-card"><div class="outcome-num">Q2 '23</div><div class="outcome-desc">Full platform rollout without a breaking release</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ Add: adoption, NPS, or CSAT metric ]</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ Add: engineering velocity or design system coverage ]</div></div>
        </div>`,
      },
      {
        label: "Reflection",
        body: `<div class="slide-eyebrow">Reflection</div>
        <h2>What made the transformation work.</h2>
        <ul>
          <li>Framing before redesign</li>
          <li>Structure before UI</li>
          <li>Iteration instead of rebuild</li>
          <li>Partnership across Design, Product, Engineering, Research</li>
          <li>Data-driven rollout decisions</li>
        </ul>
        <p class="slide-callout">Large-scale change required system thinking.</p>`,
      },
    ],
  },

  // ── CASE 2: AI AT MICROSOFT BUILD ──
  {
    tag: "0→1 AI Product · Mural",
    title: "AI at Microsoft Build — Eight Weeks",
    subtitle:
      "Leading Mural's first enterprise AI initiative from zero to a high-profile public launch — in under eight weeks, without a dedicated AI team.",
    meta: [
      { l: "Company", v: "Mural" },
      { l: "Timeline", v: "Early 2023 (8 weeks)" },
      { l: "My Role", v: "Senior Director of Product Design" },
      { l: "Launch", v: "Microsoft Build 2023" },
    ],
    slides: [
      {
        label: "Overview",
        body: `<div class="slide-eyebrow">Context</div>
        <h2>The window opened fast. The question was whether we could move through it.</h2>
        <p>In early 2023, generative AI went from an emerging technology to a business imperative almost overnight. Mural had a strategic opportunity: a high-profile showcase at Microsoft Build 2023, one of the most watched developer and enterprise product events of the year. The ask was to demonstrate AI-native features live on stage — in under eight weeks.</p>
        <p>There was no dedicated AI team. No established AI product practice. And the calendar was not moving.</p>
        <p>[ Add: the competitive context, the partnership dynamics with Microsoft, or any internal org constraints that made this harder. ]</p>`,
      },
      {
        label: "Problem",
        body: `<div class="slide-eyebrow">Discovery</div>
        <h2>What does AI mean for a visual collaboration product?</h2>
        <p>The surface-level challenge was speed. The deeper challenge was clarity: in a product built around human creative collaboration, what role should AI actually play? What would feel genuinely useful to enterprise teams — and what would feel gimmicky or intrusive?</p>
        <p>[ Add: how you approached rapid discovery in a compressed timeline — what you prioritized learning, who you talked to, what you de-risked early. ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◎</div>
          <strong>Discovery artifacts</strong>
          Rapid research, concept testing, or competitive analysis from the sprint.
        </div>`,
      },
      {
        label: "Approach",
        body: `<div class="slide-eyebrow">Strategy</div>
        <h2>Scope ruthlessly. Validate continuously. Ship with confidence.</h2>
        <p>Eight weeks is not enough time to build a comprehensive AI product. It is enough time to build one deeply meaningful AI experience — if you scope ruthlessly, align fast, and don't let perfect be the enemy of shipped.</p>
        <p>[ Describe the specific strategic choices: what you built, what you deliberately left out, how you sequenced work, and how you managed risk with a compressed timeline and no dedicated AI team. ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◈</div>
          <strong>Sprint plan, feature decision framework, or scope map</strong>
          Add your planning artifacts here.
        </div>`,
      },
      {
        label: "Leadership",
        body: `<div class="slide-eyebrow">Leadership</div>
        <h2>Creating the conditions for a team to do their best work under pressure.</h2>
        <p>Leading an initiative with this kind of visibility and timeline compression requires a specific kind of leadership: clarity about what matters, protection from distractions, and the ability to make fast decisions with incomplete information.</p>
        <p>[ Describe how you led the team through the sprint: how you managed stakeholder pressure, what decisions you made and how, how you kept morale and momentum through the crunch. ]</p>`,
      },
      {
        label: "Experience",
        body: `<div class="slide-eyebrow">UX &amp; Design</div>
        <h2>AI that feels like a collaborator, not a feature.</h2>
        <p>[ Describe the UX philosophy behind the AI feature(s): what interaction model you chose, why, what you rejected and why. What did you learn about designing AI-native experiences in a collaborative context? ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◻</div>
          <strong>Screens, interaction flows, or demo footage from Microsoft Build</strong>
          Add artifacts here.
        </div>`,
      },
      {
        label: "Outcomes",
        body: `<div class="slide-eyebrow">Results</div>
        <h2>[ Replace with your specific outcomes. ]</h2>
        <p>[ What happened at Microsoft Build? How did the product land with the audience? What followed — user adoption, press coverage, internal momentum, product roadmap influence? ]</p>
        <div class="outcome-grid">
          <div class="outcome-card"><div class="outcome-num">8 wks</div><div class="outcome-desc">Zero to launch, with no dedicated AI team</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ e.g. press mentions, user signups, or enterprise inquiries post-launch ]</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ e.g. follow-on AI features or roadmap expansions unlocked ]</div></div>
        </div>`,
      },
      {
        label: "Learnings",
        body: `<div class="slide-eyebrow">Reflection</div>
        <h2>What I'd do differently — and what I'd do exactly the same.</h2>
        <p>[ What did this experience teach you about leading under constraint, building AI-native products, or working at the intersection of enterprise SaaS and rapidly evolving technology? What would you change? What worked surprisingly well? ]</p>`,
      },
    ],
  },

  // ── CASE 3: ESEF MARKET ENTRY ──
  {
    tag: "Market Expansion · Workiva",
    title: "UX-Led Entry into the European ESEF Market",
    subtitle:
      "Defining UX strategy and co-leading product direction for Workiva's entry into a new regulatory reporting standard — a market that would account for 10% of company ARR.",
    meta: [
      { l: "Company", v: "Workiva" },
      { l: "Timeline", v: "2020–2022" },
      { l: "My Role", v: "Principal UX Designer" },
      { l: "Impact", v: "~10% of Company ARR" },
    ],
    slides: [
      {
        label: "Overview",
        body: `<div class="slide-eyebrow">Context</div>
        <h2>A new regulatory mandate. A genuine market opportunity. One shot to get the experience right.</h2>
        <p>The European Single Electronic Format (ESEF) was a new regulatory reporting standard requiring European public companies to file annual reports in a machine-readable format. For Workiva — a platform already trusted for US regulatory compliance — it was a significant expansion opportunity.</p>
        <p>But ESEF wasn't just a feature addition. It introduced new user workflows, a new filing format (XBRL-embedded HTML), and compliance requirements that varied across European jurisdictions. Getting the UX wrong meant customer failure in a highly regulated, high-stakes context.</p>`,
      },
      {
        label: "Problem",
        body: `<div class="slide-eyebrow">Discovery</div>
        <h2>Understanding a new user — in a new country — for a new regulation.</h2>
        <p>ESEF users weren't the same as Workiva's existing US compliance audience. Their workflows, mental models, and relationships with their data were different. Discovery meant understanding not just the regulation, but the people who'd have to comply with it — many of whom were also new to Workiva.</p>
        <p>[ Add: specific research methods used — remote contextual inquiry with European finance teams, regulatory document analysis, collaboration with Workiva's European customer success team, etc. ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◎</div>
          <strong>Research artifacts</strong>
          User interviews, journey maps, or regulatory analysis. Add visuals here.
        </div>`,
      },
      {
        label: "Approach",
        body: `<div class="slide-eyebrow">Strategy</div>
        <h2>Design as market entry strategy — not just UI delivery.</h2>
        <p>My role was both UX designer and co-product strategist. I worked alongside PMs and engineering leads to shape the scope, sequence, and design philosophy of the ESEF feature set — not just to deliver screens, but to ensure the experience was the competitive differentiator.</p>
        <p>I also led integration work with Adobe InDesign, recognizing that many European finance teams produced their annual reports in InDesign before filing. Translating those cross-platform insights into native Workiva capabilities was a significant technical and UX challenge — and ultimately secured executive buy-in from the CTO and CPO.</p>
        <div class="placeholder-block">
          <div class="ph-icon">◈</div>
          <strong>Product strategy artifacts</strong>
          Roadmap, feature prioritization, or integration architecture diagrams.
        </div>`,
      },
      {
        label: "Leadership",
        body: `<div class="slide-eyebrow">Leadership</div>
        <h2>Earning the table, not just sitting at it.</h2>
        <p>As a Principal Designer — not a Director or VP — I was operating above my title in this initiative. That meant earning influence through the quality of my thinking and the clarity of my communication, not through org-chart authority.</p>
        <p>I built relationships with product and engineering leads that made design a genuine co-owner of the market entry strategy. Securing CTO and CPO buy-in for the Adobe InDesign integration required translating UX insights into business language — user need → market differentiation → competitive moat.</p>
        <p>[ Add: specific moments where you shaped the direction, resolved conflict, or built alignment across skeptical stakeholders. ]</p>`,
      },
      {
        label: "Experience",
        body: `<div class="slide-eyebrow">UX &amp; Design</div>
        <h2>Compliance UX that doesn't feel like compliance.</h2>
        <p>Filing a regulatory report in a new format, in a new regulatory jurisdiction, under time pressure is inherently stressful. The UX job was to make ESEF compliance feel achievable — to give users confidence that they were doing it right, and to reduce the cognitive overhead of a genuinely complex task.</p>
        <p>[ Describe specific UX decisions: how you handled the XBRL tagging workflow, how you designed for error prevention in a compliance context, what tradeoffs you made between power-user efficiency and novice-accessible guidance. ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◻</div>
          <strong>ESEF workflow screens, tagging UI, or InDesign integration flows</strong>
          Add Figma files or screenshots here.
        </div>`,
      },
      {
        label: "Outcomes",
        body: `<div class="slide-eyebrow">Results</div>
        <h2>A new market. Measurable revenue. A patent on the AI work it unlocked.</h2>
        <p>[ Add the full story of outcomes — customer adoption in Europe, sales data, competitive wins. The 10% ARR figure is a strong anchor. ]</p>
        <div class="outcome-grid">
          <div class="outcome-card"><div class="outcome-num">~10%</div><div class="outcome-desc">Contribution to Workiva overall company ARR</div></div>
          <div class="outcome-card"><div class="outcome-num">1st</div><div class="outcome-desc">Workiva AI patent — ML-driven XBRL tagging, emerging from this work</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ e.g. European enterprise customers acquired, countries supported ]</div></div>
        </div>`,
      },
      {
        label: "Learnings",
        body: `<div class="slide-eyebrow">Reflection</div>
        <h2>What operating above your title teaches you.</h2>
        <p>[ What did leading a market expansion as an IC — not a director — teach you about influence, about the relationship between design and business strategy, about what it takes to be taken seriously as a strategic partner? ]</p>
        <p>[ How did this shape your leadership philosophy going into your director and senior director roles at Mural? ]</p>`,
      },
    ],
  },

  // ── CASE 4: BARNTOOLS PLATFORM PIVOT ──
  {
    tag: "Platform Strategy · BarnTools",
    title: "From Hardware Company to Smart Farm Platform",
    subtitle:
      "Reframing an agtech company's entire product identity — shifting from hardware-centric tools to a software-driven intelligence platform integrating monitoring, biosecurity, and AI-enabled analytics.",
    meta: [
      { l: "Company", v: "BarnTools" },
      { l: "Timeline", v: "2025–2026" },
      { l: "My Role", v: "Head of Product" },
      { l: "Sector", v: "AgTech / HaaS + SaaS" },
    ],
    slides: [
      {
        label: "Overview",
        body: `<div class="slide-eyebrow">Context</div>
        <h2>A hardware company that needed to become a software company — without losing what made it valuable.</h2>
        <p>BarnTools built real hardware: the BinTalk sensor system, deployed across hundreds of swine and poultry production sites to monitor grain bins, feed usage, biosecurity conditions, and operational performance. Farmers trusted it. The hardware worked.</p>
        <p>But the company's growth ceiling was becoming visible. Hardware margins are thin. Support is expensive. And the data being collected — rich, real-time, site-level operational intelligence — was sitting largely untapped. I was brought in to change that: to define and begin building a Smart Farm software platform that would make BarnTools' hardware more valuable, not replace it.</p>`,
      },
      {
        label: "Problem",
        body: `<div class="slide-eyebrow">Discovery</div>
        <h2>Understanding the farm before designing for it.</h2>
        <p>Large-scale swine and poultry production is a world with its own rhythms, pressures, and constraints. Producers manage biosecurity, feed efficiency, mortality, and environmental conditions across many sites simultaneously — often with lean operational teams and limited technology sophistication.</p>
        <p>[ Add: how you approached discovery in this domain — site visits, producer interviews, conversations with the existing BarnTools customer success and sales teams, data analysis of existing sensor usage. What surprised you about the users and their context? ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◎</div>
          <strong>Discovery artifacts</strong>
          User research, site visit notes, or producer workflow maps.
        </div>`,
      },
      {
        label: "Approach",
        body: `<div class="slide-eyebrow">Strategy</div>
        <h2>A 3-year platform vision. A 6-month outcome-driven roadmap.</h2>
        <p>I defined a 3-year Smart Farm platform vision that reframed BarnTools' product strategy: from a company that sells hardware with some software, to a company that sells software-driven intelligence — enabled by hardware. The distinction matters commercially and culturally.</p>
        <p>I then introduced a 6-month outcome-driven roadmap aligned to company OKRs, incorporating modern discovery and delivery practices and AI-assisted tooling to accelerate iteration. This gave the organization its first structured product operating model — replacing ad-hoc prioritization with a clear, cross-functional framework for deciding what to build and why.</p>
        <div class="placeholder-block">
          <div class="ph-icon">◈</div>
          <strong>Platform vision, roadmap, or OKR framework</strong>
          Add strategy artifacts here.
        </div>`,
      },
      {
        label: "Leadership",
        body: `<div class="slide-eyebrow">Leadership</div>
        <h2>Introducing modern product practice to an organization that didn't have one.</h2>
        <p>BarnTools was a company built by people who understood hardware, agriculture, and operations — but not product management or design-led development. Part of my role was introducing the vocabulary, practices, and rhythm of modern product development: discovery, dual-track iteration, OKR-aligned roadmapping, cross-functional demos.</p>
        <p>I scaled product operating processes to support parallel initiatives across hardware, alerts, feed intelligence, and biosecurity — improving clarity, prioritization, and cross-functional cohesion across software and data-driven features. I also structured and led the launch of the enterprise biosecurity platform, which became a regional expansion lever.</p>`,
      },
      {
        label: "Experience",
        body: `<div class="slide-eyebrow">UX &amp; Design</div>
        <h2>Designing for people who work in barns — not at desks.</h2>
        <p>Smart farm users aren't knowledge workers staring at dashboards. They're operational people who check their phones between tasks, make fast decisions under time pressure, and can't afford to be confused by software when something is going wrong on a live production site.</p>
        <p>[ Describe specific UX decisions for the biosecurity platform, alert systems, or operational intelligence features. How did you design for low-bandwidth environments, glance-able information, and high-stakes operational contexts? ]</p>
        <div class="placeholder-block">
          <div class="ph-icon">◻</div>
          <strong>Smart Farm platform screens, biosecurity UI, or operational dashboard</strong>
          Add Figma files or screenshots here.
        </div>`,
      },
      {
        label: "Outcomes",
        body: `<div class="slide-eyebrow">Results</div>
        <h2>A platform vision. A biosecurity launch. Thousands of sites in pipeline.</h2>
        <p>[ Add quantitative outcomes — producer adoption, retention, or engagement data from the biosecurity platform launch. ]</p>
        <div class="outcome-grid">
          <div class="outcome-card"><div class="outcome-num">7,000</div><div class="outcome-desc">BinTalk sensor bins committed across hundreds of sites via biosecurity platform launch</div></div>
          <div class="outcome-card"><div class="outcome-num">13,000</div><div class="outcome-desc">Additional bins in pipeline as regional expansion lever</div></div>
          <div class="outcome-card"><div class="outcome-num">[ X ]</div><div class="outcome-desc">[ e.g. reduction in support tickets, producer retention improvement, or ARR growth ]</div></div>
        </div>`,
      },
      {
        label: "Learnings",
        body: `<div class="slide-eyebrow">Reflection</div>
        <h2>What leading a platform pivot teaches you about organizational change.</h2>
        <p>[ What was the hardest part of shifting a hardware-first culture toward software-led thinking? What would you do differently — maybe earlier, maybe slower, maybe with different sequencing? ]</p>
        <p>[ What did this role teach you about product leadership in early-stage and SMB contexts, compared to your experience at Mural and Workiva? ]</p>`,
      },
    ],
  },
];
