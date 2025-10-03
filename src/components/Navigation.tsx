import { cn } from "@/lib/utils";
import { Briefcase, Home, Mail, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "Início", icon: Home },
  { path: "/sobre", label: "Sobre", icon: User },
  { path: "/projetos", label: "Projetos", icon: Briefcase },
  { path: "/contato", label: "Contato", icon: Mail },
];

function linkClass(isActive: boolean) {
  return cn(
    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    isActive
      ? "bg-primary text-primary-foreground shadow-md"
      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
  );
}

export default function Navigation() {
  return (
    <nav className="fixed top-0 inset-x-0 border-b bg-background/80 backdrop-blur z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg">
          Bárbara MF
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
              aria-label={label}
            >
              <Icon className="w-4 h-4" aria-hidden />
              <span>{label}</span>
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              aria-label={label}
              className={({ isActive }) =>
                cn(
                  "p-2 rounded-lg transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )
              }
            >
              <Icon className="w-5 h-5" aria-hidden />
              <span className="sr-only">{label}</span>
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
