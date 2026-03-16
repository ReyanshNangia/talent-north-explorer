import boardImg from "@/assets/board.png";

const BoardAdvisorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Board Advisory
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
              <p>
                The demand for competent Directors has led to a situation wherein the best candidates are on too many boards and in most situations not keen to take on additional responsibilities.
              </p>
              <p>
                Our intimate knowledge of relevant senior management talent and their ability to deliver in a non-executive capacity enables us to identify committed and competent individuals per the Board's requirements.
              </p>
            </div>

            {/* Sub-sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-4">Statutory Boards</h3>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Facilitation for "Need Identification" &amp; "Skill Gap" mapping</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Assessment of Board dynamics and invite the 'right' member for the Board</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Identifying international talent for an existing board</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Support in identifying and on-boarding Women Directors</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-4">Advisory Boards</h3>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Assist companies and business owners in building a dynamic, highly functional and effective source of industry skills, networks, access to capital, strategic advice, technical insights and counsel.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <ImagePlaceholder label="Board Advisory" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardAdvisorySection;
