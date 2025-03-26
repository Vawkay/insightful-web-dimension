
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página Não Encontrada | InsightfulData";

    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(12, 146, 223, 0.1) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(12, 146, 223, 0.05) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />

        <div className="text-center z-10 px-4">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Página não encontrada</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/">Voltar para o Início</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
