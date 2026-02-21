

const points = [
  {
    title: "Partner-led from start to finish.",
    desc: "Partners involved on every mandate. No hand-offs.",
  },
  {
    title: "Context before candidates",
    desc: "We invest upfront to understand your business requirement, culture, and leadership expectations.",
  },
  {
    title: "Precision over volume",
    desc: "Shortlists built on fit and future potential, not speed.",
  },
  {
    title: "Long-term impact",
    desc: "We prioritise leadership hires who perform, adapt, and stay.",
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
