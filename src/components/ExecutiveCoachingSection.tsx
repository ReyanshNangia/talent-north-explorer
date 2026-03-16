import coachingImg from "@/assets/coaching.png";

const coachingPoints = [
  {
    title: "Context First",
    desc: "Every engagement begins with clarity on business realities, stakeholder expectations, and defined outcomes.",
  },
  {
    title: "Structured Engagement",
    desc: "Clear goals, milestone reviews, and measurable progress.",
  },
  {
    title: "Confidential & Independent",
    desc: "A trusted space for reflection, challenge, and strategic thinking.",
  },
  {
    title: "Outcome-Oriented",
    desc: "Coaching is aligned to performance, not abstraction.",
  },
];

const ExecutiveCoachingSection = () => {
  return (
    <section className="section-padding section-alt-bg">
      <div className="max-w-7xl mx-auto">
        {/* Top: Image + intro text */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center mb-16">
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Executive Coaching{" "}
              <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2 italic">
                Focused conversations. Measurable outcomes.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                We work with founders, senior leaders, and high-potential executives navigating scale, complexity, and transition. Engagements are structured, confidential, and anchored in real business contexts.
              </p>
              <p>
                Our approach combines strategic reflection with disciplined execution, strengthening judgment, expanding perspective, and enabling sustained performance.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <ImagePlaceholder label="Executive Coaching" />
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="max-w-3xl mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Our Philosophy</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Leadership evolves through awareness, clarity, and conscious choice.
            </p>
            <p>
              Coaching provides the structure and challenge that enable leaders to reflect deeply, think clearly, decide deliberately, and act in alignment.
            </p>
            <p>
              Lasting change begins with insight and is strengthened through consistent action.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">How We Work</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coachingPoints.map((p, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h4 className="font-semibold text-foreground text-lg mb-2">{p.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCoachingSection;
