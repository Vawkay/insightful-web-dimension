
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Dados mock para o carrossel de projetos
const projectsData = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    description:
      "Dashboard para análise de KPIs financeiros com insights de tendências de mercado e análise preditiva.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1650&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Análise de Vendas",
    description:
      "Plataforma de visualização interativa para monitoramento e análise de vendas em tempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "BI para Varejo",
    description:
      "Solução completa de Business Intelligence para o setor de varejo, com foco em comportamento do consumidor.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Data Visualization",
    description:
      "Transformação de dados complexos em visualizações claras e intuitivas para tomada de decisões estratégicas.",
    image: "https://images.unsplash.com/photo-1599658880307-95d394a66dbf?q=80&w=1470&auto=format&fit=crop",
  },
];

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Nossos Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça algumas das soluções que desenvolvemos para nossos clientes,
            transformando dados em decisões estratégicas.
          </p>
        </div>

        <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {projectsData.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_-2px_rgba(0,0,0,0.3)] hover:translate-y-[-5px]">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          {project.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <Link to="/portfolio">Ver Detalhes</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>

          <div className="flex justify-center mt-8 space-x-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary scale-110"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
