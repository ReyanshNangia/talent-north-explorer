const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          About Talent North
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg text-left md:text-center">
          <p>
            Talent North is a leadership search and advisory firm focused on helping organisations make critical talent and leadership decisions with clarity and confidence.
          </p>
          <p>
            We bring together disciplined execution, strategic thinking, and deep understanding of leadership dynamics. Our perspective is shaped by experience across high-stakes environments — from military leadership to top-tier consulting and executive search — enabling us to assess, advise, and deliver in complex business contexts.
          </p>
          <p>
            We partner closely with clients to understand their direction, culture, and leadership needs, and work with precision to deliver outcomes that strengthen organisations over the long term.
          </p>
          <p className="font-medium text-foreground">
            Established in 2017, Talent North has delivered leadership and advisory mandates across diverse business contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
