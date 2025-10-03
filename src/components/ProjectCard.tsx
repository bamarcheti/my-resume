import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/content";
import { ExternalLink } from "lucide-react";
import TagList from "./TagList";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full transition hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <TagList items={project.tags} />
        <div className="flex gap-3 pt-2">
          {project.link && (
            <Button variant="outline" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Código <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
