
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-background to-insight-950/30">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(12, 146, 223, 0.15) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(12, 146, 223, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient
                id="gradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgba(12, 146, 223, 0.4)" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(12, 146, 223, 0)" }}
                />
              </radialGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,0 L100,0 L100,100 L0,100 Z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`text-center md:text-left transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6">
              <span className="text-sm font-medium text-insight-300">
                Business Intelligence & Data Analytics
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Transformando <span className="text-gradient">dados</span> em{" "}
              <span className="text-gradient">decisões</span> estratégicas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
              Potencialize o crescimento do seu negócio com soluções avançadas de
              análise e visualização de dados que revelam insights valiosos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
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
                <Link to="/sobre">Conheça Nossa Empresa</Link>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative z-10 glass-card rounded-2xl p-2 md:p-4 shadow-[0_8px_40px_-12px_rgba(0,146,255,0.2)]">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-0 -left-10 -z-10 w-full h-full glass-card rounded-2xl p-2 md:p-4 border-white/5 opacity-50 transform translate-y-6" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <div className="w-8 h-14 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-[fade-in_1.5s_ease-in-out_infinite_alternate]" />
        </div>
        <span className="text-xs text-white/60 mt-2">Rolar para baixo</span>
      </div>
    </div>
  );
};

export default HeroBanner;
