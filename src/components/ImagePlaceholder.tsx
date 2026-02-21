import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "aspect-[4/3]" }: ImagePlaceholderProps) => {
  return (
    <div
      className={`${aspectRatio} w-full rounded-xl border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center gap-3 shadow-sm ${className}`}
    >
      <ImageIcon className="w-10 h-10 text-muted-foreground/50" />
      <span className="text-sm font-medium text-muted-foreground/70 text-center px-4">
        {label}
      </span>
    </div>
  );
};

export default ImagePlaceholder;
