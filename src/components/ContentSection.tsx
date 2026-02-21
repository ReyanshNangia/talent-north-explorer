import ImagePlaceholder from "./ImagePlaceholder";

interface ContentSectionProps {
  heading: React.ReactNode;
  children: React.ReactNode;
  imageLabel: string;
  imageSrc?: string;
  imageRight?: boolean;
  altBg?: boolean;
  id?: string;
}

const ContentSection = ({
  heading,
  children,
  imageLabel,
  imageSrc,
  imageRight = true,
  altBg = false,
  id,
}: ContentSectionProps) => {
  return (
    <section id={id} className={`section-padding ${altBg ? "section-alt-bg" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 lg:gap-16 items-center`}
        >
          {/* Text */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              {children}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            {imageSrc ? (
              <img src={imageSrc} alt={imageLabel} className="w-full rounded-xl shadow-sm" />
            ) : (
              <ImagePlaceholder label={imageLabel} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
