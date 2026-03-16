import Navbar from "@/components/Navbar";
import executiveSearchImg from "@/assets/executive-search-process.png";
import recceeImg from "@/assets/reccee_and_vantage.png";
import talentMappingImg from "@/assets/talent_mapping.png";
import leadershipImg from "@/assets/leadership_image.jpeg";
import familyImg from "@/assets/Family_image.png";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import BenchmarkingSection from "@/components/BenchmarkingSection";
import BoardAdvisorySection from "@/components/BoardAdvisorySection";
import ExecutiveCoachingSection from "@/components/ExecutiveCoachingSection";
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
        imageSrc={recceeImg}
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
        heading={
          <>
            Talent Mapping{" "}
            <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2 italic">
              Leadership Market Visibility &amp; Pipeline Readiness
            </span>
          </>
        }
        imageLabel="Talent Mapping Image"
        imageSrc={talentMappingImg}
        imageRight={false}
        altBg
      >
        <p>
          Leadership readiness requires both internal clarity and external awareness.
        </p>
        <p>
          Talent Mapping provides structured visibility into leadership markets alongside internal depth. It aligns internal capability with external availability, highlighting succession gaps, mobility opportunities, and compensation positioning.
        </p>
        <p>
          The outcome is informed leadership decisions grounded in current market intelligence rather than reactive search.
        </p>
      </ContentSection>

      {/* 6. Benchmarking Studies – image left */}
      <BenchmarkingSection />

      {/* 7. Leadership Development – image right */}
      <ContentSection
        heading="Leadership Development – Aligning Talent, Culture & Performance"
        imageLabel="Leadership Development Image"
        imageSrc={leadershipImg}
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
        heading={
          <>
            Family Business Succession Planning{" "}
            <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2 italic">
              Aligning ownership, leadership &amp; family priorities for sustainable continuity
            </span>
          </>
        }
        imageLabel="Succession Planning Image"
        imageSrc={familyImg}
        imageRight={false}
        altBg
      >
        <p>
          Aligning ownership, leadership, and family priorities for long-term continuity.
        </p>
        <p>
          Through our Three-Circle framework, we bring clarity to governance, leadership transition, and family dynamics, enabling structured succession decisions grounded in alignment and foresight.
        </p>
        <p>
          Resulting in clear ownership transfer, leadership stability, and sustained family–enterprise cohesion.
        </p>
      </ContentSection>

      {/* 9. Board Advisory */}
      <BoardAdvisorySection />

      {/* 10. Executive Coaching */}
      <ExecutiveCoachingSection />

      {/* 11. About */}
      <AboutSection />

      {/* 10. Team */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
