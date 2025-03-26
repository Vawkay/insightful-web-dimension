
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  TrendingUp,

  Search,
  Monitor,
  UserCheck,
  Activity,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Business Intelligence",
    description:
      "Transforme dados brutos em informações estratégicas com nossas soluções de BI personalizadas para sua empresa.",
    features: [
      "Dashboards interativos e em tempo real",
      "Integração com múltiplas fontes de dados",
      "Análise multidimensional",
      "Relatórios automatizados"
    ],
    icon: <BarChart3 className="h-10 w-10 text-insight-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Data Analytics",
    description:
      "Análises avançadas que revelam padrões, tendências e correlações ocultas em seus dados de negócio.",
    features: [
      "Análise exploratória e estatística",
      "Segmentação de clientes",
      "Detecção de anomalias",
      "Análise de comportamento"
    ],
    icon: <LineChart className="h-10 w-10 text-insight-400" />,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1650&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Visualização de Dados",
    description:
      "Dashboards interativos e relatórios visuais que comunicam insights de forma clara e eficaz para todos os níveis da organização.",
    features: [
      "Visualizações customizadas",
      "Gráficos interativos",
      "Storytelling com dados",
      "Design centrado no usuário"
    ],
    icon: <PieChart className="h-10 w-10 text-insight-400" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Big Data",
    description:
      "Processamento e análise de grandes volumes de dados para extrair valor e vantagem competitiva em tempo real.",
    features: [
      "Processamento distribuído",
      "Análise de streaming",
      "Armazenamento escalável",
      "ETL de alto desempenho"
    ],
    icon: <Database className="h-10 w-10 text-insight-400" />,
    image: "https://images.unsplash.com/photo-1599658880307-95d394a66dbf?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Analytics Preditivo",
    description:
      "Modelos de previsão baseados em IA que antecipam tendências e orientam decisões futuras para o crescimento sustentável.",
    features: [
      "Machine Learning aplicado",
      "Modelos de previsão",
      "Detecção de padrões",
      "Análise de série temporal"
    ],
    icon: <TrendingUp className="h-10 w-10 text-insight-400" />,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop",
  },
];

const benefits = [
  {
    title: "Decisões Baseadas em Dados",
    description: "Substitua intuição por insights reais e mensuráveis",
    icon: <CheckCircle className="h-5 w-5 text-insight-400" />,
  },
  {
    title: "Maior Eficiência Operacional",
    description: "Identifique gargalos e otimize processos com precisão",
    icon: <Activity className="h-5 w-5 text-insight-400" />,
  },
  {
    title: "Conhecimento do Cliente",
    description: "Entenda comportamentos e preferências para melhores estratégias",
    icon: <UserCheck className="h-5 w-5 text-insight-400" />,
  },
  {
    title: "Monitoramento de Performance",
    description: "Acompanhe KPIs em tempo real para rápidas intervenções",
    icon: <Monitor className="h-5 w-5 text-insight-400" />,
  },
  {
    title: "Identificação de Oportunidades",
    description: "Descubra tendências e novas possibilidades de mercado",
    icon: <Search className="h-5 w-5 text-insight-400" />,
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Serviços | InsightfulData";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-background to-insight-950/30 relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(12, 146, 223, 0.15) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(12, 146, 223, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6">
              <span className="text-sm font-medium text-insight-300">
                Nossas Soluções
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Soluções de <span className="text-gradient">dados</span> para seu negócio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oferecemos uma ampla gama de serviços especializados em Business Intelligence e Data Analytics para impulsionar o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6">
                    {service.icon}
                    <span className="text-sm font-medium text-insight-300">
                      {service.title}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <div className="w-5 h-5 rounded-full bg-insight-500/20 flex items-center justify-center">
                            <CheckCircle size={12} className="text-insight-400" />
                          </div>
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/contato">Solicitar Proposta</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-1"}>
                  <div className="relative">
                    <div className="relative z-10 glass-card rounded-2xl p-3 shadow-[0_8px_40px_-12px_rgba(0,146,255,0.2)]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="absolute top-6 -right-6 -z-10 w-full h-full glass-card rounded-2xl border-white/5 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-insight-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">
              Benefícios de Nossas Soluções
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra como nossas soluções de Business Intelligence e Data Analytics podem transformar sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(12,146,223,0.2)] hover:translate-y-[-5px]"
              >
                <div className="bg-insight-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Services;
