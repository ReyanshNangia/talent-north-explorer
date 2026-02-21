import ImagePlaceholder from "./ImagePlaceholder";

const cards = [
  {
    title: "Compensation Benchmarking",
    text: "Customised analysis to identify specific gaps in prevailing compensation structures. Reliable data to rationalise and optimise compensation strategies.",
  },
  {
    title: "Talent Benchmarking",
    text: "Benchmark internal leadership and critical roles against the external talent landscape. Data-driven insights to guide hiring, promotion, and succession decisions with confidence.",
  },
  {
    title: "Perception Studies",
    text: "Identify and address gaps in your perceived market image as an employer. Actionable intelligence to strengthen your employment brand and develop targeted areas.",
  },
];

const BenchmarkingSection = () => {
  return (
    <section className="section-padding section-alt-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Benchmarking Studies{" "}
              <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2">
                Commissioned studies delivering actionable data to address real-world business and talent challenges
              </span>
            </h2>
            <div className="space-y-6">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-foreground text-lg mb-2">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full lg:sticky lg:top-28">
            <ImagePlaceholder label="Benchmarking Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkingSection;
