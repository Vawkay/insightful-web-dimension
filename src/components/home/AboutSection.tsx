
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Database, LineChart, PieChart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-insight-400" />,
    title: "Business Intelligence",
    description:
      "Transforme dados brutos em informações estratégicas com nossas soluções de BI personalizadas.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-insight-400" />,
    title: "Data Analytics",
    description:
      "Análises avançadas que revelam padrões, tendências e correlações ocultas em seus dados.",
  },
  {
    icon: <PieChart className="h-10 w-10 text-insight-400" />,
    title: "Visualização de Dados",
    description:
      "Dashboards interativos e relatórios visuais que comunicam insights de forma clara e eficaz.",
  },
  {
    icon: <Database className="h-10 w-10 text-insight-400" />,
    title: "Big Data",
    description:
      "Processamento e análise de grandes volumes de dados para extrair valor e vantagem competitiva.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-insight-400" />,
    title: "Analytics Preditivo",
    description:
      "Modelos de previsão baseados em IA que antecipam tendências e orientam decisões futuras.",
  },
];

const AboutSection = () => {
  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12, 146, 223, 0.15) 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">
            Sobre a InsightfulData
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em transformar dados complexos em insights
            valiosos que impulsionam o crescimento e a inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(12,146,223,0.2)] hover:translate-y-[-5px]"
            >
              <div className="bg-insight-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
            <Link to="/sobre">Conheça Nossa História</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
