import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import BenchmarkingSection from "@/components/BenchmarkingSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Executive Search – image right */}
      <ContentSection
        id="executive-search"
        heading={
          <>
            Executive search{" "}
            <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2">
              Delivering leadership hires that shape business outcomes.
            </span>
          </>
        }
        imageLabel="Executive Search Image"
        imageSrc={executiveSearchImg}
        imageRight
      >
        <p>
          Our partner-led execution model combines deep market insight with rigorous search discipline to deliver leadership talent aligned to your business context, strategic priorities, and cultural DNA.
        </p>
        <p>
          We invest upfront in understanding your organisation's direction, challenges, and leadership requirements. Every search is executed with precision — identifying, assessing, and presenting candidates who are not only qualified, but positioned to succeed and stay.
        </p>
      </ContentSection>

      {/* 3. How We Work – image left */}
      <HowWeWorkSection />

      {/* 4. Recce & Vantage – image right */}
      <ContentSection
        heading="Recce & Vantage - Leadership Assessment & Talent Intelligence"
        imageLabel="Recce & Vantage Image"
        imageRight
      >
        <p>
          Recce & Vantage is a structured management audit framework that progresses from process walkthroughs to organisational execution surveys and deep structured interviews, delivering a comprehensive and actionable report.
        </p>
        <p>
          The approach uncovers organisational capability, evaluates leadership bench strength, and provides data-backed talent intelligence to support hiring, succession planning, and strategic leadership decisions.
        </p>
      </ContentSection>

      {/* 5. Talent Mapping – image left */}
      <ContentSection
        heading="Talent Mapping – Proactive Leadership Pipeline & Market Intelligence"
        imageLabel="Talent Mapping Image"
        imageRight={false}
        altBg
      >
        <p>
          Talent Mapping enables organisations to build proactive talent pipelines for critical roles, reducing vacancy risk and enabling rapid hiring activation. Pre-identified candidates with preliminary intelligence ensure leadership continuity at short notice.
        </p>
        <p>
          The framework benchmarks internal talent against external market availability to identify capability gaps and lateral promotion opportunities. It also delivers insight into compensation positioning, talent development practices, and employer perception to strengthen attraction and retention strategies.
        </p>
      </ContentSection>

      {/* 6. Benchmarking Studies – image left */}
      <BenchmarkingSection />

      {/* 7. Leadership Development – image right */}
      <ContentSection
        heading="Leadership Development – Aligning Talent, Culture & Performance"
        imageLabel="Leadership Development Image"
        imageRight
      >
        <p>
          Our leadership development framework helps organisations align purpose and values, optimise leadership and team effectiveness, strengthen culture-to-performance outcomes, and deliver tailored change solutions.
        </p>
        <p>
          Every engagement is designed around your organisation's strategic goals and leadership needs.
        </p>
      </ContentSection>

      {/* 8. Family Business Succession Planning – image left */}
      <ContentSection
        heading="Family Business Succession Planning – Aligning ownership, leadership & family priorities for sustainable continuity"
        imageLabel="Succession Planning Image"
        imageRight={false}
        altBg
      >
        <p>
          Our Three-Circle succession framework helps family-owned businesses navigate the intersection of ownership, family, and business priorities. We support families in addressing governance challenges, interpersonal dynamics, and asset transition planning to deliver aligned succession strategies.
        </p>
        <p>
          This results in clear ownership transition, leadership continuity, and long-term family–business alignment.
        </p>
      </ContentSection>

      {/* 9. About */}
      <AboutSection />

      {/* 10. Team */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
