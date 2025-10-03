import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center pt-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-muted-foreground">Página não encontrada.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projetos">Ver projetos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
