import { Linkedin, Mail } from "lucide-react";
import prafulImg from "@/assets/praful.jpeg";
import geetanjaliImg from "@/assets/geetanjali_image.jpeg";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: React.ReactNode;
  imageSrc: string;
  linkedIn?: string;
}

const TeamMember = ({ name, title, bio, imageSrc, linkedIn }: TeamMemberProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 mb-6">
      <img src={imageSrc} alt={name} className="rounded-full w-full h-full object-cover object-center shadow-md" data-name={name} style={name === "Geetanjali Ohri" ? { objectPosition: "center 20%" } : undefined} />
    </div>
    <h3 className="text-xl font-bold text-foreground">{name}</h3>
    <p className="text-primary font-medium mb-4">{title}</p>
    <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-3 text-justify">
      {bio}
    </div>
    <div className="flex gap-3 mt-6">
      <a
        href={linkedIn || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm hover:bg-accent transition-colors"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
      >
        <Mail className="w-4 h-4" />
        Email
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section id="team" className="section-padding section-alt-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <TeamMember
            name="Maj Praful Nangia"
            title="Partner – Talent North"
            imageSrc={prafulImg}
            linkedIn="https://www.linkedin.com/in/prafulnangia/"
            bio={
              <>
                <p>Praful is an executive search and leadership advisory professional who works with clients to decode complex talent needs in evolving business environments. He has led cross-border leadership mandates, bringing global talent into Indian organisations.</p>
                <p>He partners with boards, promoters, and leadership teams on senior and C-suite hiring, and advises on leadership structure, succession planning, and market talent intelligence.</p>
                <p>Prior to founding Talent North, Praful led the Consumer, High-Growth &amp; Professional Services practice and headed the Delhi–NCR office at Hunt Partners, advising boards and leadership teams on senior and C-suite mandates.</p>
                <p>A graduate of the National Defence Academy, Khadakwasla, Praful was commissioned into the Regiment of Artillery in 2000. During his seven-year tenure with the Indian Army, he served in the Western Sector during Operation Parakram and in counter-terrorism operations under Operation Rakshak in Jammu &amp; Kashmir.</p>
                <p>He is an alumnus of ISB Hyderabad and holds an MBA in Marketing and Strategy.</p>
              </>
            }
          />
          <TeamMember
            name="Geetanjali Ohri"
            title="Partner – Talent North"
            imageSrc={geetanjaliImg}
            linkedIn="https://www.linkedin.com/in/geetanjaliohri/"
            bio={
              <>
                <p>Geetanjali is a business leader and PCC-certified executive coach with over twenty-five years of experience across multinationals, Indian enterprises, and high-growth start-ups. She works closely with founders, and leadership teams to align senior talent decisions with business context and organisational priorities.</p>
                <p>She leads senior and C-suite mandates, with a focus on leadership transitions, cultural alignment, and scale readiness.</p>
                <p>Prior to Talent North, Geetanjali held business roles at GE, Walmart, Max Life Insurance, and Clix Capital across strategy, customer experience, sales, marketing and organisational effectiveness. Her experience spans aligning business strategy with people capability through phases of growth and change.</p>
                <p>She completed the Executive Program in Management at Cornell University and is qualified in Design Thinking and Six Sigma. She has been recognised as India's Top Customer Experience Professional and India's Top Content and Brand Custodian.</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
