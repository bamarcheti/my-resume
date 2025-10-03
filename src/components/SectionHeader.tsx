import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  const titleParts = title.split(" ");
  const firstPart = titleParts[0];
  const secondPart = titleParts.slice(1).join(" ");

  return (
    <div className={cn("text-center mb-8", className)}>
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        {firstPart}
        {secondPart && (
          <>
            {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {secondPart}
            </span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
