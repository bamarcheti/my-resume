import { SkillLevel } from "@/types/content";
import { Badge } from "./ui/badge";

export default function TagList({
  items,
  category,
  className,
}: {
  items: string[];
  category?: SkillLevel;
  className?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <Badge
          key={index}
          variant={category === "Forte" ? "default" : "secondary"}
          className="text-xs"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
