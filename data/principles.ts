export interface PrincipleSlide {
  label: string
  body: string
}

export interface Principle {
  num: string
  title: string
  tagline: string
  accentColor: string
  slides: PrincipleSlide[]
}

export const PRINCIPLES: Principle[] = [
  {
    num: '01',
    title: 'Outcomes over outputs.',
    tagline: 'Features are hypotheses. We measure what changes for customers — not what ships.',
    accentColor: 'var(--terra)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>What you ship is a bet. The outcome is the score.</h2>
        <p>Most product organizations are optimized for output — features shipped, velocity maintained, roadmap ticked. Output is visible, measurable, and easy to report. Outcomes are harder.</p>
        <p>I've seen high-output teams ship constantly and move nothing that matters. The discipline I try to instill: start with the outcome you're trying to change, define the signal you'll use to know if you changed it, and only then ask what you'll build.</p>
        <p class="slide-callout">A roadmap should be a set of bets, each with a clear hypothesis and a way to know if you won.</p>`,
      },
      {
        label: 'In Practice',
        body: `<div class="slide-eyebrow">In Practice</div>
        <h2>What this looks like on a real team.</h2>
        <p>[ Add: specific examples of how you've applied outcome-driven thinking — a roadmap framing exercise, a feature decision where you killed work because the outcome signal wasn't moving, or a planning ritual you introduced. ]</p>
        <ul>
          <li>Starting roadmap conversations with "What do we want customers to do differently?" — not "What should we build?"</li>
          <li>Naming the metric before scoping the feature</li>
          <li>Running mid-quarter reviews against outcomes, not velocity</li>
          <li>Celebrating learning from a killed feature as much as a shipped one</li>
        </ul>
        <p class="slide-callout">The hardest part is not the framework. It's the cultural shift from output pride to outcome accountability.</p>`,
      },
      {
        label: 'A Story',
        body: `<div class="slide-eyebrow">A Story</div>
        <h2>[ Replace with a specific story from your work. ]</h2>
        <p>[ Describe a moment where outcome-over-output thinking changed a decision — or where the lack of it caused a problem you later fixed. ]</p>
        <p>[ What was the feature? What was the original framing? What changed when you reframed it as an outcome? What happened? ]</p>`,
      },
    ],
  },
  {
    num: '02',
    title: 'Learn enough to move.',
    tagline: 'Strong teams reduce risk early through discovery, prototyping, and direct customer insight.',
    accentColor: 'var(--ochre)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>Perfect information is a trap. ~70–80% confidence is the signal to move.</h2>
        <p>Teams that wait for certainty before acting don't ship — or they ship slowly enough that the opportunity has passed. Teams that move without any learning ship the wrong thing. The discipline is knowing when you've learned enough.</p>
        <p>I use the 70–80% confidence threshold not as a formula but as a forcing function: have we reduced the biggest risks? Have we talked to customers? Have we prototyped the key assumption? If yes, move. If not, what's blocking the learning?</p>
        <p class="slide-callout">Discovery is not a phase. It's a continuous practice running parallel to delivery.</p>`,
      },
      {
        label: 'In Practice',
        body: `<div class="slide-eyebrow">In Practice</div>
        <h2>How I structure discovery on a team.</h2>
        <p>[ Add: how you've operationalized dual-track discovery — the cadences, the artifacts, the rituals you put in place to make learning continuous rather than front-loaded. ]</p>
        <ul>
          <li>Weekly or bi-weekly discovery syncs separate from delivery standups</li>
          <li>Prototype-first policy before spec-writing on novel features</li>
          <li>Direct access to customers for PMs and designers — not filtered through research</li>
          <li>Using confidence scoring to decide when to move from discovery to delivery</li>
          <li>Post-launch learning reviews to close the loop</li>
        </ul>
        <p class="slide-callout">The best discovery doesn't feel like a phase — it feels like how the team works.</p>`,
      },
      {
        label: 'A Story',
        body: `<div class="slide-eyebrow">A Story</div>
        <h2>[ Replace with a specific story from your work. ]</h2>
        <p>[ Describe a moment where early learning changed the direction — or where a team moved too early (or waited too long) and what you changed as a result. ]</p>`,
      },
    ],
  },
  {
    num: '03',
    title: 'Teams—and craft—win.',
    tagline: 'The most important product is the team. Clear ownership, high standards, and leading by example.',
    accentColor: 'var(--teal)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>A high-craft team compounds. A low-craft team erodes.</h2>
        <p>I've led teams where the primary output was the team itself: designers who grew into leads, practices that outlasted my tenure, and a culture that attracted strong people because it was known for high standards.</p>
        <p>Craft matters here in a specific way — not perfectionism, which kills velocity. Craft is the discipline to care about the details that customers feel even when they can't name them. It's the difference between a UI that works and a UI that earns trust.</p>
        <p class="slide-callout">I stay close to the work, raise the bar, and lead by example — not just by direction.</p>`,
      },
      {
        label: 'Building the Team',
        body: `<div class="slide-eyebrow">Building the Team</div>
        <h2>How I hire, develop, and structure design organizations.</h2>
        <p>[ Add: your specific approach to hiring, onboarding, developing designers, giving feedback, and building the practices that make a team strong over time. ]</p>
        <ul>
          <li>Hiring for growth trajectory and intellectual curiosity, not just portfolio polish</li>
          <li>Pairing designers with senior partners early in their tenure</li>
          <li>Using critique as a teaching mechanism, not a review gate</li>
          <li>Growing IC designers into leads through intentional stretch assignments</li>
          <li>Building design practices that scale beyond any individual</li>
        </ul>
        <p class="slide-callout">The best thing I can do for a product org is leave it stronger than I found it.</p>`,
      },
      {
        label: 'Raising the Bar',
        body: `<div class="slide-eyebrow">Raising the Bar</div>
        <h2>[ Replace with a specific story about craft and standards. ]</h2>
        <p>[ Describe a moment where you raised the bar on a team — a critique that changed the culture, a hire that elevated the group, a standard you introduced that stuck. ]</p>
        <p>[ Or: a moment where you had to defend craft under pressure — timeline compression, stakeholder pushback, resource constraints — and how you navigated it. ]</p>`,
      },
    ],
  },
]
