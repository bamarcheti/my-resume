import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface SocialLinkProps {
  title: string;
  link: string;
  icon: ElementType;
  className?: string;
}

export default function SocialLink({
  title,
  link,
  icon: Icon,
  className,
}: SocialLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      // aria-label={`Abrir ${title} em nova aba`}
      className={cn(
        "inline-flex items-center justify-center p-3 rounded-full border transition-all duration-300 " +
          "hover:bg-primary hover:text-primary-foreground " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
    >
      <Icon className="w-5 h-5" aria-hidden />
    </a>
  );
}
