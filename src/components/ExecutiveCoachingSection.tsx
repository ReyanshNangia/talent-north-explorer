import coachingImg from "@/assets/coaching.png";

const ExecutiveCoachingSection = () => {
  return (
    <section className="section-padding section-alt-bg">
      <div className="max-w-7xl mx-auto">
        {/* Top: Image + intro text */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
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
            <img src={coachingImg} alt="Executive Coaching" className="w-full rounded-xl shadow-sm" />
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="max-w-3xl">
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
      </div>
    </section>
  );
};

export default ExecutiveCoachingSection;
