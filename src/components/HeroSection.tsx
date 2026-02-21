import ImagePlaceholder from "./ImagePlaceholder";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background placeholder */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          label="Compass Background Image"
          className="rounded-none border-0 h-full"
          aspectRatio=""
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content in bottom 30% */}
      <div className="relative z-20 mt-auto pb-16 md:pb-24 section-padding">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-secondary mb-4">
            Executive Search &amp; Advisory
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-primary">Guiding Leadership</span>{" "}
            <span className="text-foreground">Decisions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Guiding Leadership Hiring Decisions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
