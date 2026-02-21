import { Linkedin, Mail } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: React.ReactNode;
}

const TeamMember = ({ name, title, bio }: TeamMemberProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 mb-6">
      <ImagePlaceholder
        label="Profile Pic"
        className="rounded-full h-full"
        aspectRatio=""
      />
    </div>
    <h3 className="text-xl font-bold text-foreground">{name}</h3>
    <p className="text-primary font-medium mb-4">{title}</p>
    <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-3 text-left">
      {bio}
    </div>
    <div className="flex gap-3 mt-6">
      <a
        href="#"
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
    <section className="section-padding section-alt-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <TeamMember
            name="Maj Praful Nangia"
            title="Partner – Talent North"
            bio={
              <>
                <p>Praful is a seasoned executive search and leadership advisory professional who works closely with clients to decode complex talent needs in fast-evolving business environments. He has led and delivered critical cross-border leadership mandates, attracting global talent to Indian organisations.</p>
                <p>Prior to founding Talent North, Praful led the Consumer, High-Growth & Professional Services practice and headed the Delhi–NCR offices at Hunt Partners.</p>
                <p>A graduate of the National Defence Academy, Khadakwasla, Praful was commissioned into the Regiment of Artillery in 2000. During his seven-year tenure with the Indian Army, he served in the Western Sector during Operation Parakram and in counter-terrorism operations under Operation Rakshak in Jammu & Kashmir.</p>
                <p>He is an alumnus of ISB Hyderabad and holds an MBA in Marketing and Strategy.</p>
              </>
            }
          />
          <TeamMember
            name="Geetanjali Ohri"
            title="Partner – Talent North"
            bio={
              <>
                <p>Geetanjali Ohri is a seasoned business professional and certified Life Coach with over two and a half decades of experience across multinationals, Indian enterprises, and start-ups. Her career spans deep engagement with business strategy, leadership transitions, and organizational scale, enabling her to identify talent needs in direct alignment with business context.</p>
                <p>At Talent North, Geetanjali works closely with boards, founders, and leadership teams on senior and leadership hiring mandates. Her executive search approach is rooted in deep business understanding, transition readiness, and cultural alignment, helping organizations build leadership teams that are equipped to scale, lead change, and deliver sustained outcomes rather than simply fill roles.</p>
                <p>She brings strong advisory experience in transition and scale, supporting organizations in bridging the gap between vision and execution. Geetanjali began her career with GE and has held business enablement roles at organizations such as Walmart and Max Life Insurance, spanning strategy, customer experience, and change management. She played a key role in aligning business strategy, people, and culture to drive organizational effectiveness. Her tenure at Clix Capital further strengthened her understanding of the business, talent, and cultural challenges common to high-growth environments.</p>
                <p>In addition, Geetanjali has extensive experience coaching business leaders, founders, and promoters on critical leadership capabilities including vision alignment, business communication, conflict resolution, and performance dialogues.</p>
                <p>She completed the Executive Program in Management at Cornell University and is qualified in Design Thinking and Six Sigma. She has been recognized as India's Top Customer Experience Professional and India's Top Content and Brand Custodian. An active student of behavioural science, she applies its principles extensively in leadership and people decision-making.</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
