import benchmarkingImg from "@/assets/benchmarking.png";

const BenchmarkingSection = () => {
  return (
    <section className="section-padding section-alt-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Benchmarking Studies
              <span className="block text-base md:text-lg font-normal text-muted-foreground mt-2 italic whitespace-nowrap">
                Market-Calibrated Insight for Talent &amp; Organisation Decisions
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify">
              Commissioned studies designed to provide objective data against defined business and talent questions. Each study is scoped to address a specific gap, risk, or decision requirement.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="bg-slate-50 rounded-xl p-4">
              <img src={benchmarkingImg} alt="Benchmarking" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkingSection;
