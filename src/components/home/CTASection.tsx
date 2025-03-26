
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-insight-900/50 to-background relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 100%, rgba(12, 146, 223, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(12, 146, 223, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gradient">
            Transforme seus dados em insights valiosos
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Descubra como nossa expertise em BI e análise de dados pode
            impulsionar o crescimento da sua empresa. Entre em contato para uma
            demonstração personalizada de nossas soluções.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contato" className="flex items-center gap-2">
                Solicitar Demonstração
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/10 hover:bg-white/5"
            >
              <Link to="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
