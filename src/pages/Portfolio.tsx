
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { BarChart3, Database, LineChart, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados mock para o portfólio
const projectsData = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    description:
      "Dashboard interativo para análise de KPIs financeiros com insights de tendências de mercado e análise preditiva para uma instituição financeira de grande porte.",
    category: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1650&auto=format&fit=crop",
    icon: <BarChart3 />,
    client: "Banco Nacional",
    year: "2023",
  },
  {
    id: 2,
    title: "Análise de Vendas",
    description:
      "Plataforma de visualização interativa para monitoramento e análise de vendas em tempo real, permitindo identificar oportunidades e otimizar a alocação de recursos.",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    icon: <LineChart />,
    client: "Varejo Brasil",
    year: "2022",
  },
  {
    id: 3,
    title: "BI para Varejo",
    description:
      "Solução completa de Business Intelligence para o setor de varejo, com foco em comportamento do consumidor e otimização de estoque através de algoritmos preditivos.",
    category: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    icon: <BarChart3 />,
    client: "Magazine Express",
    year: "2022",
  },
  {
    id: 4,
    title: "Data Visualization",
    description:
      "Transformação de dados complexos em visualizações claras e intuitivas para tomada de decisões estratégicas no setor de telecomunicações.",
    category: "Visualização de Dados",
    image: "https://images.unsplash.com/photo-1599658880307-95d394a66dbf?q=80&w=1470&auto=format&fit=crop",
    icon: <PieChart />,
    client: "Telecom Plus",
    year: "2023",
  },
  {
    id: 5,
    title: "Big Data para Saúde",
    description:
      "Implementação de solução de Big Data para processamento de informações médicas, permitindo análises avançadas para melhorar o atendimento e reduzir custos.",
    category: "Big Data",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    icon: <Database />,
    client: "Hospital Central",
    year: "2023",
  },
  {
    id: 6,
    title: "Análise de Campanhas",
    description:
      "Sistema de analytics para acompanhamento em tempo real de campanhas de marketing, possibilitando ajustes rápidos com base em dados de performance.",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    icon: <LineChart />,
    client: "Agência Digital",
    year: "2022",
  },
  {
    id: 7,
    title: "BI para Educação",
    description:
      "Plataforma de Business Intelligence para instituições de ensino, analisando dados acadêmicos para melhorar a retenção de alunos e a qualidade do ensino.",
    category: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1674&auto=format&fit=crop",
    icon: <BarChart3 />,
    client: "Universidade do Futuro",
    year: "2023",
  },
  {
    id: 8,
    title: "Visualização Geoespacial",
    description:
      "Sistema de visualização geoespacial para análise logística, otimizando rotas de entrega e reduzindo custos operacionais significativamente.",
    category: "Visualização de Dados",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    icon: <PieChart />,
    client: "Logística Expressa",
    year: "2022",
  },
];

const categories = [
  "Todos",
  "Business Intelligence",
  "Data Analytics",
  "Visualização de Dados",
  "Big Data",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Portfólio | InsightfulData";
  }, []);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openProjectModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

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
                Nossos Projetos
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Projetos que <span className="text-gradient">transformam</span> dados em valor
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conheça alguns dos casos de sucesso onde ajudamos empresas a extrair o máximo valor de seus dados.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(12,146,223,0.2)] hover:translate-y-[-5px]"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center space-x-1 bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                        {project.icon}
                        <span className="ml-1">{project.category}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-insight-300">Cliente: {project.client}</span>
                    <span className="text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div
            className="fixed inset-0 z-0"
            onClick={closeProjectModal}
          ></div>
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center space-x-1 bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                  {selectedProject.icon}
                  <span className="ml-1">{selectedProject.category}</span>
                </span>
                <span className="inline-block bg-white/5 text-muted-foreground text-sm px-3 py-1 rounded-full">
                  Cliente: {selectedProject.client}
                </span>
                <span className="inline-block bg-white/5 text-muted-foreground text-sm px-3 py-1 rounded-full">
                  Ano: {selectedProject.year}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {selectedProject.description}
              </p>
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                onClick={closeProjectModal}
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Portfolio;
