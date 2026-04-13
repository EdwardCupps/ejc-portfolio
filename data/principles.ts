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
    title: 'Value over features.',
    tagline: 'Most product organizations are optimized for output. Value is harder—and more important.',
    accentColor: 'var(--terra)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>Value over features.</h2>
        <p>Most product organizations are optimized for output—features shipped, velocity maintained, roadmaps checked. Output is visible and easy to report. Value is harder.</p>
        <ul>
          <li>Frame problems before solutions</li>
          <li>Define success signals upfront</li>
          <li>Treat roadmaps as bets</li>
          <li>Prioritize learning over certainty</li>
          <li>Cut work that isn&rsquo;t driving value</li>
        </ul>`,
      },
      {
        label: 'A Story',
        body: `<div class="slide-eyebrow">A Story</div>
        <h2>Fewer features. More impact.</h2>
        <p>In multiple environments, I&rsquo;ve seen teams operating at high velocity but struggling to demonstrate impact. Roadmaps were full, delivery was consistent, but outcomes were unclear.</p>
        <p>The shift wasn&rsquo;t adding more process—it was changing how work was framed. We moved from feature-driven planning to outcome-driven bets:</p>
        <ul>
          <li>Each initiative started with a defined problem and hypothesis</li>
          <li>Success was tied to a measurable change in behavior or performance</li>
          <li>Teams validated ideas early through interviews and prototypes before committing to build</li>
        </ul>
        <p>This led to fewer features being shipped—but more of them mattered. Conversations shifted from &ldquo;what are we building?&rdquo; to &ldquo;what are we trying to change?&rdquo; Engineers engaged earlier. Research became a shared responsibility, not a phase.</p>`,
      },
      {
        label: 'Closing',
        body: `<div class="slide-eyebrow">Closing</div>
        <p class="slide-callout">If you can&rsquo;t define the change you&rsquo;re trying to create, you&rsquo;re not ready to build.</p>`,
      },
    ],
  },
  {
    num: '02',
    title: 'Learn enough to move.',
    tagline: 'We reduce risk early, then act before perfect certainty. Progress comes from learning fast.',
    accentColor: 'var(--ochre)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>Learn enough to move.</h2>
        <p>We reduce risk early, then act before perfect certainty. Progress comes from learning fast—not waiting to be right.</p>
        <ul>
          <li>Aim for 70&ndash;80% confidence</li>
          <li>Prototype before committing</li>
          <li>Use direct customer insight</li>
          <li>Timebox decisions</li>
          <li>Separate reversible from irreversible decisions</li>
        </ul>`,
      },
      {
        label: 'A Story',
        body: `<div class="slide-eyebrow">A Story</div>
        <h2>Move at 70&ndash;80% confidence.</h2>
        <p>In multiple teams, I&rsquo;ve seen work slow down not because of lack of effort—but because of the pursuit of certainty. Teams would continue researching, refining, and debating long after enough signal existed to move forward.</p>
        <p>The shift was introducing a shared threshold: we move at 70&ndash;80% confidence. That changed behavior immediately:</p>
        <ul>
          <li>Teams relied more on prototypes and direct user feedback instead of internal discussion</li>
          <li>Decisions were made earlier, with the understanding that iteration was part of the process</li>
          <li>Work that might have taken weeks to &ldquo;finalize&rdquo; moved forward in days</li>
        </ul>
        <p>This didn&rsquo;t lower quality—it improved it. By getting work in front of users sooner, teams learned faster and corrected earlier.</p>`,
      },
      {
        label: 'Closing',
        body: `<div class="slide-eyebrow">Closing</div>
        <p class="slide-callout">You don&rsquo;t need perfect information to move forward—you need enough to learn faster than the problem changes.</p>`,
      },
    ],
  },
  {
    num: '03',
    title: 'Teams\u2014and standards\u2014win.',
    tagline: 'Strong teams outperform everything else. But only when there\'s clear ownership and a high bar.',
    accentColor: 'var(--teal)',
    slides: [
      {
        label: 'The Principle',
        body: `<div class="slide-eyebrow">The Principle</div>
        <h2>Teams&mdash;and standards&mdash;win.</h2>
        <p>Strong teams outperform everything else. But only when there&rsquo;s clear ownership, shared responsibility, and a high standard for the work.</p>
        <ul>
          <li>Build shared ownership across disciplines</li>
          <li>Bring engineers into the problem early</li>
          <li>Stay close to the work</li>
          <li>Set and reinforce a high bar</li>
          <li>Use constraints to drive better decisions</li>
        </ul>`,
      },
      {
        label: 'A Story',
        body: `<div class="slide-eyebrow">A Story</div>
        <h2>Build for shared ownership.</h2>
        <p>In several environments, I&rsquo;ve seen teams structured for delivery but not for ownership. Design hands off to engineering, product manages the roadmap, and accountability gets fragmented. Things ship, but the experience lacks coherence.</p>
        <p>The shift is building true shared ownership:</p>
        <ul>
          <li>Bringing engineering into early problem framing—not just implementation</li>
          <li>Expecting designers to think in systems, not just screens</li>
          <li>Creating space for real collaboration instead of sequential handoffs</li>
        </ul>
        <p>I stay close enough to the work to maintain standards—not to micromanage, but to ensure the bar is clear and consistently reinforced. When this works, decisions happen faster, solutions are more cohesive, and teams take pride in the outcome.</p>`,
      },
      {
        label: 'Closing',
        body: `<div class="slide-eyebrow">Closing</div>
        <p class="slide-callout">The product reflects the team that built it&mdash;structure, ownership, and standards show up in the work.</p>`,
      },
    ],
  },
]
