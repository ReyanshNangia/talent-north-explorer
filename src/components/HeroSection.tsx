import compassBg from "@/assets/compass.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={compassBg}
          alt="Compass Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content in bottom 30% */}
      <div className="relative z-20 mt-auto pb-16 md:pb-24 section-padding">
        <div className="max-w-4xl">
          <h1>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              Aligning Business and Talent.
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground whitespace-nowrap">
              Delivered with Pace and Precision.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
