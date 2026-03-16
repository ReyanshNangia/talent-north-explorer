

const points = [
  {
    title: "Partner-led, end to end",
    desc: "Every mandate is led by a Partner. No hand-offs. No dilution.",
  },
  {
    title: "Context before candidates",
    desc: "We invest early to understand your business priorities, culture, and leadership expectations before engaging the market.",
  },
  {
    title: "Precision and Pace over Volume",
    desc: "Shortlists built for strategic alignment and sustained performance, not just volume.",
  },
  {
    title: "Built for lasting impact",
    desc: "We focus on hires who perform, evolve, and stay.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="services" className="section-padding section-alt-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              How We Work
            </h2>
            <div className="space-y-6">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
