import { Github, Instagram, Linkedin } from "lucide-react";

export const socialLinks = [
  {
    title: "GitHub",
    link: "https://github.com/bamarcheti",
    icon: Github,
    color: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/barbara-marcheti-fiorin",
    icon: Linkedin,
    color: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ba_marcheti",
    icon: Instagram,
    color: "hover:bg-primary hover:text-primary-foreground",
  },
] as const;
